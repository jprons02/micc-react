import axios from "axios";
import { keys } from "keys.js";

export const getResponse = async (url) => {
  try {
    const response = await axios({
      method: "GET",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${keys.eventbrite}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
