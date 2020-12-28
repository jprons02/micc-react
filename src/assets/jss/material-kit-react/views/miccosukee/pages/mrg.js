//import { container } from "assets/jss/material-kit-react.js";

/*
const miccosukeeMrgPageStyle = {
  container,
  main: {
    zIndex: "3",
    maxWidth: "1200px",
    margin: "auto",
  },
};
*/

const miccosukeeMrgPageStyle = {
  //MOBILE VIEW
  mrgBG: {
    padding: "0",
    minHeight: "360px",
    background: `linear-gradient(
                rgba(67, 16, 75, 0.8), 
                rgba(67, 16, 75, 0.8)),
                url("https://miccosukee.com/wp-content/uploads/2019/12/gaming-scaled.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  golfBG: {
    padding: "0",
    minHeight: "360px",
    background: `linear-gradient(
                rgba(29, 75, 16, 0.8), 
                rgba(29, 75, 16, 0.8)),
                url("https://golf.miccosukee.com/wp-content/uploads/2019/01/GOLF_1920x1080-parallax-e1551463617218.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  container: {
    padding: "30px 10px",
    width: "100%",
  },
  innerContainer: {
    width: "80%",
    margin: "0 auto",
  },
  main: {
    width: "100%",
    height: "100vh",
  },
  /*
  backButton: {
    position: "absolute",
    right: "0",
    zIndex: "2",
    margin: "10px",
    fontWeight: "900",
  },
  */
  header: {
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "20px",
  },
  description: {
    color: "white",
    fontSize: "18px",
    lineHeight: "1.45",
    marginBottom: "20px",
  },
  backButton: {
    //color: "#404040",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    width: "40%",
    margin: "4px",
  },
  button: {
    //color: "#404040",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    width: "40%",
    margin: "4px",
  },
  buttonGroup: {
    textAlign: "center",
  },

  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    mrgBG: {
      padding: "0",
      minHeight: "360px",
      background: `linear-gradient(
                rgba(67, 16, 75, 0.8), 
                rgba(67, 16, 75, 0.8)),
                url("https://miccosukee.com/wp-content/uploads/2019/12/gaming-scaled.jpg")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    golfBG: {
      padding: "0",
      minHeight: "360px",
      background: `linear-gradient(
                rgba(29, 75, 16, 0.8), 
                rgba(29, 75, 16, 0.8)),
                url("https://golf.miccosukee.com/wp-content/uploads/2019/01/GOLF_1920x1080-parallax-e1551463617218.jpg")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    container: {
      position: "absolute",
      top: "45%",
      transform: "translateY(-50%)",
      padding: "10px",
      width: "100%",
    },
    innerContainer: {
      width: "80%",
      margin: "0 auto",
    },
    main: {
      width: "100%",
      height: "100vh",
    },
    backButton: {
      position: "absolute",
      right: "0",
      zIndex: "2",
      margin: "10px",
      fontWeight: "900",
    },
    header: {
      color: "white",
      fontWeight: "500",
      textAlign: "center",
      fontSize: "40px",
      marginBottom: "35px",
    },
    description: {
      color: "white",
      fontSize: "22px",
      lineHeight: "1.45",
      minHeight: "170px",
      marginBottom: "20px",
    },
    button: {
      width: "100%",
    },
  },
};

//sm, small: 600px.
//md, medium: 960px

export default miccosukeeMrgPageStyle;
