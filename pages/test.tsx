import { Button } from '@mui/material';
import axios from 'axios';
import sendEmail from '~/mail/ses';

export default function TestPage() {
  const send = async () => {
    try {
      await axios.post('/api/test');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={sendEmail}>test</Button>
    </>
  );
}
