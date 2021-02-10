export const validateInput = (fieldName, fieldValue) => {
  console.log("fieldName: ", fieldName);
  console.log("fieldValue: ", fieldValue);

  // Validate name
  if (fieldName === "name") {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    return null;
  }

  // Validate email
  if (fieldName === "email") {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        fieldValue
      )
    ) {
      return null;
    }
    if (fieldValue.trim() === "") {
      return "Email is required";
    }
    return "Please enter a valid email";
  }
};
