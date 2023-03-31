const basicPageStyle = {
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
