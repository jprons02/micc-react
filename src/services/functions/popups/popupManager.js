// Show popups on certain pages
// Stop showing popup after 1 time load... may need to change how state works

//import mrgImage from "assets/media/img/test/MonthlyPayouts_Calendar_April-1.jpg";
import aidImage from 'assets/media/img/events/aid/21/aid_2021_popup_min.jpg';
import mrgImage from 'assets/media/img/popups/Bingo_promo_ENG.jpg';
import promoImage1 from 'assets/media/img/popups/oxford_luggage.jpg';
import hubPopup from 'assets/media/img/popups/POPUP_Service-Plaza-Tribal.jpg';
import jobFair from 'assets/media/img/popups/JOBFair2021_WebSlider.jpg';

const d = new Date();

const scheduler = (time) => {
  if (time.start.year === '') {
    return false;
  }
  const startTime = new Date(
    `${time.start.month} ${time.start.day}, ${time.start.year}, ${time.start.time}`
  );
  const endTime = new Date(
    `${time.end.month} ${time.end.day}, ${time.end.year}, ${time.end.time}`
  );
  if (d > startTime && d < endTime) {
    return true;
  } else {
    return false;
  }
};

// Popup Content, change content here.
// linkType: "internal" or "external" or "".
// link: can be "" if needed.
/*
example use of scheduler
showPopup: scheduler({
    start: {
      year: "21",
      month: "May",
      day: "28",
      time: "14:25",
    },
    end: {
      year: "21",
      month: "May",
      day: "28",
      time: "14:34",
    },
  }),
*/
const miccosukeePopup = {
  name: 'miccosukeePopup',
  id: '01',
  showPopup: scheduler({
    start: {
      year: '21',
      month: 'November',
      day: '1',
      time: '',
    },
    end: {
      year: '21',
      month: 'December',
      day: '4',
      time: '',
    },
  }),
  viewCount: 1,
  content: {
    image: jobFair,
    alt: 'job fair',
    linkType: 'external',
    link: 'https://www.miccosukee.com/adp-job-board',
  },
};
const mrgPopup = {
  name: 'mrgPopup',
  id: '02',
  showPopup: scheduler({
    start: {
      year: '22',
      month: 'April',
      day: '10',
      time: '',
    },
    end: {
      year: '22',
      month: 'April',
      day: '30',
      time: '',
    },
  }),
  viewCount: 1,
  content: {
    image: mrgImage,
    alt: 'monthly payouts',
    linkType: 'internal',
    link: '/mrg/bingo',
  },
};
const mrgGamingPromotionsPopup = {
  name: 'mrgGamingPromotions',
  id: '02',
  showPopup: scheduler({
    start: {
      year: '21',
      month: 'November',
      day: '1',
      time: '',
    },
    end: {
      year: '21',
      month: 'November',
      day: '30',
      time: '',
    },
  }),
  viewCount: 1,
  content: {
    image: promoImage1,
    linkType: '',
    link: '',
  },
};
const golfPopup = {
  name: 'golfPopup',
  id: '03',
  showPopup: scheduler({
    start: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
    end: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
  }),
  viewCount: 1,
  content: {
    image: aidImage,
    linkType: 'internal',
    link: '/test2',
  },
};
const villagePopup = {
  name: 'villagePopup',
  id: '04',
  showPopup: scheduler({
    start: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
    end: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
  }),
  viewCount: 1,
  content: {
    image: aidImage,
    linkType: 'internal',
    link: '/test1',
  },
};
const airboatsPopup = {
  name: 'airboatsPopup',
  id: '05',
  showPopup: scheduler({
    start: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
    end: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
  }),
  viewCount: 1,
  content: {
    image: aidImage,
    linkType: 'internal',
    link: '/test1',
  },
};
const miccosukeeEventsPopup = {
  name: 'miccosukeeEventsPopup',
  id: '06',
  showPopup: scheduler({
    start: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
    end: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
  }),
  viewCount: 1,
  content: {
    image: aidImage,
    linkType: 'internal',
    link: '/test1',
  },
};
const historyPopup = {
  name: 'historyPopup',
  id: '07',
  showPopup: scheduler({
    start: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
    end: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
  }),
  viewCount: 1,
  content: {
    image: aidImage,
    linkType: 'internal',
    link: '/test1',
  },
};
const administrationPopup = {
  name: 'administrationPopup',
  id: '08',
  showPopup: scheduler({
    start: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
    end: {
      year: '',
      month: '',
      day: '',
      time: '',
    },
  }),
  viewCount: 1,
  content: {
    image: aidImage,
    linkType: 'internal',
    link: '/test1',
  },
};

// Sets view count of popup to limit spam.
// All view counts start at 1.
const setPopup = (setState, state, popup) => {
  // initial view
  if (!state[popup.name]) {
    setState({
      ...state,
      [popup.name]: popup,
    });
  } else if (state[popup.name].viewCount > 1) {
    setState({
      ...state,
      [popup.name]: {
        ...state[popup.name],
        ['showPopup']: false,
      },
    });
  } else {
    //update view count here, need to showpopup true to show popup again until it reaches viewcount threshold
    setState({
      ...state,
      [popup.name]: {
        ...state[popup.name],
        ['viewCount']: state[popup.name]['viewCount'] + 1,
        ['showPopup']: true,
      },
    });
  }
};

// Manager Function - chooses which page to display which popup on.
export const popupManager = (setState, state, location) => {
  if (miccosukeePopup.showPopup) {
    if (location.pathname === '/') {
      setTimeout(() => {
        setPopup(setState, state, miccosukeePopup);
      }, 700);
    }
  }
  if (mrgPopup.showPopup) {
    if (location.pathname === '/mrg') {
      setTimeout(() => {
        setPopup(setState, state, mrgPopup);
      }, 700);
    }
  }
  if (mrgGamingPromotionsPopup.showPopup) {
    if (location.pathname === '/mrg/promotions') {
      setTimeout(() => {
        setPopup(setState, state, mrgGamingPromotionsPopup);
      }, 700);
    }
  }
  if (golfPopup.showPopup) {
    if (location.pathname === '/golf') {
      setTimeout(() => {
        setPopup(setState, state, golfPopup);
      }, 700);
    }
  }
  if (villagePopup.showPopup) {
    if (location.pathname === '/village') {
      setTimeout(() => {
        setPopup(setState, state, villagePopup);
      }, 700);
    }
  }
  if (airboatsPopup.showPopup) {
    if (location.pathname === '/airboats') {
      setTimeout(() => {
        setPopup(setState, state, airboatsPopup);
      }, 700);
    }
  }
  if (miccosukeeEventsPopup.showPopup) {
    if (location.pathname === '/events') {
      setTimeout(() => {
        setPopup(setState, state, miccosukeeEventsPopup);
      }, 700);
    }
  }
  if (historyPopup.showPopup) {
    if (location.pathname === '/history') {
      setTimeout(() => {
        setPopup(setState, state, historyPopup);
      }, 700);
    }
  }
  if (administrationPopup.showPopup) {
    if (location.pathname === '/administration') {
      setTimeout(() => {
        setPopup(setState, state, administrationPopup);
      }, 700);
    }
  }
};
