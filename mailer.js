import mailer from "express-mailer";

export const MailSender = () => {
  const app = require("express")(); ;
  const emailSender = process.env.EMAIL_SENDER;
  console.log(emailSender);
  mailer.extend(app, {
    from: emailSender,
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: "SMTP", // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
      user: "gmail.user@gmail.com",
      pass: "userpass"
    }
  });
};
