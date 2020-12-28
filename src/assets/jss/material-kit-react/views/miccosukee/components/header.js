const headerClasses = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  navContainer: {
    width: "100%",
    margin: "auto",
    position: "relative",
  },
  horizontalRule: {
    borderTop: "1px solid #979797",
    width: "100%",
    margin: "auto",
    marginTop: "10px",
    marginBottom: "5px",
  },
  logo: {
    width: "50px",
    cursor: "pointer",
  },
  languageTrue: {
    textTransform: "lowercase",
    fontSize: "12px",
    borderRadius: "30px",
    padding: "7px 14px",
    margin: "6px",
    color: "white",
  },
  languageFalse: {
    textTransform: "lowercase",
    fontSize: "12px",
    borderRadius: "30px",
    padding: "7px 14px",
    margin: "6px",
    color: "#555555",
  },
  backButton: {
    margin: "0px",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    backButton: {
      marginLeft: "4px",
    },
    navContainer: {
      width: "60%",
      margin: "auto",
      position: "relative",
    },
  },
};

export default headerClasses;
