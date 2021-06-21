import axios from "axios";
import { keys } from "keys.js";

//keys.internalMailchimpFunctionAPI

export const signupFunction = (valuesObj, callback) => {
  const postObj = {
    members: [
      {
        email_address: valuesObj.formInputValues.email,
        status: "subscribed",
        merge_fields: {
          FNAME: valuesObj.formInputValues.name,
        },
        interests: valuesObj.formCheckedValues,
      },
    ],
    update_existing: true,
  };
  const postObjJson = JSON.stringify(postObj);

  sendToAWS(postObjJson, callback);
};

const sendToAWS = async (data, callback) => {
  const url = "https://d2xvv4pyv0.execute-api.us-east-1.amazonaws.com/prod";

  try {
    const response = await axios({
      method: "POST",
      url,
      data: data,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": keys.lambdaMailchimpFunctionAPI,
      },
    });
    console.log(response.data);
    callback();
  } catch (error) {
    callback(error);
  }
};
