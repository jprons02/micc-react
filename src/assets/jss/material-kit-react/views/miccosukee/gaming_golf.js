import { container } from "assets/jss/material-kit-react.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const gamingGolf = {
  imagesStyles,
  container,
  cardTitle,
  main: {
    maxWidth: "1200px",
    margin: "auto",
  },
  backButton: {
    float: "right",
    marginBottom: "0",
    marginTop: "15px",
    padding: "12px 15px",
    color: "#3C4858",
    "&:hover": {
      color: "black",
    },
  },
};

export default gamingGolf;
