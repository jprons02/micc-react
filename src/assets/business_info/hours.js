// PLACE ALL BUSINESS INFO HERE.
// ex) Open or Closed, Hours or holiday hours

// Convert hours to minutes in case of ex) 9:30 open
// Use numbers only for open/close
const getMinutes = (hours, minutes) => {
  const h = hours * 60;
  const m = minutes ? minutes : 0;
  const totalMinutes = h + m;
  const AmPm = totalMinutes < 720 ? "A.M." : "P.M.";
  const newHours =
    Math.floor(totalMinutes / 60) > 12
      ? Math.floor(totalMinutes / 60) - 12
      : Math.floor(totalMinutes / 60);
  const newMinutes = totalMinutes % 60 === 0 ? "00" : totalMinutes % 60;
  return {
    totalMinutes,
    hours: newHours,
    minutes: newMinutes,
    AmPm,
    combinedString: `${newHours}:${newMinutes} ${AmPm}`,
  };
};

export const mrgHours = {
  weekday: {
    days: `Sunday – Thursday`,
    open: `${getMinutes(9).combinedString}`,
    close: `${getMinutes(2).combinedString}`,
    details: "No entry will be allowed after 1:00 A.M.",
  },
  weekend: {
    days: "Friday & Saturday",
    open: `${getMinutes(9).combinedString}`,
    close: `${getMinutes(4).combinedString}`,
    details: "No entry will be allowed after 3:00 A.M.",
  },
};

export const villageGiftshopHours = {
  //Friday - Sunday from 9 A.M. - 4:30 P.M
  days: `Friday – Sunday`,
  open: `${getMinutes(9).combinedString}`,
  close: `${getMinutes(16, 30).combinedString}`,
};

export const golfHours = {
  days: `Monday – Sunday`,
  open: `${getMinutes(7).combinedString}`,
  close: `${getMinutes(20, 30).combinedString}`,
};

export const airboatsHours = {
  //Thursday - Sunday from 9 AM-5PM
  days: `Thursday – Sunday`,
  open: `${getMinutes(9).combinedString}`,
  close: `${getMinutes(17).combinedString}`,
};
