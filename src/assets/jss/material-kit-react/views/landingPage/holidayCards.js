import holidayBg from 'assets/media/img/landingPages/holiday/holidaybg.jpg';

const landingPageStyle = {
  container: {
    zIndex: '12',
  },
  //HEADER SECTION
  headerSection: {
    backgroundImage: `url(${holidayBg})`,
    padding: '40px 0 60px 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '90px 0 140px 0',
    },
  },
  headerLogoSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    maxWidth: '40px',
    display: 'inline-block',
    marginRight: '10px',
    marginBottom: '-8px',
    //desktop view
    '@media (min-width: 960px)': {
      maxWidth: '70px',
      display: 'inline-block',
      marginRight: '20px',
    },
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: '800',
    fontFamily: 'AvenirNextHeavy',
    lineHeight: '.95',
    color: 'white',
    //desktop view
    '@media (min-width: 960px)': {
      textAlign: 'center',
      fontSize: '80px',
    },
  },
  headerTitleSpan: {
    letterSpacing: '2px',
    textAlign: 'center',
    //desktop view
    '@media (min-width: 960px)': {
      letterSpacing: '4px',
    },
  },
  //CONTENT SECTION
  contentSection: {
    padding: '10px 0 30px 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '40px 0 60px 0',
    },
  },
  contentSectionTop: {
    padding: '0 0 80px 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '20px 0 80px 0',
    },
  },

  contentSectionBottom: {
    padding: '80px 0 0 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '80px 0 40px 0',
    },
  },

  contentSectionMiddle: {
    padding: '80px 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '80px 0',
    },
  },

  numberStyle: {
    verticalAlign: 'top',
    display: 'inline-block',
  },

  cardStylePortrait: {
    width: '150px',
    margin: '5px',
    //desktop view
    '@media (min-width: 960px)': {
      display: 'inline-block',
    },
  },
  cardStyleLandscape: {
    width: '207px',
    margin: '5px',
    //desktop view
    '@media (min-width: 960px)': {
      display: 'inline-block',
    },
  },
  cardImageSectionStyle: {
    display: 'inline-block',
    //desktop view
    '@media (min-width: 960px)': {
      display: 'inline-block',
    },
  },
  cardSectionStyle: {
    display: 'inline-block',
    margin: '5px 0px 30px 0px',
    //desktop view
    '@media (min-width: 960px)': {
      margin: '5px 30px 30px 0px',
    },
  },

  imageStyle: {
    border: '1px solid black',
    width: '100%',
    cursor: 'pointer',
  },

  captionStyle: {
    textAlign: 'center',
  },

  contentImage: {
    width: '100%',
    borderRadius: '10px',
  },
  contentTextDiv: {
    marginTop: '30px',
    marginBottom: '20px',
  },
  contentSectionHeader: {
    fontWeight: '600',
    fontSize: '30px',
  },
  contentSectionSubHeader: {
    fontSize: '22px',
    fontWeight: '500',
  },
  contentSectionDetails: {
    fontSize: '18px',
  },
  contentButton: {
    width: '100%',
    //desktop view
    '@media (min-width: 960px)': {
      width: '260px',
      paddingTop: '16px',
      paddingBottom: '16px',
    },
  },
  contentButtonText: {
    fontSize: '12px',
    fontWeight: '600',
    //desktop view
    '@media (min-width: 960px)': {
      fontSize: '14px',
    },
  },
  //HORIZONTAL RULE
  horizontalRule: {
    border: '1px solid rgb(212 212 212)',
    width: '100px',
    //desktop view
    '@media (min-width: 960px)': {
      width: '150px',
    },
  },
  //DISCLAIMER SECTION
  disclaimerSection: {
    textAlign: 'center',
    //desktop view
    '@media (min-width: 960px)': {},
  },
  disclaimerBold: {
    fontWeight: 'bold',
  },
  disclaimerItalic: {
    fontStyle: 'italic',
  },
};

export default landingPageStyle;
