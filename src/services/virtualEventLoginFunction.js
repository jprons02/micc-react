import axios from "axios";
import { keys } from "keys.js";

export const virtualEventLoginFunction = async (eventID, email, callback) => {
  const dataString = JSON.stringify({
    email: email,
    eventID: eventID,
  });

  try {
    const response = await axios({
      method: "POST",
      url: "https://g2r90bduue.execute-api.us-east-1.amazonaws.com/prod",
      data: dataString,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": keys.lambdaEventbriteAPI,
      },
    });
    if (response.data) {
      // check if user inputted email is in response.data here... and send to callback.
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].email === email) {
          callback("matched");
          break;
        } else {
          callback("not matched");
        }
      }
    }
  } catch (error) {
    console.log("error: ", error);
    callback(error);
  }
};
