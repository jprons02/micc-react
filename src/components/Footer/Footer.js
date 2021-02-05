/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

import FooterExpansionPanel from "components/CustomExpansionPanel/FooterExpansionPanel.js";
import FooterMockExpansionPanel from "components/CustomExpansionPanel/FooterMockExpansionPanel.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";
import emblem from "assets/img/miccosukee/MiccosukeeEmblem_Color.svg";
import CustomFooterModal from "components/CustomModal/CustomFooterModals/CustomFooterModal.js";

//test
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import SignUpForm from "components/CustomForms/Signup.js";
import CustomInput from "components/Footer/Components/CustomTextField.js";
import DesktopFooter from "components/Footer/Components/DesktopFooter.js";
import MobileFooter from "components/Footer/Components/MobileFooter.js";
import DemoFooter from "components/Footer/Components/DemoFooter.js";

import {
  useLanguage,
  useLanguageUpdate,
} from "../../context/languageContext.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const [modal, setModal] = useState(false);

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const classes = useStyles();
  //const { whiteFont } = props;

  const footerClasses = classNames({
    [classes.footer]: true,
  });

  /*
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  */

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  if (!props.footerMenuItems) {
    return <DemoFooter />;
  } else {
    return (
      <footer className={footerClasses}>
        <div className={classes.container}>
          <Hidden smDown>
            <DesktopFooter
              footerMenuItems={props.footerMenuItems}
              color={props.color}
              onSubscribe={openModal}
              modal={modal}
              closeModal={closeModal}
              entity={props.signup}
            />
          </Hidden>
          <Hidden mdUp>
            <MobileFooter
              footerMenuItems={props.footerMenuItems}
              color={props.color}
              handleMobileSubscribeClick={openModal}
              modal={modal}
              closeModal={closeModal}
              entity={props.signup}
            />
          </Hidden>
          <div style={{ paddingBottom: "10px" }}>
            <div style={{ fontSize: "10px" }} className={classes.left}>
              <img
                style={{ width: "16px" }}
                alt="miccosukee emblem"
                src={emblem}
              />{" "}
              Copyright &copy; {1900 + new Date().getYear()}
            </div>
            <div style={{ padding: "0px" }} className={classes.right}>
              <Badge widthProp={"70px"} onClick={toggleLanguage} color="danger">
                {language ? "español" : "english"}
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
