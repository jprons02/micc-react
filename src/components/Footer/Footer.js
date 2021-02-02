/*eslint-disable*/
import React from "react";
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

//test
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import SignUpForm from "components/CustomForms/Signup.js";

import {
  useLanguage,
  useLanguageUpdate,
} from "../../context/languageContext.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const renderDesktopFooterSubMenu = (footerSection) => {
    return footerSection.map((item) => {
      return (
        <ListItem key={item.linkText} className={classes.listItemDesktop}>
          <Link to={item.linkTo}>
            <Typography className={classes.subMenuDesktop}>
              {item.linkText}
            </Typography>
          </Link>
        </ListItem>
      );
    });
  };

  const renderDesktopFooter = () => {
    return (
      <GridContainer style={{ textAlign: "left" }}>
        <GridItem style={{ padding: "0" }} md={2}>
          <Typography className={classes.titleDesktop}>
            {props.header1}
          </Typography>
          {renderDesktopFooterSubMenu(props.headersubmenu1) || "Testing"}
        </GridItem>
        <GridItem style={{ padding: "0" }} md={2}>
          <Typography className={classes.titleDesktop}>
            {props.header2}
          </Typography>
          {renderDesktopFooterSubMenu(props.headersubmenu2) || "Testing"}
        </GridItem>
        <GridItem style={{ padding: "0" }} md={2}>
          <Typography className={classes.titleDesktop}>
            {props.header3}
          </Typography>
          {renderDesktopFooterSubMenu(props.headersubmenu3) || "Testing"}
        </GridItem>
        <GridItem style={{ padding: "0" }} md={6}>
          <Typography className={classes.titleDesktop}>
            {props.header4Desktop}
          </Typography>
          <ListItem className={classes.listItemDesktop}>
            <SignUpForm
              entity={props.signup}
              formView="desktop"
              color={props.color}
            />
          </ListItem>
        </GridItem>
      </GridContainer>
    );
  };

  const renderMobileFooter = () => {
    return (
      <List className={classes.list}>
        <ListItem style={{ padding: "0px" }}>
          <FooterExpansionPanel
            header={props.header1}
            subMenu={props.headersubmenu1}
          />
        </ListItem>
        <ListItem style={{ padding: "0px" }}>
          <FooterExpansionPanel
            header={props.header2}
            subMenu={props.headersubmenu2}
          />
        </ListItem>
        <ListItem style={{ padding: "0px" }}>
          <FooterExpansionPanel
            header={props.header3}
            subMenu={props.headersubmenu3}
          />
        </ListItem>
        <ListItem style={{ padding: "0px" }}>
          <FooterMockExpansionPanel
            header={props.header4}
            buttonClick={props.header4onclick || null}
          />
        </ListItem>
      </List>
    );
  };

  const renderDemoFooter = () => {
    return (
      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.creative-tim.com/?ref=mkr-footer"
                  className={classes.block}
                  target="_blank"
                >
                  Creative Tim
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.creative-tim.com/presentation?ref=mkr-footer"
                  className={classes.block}
                  target="_blank"
                >
                  About us
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="http://blog.creative-tim.com/?ref=mkr-footer"
                  className={classes.block}
                  target="_blank"
                >
                  Blog
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.creative-tim.com/license?ref=mkr-footer"
                  className={classes.block}
                  target="_blank"
                >
                  Licenses
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            <a
              href="https://www.creative-tim.com?ref=mkr-footer"
              className={aClasses}
              target="_blank"
            >
              Creative Tim
            </a>{" "}
            for a better web.
          </div>
        </div>
      </footer>
    );
  };

  if (!props.header1) {
    return renderDemoFooter();
  } else {
    return (
      <footer className={footerClasses}>
        <div className={classes.container}>
          <Hidden smDown>
            <div
              style={{
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <div>{renderDesktopFooter()}</div>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div>{renderMobileFooter()}</div>
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

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};

/*
DESKTOP:

<Hidden smDown>
            <div
              style={{
                height: "100%",
                width: "100%",
                marginBottom: "45px",
              }}
            >
              <div className={classes.leftCustomDesktop}>
                {renderDesktopFooter()}
              </div>
              <div className={classes.rightCustomDesktop}>
                <Typography className={classes.titleDesktop}>
                  {props.header4Desktop}
                </Typography>
                <ListItem className={classes.listItemDesktop}>
                  <SignUpForm />
                </ListItem>
              </div>
            </div>
          </Hidden>
*/
