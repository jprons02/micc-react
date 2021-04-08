import { mrgColor } from "themes/colors.js";

const homeStyle = {
  welcomeContainer: {
    paddingTop: "30px",
    paddingBottom: "15px",
  },
  welcome: {
    textAlign: "center",
    fontSize: "26px",
  },
  subWelcome: {
    textAlign: "center",
    fontSize: "14px",
  },
  hr: {
    borderColor: mrgColor[500],
    width: "60px",
    marginTop: "20px",
  },
  serviceCards: {
    display: "block",
    width: "20rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    welcome: {
      fontSize: "34px",
    },
    subWelcome: {
      fontSize: "20px",
    },
  },
};

export default homeStyle;
