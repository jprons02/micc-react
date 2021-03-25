export const setEstTime = () => {
  const d = new Date();

  // This is the offset from user browser datetime
  const utc_offset = d.getTimezoneOffset();

  // Set the date object minutes to user browser minutes plus the offset.
  // date object is now UTC
  d.setMinutes(d.getMinutes() + utc_offset);

  // Set date object from UTC to EST
  const EST_offset = -4 * 60;
  d.setMinutes(d.getMinutes() + EST_offset);

  return d;
};
