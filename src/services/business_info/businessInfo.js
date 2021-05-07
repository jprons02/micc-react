// PLACE ALL BUSINESS INFO HERE.
// ex) Open or Closed, Hours or holiday hours

// Convert hours to minutes in case of ex) 9:30 open
// Use numbers only for open/close
const getMinutes = (hours, minutes) => {
  h = hours * 60;
  m = minutes ? minutes : 0;
  return {
    minutes: h + m,
    AmPm: () => {
      if (minutes < 720) {
        return "A.M.";
      } else {
        return "P.M.";
      }
    },
  };
};

export const mrgHours = () => {
  // Sunday - Thursday: 9 AM - 2 AM (no entry after 1 AM)
  // Friday and Saturday: 9 AM - 4 AM (no entry after 3 AM)

  const weekDay = {
    open: getMinutes(9),
    close: getMinutes(2),
    details: "No entry after 1 A.M.",
  };

  const weekEnd = {
    open: getMinutes(9, 30),
    close: getMinutes(4),
    details: "No entry after 3 A.M.",
  };

  return {
    Monday: weekDay,
    Tuesday: weekDay,
    Wednesday: weekDay,
    Thursday: weekDay,
    Friday: weekEnd,
    Saturday: weekEnd,
    Sunday: weekDay,
  };
};
