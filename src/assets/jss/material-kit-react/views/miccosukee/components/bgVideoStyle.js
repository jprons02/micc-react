const videoStyle = {
  main: {
    width: '100%',
    marginTop: '-25px',
  },
  /*
  main: {
    position: 'fixed',
    top: '41%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: '100%',
    height: 'auto',
    zIndex: '-100',
    transform: `translateX(-50%) translateY(-50%)`,
    transition: '1s opacity',
  },
  */
  //DESKTOP VIEW
  '@media screen and (min-width: 960px)': {
    main: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      zIndex: '-100',
      transform: `translateX(-50%) translateY(-50%)`,
      backgroundSize: 'cover',
      transition: '1s opacity',
    },
  },
};

export default videoStyle;
