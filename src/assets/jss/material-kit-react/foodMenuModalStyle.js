const pricingModalStyle = {
  modal: {
    borderRadius: "6px",
  },
  desktopModal: {
    borderRadius: "6px",
    minWidth: "500px",
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
    color: "#999999",
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
  },
  modalClose: {
    width: "16px",
    height: "16px",
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
  card: {
    width: "350px",
  },
  priceSection: {
    padding: "15px 0",
  },
  pricingTitle: {
    fontSize: "30px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "400",
  },
  detail: {
    fontSize: "16px",
  },
  disclaimer: {
    fontStyle: "italic",
    fontSize: "12px",
  },
  //DESKTOP VIEW
  "@media screen and (min-width: 960px)": {
    modal: {
      maxWidth: "900px",
      maxHeight: "800px",
    },
  },
};

export default pricingModalStyle;
