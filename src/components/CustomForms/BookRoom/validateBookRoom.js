//rules:
//check in and check out: 'Date can not be in the past.'
//check in and check out: 'Date can not be 5+ years in advance.'
//check out: allow same day reservations
//check out: 'Check out date can not be before check in date.'

import { setEstTime } from "services/setEstTime.js";

export const validateCheckIn = (selectedDate) => {
  // Set hours of date to 0. We do not want to compare selected times, only dates.
  const getToday = () => {
    const today = setEstTime();
    today.setHours(0, 0, 0, 0);
    return today;
  };

  // selected date is before today
  if (selectedDate < getToday()) {
    return {
      error: true,
      errorMessage: "Date can not be in the past.",
    };
  }
  // selected date is too far in the future
  if (selectedDate.getFullYear() > getToday().getFullYear() + 2) {
    return {
      error: true,
      errorMessage: "Date is too far into the future.",
    };
  } else {
    return {
      error: false,
      errorMessage: "",
    };
  }
};

export const validateCheckOut = (selectedDate, checkInDate) => {
  // Set hours of date to 0. We do not want to compare selected times, only dates.
  const getToday = () => {
    const today = setEstTime();
    today.setHours(0, 0, 0, 0);
    return today;
  };
  // selected date is before today
  if (selectedDate < getToday()) {
    return {
      error: true,
      errorMessage: "Date can not be in the past.",
    };
  }
  // check out can not precede check in date
  if (selectedDate < checkInDate) {
    return {
      error: true,
      errorMessage: "Date can not precede check in date.",
    };
  }
  // selected date is too far in the future
  if (selectedDate.getFullYear() > getToday().getFullYear() + 2) {
    return {
      error: true,
      errorMessage: "Date is too far into the future.",
    };
  }
  // no error
  else {
    return {
      error: false,
      errorMessage: "",
    };
  }
};
