// PLACE ALL BUSINESS INFO HERE.
// ex) Open or Closed, Hours or holiday hours

// Convert hours to minutes in case of ex) 9:30 open
// Use numbers only for open/close

const getMinutes = (hours, minutes) => {
  const h = hours * 60;
  const m = minutes ? minutes : 0;
  const totalMinutes = h + m;
  const AmPm = totalMinutes < 720 ? "A.M." : "P.M.";
  const newHours = () => {
    if (hours === 0) {
      return 12;
    }
    if (Math.floor(totalMinutes / 60) > 12) {
      return Math.floor(totalMinutes / 60) - 12;
    } else {
      return Math.floor(totalMinutes / 60);
    }
  };
  const newMinutes = totalMinutes % 60 === 0 ? "00" : totalMinutes % 60;
  return {
    totalMinutes,
    hours: newHours(),
    minutes: newMinutes,
    AmPm,
    combinedString: `${newHours()}:${newMinutes} ${AmPm}`,
  };
};

// If days === "" then it will show "Closed"
// If hours.open === hours.closed then it will show "24 Hours"
// This is all rendered from renderPoiHours.js function

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
  todaysHours: (dayOfWeek, language) => {
    if (dayOfWeek > 4) {
      // return weekend hours
      return `${mrgHours.weekend.open} - ${mrgHours.weekend.close}`;
    } else {
      // return weekday hours
      return `${mrgHours.weekday.open} - ${mrgHours.weekday.close}`;
    }
  },
  poi: {
    salon: [
      {
        days: "Monday – Saturday",
        open: `${getMinutes(10).combinedString}`,
        close: `${getMinutes(20).combinedString}`,
      },
      {
        days: "Sunday",
        open: `${getMinutes(10).combinedString}`,
        close: `${getMinutes(18).combinedString}`,
      },
    ],
    clubEgret: [
      {
        days: "Monday – Thursday",
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
      },
      {
        days: "Friday",
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(2).combinedString}`,
      },
      {
        days: "Saturday",
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(2).combinedString}`,
      },
      {
        days: "Sunday",
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
      },
    ],
    poolGym: [
      {
        days: "Daily",
        open: `${getMinutes(7).combinedString}`,
        close: `${getMinutes(23).combinedString}`,
      },
    ],
    teenArcade: [
      {
        days: "Sunday – Thursday",
        open: `${getMinutes(13).combinedString}`,
        close: `${getMinutes(23).combinedString}`,
      },
      {
        days: "Friday & Saturday",
        open: `${getMinutes(13).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
    ],
    poker: [
      {
        days: "Sunday – Thursday",
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(4).combinedString}`,
      },
      {
        days: "Friday & Saturday",
        open: `${getMinutes(0).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
    ],
    bravo: [
      {
        days: "SAMPLE: Monday – Thursday",
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
      },
    ],
    deli: [
      {
        days: "Monday – Sunday",
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
      },
    ],
    hammock: [
      {
        days: "Sunday – Thursday",
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
      {
        days: "Friday & Saturday",
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(2).combinedString}`,
      },
    ],
    cypressLounge: [
      {
        days: "Seven days a week",
        open: `${getMinutes(0).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
    ],
    martiniBar: [
      {
        days: "Monday – Thursday",
        open: `${getMinutes(4).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
      {
        days: "Friday & Saturday",
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(2).combinedString}`,
      },
      {
        days: "Sunday",
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
    ],
    accommodations: [
      {
        days: "Seven days a week",
        open: `${getMinutes(0).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
    ],
  },
};

export const villageHours = {
  days: "",
  open: "",
  close: "",
  details:
    "The Miccosukee Indian Village will NOT reopen until further notice.",
  todaysHours: (dayOfWeek, language) => {
    //`Thursday – Sunday`,
    if (dayOfWeek === 0 || dayOfWeek > 4) {
      return `Closed, however, the Gift Shop is open: ${villageHours.poi.giftShop.open} - ${villageHours.poi.giftShop.close}`;
    } else {
      return language ? "Closed" : "Cerrado";
    }
  },
  poi: {
    //Friday - Sunday from 9 A.M. - 4:30 P.M
    giftShop: [
      {
        days: `Friday – Sunday`,
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(16, 30).combinedString}`,
      },
    ],
    alligator: [
      {
        days: "",
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(5).combinedString}`,
        details:
          "The Miccosukee Indian Village will NOT reopen until further notice.",
      },
    ],
    ourLittleShack: [
      {
        days: "",
        open: `${getMinutes(8).combinedString}`,
        close: `${getMinutes(15, 30).combinedString}`,
        details:
          "The Miccosukee Indian Village will NOT reopen until further notice.",
      },
    ],
  },
};

export const golfHours = {
  days: `Monday – Sunday`,
  open: `${getMinutes(7).combinedString}`,
  close: `${getMinutes(20, 30).combinedString}`,
  todaysHours: (dayOfWeek, language) => {
    return `${golfHours.open} - ${golfHours.close}`;
  },
};

export const airboatsHours = {
  days: `Thursday – Sunday`,
  open: `${getMinutes(9).combinedString}`,
  close: `${getMinutes(17).combinedString}`,
  todaysHours: (dayOfWeek, language) => {
    //`Thursday – Sunday`,
    if (dayOfWeek === 0 || dayOfWeek > 3) {
      return `${airboatsHours.open} - ${airboatsHours.close}`;
    } else {
      return language ? "Closed" : "Cerrado";
    }
  },
};
