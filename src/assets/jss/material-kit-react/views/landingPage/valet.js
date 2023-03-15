import bgImage from 'assets/media/img/mrg/poker/Poker_Header.jpeg';

const landingPageStyle = {
  container: {
    zIndex: '12',
  },
  //HEADER SECTION
  /*
  headerSection: {
    backgroundColor: '#373737',
    padding: '40px 0 60px 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '90px 0 140px 0',
    },
  },*/
  headerSection: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${bgImage})`,
    backgroundPosition: 'center',
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
    //desktop view
    '@media (min-width: 960px)': {
      maxWidth: '80px',
      display: 'inline-block',
      marginRight: '20px',
    },
  },
  headerTitle: {
    margin: '0',
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: '800',
    fontFamily: 'AvenirNextHeavy',
    display: 'inline-block',
    //lineHeight: '.95',
    //desktop view
    '@media (min-width: 960px)': {
      fontSize: '80px',
    },
  },
  headerTitleSpan: {
    color: 'white',
    letterSpacing: '2px',
    textAlign: 'center',
    verticalAlign: 'middle',
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

  /* 
  // WITH NO TOP IMAGE
  contentSectionTop: {
    padding: '0 0 40px 0',
    marginTop: '-30px',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '20px 0 40px 0',
      marginTop: '-30px',
    },
  },
  contentSectionBottom: {
    padding: '40px 0 0 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '40px 0 40px 0',
    },
  },
  contentSectionMiddle: {
    padding: '40px 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '40px 0',
    },
  },
  */
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
    marginBottom: '10px',
    //desktop view
    '@media (min-width: 960px)': {
      width: '260px',
      paddingTop: '16px',
      paddingBottom: '16px',
      margin: '10px',
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
