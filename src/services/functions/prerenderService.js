/*
import axios from "axios";
import { keys } from "keys.js";

export const prerenderService = async (callback) => {
  try {
    const response = await axios({
      method: "GET",
      url:
        "https://f25zksj8xe.execute-api.us-east-1.amazonaws.com/default/websitePrerender",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": keys.lambdaPrerenderAPI,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log("error: ", error);
  }
};
*/
