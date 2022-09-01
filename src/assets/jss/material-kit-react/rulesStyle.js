import { mrgColor } from 'themes/colors.js';

const rulesStyle = {
  /*This is specific promo header*/
  promoTitle: {
    color: mrgColor[500],
    //fontWeight: '700',
    textDecoration: 'none',
    verticalAlign: 'baseline',
    fontSize: '18px !important',
    fontFamily: 'AvenirNext, sans-serif',
    fontStyle: 'normal',
    textTransform: 'uppercase !important',
    marginBottom: '15px !important',
  },

  /*Regular text*/
  standardText: {
    color: '000000',
    fontWeight: '400',
    textDecoration: 'none',
    verticalAlign: 'baseline',
    fontSize: '16px',
    fontFamily: 'Avenir Next Condensed, sans-serif',
    fontStyle: 'normal',
    paddingTop: '0px',
    paddingBottom: '0px',
    lineHeight: '1.2',
    orphans: '2',
    widows: '2',
    textAlign: 'left',
    marginBottom: '10px',
  },

  /*Sub-titles, ex: "TO QUALIFY, PRIZE RESTRICTIONS, etc.*/
  subTitle: {
    fontSize: '16px',
    fontFamily: 'Avenir Next Condensed, sans-serif',
    color: '#000000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  /*The promo div*/
  promo: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
};

export default rulesStyle;
