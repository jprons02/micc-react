const basicPageStyle = {
  leftTextArea: {
    paddingBottom: '20px',
  },
  subHeader: {
    fontStyle: 'italic',
    fontSize: '20px',
    lineHeight: '1.3',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      marginBottom: '40px',
    },
  },
  //DESKTOP VIEW
  '@media screen and (min-width: 960px)': {
    leftTextArea: {
      paddingRight: '70px',
    },
  },
};

export default basicPageStyle;
