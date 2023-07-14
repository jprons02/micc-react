const basicPageStyle = {
  leftTextArea: {
    paddingBottom: '20px',
  },
  imageArea: {},
  hrStyle: {
    border: '1px solid rgb(246 246 246)',
    width: '95%',
    marginTop: '50px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '20px',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      border: '1px solid rgb(246 246 246)',
      width: '97%',
      marginBottom: '40px',
      marginTop: '50px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  //DESKTOP VIEW
  '@media screen and (min-width: 960px)': {
    leftTextArea: {
      paddingRight: '40px',
    },
    imageArea: {
      marginTop: '20px',
    },
  },
};

export default basicPageStyle;
