const nodemailer = require('nodemailer');

// Configuramos el transporte con el servidor SMTP de Namecheap
let transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',  // Servidor SMTP de Namecheap
  port: 587,  // Puerto para TLS (puedes cambiar a 465 si prefieres SSL)
  secure: false,  // true para 465, false para otros puertos
  auth: {
    user: 'admin@gembakai.com',  // Tu correo electrónico
    pass: 'VSxN6,5*az"5B;g'  // Tu contraseña
  },
  tls: {
    rejectUnauthorized: false  // Esto es opcional, puede ayudar a evitar errores de certificado
  }
});

// Definimos las opciones del correo
let mailOptions = {
  from: 'admin@gembakai.com',  // Remitente
  to: 'wballestero@gembakai.com',  // Destinatario
  subject: 'Asunto del correo',  // Asunto
  text: 'Contenido del correo'  // Cuerpo del correo
};

// Enviamos el correo
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Correo enviado: ' + info.response);
  }
});
