import green from "@material-ui/core/colors/green";

const virtualEventsStyle = {
  welcomeSection: {
    marginTop: "22px",
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
    margin: "18px 0",
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
  header: {
    fontSize: "50px",
  },
  subHeader: {
    fontSize: "14px",
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
      paddingBottom: "38px",
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
  },
};

export default virtualEventsStyle;
