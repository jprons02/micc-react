const pokerPageStyle = {
  leftTextArea: {
    paddingBottom: '20px',
  },
  imageArea: {},
  hrStyle: {
    width: '30%',
    height: '1px',
    backgroundColor: '#ccc',
    border: 'none',
  },
  disclaimer: {
    fontSize: '11px',
    fontStyle: 'italic',
    paddingBottom: '20px',
    marginTop: '20px',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      fontSize: '14px',
      margin: 'auto',
      paddingBottom: '30px',
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

export default pokerPageStyle;
