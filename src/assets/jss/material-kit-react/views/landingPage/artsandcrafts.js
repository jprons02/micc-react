const landingPageStyle = {
  container: {
    zIndex: '12',
  },

  //CONTENT SECTION
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
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'italic',
  },
  contentSectionDetails: {
    fontSize: '18px',
    //desktop view
    '@media (min-width: 960px)': {
      marginRight: '60px',
    },
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
  subSectionIntro: {
    marginBottom: '0',
    //desktop view
    '@media (min-width: 960px)': {
      marginBottom: '0',
    },
  },
  subSectionFirst: {
    marginBottom: '0',
    //desktop view
    '@media (min-width: 960px)': {
      marginBottom: '0',
    },
  },
  subSection: {
    marginBottom: '60px',
    //desktop view
    '@media (min-width: 960px)': {
      height: '320px',
      marginBottom: '100px',
    },
  },
  subSectionNoImage: {
    marginBottom: '60px',
    //desktop view
    '@media (min-width: 960px)': {
      //height: '320px',
      marginBottom: '100px',
    },
  },
  subSectionLast: {
    marginBottom: '0',
    //desktop view
    '@media (min-width: 960px)': {
      height: '320px',
      marginBottom: '115px',
    },
  },
  subSectionNoImageLast: {
    marginBottom: '0',
    //desktop view
    '@media (min-width: 960px)': {
      //height: '320px',
      marginBottom: '115px',
    },
  },
  subSectionImage: {
    width: '100%',
    marginBottom: '15px',
    boxShadow:
      '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
    //desktop view
    '@media (min-width: 960px)': {
      float: 'left',
      width: '450px',
      margin: '0 20px 0 0',
    },
  },
  videoSection: {
    marginTop: '30px',
    //desktop view
    '@media (min-width: 960px)': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  eventMapThumb: {
    width: '100%',
    marginTop: '30px',
    //desktop view
    '@media (min-width: 960px)': {
      maxWidth: '400px',
      marginLeft: '40px',
    },
  },
  divider: {
    border: '1px solid #e3e3e3',
    width: '30%',
    marginTop: '70px',
    marginBottom: '70px',
    //desktop view
    '@media (min-width: 960px)': {
      marginTop: '95px',
      marginBottom: '95px',
    },
  },
  disclaimer: {
    marginBottom: '50px',
  },
  contentSectionDetailsDisclaimer: {
    fontSize: '18px',
  },
};

export default landingPageStyle;
