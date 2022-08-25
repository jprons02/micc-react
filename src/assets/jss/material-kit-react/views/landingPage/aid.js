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
  sponsorLogosSection: {
    paddingBottom: '10px',
    //desktop view
    '@media (min-width: 960px)': {
      paddingBottom: '30px',
    },
  },
  topSponsorLogosSection: {
    textAlign: 'center',
    //desktop view
    '@media (min-width: 960px)': {
      //textAlign: 'left',
    },
  },
  topSponsorLogosTopLarge: {
    padding: '10px 20px 0 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '10px 50px 0 0',
    },
  },
  topSponsorLogosLarge: {
    padding: '10px 20px 0 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '10px 50px 0 0',
    },
  },
  topSponsorLogosTopMedium: {
    padding: '10px 20px 0 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '10px 50px 0 0',
    },
  },
  topSponsorLogosMedium: {
    padding: '40px 20px 0 0',
    //desktop view
    '@media (min-width: 960px)': {
      padding: '10px 50px 0 0',
    },
  },
};

export default landingPageStyle;
