import { container } from "assets/jss/material-kit-react.js";
//import { socialIcons } from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const index = {
  container,
  main: {
    maxWidth: "1200px",
    margin: "auto",
  },
  // copied from headerLinksStyle - not sure best way to import at this time.
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
  },
};

export default index;
