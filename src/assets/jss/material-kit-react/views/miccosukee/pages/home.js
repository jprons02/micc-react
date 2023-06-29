import { container } from 'assets/jss/material-kit-react.js';
import { cardTitle } from 'assets/jss/material-kit-react.js';

const miccosukeeHomePageStyle = {
  container,
  gridContainer: {
    height: '100vh',
    maxHeight: '900px',
    paddingBottom: '30px',
    position: 'absolute',
    width: '100%',
    margin: 'auto',
    //DESKTOP VIEW
    '@media screen and (min-width: 960px)': {
      height: '400px',
    },
  },
  gridItem: {
    padding: '15px 0px',
    height: '50%',
    minHeight: '350px',
    width: '100%',
  },
  cardTitle,
  mCard: {
    width: '100%',
    height: '100%',
    margin: '0',
    cursor: 'pointer',
  },
  mCardHeader: {
    padding: '0 1.875rem',
    backgroundColor: '#0000008a',
    color: 'white',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
  },
  mCardDescription: {
    marginTop: '-8px',
  },
  main: {
    zIndex: '3',
    maxWidth: '1200px',
    margin: 'auto',
  },
  //DESKTOP VIEW
  '@media screen and (min-width: 960px)': {
    gridItem: {
      padding: '15px',
      height: '50%',
      minHeight: '350px',
      width: '100%',
    },
  },
};

export default miccosukeeHomePageStyle;
