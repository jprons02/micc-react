import { january } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/0_january.js';
import { february } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/1_february.js';
import { march } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/2_march';
import { april } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/3_april.js';
import { may } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/4_may.js';
import { june } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/5_june.js';
import { july } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/6_july.js';
import { august } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/7_august.js';
import { september } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/8_september.js';
import { october } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/9_october.js';
import { november } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/10_november.js';
import { december } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/months/11_december.js';

export const pokerContent = (language, month) => {
  const d = new Date();

  const contentByMonth = [
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december,
  ];

  // If url is bad or if month data is not available, use current month promos
  switch (month) {
    case 'january':
      return contentByMonth[0].data ? contentByMonth[0] : 'undefined';
    case 'february':
      return contentByMonth[1].data ? contentByMonth[1] : 'undefined';
    case 'march':
      return contentByMonth[2].data ? contentByMonth[2] : 'undefined';
    case 'april':
      return contentByMonth[3].data ? contentByMonth[3] : 'undefined';
    case 'may':
      return contentByMonth[4].data ? contentByMonth[4] : 'undefined';
    case 'june':
      return contentByMonth[5].data ? contentByMonth[5] : 'undefined';
    case 'july':
      return contentByMonth[6].data ? contentByMonth[6] : 'undefined';
    case 'august':
      return contentByMonth[7].data ? contentByMonth[7] : 'undefined';
    case 'september':
      return contentByMonth[8].data ? contentByMonth[8] : 'undefined';
    case 'october':
      return contentByMonth[9].data ? contentByMonth[9] : 'undefined';
    case 'november':
      return contentByMonth[10].data ? contentByMonth[10] : 'undefined';
    case 'december':
      return contentByMonth[11].data ? contentByMonth[11] : 'undefined';
    default:
      return contentByMonth[d.getMonth()];
  }
};
