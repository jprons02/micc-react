// PLACE ALL BUSINESS INFO HERE.
// ex) Open or Closed, Hours or holiday hours

// Convert hours to minutes in case of ex) 9:30 open
// Use numbers only for open/close

import React from "react";
import { isRunning } from "services/functions/scheduleThis";

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
  hours: {
    days: (language) =>
      language ? "Seven days a week" : "Seite días a la semana",
    open: `${getMinutes(0).combinedString}`,
    close: `${getMinutes(0).combinedString}`,
    details: (language) => (language ? "" : ""),
    //SEVEN DAYS A WEEK, 24 HOURS
    //SEITE DÍAS A LA SEMANA, 24 HORAS
  },
  /*
  weekday: {
    days: (language) => (language ? `Sunday – Thursday` : `domingo – jueves`),
    open: `${getMinutes(9).combinedString}`,
    close: `${getMinutes(2).combinedString}`,
    details: (language) =>
      language
        ? "No entry will be allowed after 1:00 A.M."
        : "No se permitirá la entrada después de las 1 A.M.",
  },
  weekend: {
    days: (language) => (language ? "Friday & Saturday" : "viernes y sábado"),
    open: `${getMinutes(9).combinedString}`,
    close: `${getMinutes(4).combinedString}`,
    details: (language) =>
      language
        ? "No entry will be allowed after 3:00 A.M."
        : "No se permitirá la entrada después de las 3 A.M.",
  },
  */
  todaysHours: (dayOfWeek, language) => {
    return language
      ? "Seven days a week, 24 hours"
      : "Seite días a la semana, 24 horas";
    /*
    if (dayOfWeek > 4) {
      // return weekend hours
      return `${mrgHours.weekend.open} - ${mrgHours.weekend.close}`;
    } else {
      // return weekday hours
      return `${mrgHours.weekday.open} - ${mrgHours.weekday.close}`;
    }
    */
  },
  poi: {
    salon: [
      {
        days: (language) => (language ? "" : ""),
        open: `${getMinutes(10).combinedString}`,
        close: `${getMinutes(20).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      /*
      {
        days: (language) => (language ? "Monday – Saturday" : "lunes – sábado"),
        open: `${getMinutes(10).combinedString}`,
        close: `${getMinutes(20).combinedString}`,
      },
      {
        days: (language) => (language ? "Sunday" : "domingo"),
        open: `${getMinutes(10).combinedString}`,
        close: `${getMinutes(18).combinedString}`,
      },
      */
    ],
    clubEgret: [
      {
        days: (language) => (language ? "" : ""),
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      /*
      {
        days: (language) => (language ? "Monday – Thursday" : "lunes – jueves"),
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
      },
      {
        days: (language) => (language ? "Friday" : "viernes"),
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(2).combinedString}`,
      },
      {
        days: (language) => (language ? "Saturday" : "sábado"),
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(2).combinedString}`,
      },
      {
        days: (language) => (language ? "Sunday" : "domingo"),
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
      },
      */
    ],
    poolGym: [
      {
        days: (language) =>
          language ? "Seven days a week" : "Seite días a la semana",
        open: `${getMinutes(7).combinedString}`,
        close: `${getMinutes(23).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      /*
      {
        days: (language) => (language ? "Daily" : "Diario"),
        open: `${getMinutes(7).combinedString}`,
        close: `${getMinutes(23).combinedString}`,
      },
      */
    ],
    teenArcade: [
      {
        days: (language) => (language ? "" : ""),
        open: `${getMinutes(13).combinedString}`,
        close: `${getMinutes(23).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      /*
      {
        days: (language) =>
          language ? "Sunday – Thursday" : "domingo – jueves",
        open: `${getMinutes(13).combinedString}`,
        close: `${getMinutes(23).combinedString}`,
      },
      {
        days: (language) =>
          language ? "Friday & Saturday" : "viernes & sábado",
        open: `${getMinutes(13).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
      */
    ],
    poker: [
      {
        days: (language) => (language ? "" : ""),
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(4).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
    ],
    bravo: [
      {
        days: (language) => (language ? "" : ""),
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      /*
      {
        days: (language) => (language ? "Monday – Thursday" : "lunes – jueves"),
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
      },
      */
    ],
    internationalBuffet: [
      {
        days: (language) => (language ? "" : ""),
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      /*
      {
        days: (language) => (language ? "Monday – Sunday" : "lunes – domingo"),
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
      },
      */
    ],
    maxs: [
      {
        days: (language) =>
          language ? "Seven days a week" : "Seite días a la semana",
        open: `${getMinutes(0).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
      /*
      {
        days: (language) =>
          language ? "Sunday – Thursday" : "domingo – jueves",
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      {
        days: (language) =>
          language ? "Friday & Saturday" : "viernes y sábados",
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(2).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      */
    ],
    sawgrassCafe: [
      /*
      {
        days: (language) =>
          language ? "Seven days a week" : "Seite días a la semana",
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      */
      {
        days: (language) =>
          language ? "Sunday - Thursday" : "domingo - jueves",
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      {
        days: (language) =>
          language ? "Friday & Saturday" : "viernes y sábado",
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
    ],
    deli: [
      {
        days: (language) => (language ? "" : ""),
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      /*
      {
        days: (language) => (language ? "Monday – Sunday" : "lunes – domingo"),
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(1).combinedString}`,
      },
      */
    ],
    hammock: [
      {
        days: (language) =>
          language
            ? "Wednesday, Thursday & Sunday"
            : "miércoles, jueves y domingo",
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(22).combinedString}`,
      },
      {
        days: (language) =>
          language ? "Friday & Saturday" : "viernes y sábado",
        open: `${getMinutes(12).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
    ],
    cypressLounge: [
      {
        days: (language) => (language ? "" : ""),
        open: `${getMinutes(0).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      /*
      {
        days: (language) =>
          language ? "Seven days a week" : "Seite días a la semana",
        open: `${getMinutes(0).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
      */
    ],
    martiniBar: [
      {
        days: (language) => (language ? "" : ""),
        open: `${getMinutes(4).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      /*
      {
        days: (language) => (language ? "Monday – Thursday" : "lunes – jueves"),
        open: `${getMinutes(4).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
      {
        days: (language) =>
          language ? "Friday & Saturday" : "viernes & sábado",
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(2).combinedString}`,
      },
      {
        days: (language) => (language ? "Sunday" : "domingo"),
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
      */
    ],
    accommodations: [
      {
        days: (language) => (language ? "" : ""),
        open: `${getMinutes(0).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
        details: (language) => (language ? "" : ""),
      },
      /*
      {
        days: (language) =>
          language ? "Seven days a week" : "Seite días a la semana",
        open: `${getMinutes(0).combinedString}`,
        close: `${getMinutes(0).combinedString}`,
      },
      */
    ],
  },
};

export const villageHours = {
  days: (language) => "",
  open: "",
  close: "",
  details: (language) =>
    language
      ? "The Miccosukee Indian Village will NOT reopen until further notice."
      : "El Village permanecerá cerrado hasta nuevo aviso.",
  todaysHours: (dayOfWeek, language) => {
    //`Thursday – Sunday`,
    if (dayOfWeek === 0 || dayOfWeek > 4) {
      return `Closed, however, the Gift Shop is open: ${villageHours.poi.giftShop[0].open} - ${villageHours.poi.giftShop[0].close}`;
    } else {
      return language ? "Closed" : "Cerrado";
    }
  },
  poi: {
    //Friday - Sunday from 9 A.M. - 4:30 P.M
    giftShop: [
      {
        days: (language) =>
          language ? `Wednesday – Sunday` : "miércoles – domingo",
        open: `${getMinutes(9).combinedString}`,
        close: `${getMinutes(16, 30).combinedString}`,
      },
    ],
    alligator: [
      {
        days: (language) => "",
        open: `${getMinutes(11).combinedString}`,
        close: `${getMinutes(5).combinedString}`,
        details: (language) =>
          language
            ? "The Miccosukee Indian Village will NOT reopen until further notice."
            : "El Village permanecerá cerrado hasta nuevo aviso.",
      },
    ],
    ourLittleShack: [
      {
        days: (language) => "",
        open: `${getMinutes(8).combinedString}`,
        close: `${getMinutes(15, 30).combinedString}`,
        details: (language) =>
          language
            ? "The Miccosukee Indian Village will NOT reopen until further notice."
            : "El Village permanecerá cerrado hasta nuevo aviso.",
      },
    ],
  },
};

export const golfHours = [
  {
    days: (language) => (language ? `Monday – Sunday` : "lunes – domingo"),
    open: `${getMinutes(7).combinedString}`,
    close: `${getMinutes(20, 30).combinedString}`,
    todaysHours: (dayOfWeek, language) => {
      return `${golfHours[0].open} - ${golfHours[0].close}`;
    },
  },
];

export const airboatsHours = [
  {
    days: (language) => (language ? `Monday – Sunday` : "jueves – domingo"),
    open: `${getMinutes(9).combinedString}`,
    close: `${getMinutes(17).combinedString}`,
    todaysHours: (dayOfWeek, language) => {
      return `${airboatsHours[0].open} - ${airboatsHours[0].close}`;
    },
  },
];

/*
export const airboatsHours = [
  {
    days: (language) => (language ? `Thursday – Sunday` : "jueves – domingo"),
    open: `${getMinutes(9).combinedString}`,
    close: `${getMinutes(17).combinedString}`,
    todaysHours: (dayOfWeek, language) => {
      //`Thursday – Sunday`,
      if (dayOfWeek === 0 || dayOfWeek > 3) {
        return `${airboatsHours[0].open} - ${airboatsHours[0].close}`;
      } else {
        return language ? "Closed" : "Cerrado";
      }
    },
  },
];
*/
