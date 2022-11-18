import { container } from 'assets/jss/material-kit-react.js';

const index = {
  container,
  main: {
    maxWidth: '1200px',
    margin: 'auto',
  },
  webBannerDiv: {
    //Desktop view
    '@media screen and (min-width: 960px)': {
      padding: '15px',
    },
  },
  webBannerImg: {
    width: '100%',
    borderRadius: '6px',
    boxShadow:
      '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
    //Desktop view
    '@media screen and (min-width: 960px)': {},
  },
};

export default index;
