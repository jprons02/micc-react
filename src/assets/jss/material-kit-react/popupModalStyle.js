const virtualLoginModalStyle = {
  modal: {
    borderRadius: "6px",
    width: "100%",
    backgroundColor: "transparent",
  },
  modalHeader: {
    borderBottom: "none",
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "0",
    paddingLeft: "24px",
    minHeight: "16.43px",
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.42857143",
  },
  modalCloseButton: {
    position: "absolute",
    top: "16px",
    right: "5px",
    marginTop: "-12px",
    WebkitAppearance: "none",
    padding: "0",
    cursor: "pointer",
    background: "0 0",
    border: "0",
    fontSize: "inherit",
    opacity: ".9",
    textShadow: "none",
    fontWeight: "700",
    lineHeight: "1",
    float: "right",
    color: "black",
    border: "1px solid rgb(255 255 255 / 0%)",
    borderRadius: "100%",
    backgroundColor: "rgb(255 255 255 / 20%)",
    transition: ".5s",
    "&:hover,&:focus": {
      border: "1px solid white",
      borderRadius: "100%",
      background: "white",
    },
  },
  modalClose: {
    width: "26px",
    height: "26px",
    padding: "4px",
  },
  modalBody: {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    position: "relative",
  },
  modalFooter: {
    padding: "15px",
    textAlign: "right",
    paddingTop: "0",
    margin: "0",
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    modal: {
      borderRadius: "6px",
    },
  },
};

export default virtualLoginModalStyle;
