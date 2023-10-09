import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '~/mail/mailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await transporter.sendMail({
      to: 'bestwing915@gmail.com',
      subject: 'Email Verification',
      html: `
        <h1>Verify Code</h1>
        <p>test email</p>
      `,
    });
    res.status(200);
  } catch (error) {
    res.status(500).json(error);
  }
}
