import axios from 'axios';
import { keys } from 'keys.js';

const getEmail = (value) => {
  switch (value) {
    // MRG CASES
    case 'Banquet Sales':
      return ['asaunders@miccosukee.com', 'mrgsales&catering@miccosukee.com'];
    case 'Banquet/Catering':
      return ['asaunders@miccosukee.com', 'mrgsales&catering@miccosukee.com'];
    case 'Bingo':
      return [
        'asaunders@miccosukee.com',
        'alouie@miccosukee.com',
        'jmedina@miccosukee.com',
      ];
    case 'Child Care Center':
      return ['asaunders@miccosukee.com', 'glledes@miccosukee.com'];
    case 'Event & Meeting Planning':
      return ['asaunders@miccosukee.com', 'mrgsales&catering@miccosukee.com'];
    case 'Event Tickets':
      return ['asaunders@miccosukee.com', 'sales@miccosukee.com'];
    case 'Food & Beverage':
      return ['asaunders@miccosukee.com', 'F&BSupervisors@miccosukee.com'];
    case 'Finance & Accounting':
      return [
        'asaunders@miccosukee.com',
        'MIGAccountingSupervisors@miccosukee.com',
      ];
    case 'Food & Beverage – Comment Card':
      return ['asaunders@miccosukee.com', 'F&BSupervisors@miccosukee.com'];
    case 'Gaming Machines':
      return [
        'asaunders@miccosukee.com',
        'Bking@miccosukee.com',
        'gbotero@miccosukee.com',
        'crodriguez@miccosukee.com',
      ];
    case 'Group Sales':
      return [
        'asaunders@miccosukee.com',
        'ggalarza@miccosukee.com',
        'kwhiting@miccosukee.com',
      ];
    case 'Promotions & Special Events':
      return [
        'asaunders@miccosukee.com',
        'iguerra@miccosukee.com',
        'rduncan@miccosukee.com',
      ];
    case 'Player’s Club':
      return ['asaunders@miccosukee.com', 'rduncan@miccosukee.com'];
    case 'Room Rates & Reservations':
      return [
        'asaunders@miccosukee.com',
        'tmitchelson@miccosukee.com',
        'reservations@miccosukee.com',
        'kwhiting@miccosukee.com',
      ];
    case 'Spa & Salon':
      return [
        'asaunders@miccosukee.com',
        'kwhiting@miccosukee.com',
        'cklimekoski@miccosukee.com',
      ];
    case 'Valet Services':
      return [
        'asaunders@miccosukee.com',
        'tmitchelson@miccosukee.com',
        'kwhiting@miccosukee.com',
        'transportation@miccosukee.com',
      ];
    case 'Human Resources':
      return ['asaunders@miccosukee.com', 'damaro@miccosukee.com'];
    case 'Other':
      return [
        'asaunders@miccosukee.com',
        'KWhiting@miccosukee.com',
        'TMitchelson@miccosukee.com',
        'reservations@miccosukee.com',
      ];
    case 'Website Feedback':
      return ['asaunders@miccosukee.com', 'jronselli@miccosukee.com'];
    // Media Inquiry
    case 'Media Inquiry':
      return [
        'asaunders@miccosukee.com',
        'AFrye@miccosukee.com',
        'JenniferM@miccosukeetribe.com',
        'iguerra@miccosukee.com',
        'fsamper@miccosukee.com',
      ];
    // Village
    case 'Indian Village':
      return ['groups@miccosukeetours.com'];
    case 'Indian Village Groups':
      return ['groups@miccosukeetours.com'];
    // Airboats
    case 'Airboats':
      return ['groups@miccosukeetours.com'];
    case 'Airboat Groups':
      return ['groups@miccosukeetours.com'];
    // Golf
    case 'Golf':
      return ['alt@miccosukeegolf.com', 'ericw@miccosukeegolf.com'];
  }
};

export const contactFunction = async (valuesObj, callback) => {
  console.log('form submitted');
  const toEmail = getEmail(valuesObj.select);

  const valuesToSend = {
    toEmail: toEmail,
    name: valuesObj.name,
    email: valuesObj.email,
    phone: valuesObj.phone,
    select: valuesObj.select,
    message: valuesObj.message,
  };

  // Send a POST request
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://4hrpj3nvw6.execute-api.us-east-1.amazonaws.com/prod',
      data: valuesToSend,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': keys.lambdaEmailAPI,
      },
    });
    if (response.data) {
      callback();
    }
  } catch (error) {
    console.log('error: ', error);
    callback(error);
  }
};
