import AWS from '~/utils/aws';
const ses = new AWS.SES({ region: 'us-east-1' });

export default async function sendEmail() {
  const params = {
    Destination: {
      ToAddresses: ['bestwing915@gmail.com'], // Replace with the recipient's email address
    },
    Message: {
      Body: {
        Text: {
          Data: 'This is the email content.',
        },
      },
      Subject: {
        Data: 'Email Subject',
      },
    },
    Source: 'bestwing@mentorey.co', // Replace with your verified email address
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log('Email sent:', result.MessageId);
  } catch (error) {
    console.error('Email sending error:', error);
  }
}
