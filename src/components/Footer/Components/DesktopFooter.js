/*eslint-disable*/
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// material-ui core components
import { ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// Custom Components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import CustomInput from "components/Footer/Components/CustomTextField.js";
import CustomFooterModal from "components/CustomModal/CustomFooterModals/CustomFooterModal.js";

// CSS
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

// Context
import { SignupFormContext } from "contexts/SignupFormContext.js";

// Custom Functions
import { inputErrorsExist } from "services/signupFucntion.js";

const useStyles = makeStyles(styles);

const DesktopFooter = (props) => {
  const [formValues, setFormValues] = useContext(SignupFormContext);

  const classes = useStyles();

  // Close modal on component mount.
  useEffect(() => {
    props.closeModal();
  }, []);

  // Render desktop view
  const renderDesktopFooter = () => {
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

    // Render desktop accordions
    const renderDesktopMenu = () => {
      return props.footerMenuItems.map((section) => {
        if (section.action) {
          return (
            <GridItem
              key={section.headerDesktop}
              style={{ padding: "0" }}
              md={6}
            >
              <Typography className={classes.titleDesktop}>
                {section.headerDesktop}
              </Typography>
              <ListItem
                style={{
                  paddingBottom: "0px",
                }}
                className={classes.listItemDesktop}
              >
                <CustomInput
                  name="name"
                  id="name-desktop"
                  label="Name"
                  style={{
                    margin: 8,
                    marginLeft: "0px",
                  }}
                  fullWidth={true}
                />
              </ListItem>
              <ListItem
                style={{
                  paddingBottom: "0px",
                  paddingTop: "0px",
                }}
                className={classes.listItemDesktop}
              >
                <CustomInput
                  name="email"
                  id="email-desktop"
                  label="Email"
                  style={{
                    margin: 8,
                    marginLeft: "0px",
                  }}
                  fullWidth={true}
                />
              </ListItem>
              <ListItem
                style={{
                  paddingBottom: "0px",
                  paddingTop: "0px",
                }}
                className={classes.listItemDesktop}
              >
                <Button
                  disabled={inputErrorsExist(
                    formValues.inputValues.nameError,
                    formValues.inputValues.emailError
                  )}
                  style={{
                    margin: "8px 8px 8px 0",
                  }}
                  fullWidth
                  onClick={props.onSubscribe}
                  usetheme="true"
                >
                  SUBSCRIBE
                </Button>
              </ListItem>
            </GridItem>
          );
        } else {
          return (
            <GridItem key={section.header} style={{ padding: "0" }} md={2}>
              <Typography className={classes.titleDesktop}>
                {section.header}
              </Typography>
              {renderDesktopFooterSubMenu(section.subMenu) || "Testing"}
            </GridItem>
          );
        }
      });
    };

    return (
      <GridContainer style={{ textAlign: "left" }}>
        {renderDesktopMenu()}
      </GridContainer>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "20px",
      }}
    >
      {renderDesktopFooter()}
      <CustomFooterModal
        color={props.color}
        isDesktop={true}
        modal={props.modal}
        closeModal={props.closeModal}
        entity={props.entity}
      />
    </div>
  );
};

export default DesktopFooter;
