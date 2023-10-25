import { NextApiRequest, NextApiResponse } from 'next';

import bcrypt from 'bcrypt';
import db from '~/database/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { generateVerificationCode } from '~/utils/utils';

const signupHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password, gender, country, birthday, timezone } = req.body;

    try {
      const [existingUser] = (await db.execute('SELECT id FROM users WHERE email = ?', [email])) as RowDataPacket[];

      if (existingUser.length > 0) {
        return res.status(400).json({ message: 'Email_Exists' });
      }

      // Generate verification token expries 6 hours from now

      // const verificationToken = bcrypt.hashSync(email + Date.now(), 10);
      const verificationToken = generateVerificationCode();
      const verificationTokenExpiresAt = new Date(Date.now() + 6 * 60 * 60 * 1000);

      // // Insert user into the database

      const [result] = (await db.execute(
        'INSERT INTO users (first_name, last_name, email, password, gender, country, birthday, timezone, verification_token, verification_token_expires_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          firstName,
          lastName,
          email,
          bcrypt.hashSync(password, 10),
          gender,
          country,
          birthday,
          timezone,
          verificationToken,
          verificationTokenExpiresAt,
        ],
      )) as ResultSetHeader[];

      const [newUser] = (await db.execute('SELECT * FROM users WHERE email = ?', [email])) as RowDataPacket[];

      const user = newUser[0];

      // // Send verification email

      // await transporter.sendMail({
      //   from: 'bestwing@mentorey.awsapps.com',
      //   to: 'bestwing915@gmail.com',
      //   subject: 'Email Verification',
      //   html: `
      //     <h1>Verify Code</h1>
      //     <p>${user.verification_token}</p>
      //   `,
      // });

      res.status(200).json({ newUser: newUser[0] });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default signupHandler;
