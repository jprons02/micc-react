import axios from "axios";
import { keys } from "keys.js";

let url = "https://www.eventbriteapi.com/v3/events/165141162663/attendees/";

export const virtualEventLoginFunction = async (eventID, email, callback) => {
  const dataString = JSON.stringify({
    email: email,
    eventID: eventID,
    url: url,
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
      const matchedPurchased = response.data[1].find(
        (item) =>
          item.email.toLowerCase() === email.toLowerCase() &&
          item.ticketName === "Full Virtual Event PASS"
      );

      const matchedFree = response.data[1].find(
        (item) => item.email.toLowerCase() === email.toLowerCase()
      );

      if (matchedPurchased) {
        callback("purchased");
      } else if (matchedFree) {
        callback("free");
      } else if (response.data[0].has_more_items) {
        url = `https://www.eventbriteapi.com/v3/events/165141162663/attendees/?continuation=${response.data[0].continuation}`;
        virtualEventLoginFunction(eventID, email, callback);
      } else {
        callback("not matched");
        url = "https://www.eventbriteapi.com/v3/events/165141162663/attendees/";
      }
    }
  } catch (error) {
    console.log("error: ", error);
    callback(error);
  }
};
