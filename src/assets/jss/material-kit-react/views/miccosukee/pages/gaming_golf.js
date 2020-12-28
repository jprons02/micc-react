const gamingGolf = {
  gridContainer: {
    clear: "both",
    position: "absolute",
    width: "100%",
    margin: "auto",
  },
  gridItem: {
    maxWidth: "450px",
    padding: "15px 0px",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    gridItem: {
      maxWidth: "450px",
      padding: "15px",
    },
  },
};

export default gamingGolf;
