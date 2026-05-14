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

# 🔒 Segurança

- Sanitização de inputs
- Proteção contra spam
- Rate limiting
- Variáveis protegidas com `.env`

# 📬 Endpoint

## POST `/api/contact`

```json
{
  "name": "Kelly",
  "email": "kelly@email.com",
  "message": "Olá!"
}
```
