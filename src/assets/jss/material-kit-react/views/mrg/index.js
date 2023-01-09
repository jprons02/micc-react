import { container } from 'assets/jss/material-kit-react.js';
//import { socialIcons } from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const index = {
  container,
  main: {
    maxWidth: '1200px',
    margin: 'auto',
  },
  // copied from headerLinksStyle - not sure best way to import at this time.
  socialIcons: {
    position: 'relative',
    fontSize: '20px !important',
    marginRight: '4px',
  },
  webBannerDiv: {
    //Desktop view
    '@media screen and (min-width: 960px)': {
      //padding: '15px',
    },
  },
  webBannerImg: {
    width: '100%',
    borderBottom: '4px solid white',
    //borderRadius: '6px',
    //boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
    //Desktop view
    '@media screen and (min-width: 960px)': {},
  },
};

export default index;
