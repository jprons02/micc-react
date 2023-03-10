import { mrgColor } from 'themes/colors.js';

const pokerPromoCardStyle = {
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
    minHeight: '40px',
  },
  cardBodyText: {
    fontSize: '10px',
  },
  topCardLeftTitle: {
    margin: '0px',
    marginBottom: '6px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#2d2d2d',
  },
  topCardBody: {
    justify: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px',
    margin: '0px',
    color: 'white',
    backgroundColor: '#f8a14e',
    borderTopRightRadius: '6px',
    borderTopLeftRadius: '6px',
  },
  bottomCardBody: {
    padding: '15px 10px 10px 10px',
    justify: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0px',
    color: 'white',
    backgroundColor: '#231f1f',
    borderBottom: '1px solid #4c4c4c',
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
    topCardLeftTitle: {
      marginBottom: '0',
    },
  },
};

export default pokerPromoCardStyle;
