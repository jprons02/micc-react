import { mrgColor } from 'themes/colors.js';

const promoCardStyle = {
  cardContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  serviceCards: {
    display: 'block',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left',
    border: '1px solid #969696',
    boxShadow: 'none',
  },
  imgStyle: {
    margin: 'auto',
    width: '200px',
    display: 'block',
    paddingTop: '15px',
  },
  cardTitle: {
    fontFamily: 'sans-serif',
    fontSize: '14px',
    textAlign: 'center',
    minHeight: '130px',
  },
  cardBodyText: {
    fontSize: '10px',
  },
  buttonStyle: {
    display: 'block',
    margin: 'auto',
    marginBottom: '10px',
    //backgroundColor: "transparent !important",
    //border: `1px solid ${mrgColor[500]}`,
    //color: mrgColor[500],
    fontWeight: '500',
  },
  dots: {
    position: 'relative !important',
    marginTop: '-5px',
  },
  //DESKTOP VIEW
  '@media screen and (min-width: 960px)': {
    cardContainer: {
      textAlign: 'center',
      paddingBottom: '15px',
    },
    serviceCards: {
      display: 'inline-block',
      margin: '24px',
      width: '20rem',
    },
  },
};

export default promoCardStyle;
