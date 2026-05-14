import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const PORT = Number(process.env.PORT) || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:4200';

const app = express();
app.use(helmet());
app.use(
   cors({
      origin: CORS_ORIGIN,
      methods: ['GET', 'POST'],
   }),
);
app.use(express.json({ limit: '32kb' }));

app.get('/', (_req, res) => {
   res.json({
      service: 'curriculum-api',
      docs: 'API REST do formulário de contato do site de currículo.',
      endpoints: {
         health: { method: 'GET', path: '/health' },
         contact: {
            method: 'POST',
            path: '/api/contact',
            body: ['name', 'email', 'message'],
         },
      },
      mail: {
         preferResend:
            'Se RESEND_API_KEY estiver definida, o envio usa Resend (HTTPS) em vez de SMTP Gmail.',
         resendDocs: 'https://resend.com/docs',
      },
      frontend: 'O site Angular corre em http://localhost:4200',
   });
});

app.get('/health', (_req, res) => {
   res.json({ status: 'ok' });
});

const contactLimiter = rateLimit({
   windowMs: 15 * 60 * 1000,
   max: 30,
   standardHeaders: true,
   legacyHeaders: false,
});

function sanitize(str) {
   if (typeof str !== 'string') {
      return '';
   }
   return str.trim().slice(0, 4000);
}

function cleanEnvString(v) {
   if (v == null || typeof v !== 'string') {
      return '';
   }
   let s = v.replace(/^\uFEFF/, '').trim();
   if (
      (s.startsWith('"') && s.endsWith('"')) ||
      (s.startsWith("'") && s.endsWith("'"))
   ) {
      s = s.slice(1, -1);
   }
   return s;
}

function smtpPassClean(pass) {
   if (typeof pass !== 'string') {
      return '';
   }
   return pass.replace(/\s/g, '');
}

function escapeHtml(s) {
   return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
}

/** Corpo texto + HTML partilhado por Gmail (Nodemailer) e Resend. */
function buildContactEmailBodies({ name, email, message }) {
   const text = `Novo contato pelo currículo

Nome: ${name}
E-mail: ${email}

Mensagem:
${message}
`;
   const e = escapeHtml;
   const html =
      '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"></head><body>' +
      '<h2>Novo contato pelo currículo</h2>' +
      `<p><strong>Nome:</strong> ${e(name)}</p>` +
      `<p><strong>E-mail:</strong> ${e(email)}</p>` +
      '<p><strong>Mensagem:</strong></p>' +
      `<p style="white-space:pre-wrap;">${e(message)}</p>` +
      '</body></html>';
   return { text, html };
}

function createMailTransport({ host, user, pass, port, secure }) {
   const authPass = smtpPassClean(cleanEnvString(pass));
   const useGmail =
      String(host).toLowerCase() === 'smtp.gmail.com' ||
      String(host).toLowerCase() === 'smtp.googlemail.com';
   if (useGmail) {
      const p = Number(port) || 465;
      const secureFlag =
         p === 465
            ? true
            : p === 587
              ? false
              : String(secure).toLowerCase() === 'true';
      const transportOpts = {
         host: 'smtp.gmail.com',
         port: p,
         secure: secureFlag,
         auth: { user, pass: authPass },
      };
      if (p === 587) {
         transportOpts.requireTLS = true;
      }
      return nodemailer.createTransport(transportOpts);
   }
   return nodemailer.createTransport({
      host,
      port: Number(port) || 587,
      secure: secure === 'true',
      auth: { user, pass: authPass },
   });
}

async function sendContactViaResend({
   resendKey,
   fromHeader,
   mailTo,
   name,
   visitorEmail,
   text,
   html,
}) {
   const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
         Authorization: `Bearer ${resendKey}`,
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         from: fromHeader,
         to: [mailTo],
         reply_to: visitorEmail,
         subject: `Contato: ${name}`,
         text,
         html,
      }),
   });
   const bodyText = await res.text();
   if (!res.ok) {
      const err = new Error(
         `Resend HTTP ${res.status}: ${bodyText.slice(0, 400)}`,
      );
      err.name = 'ResendError';
      throw err;
   }
}

app.post('/api/contact', contactLimiter, async (req, res) => {
   const name = sanitize(req.body?.name).slice(0, 120);
   const email = sanitize(req.body?.email).slice(0, 254);
   const message = sanitize(req.body?.message);

   if (!name || !email || !message) {
      return res
         .status(400)
         .json({ ok: false, message: 'Preencha nome, e-mail e mensagem.' });
   }

   const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   if (!emailOk) {
      return res.status(400).json({ ok: false, message: 'E-mail inválido.' });
   }

   if (message.length < 10) {
      return res.status(400).json({
         ok: false,
         message: 'A mensagem deve ter pelo menos 10 caracteres.',
      });
   }

   const { text: mailText, html: mailHtml } = buildContactEmailBodies({
      name,
      email,
      message,
   });

   const smtpHost = cleanEnvString(process.env.SMTP_HOST);
   const smtpUser = cleanEnvString(process.env.SMTP_USER);
   const smtpPass = cleanEnvString(process.env.SMTP_PASS ?? '');
   const mailTo = cleanEnvString(process.env.CONTACT_MAIL_TO || smtpUser);
   const resendKey = cleanEnvString(process.env.RESEND_API_KEY || '');
   const resendFrom =
      cleanEnvString(process.env.RESEND_FROM || '') ||
      'Currículo site <onboarding@resend.dev>';

   console.info('[contact] outbound', {
      mailTo: mailTo || '(vazio)',
      resend: Boolean(resendKey),
      smtp: Boolean(smtpHost && smtpUser && smtpPass),
   });

   if (mailTo && resendKey) {
      try {
         await sendContactViaResend({
            resendKey,
            fromHeader: resendFrom,
            mailTo,
            name,
            visitorEmail: email,
            text: mailText,
            html: mailHtml,
         });
      } catch (err) {
         console.error('[contact] Resend error', err?.message || err);
         return res.status(502).json({
            ok: false,
            message: 'Falha ao enviar e-mail. Tente mais tarde.',
         });
      }
      return res.json({ ok: true });
   }

   if (smtpHost && smtpUser && smtpPass && mailTo) {
      try {
         const transporter = createMailTransport({
            host: smtpHost,
            user: smtpUser,
            pass: smtpPass,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE,
         });

         await transporter.sendMail({
            from: `"Currículo site" <${smtpUser}>`,
            to: mailTo,
            replyTo: email,
            subject: `Contato: ${name}`,
            text: mailText,
            html: mailHtml,
         });

         return res.json({ ok: true });
      } catch (err) {
         const code = err?.code;
         const responseCode = err?.responseCode;

         console.error('[contact] mail error', {
            code,
            responseCode,
            message: err?.message,
         });

         return res.status(502).json({
            ok: false,
            message: 'Falha ao enviar e-mail. Tente mais tarde.',
         });
      }
   }

   if (!mailTo) {
      console.warn(
         '[contact] CONTACT_MAIL_TO (ou SMTP_USER) em falta — mensagem não enviada.',
      );
   }

   return res.status(503).json({
      ok: false,
      message: 'Serviço de e-mail não configurado.',
   });
});

app.listen(PORT, () => {
   console.log(`API em http://localhost:${PORT} (CORS: ${CORS_ORIGIN})`);
});
