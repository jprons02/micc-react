const customHeroSectionStyle = {
  sliderContent: {
    position: "absolute",
    top: "45%",
    transform: "translateY(-50%)",
    textAlign: "center",
    width: "100%",
    padding: "0 15px",
    color: "white",
  },
  header: {
    fontSize: "36px",
    lineHeight: "1.3",
    fontWeight: "500",
  },
  subHeader: {
    fontSize: "16px",
  },
  customButton: {
    marginTop: "10px",
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
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    //sliderContent: {},
    header: {
      fontSize: "50px",
    },
    subHeader: {
      fontSize: "20px",
    },
    customButton: {
      marginTop: "20px",
      width: "30%",
    },
  },
};

export default customHeroSectionStyle;
