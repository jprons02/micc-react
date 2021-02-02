import { container, primaryColor } from "assets/jss/material-kit-react.js";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important",
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
    },
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
  //custom joey
  expansionPanel: {
    border: "none",
    borderBottom: "1px solid #d1d1d1",
    borderRadius: "0px",
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expansionPanelHeader: {
    fontSize: "14px",
    fontWeight: "400",
  },
  expansionPanelHeaderIcon: {
    fontSize: "18px",
  },
  expansionPanelDetail: {
    padding: "16px",
    paddingTop: "0px",
  },
  expansionPanelDetailText: {
    fontSize: "12px",
    fontWeight: "500",
    textTransform: "uppercase",
    color: "#3a3a3a",
    "&:hover": {
      color: "black",
    },
  },
  titleDesktop: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "16px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    paddingRight: "0px",
  },
  listItemDesktop: {
    paddingTop: "4px",
    paddingBottom: "4px",
  },
  subMenuDesktop: {
    fontSize: "13px",
    fontWeight: "500",
    textTransform: "uppercase",
    color: "#5e5e5e",
    "&:hover": {
      color: "black",
    },
  },
  leftCustomDesktop: {
    float: "left!important",
    display: "block",
    width: "640px",
  },
  rightCustomDesktop: {
    padding: "0",
    margin: "0",
    float: "right!important",
  },
};
export default footerStyle;
