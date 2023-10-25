import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'email-smtp.us-east-1.amazonaws.com',
  port: 25,
  secure: false,
  auth: {
    user: 'AKIA3WFV2SULMLNSYF3C',
    pass: 'BJu5IljOE3L39k46QKdZnCdtSM++4mBRUS6yI9Fsa0zq',
  },
});

export default transporter;
