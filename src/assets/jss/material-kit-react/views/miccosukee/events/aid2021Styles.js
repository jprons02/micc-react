import green from "@material-ui/core/colors/green";
import { standardLinkColor } from "themes/colors.js";
import { aid21Colors } from "themes/colors";
import { isWhiteSpaceLike } from "typescript";

const virtualEventsStyle = {
  welcomeSection: {
    marginTop: "10px",
    marginBottom: "6px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  welcomeHeader: {
    textAlign: "left",
    fontSize: "22px",
    fontFamily: "'phosphatesolid', 'phosphate-solid', 'Roboto'",
    color: aid21Colors.red,
  },
  welcomeBody: {},
  subsection: {
    paddingTop: "15px",
    paddingBottom: "10px",
  },
  buttonSection: {
    marginTop: "10px",
    paddingLeft: "15px",
    marginBottom: "6px",
    paddingRight: "15px",
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
    margin: "10px",
    display: "inline-block",
  },
  eventLinkSection: {
    marginTop: "10px",
    marginBottom: "6px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  purchasedLinkSection: {
    marginTop: "10px",
    marginBottom: "6px",
    paddingLeft: "15px",
    paddingRight: "15px",
    backgroundColor: aid21Colors.red,
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
    fontSize: "18px",
  },
  subHeaderRed: {
    fontSize: "22px",
    fontFamily: "'phosphatesolid', 'phosphate-solid', 'Roboto'",
    color: aid21Colors.red,
    marginBottom: "-20px",
    textAlign: "center",
  },
  subHeaderRedLinks: {
    fontSize: "22px",
    fontFamily: "'phosphatesolid', 'phosphate-solid', 'Roboto'",
    color: aid21Colors.red,
  },
  subHeaderRedLinksPurchased: {
    fontSize: "22px",
    fontFamily: "'phosphatesolid', 'phosphate-solid', 'Roboto'",
    color: "white",
  },
  videoSection: {
    margin: "30px 0",
  },
  vendorsSection: {
    margin: "0 0 20px 0",
  },
  extrasSection: {
    margin: "0 0 20px 0",
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
  sliderContent: {
    position: "absolute",
    top: "45%",
    transform: "translateY(-50%)",
    textAlign: "center",
    width: "100%",
    padding: "10px 15px",
    color: "white",
  },
  heroHeader: {
    fontSize: "28px",
    lineHeight: "1",
    fontWeight: "500",
    fontFamily: "'phosphatesolid', 'phosphate-solid', 'Roboto'",
    marginBottom: "5px",
  },
  heroSubHeader: {
    fontSize: "26px",
    margin: "auto",
    width: "100%",
    fontFamily: "'phosphatesolid', 'phosphate-solid', 'Roboto'",
    color: aid21Colors.yellow,
    lineHeight: "0.9",
  },
  customButton: {
    marginTop: "20px",
    width: "70%",
    color: "white",
    borderColor: "white",
    padding: "10px 20px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    "&:hover": {
      color: "#555555 !important",
      borderColor: "white",
      backgroundColor: "white",
    },
  },
  standard: {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "20vh",
    marginTop: "-20px",
  },
  large: {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "60vh",
    marginTop: "-20px",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    hr: {
      border: "none",
      color: "rgb(236 236 236);",
      backgroundColor: "rgb(236 236 236);",
      width: "100%",

      height: "1px",
      marginTop: "60px",
      marginBottom: "60px",
    },
    buttonSection: {
      width: "100%",
    },
    loginButtonSection: {
      width: "100%",
      margin: "10px 0",
    },
    welcomeSection: {
      marginTop: "16px",
      //marginBottom: "55px",
    },
    welcomeHeader: {
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
    subHeaderRed: {
      fontSize: "26px",
      marginBottom: "16px",
      textAlign: "left",
    },
    subHeaderRedLinks: {
      fontSize: "26px",
      marginBottom: "16px",
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
    standard: {
      height: "36vh",
    },
    large: {
      height: "70vh",
    },
    heroHeader: {
      fontSize: "36px",
    },
    heroSubHeader: {
      fontSize: "36px",
      width: "60%",
      paddingBottom: "20px",
    },
    customButton: {
      marginTop: "20px",
      width: "30%",
    },
    purchasedLinkSection: {
      padding: "34px 34px 0 34px",
      margin: "0 40px 34px 0",
    },
  },
};

export default virtualEventsStyle;
