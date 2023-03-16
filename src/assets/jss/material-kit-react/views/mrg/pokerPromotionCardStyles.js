import { mrgColor } from 'themes/colors.js';

const pokerPromoCardStyle = {
  hook: {
    paddingBottom: '24px',
    color: '#efbc61',
    fontSize: '30px',
    fontFamily: 'AvenirNextCondensedBold',
  },
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
    boxShadow:
      '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
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
    minHeight: '40px',
  },
  cardBodyText: {
    fontSize: '10px',
  },
  topCardLeftTitle: {
    margin: '0px',
    marginBottom: '6px',
    fontSize: '28px',
    fontWeight: '600',
    color: '#2d2d2d',
    textTransform: 'uppercase',
  },
  topCardRightTitle: {
    margin: '0px',
    fontSize: '28px',
    fontWeight: '600',
  },
  topCardBody: {
    justify: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    padding: '5px',
    margin: '0px',
    color: 'white',
    backgroundColor: '#f8a14e',
    borderTopRightRadius: '6px',
    borderTopLeftRadius: '6px',
    fontFamily: 'AvenirNextCondensedBold, sans-serif',
  },
  bottomCardBody: {
    padding: '6px 10px 6px 10px',
    justify: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0px',
    color: 'white',
    backgroundColor: '#231f1f',
    borderBottom: '1px solid #393939',
    fontFamily: 'AvenirNextCondensed, sans-serif',
  },
  bodyLeft: {
    margin: '0 0 5px 0',
    fontSize: '28px',
    fontWeight: '600',
    fontFamily: 'AvenirNextBold, sans-serif',
    color: '#f8a14e',
  },
  bodyRight: {
    margin: '0px',
    fontSize: '23px',
    fontWeight: '400',
  },
  bodyRightTop: {
    margin: '0px',
    fontSize: '18px',
    fontWeight: '400',
  },
  buttonStyle: {
    display: 'block',
    margin: 'auto',
    marginBottom: '10px',
    backgroundColor: 'transparent',
    border: `1px solid white`,
    color: 'white',
    fontWeight: '500',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      color: 'black',
      border: `1px solid black`,
      backgroundColor: 'white',
    },
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
      //width: '20rem',
      width: '400px',
    },
    topCardBody: {
      minHeight: '60px',
    },
    topCardLeftTitle: {
      marginBottom: '0',
    },
    hook: {
      paddingTop: '30px',
      paddingBottom: '70px',
      fontSize: '70px',
    },
    bottomCardBody: {
      height: '60px',
    },
    bodyLeft: {
      margin: '0',
    },
  },
};

export default pokerPromoCardStyle;
