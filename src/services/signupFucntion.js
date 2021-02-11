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
  console.log("Data to send to mailchimp: ", postObjJson);

  setTimeout(callback, 4000);
};

export const inputErrorsExist = (nameErrorField, emailErrorField) => {
  if (nameErrorField !== false || emailErrorField !== false) {
    return true;
  }
};
