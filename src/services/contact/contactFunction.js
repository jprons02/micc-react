import axios from "axios";
import { keys } from "keys.js";

const getEmail = (value) => {
  switch (value) {
    // MRG CASES
    case "Banquet Sales":
      return ["mrgsales&catering@miccosukee.com"];
    case "Banquet/Catering":
      return ["mrgsales&catering@miccosukee.com"];
    case "Bingo":
      return ["alouie@miccosukee.com", "jmedina@miccosukee.com"];
    case "Child Care Center":
      return ["glledes@miccosukee.com"];
    case "Event & Meeting Planning":
      return ["mrgsales&catering@miccosukee.com"];
    case "Event Tickets":
      return ["sales@miccosukee.com"];
    case "Food & Beverage":
      return [
        "dgomez@miccosukee.com",
        "cbillie@miccosukee.com",
        "raxenfeld@miccosukee.com",
        "kwhiting@miccosukee.com",
        "fbutera@miccosukee.com",
      ];
    case "Finance & Accounting":
      return ["MIGAccountingSupervisors@miccosukee.com"];
    case "Food & Beverage – Comment Card":
      return [
        "dgomez@miccosukee.com",
        "cbillie@miccosukee.com",
        "raxenfeld@miccosukee.com",
        "kwhiting@miccosukee.com",
        "fbutera@miccosukee.com",
      ];
    case "Gaming Machines":
      return ["EPerez@miccosukee.com", "HClemente@miccosukee.com"];
    case "Group Sales":
      return [
        "ggalarza@miccosukee.com",
        "kwhiting@miccosukee.com",
        "fbutera@miccosukee.com",
      ];
    case "Promotions & Special Events":
      return ["rduncan@miccosukee.com"];
    case "Player’s Club":
      return ["rduncan@miccosukee.com"];
    case "Room Rates & Reservations":
      return [
        "tmitchelson@miccosukee.com",
        "reservations@miccosukee.com",
        "kwhiting@miccosukee.com",
        "fbutera@miccosukee.com",
      ];
    case "Spa & Salon":
      return [
        "kwhiting@miccosukee.com",
        "cklimekoski@miccosukee.com",
        "fbutera@miccosukee.com",
      ];
    case "Valet Services":
      return [
        "tmitchelson@miccosukee.com",
        "kwhiting@miccosukee.com",
        "transportation@miccosukee.com",
        "fbutera@miccosukee.com",
      ];
    case "Human Resources":
      return ["damaro@miccosukee.com"];
    case "Website Feedback":
      return ["jronselli@miccosukee.com"];
    // Media Inquiry
    case "Media Inquiry":
      return [
        "AFrye@miccosukee.com",
        "jronselli@miccosukee.com",
        "JeanineB@miccosukeetribe.com",
      ];
    // Village
    case "Indian Village":
      return ["groups@miccosukeetours.com"];
    case "Indian Village Groups":
      return ["groups@miccosukeetours.com"];
    // Airboats
    case "Airboats":
      return ["groups@miccosukeetours.com"];
    case "Airboat Groups":
      return ["groups@miccosukeetours.com"];
    // Golf
    case "Golf":
      return ["alt@miccosukeegolf.com", "ericw@miccosukeegolf.com"];
  }
};

export const contactFunction = async (valuesObj, callback) => {
  console.log("form submitted");
  const toEmail = getEmail(valuesObj.select);
  const valuesToSend = {
    toEmail: toEmail,
    name: valuesObj.name,
    email: valuesObj.email,
    phone: valuesObj.phone,
    select: valuesObj.select,
    message: valuesObj.message,
  };
  console.log("values: ", valuesToSend);
  console.log("to email: ", toEmail);

  // Send a POST request
  try {
    const response = await axios({
      method: "POST",
      url: "https://4hrpj3nvw6.execute-api.us-east-1.amazonaws.com/prod",
      data: JSON.stringify(valuesToSend),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": keys.internalEmailAPI,
      },
    });
    if (response.data) {
      console.log("works: ", response.data);
      callback();
    }
  } catch (error) {
    console.log("error: ", error);
    callback(error);
  }
};
