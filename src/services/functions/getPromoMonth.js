// Promo content
import { casinoContent } from 'views/MRG/Pages/gaming/gamingPromos/casinoPromos/cardContent/cardContent.js';
import { pokerContent } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/cardContent';

export const getPromoMonth = (content, language, urlParamsMonth) => {
  const getContent = (language, month) => {
    if (content === 'casinoPromos') {
      return casinoContent(language, month);
    }
    if (content === 'pokerPromos') {
      return pokerContent(language, month);
    }
  };

  const monthNames = [
    { en: 'january', sp: 'enero' },
    { en: 'february', sp: 'febrero' },
    { en: 'march', sp: 'marzo' },
    { en: 'april', sp: 'abril' },
    { en: 'may', sp: 'mayo' },
    { en: 'june', sp: 'junio' },
    { en: 'july', sp: 'julio' },
    { en: 'august', sp: 'agosto' },
    { en: 'september', sp: 'septiembre' },
    { en: 'october', sp: 'octubre' },
    { en: 'november', sp: 'noviembre' },
    { en: 'december', sp: 'diciembre' },
  ];
  const d = new Date();
  const currentMonth = monthNames[d.getMonth()];

  const monthObj = () => {
    // Setting the month from the url. ex) /casino/promotions/june
    const getIndex = () => {
      return monthNames.findIndex((string) => string.en === urlParamsMonth);
    };
    // Return current month if the url is not valid, set the month to the url if it is valid
    if (urlParamsMonth) {
      if (getIndex() === -1) {
        return currentMonth;
      } else {
        return monthNames[getIndex()];
      }
    } else {
      return currentMonth;
    }
  };

  const isValidMonth = (month) => {
    //get index of month...
    const monthNameIndex = monthNames.findIndex(
      (string) => string.en === month
    );

    if (getContent(language, monthNames[monthNameIndex].en) === 'undefined') {
      return false;
    } else {
      return true;
    }
  };

  if (isValidMonth(monthObj().en)) {
    return monthObj();
  } else {
    return currentMonth;
  }
};
