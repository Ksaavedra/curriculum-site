# Backend - curriculum-site

API REST responsável pelo formulário de contato do currículo online.

# 🚀 Tecnologias

- Node.js
- Express
- Nodemailer
- Resend
- Helmet
- CORS
- Express Rate Limit
- REST API

# ▶️ Executar backend

```bash
npm install
npm start
```

Backend disponível em:

```txt
http://localhost:3000
```

# 🛠️ Variáveis de ambiente

Exemplo de `.env`:

```env
PORT=3000

CORS_ORIGIN=http://localhost:4200

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=seuemail@gmail.com
SMTP_PASS=senha_app

RESEND_API_KEY=re_xxxxxxxxx

CONTACT_MAIL_TO=seuemail@gmail.com
RESEND_FROM=Currículo <onboarding@resend.dev>
```

# 🔒 Segurança

- Sanitização de inputs
- Proteção contra spam
- Rate limiting
- Variáveis protegidas com `.env`
- Helmet para headers HTTP seguros

# 📬 Endpoint

## POST `/api/contact`

```json
{
   "name": "Kelly",
   "email": "kelly@email.com",
   "message": "Olá!"
}
```

# 📌 Observações

Backend integrado com SMTP e Resend para envio de mensagens do formulário de contato do portfólio.
