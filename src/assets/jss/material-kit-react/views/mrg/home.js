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
  cardContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  serviceCards: {
    display: "block",
    width: "20rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
  },
  cardSliderArrows: {
    textAlign: "center",
    fontSize: "60px",
    //lineHeight: "0",
    position: "absolute",
    top: "46%",
    //top: "100px",
    display: "block",
    height: "100%",
    padding: "0",
    transform: "translateY(-50%)",
    cursor: "pointer",
    border: "none",
    color: "black",
    outline: "none",
    background: "transparent",
    width: "15%",
    zIndex: "2",
    opacity: "0.1",
  },
  dots: {
    position: "relative !important",
    marginTop: "-15px",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    welcome: {
      fontSize: "34px",
    },
    subWelcome: {
      fontSize: "20px",
    },
    cardContainer: {
      textAlign: "center",
      paddingBottom: "15px",
    },
    serviceCards: {
      display: "inline-block",
      margin: "15px",
      width: "20rem",
    },
  },
};

export default homeStyle;
