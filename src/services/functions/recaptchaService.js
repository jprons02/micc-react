import axios from 'axios';
import { keys } from 'keys.js';

export const reCaptchaService = async (clientResponse, callback) => {
  const dataString = JSON.stringify({
    clientResponse: clientResponse,
    secretKey: keys.recaptchaSecret,
  });

  try {
    const response = await axios({
      method: 'POST',
      url: 'https://2hl09omy22.execute-api.us-east-1.amazonaws.com/prod',
      data: dataString,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': keys.lambdaReCaptchaAPI,
      },
    });
    if (response.data.success != true) {
      callback('fail');
    } else {
      callback('success');
    }
  } catch (error) {
    console.log('error: ', error);
  }
};
