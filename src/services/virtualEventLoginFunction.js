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

      // using find method because multiple entries is possible, some paid, some free. need to prioritize paid.
      const matchedPurchased = response.data.find(
        (item) =>
          item.email.toLowerCase() === email.toLowerCase() &&
          item.ticketName === "Full Virtual Event Pass"
      );

      const matchedFree = response.data.find(
        (item) => item.email.toLowerCase() === email.toLowerCase()
      );

      if (matchedPurchased) {
        callback("purchased");
      } else if (matchedFree) {
        callback("free");
      } else {
        callback("not matched");
      }
    }
  } catch (error) {
    console.log("error: ", error);
    callback(error);
  }
};
