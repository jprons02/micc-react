import { keys } from "keys.js";
import axios from "axios";

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
  const url = "https://va4m9xl0te.execute-api.us-east-1.amazonaws.com/Test";

  const response = await axios({
    method: "POST",
    url,
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.data);
  callback();
};
