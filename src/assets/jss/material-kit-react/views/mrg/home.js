import { mrgColor } from 'themes/colors.js';

const homeStyle = {
  welcomeContainer: {
    paddingTop: '30px',
    paddingBottom: '15px',
  },
  welcome: {
    textAlign: 'center',
    fontSize: '26px',
  },
  subWelcome: {
    textAlign: 'center',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '300',
    lineHeight: '1.6',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      fontSize: '14px',
    },
  },
  accommodationsContainer: {
    paddingBottom: '30px',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      paddingBottom: '80px',
    },
  },
  hr: {
    borderColor: mrgColor[500],
    width: '60px',
    marginTop: '20px',
  },
  hrStyle2: {
    border: '1px solid rgb(246 246 246)',
    width: '95%',
    marginTop: '40px',
    marginBottom: '60px',
    marginLeft: 'auto',
    marginRight: 'auto',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      border: '1px solid rgb(246 246 246)',
      width: '97%',
      marginTop: '130px',
      marginBottom: '110px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  serviceCards: {
    display: 'block',
    width: '20rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left',
  },
  promotionsSpotH1: {
    fontSize: '40px',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      fontSize: '60px',
      marginBottom: '20px',
    },
  },
  promotionsSpotLink: {
    textDecoration: 'underline',
    textAlign: 'center',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      fontSize: '20px',
    },
  },
  msphereSpotOuterDiv: {
    paddingTop: '50px',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      paddingTop: '80px',
    },
  },
  accommodationsSpotOuterDiv: {
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      padding: '0',
    },
  },
  msphereSpotContentDiv: {
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      textAlign: 'right',
    },
  },
  msphereSpotH2: {
    fontWeight: '400',
    fontSize: '24px',
    marginTop: '0',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      fontWeight: '400',
      fontSize: '24px',
      marginTop: '0',
    },
  },
  msphereSpotP: {
    fontSize: '20px',
    lineHeight: '1.6',
    fontStyle: 'italic',
    marginBottom: '20px',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      fontSize: '20px',
      lineHeight: '1.6',
      fontStyle: 'italic',
      marginLeft: '80px',
      marginBottom: '20px',
    },
  },
  accommodationsSpotP: {
    fontSize: '20px',
    lineHeight: '1.6',
    fontStyle: 'italic',
    marginBottom: '20px',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      fontSize: '20px',
      lineHeight: '1.6',
      fontStyle: 'italic',
      marginRight: '80px',
      marginBottom: '20px',
    },
  },
  msphereSpotImageDiv: {
    paddingTop: '24px',
    paddingBottom: '50px',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      padding: '6px 30px',
    },
  },
  accommodationsSpotImageDiv: {
    paddingTop: '40px',
    paddingBottom: '24px',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      padding: '6px 30px',
    },
  },
  //DESKTOP VIEW
  '@media screen and (min-width: 960px)': {
    welcome: {
      fontSize: '34px',
    },
    subWelcome: {
      fontSize: '20px',
    },
  },
};

export default homeStyle;
