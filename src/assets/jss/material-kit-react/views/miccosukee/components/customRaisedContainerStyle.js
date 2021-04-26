import { container } from "assets/jss/material-kit-react.js";

const customRaisedContainerStyle = {
  container,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-30px 8px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    minHeight: "250px",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    mainRaised: {
      margin: "-60px 30px 0px",
      maxWidth: "1300px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    container: {
      maxWidth: "90%",
    },
  },
};

export default customRaisedContainerStyle;
