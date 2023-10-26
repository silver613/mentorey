import nodemailer from 'nodemailer';

const MailTransporter = nodemailer.createTransport({
  port: 587,
  host: 'serversmtp-relay.sendinblue.com',
  auth: {
    user: 'bestwing915@gmail.com',
    pass: 'dPjRUJG2mn8SpYVK',
  },
  secure: false,
});

export default MailTransporter;
