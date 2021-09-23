// Formating away from military time and adding AM/PM
export const formatTime = (hour, minute) => {
  let minuteFix = minute;
  if (minute === 0) {
    minuteFix = "00";
  }
  if (hour === 0 && minute === 0) {
    return "TBA";
  }
  if (hour == 12) {
    return `${hour}:${minuteFix} PM`;
  }
  if (hour > 12) {
    return `${hour - 12}:${minuteFix} PM`;
  }
  if (hour < 12) {
    return `${hour}:${minuteFix} AM`;
  }
};
