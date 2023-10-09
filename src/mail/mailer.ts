import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'email-smtp.us-east-1.amazonaws.com',
  port: 25,
  secure: false,
  auth: {
    user: 'AKIA3WFV2SULLCWRBAEC',
    pass: 'BI3pSNPR6nnbnvlYBinTLTDUXd2SirG/nIY77EftzBfD',
  },
});

export default transporter;
