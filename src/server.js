import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import nodemailer from 'nodemailer';

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
      contact: { method: 'POST', path: '/api/contact', body: ['name', 'email', 'message'] },
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

app.post('/api/contact', contactLimiter, async (req, res) => {
  const name = sanitize(req.body?.name).slice(0, 120);
  const email = sanitize(req.body?.email).slice(0, 254);
  const message = sanitize(req.body?.message);

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: 'Preencha nome, e-mail e mensagem.' });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res.status(400).json({ ok: false, message: 'E-mail inválido.' });
  }

  if (message.length < 10) {
    return res.status(400).json({ ok: false, message: 'A mensagem deve ter pelo menos 10 caracteres.' });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.CONTACT_MAIL_TO || smtpUser;

  console.info('[contact]', { name, email, messagePreview: message.slice(0, 80) + '...' });

  if (smtpHost && smtpUser && smtpPass && mailTo) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"Currículo site" <${smtpUser}>`,
        to: mailTo,
        replyTo: email,
        subject: `[Contato currículo] ${name}`,
        text: `De: ${name} <${email}>\n\n${message}`,
      });
    } catch (err) {
      console.error('[contact] mail error', err);
      return res.status(502).json({ ok: false, message: 'Falha ao enviar e-mail. Tente mais tarde.' });
    }
  }

  return res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`API em http://localhost:${PORT} (CORS: ${CORS_ORIGIN})`);
});
