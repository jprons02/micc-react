import { mrgColor } from "themes/colors.js";

const homeCardStyle = {
  cardContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  serviceCards: {
    display: "block",
    //width: "95%",
    width: "20rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
  },
  imgStyle: {
    //height: "180px",
    width: "100%",
    display: "block",
  },
  cardTitle: {
    //fontSize: "40px",
  },
  cardBodyText: {
    //fontSize: "10px",
  },
  dots: {
    position: "relative !important",
    marginTop: "-5px",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    cardContainer: {
      textAlign: "center",
      paddingBottom: "15px",
    },
    serviceCards: {
      display: "inline-block",
      //margin: "15px",
      width: "90%",
    },
    cardTitle: {
      //fontSize: "40px",
    },
    cardBody: {
      //fontSize: "10px",
    },
    dots: {
      marginTop: "15px",
    },
  },
};

export default homeCardStyle;
