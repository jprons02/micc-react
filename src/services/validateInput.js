export const validateInput = (fieldName, fieldValue) => {
  // Validate name
  if (fieldName === "name") {
    if (fieldValue === "" || !fieldValue) {
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
    if (fieldValue.trim() === "" || !fieldValue) {
      return `${fieldName} is required`;
    }
    return `Please enter a valid ${fieldName}`;
  }

  // Validate message
  if (fieldName === "message") {
    if (fieldValue === "" || !fieldValue) {
      return `${fieldName} is required`;
    }
    return null;
  }

  // Validate phone
  if (fieldName === "phone") {
    if (fieldValue === "" || !fieldValue) {
      return `${fieldName} is required`;
    }
    return null;
  }

  // Validate select
  if (fieldName === "select") {
    if (fieldValue === "" || !fieldValue) {
      return `${fieldName} is required`;
    }
    return null;
  }
};

export const inputErrorsExist = (nameErrorField, emailErrorField) => {
  if (nameErrorField !== false || emailErrorField !== false) {
    return true;
  }
};

export const inputErrorsExistVirtualEvent = (emailErrorField) => {
  if (emailErrorField !== false) {
    return true;
  }
};

export const inputErrorsExistContact = (
  nameErrorField,
  emailErrorField,
  phoneErrorField,
  selectErrorField,
  messageErrorField
) => {
  if (
    nameErrorField !== false ||
    emailErrorField !== false ||
    phoneErrorField !== false ||
    selectErrorField !== false ||
    messageErrorField !== false
  ) {
    return true;
  }
};
