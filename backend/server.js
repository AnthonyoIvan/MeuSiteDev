const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5 // limite de 5 requisições por IP
});

app.use('/api/contact', limiter);

// Validação
const validateContact = [
    body('nome').trim().isLength({ min: 2 }).escape(),
    body('email').isEmail().normalizeEmail(),
    body('assunto').trim().isLength({ min: 2 }).escape(),
    body('mensagem').trim().isLength({ min: 10 }).escape()
];

app.post('/api/contact', validateContact, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            success: false, 
            message: 'Dados inválidos',
            errors: errors.array() 
        });
    }
    const { nome, email, assunto, mensagem } = req.body;

    try {
        // Configuração do email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `Novo contato do site: ${assunto}`,
            html: `
                <h3>Novo contato recebido</h3>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${assunto}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${mensagem}</p>
            `
        };

        // Enviar email
        await transporter.sendMail(mailOptions);

        // Enviar email de confirmação para o usuário
        const confirmationMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Recebemos sua mensagem',
            html: `
                <h3>Olá ${nome},</h3>
                <p>Obrigado por entrar em contato! Recebemos sua mensagem e responderemos em breve.</p>
                <p>Detalhes da sua mensagem:</p>
                <p><strong>Assunto:</strong> ${assunto}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${mensagem}</p>
                <br>
                <p>Atenciosamente,</p>
                <p>Equipe iDevCode</p>
            `
        };

        await transporter.sendMail(confirmationMailOptions);

        res.status(200).json({ 
            success: true, 
            message: 'Mensagem enviada com sucesso!' 
        });

    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao enviar mensagem. Por favor, tente novamente.' 
        });
    }
});

// Middleware de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Erro interno do servidor' 
    });
});

app.use((req, res, next) => {
    res.locals.favicons = {
        icon32: '/img/favicon/favicon-32x32.png',
        icon16: '/img/favicon/favicon-16x16.png',
        apple: '/img/favicon/apple-touch-icon.png',
        manifest: '/site.webmanifest'
    };
    next();
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 