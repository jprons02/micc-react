import green from "@material-ui/core/colors/green";
import { standardLinkColor } from "themes/colors.js";

const virtualEventsStyle = {
  welcomeSection: {
    marginTop: "30px",
    marginBottom: "6px",
  },
  welcome: {
    textAlign: "center",
    fontFamily: "Rock Salt",
  },
  subsection: {
    paddingTop: "15px",
    paddingBottom: "0px",
  },
  buttonSection: {
    margin: "18px 0 5px 0",
  },
  button: {
    width: "100%",
    fontSize: "14px",
    color: "white",
    backgroundColor: `${green[500]} !important`,
    boxShadow: `0 2px 2px 0 ${green[500]}14, 0 3px 1px -2px ${green[500]}20, 0 1px 5px 0 ${green[500]}12 !important`,
    "&:hover,&:focus": {
      backgroundColor: `${green[500]} !important`,
      boxShadow: `0 14px 26px -12px ${green[500]}42, 0 4px 23px 0px #00000012, 0 8px 10px -5px ${green[500]}20 !important`,
    },
  },
  loginButtonSection: {
    textAlign: "center",
  },
  loginButton: {
    fontSize: "12px",
    color: standardLinkColor.color,
    "&:hover,&:focus": {
      color: standardLinkColor.hover,
    },
  },
  header: {
    fontSize: "50px",
  },
  subHeader: {
    fontSize: "14px",
  },
  videoSection: {
    margin: "30px 0",
  },
  vendorsSection: {
    margin: "30px 0",
  },
  extrasSection: {
    margin: "30px 0",
  },
  extrasButton: {
    marginTop: "-5px",
    fontSize: "12px",
    color: standardLinkColor.color,
    "&:hover,&:focus": {
      color: standardLinkColor.hover,
    },
  },
  extrasButtonIcon: {
    fontSize: "15px",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    welcomeSection: {
      marginTop: "16px",
      marginBottom: "55px",
    },
    welcome: {
      fontSize: "26px",
    },
    subsection: {
      paddingTop: "0",
      paddingBottom: "34px",
    },
    header: {
      fontSize: "50px",
    },
    subHeader: {
      fontSize: "20px",
    },
    button: {
      paddingTop: "14px",
      paddingBottom: "14px",
    },
    videoSection: {
      margin: "0",
    },
    vendorsSection: {
      margin: "0",
    },
    extrasSection: {
      margin: "0",
    },
  },
};

export default virtualEventsStyle;
