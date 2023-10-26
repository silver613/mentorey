import AWS from '~/utils/aws';
const ses = new AWS.SES({ region: 'us-east-1' });
interface Props {
  fromEmail: string;
  toEmail: string;
  subject: string;
  content: string;
}
export default async function sendEmail({ fromEmail, toEmail, subject, content }: Props) {
  const params = {
    Destination: {
      ToAddresses: [toEmail], // Replace with the recipient's email address
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: content,
        },
      },
    },
    Source: fromEmail, // Replace with your verified email address
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log('Email sent:', result.MessageId);
  } catch (error) {
    console.error('Email sending error:', error);
  }
}
