import React, { useState, useEffect, useContext } from "react";

// material-ui core components
import { Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Core Components
import MuiButton from "@material-ui/core/Button";
import Button from "components/CustomButtons/Button.js";

// @material-ui/icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DownloadIcon from "@material-ui/icons/GetApp";

// My Custom Components
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import EventVideo from "components/CustomEvents/Virtual/components/EventVideo.js";
import Schedule from "components/CustomEvents/Virtual/components/Schedule.js";
import LoginModal from "components/CustomEvents/Virtual/components/Login/LoginModal.js";
import VirtualEventFooter from "components/CustomFooters/VirtualEventFooter.js";

// Context
import { AlertContext, virtualEventLoginId } from "contexts/AlertContext.js";

// My styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/miccosukee/events/virtualEventsStyle.js";

import { VirtualEventLoginFormProvider } from "contexts/VirtualEventLoginFormContext.js";

const useStyles = makeStyles(styles);

const VirtualEvent = (props) => {
  const classes = useStyles();
  const [alerts, setAlerts] = useContext(AlertContext);

  //const [isLoggedIn, setLogIn] = useState(false);
  // loginClick state used for Login component. If user clicks login they should go to email input render.
  const [loginButtonClicked, setLoginButtonClicked] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (!props.isLoggedIn) {
      setShowLoginModal(true);
    }
  }, []);

  // Reset snackbar state when component unmounts.
  useEffect(() => {
    return () => {
      setAlerts({
        ...alerts,
        [virtualEventLoginId]: false,
      });
    };
  }, []);

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const renderWelcome = () => {
    return (
      <div className={classes.welcomeSection}>
        <Typography component={"h2"} className={classes.welcome}>
          {props.welcomeMessage}
        </Typography>
      </div>
    );
  };

  const renderPurchaseButton = () => {
    return (
      <div className={classes.buttonSection}>
        <Button
          id="example-widget-trigger"
          type="button"
          dataautomation="ticket-modal-btn"
          datatrackinglabel="Tickets"
          className={classes.button}
          variant="contained"
        >
          <ShoppingCartIcon /> PURCHASE TICKETS
        </Button>
      </div>
    );
  };

  const loginClick = () => {
    setShowLoginModal(true);
    setLoginButtonClicked(true);
  };
  const renderLoginButton = () => {
    if (!props.isLoggedIn) {
      return (
        <div className={classes.loginButtonSection}>
          <MuiButton onClick={loginClick} className={classes.loginButton}>
            Login Here
          </MuiButton>
        </div>
      );
    }
  };

  const renderSchedule = () => {
    return (
      <div className={classes.subsection}>
        <Typography
          className={classes.subHeader}
          paragraph
          variant="h5"
          component="h3"
        >
          SCHEDULE
        </Typography>
        <Schedule events={props.events} />
      </div>
    );
  };

  const renderEvent = () => {
    return (
      <div className={classes.videoSection}>
        <EventVideo videos={props.events} />
      </div>
    );
  };

  const renderVendors = () => {
    return (
      <div className={classes.vendorsSection}>
        <div className={classes.subsection}>
          <Hidden smDown>
            <Typography
              className={classes.subHeader}
              paragraph
              variant="h5"
              component="h3"
            >
              VENDORS
            </Typography>
          </Hidden>
          {props.vendors.map((vendor) => {
            return (
              <Button
                key={vendor.name}
                target="_blank"
                href={vendor.link}
                style={{ width: "100%" }}
                variant="contained"
              >
                {vendor.name}
              </Button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderExtras = () => {
    return (
      <div className={classes.extrasSection}>
        {props.extras.map((extra) => {
          return (
            <div key={extra.title} className={classes.subsection}>
              <Typography
                className={classes.subHeader}
                paragraph
                variant="h5"
                component="h3"
              >
                {extra.title}
              </Typography>
              <p>{extra.text}</p>
              <MuiButton
                target="_blank"
                href={extra.link}
                className={classes.extrasButton}
              >
                <DownloadIcon className={classes.extrasButtonIcon} />{" "}
                {extra.linkText}
              </MuiButton>
            </div>
          );
        })}
      </div>
    );
  };

  const renderMobileView = () => {
    const renderHorizontalrule = () => {
      return (
        <hr
          style={{
            border: "none",
            color: "rgb(196, 196, 196)",
            backgroundColor: "rgb(196, 196, 196)",
            width: "40px",

            height: "1px",
            marginTop: "45px",
            marginBottom: "30px",
          }}
        />
      );
    };
    return (
      <div style={{ marginTop: "50px" }}>
        <CustomTabs
          headerColor="primary"
          variant="fullWidth"
          cardBodyStyle={{
            padding: "10px 15px 36px 15px",
          }}
          tabs={[
            {
              tabName: "Event",
              //tabIcon: Face,
              tabContent: (
                <React.Fragment>
                  {renderWelcome()}
                  {renderEvent()}
                  {renderPurchaseButton()}
                  {renderLoginButton()}
                  {renderHorizontalrule()}
                  {renderSchedule()}
                </React.Fragment>
              ),
            },
            {
              tabName: "Vendors",
              //tabIcon: Chat,
              tabContent: (
                <React.Fragment>
                  {renderWelcome()}
                  {renderVendors()}
                  {renderPurchaseButton()}
                  {renderLoginButton()}
                  {renderHorizontalrule()}
                  {renderSchedule()}
                </React.Fragment>
              ),
            },
            {
              tabName: "Extras",
              //tabIcon: Build,
              tabContent: (
                <React.Fragment>
                  {renderWelcome()}
                  {renderExtras()}
                  {renderPurchaseButton()}
                  {renderLoginButton()}
                  {renderHorizontalrule()}
                  {renderSchedule()}
                </React.Fragment>
              ),
            },
          ]}
        />
      </div>
    );
  };

  const renderDesktopView = () => {
    return (
      <RaisedContainer style={{ border: "1px solid pink" }}>
        <div style={{ padding: "40px 0" }}>
          {renderWelcome()}
          <Grid spacing={5} container>
            <Grid md={8} item>
              <EventVideo videos={props.events} />
              {renderPurchaseButton()}
              {renderLoginButton()}
            </Grid>
            <Grid md={4} item>
              {renderSchedule()}
              {renderVendors()}
              {renderExtras()}
            </Grid>
          </Grid>
        </div>
      </RaisedContainer>
    );
  };

  return (
    <React.Fragment>
      <VirtualEventLoginFormProvider>
        <LoginModal
          setLoginStatus={props.setLoggedIn}
          loginClicked={loginButtonClicked}
          closeModal={closeLoginModal}
          showLoginModal={showLoginModal}
          eventbriteID={props.eventbriteID}
        />
        <HeroSection sliderContent={props.sliderContent} />
        <Hidden mdUp>{renderMobileView()}</Hidden>
        <Hidden smDown>{renderDesktopView()}</Hidden>
        <VirtualEventFooter />
      </VirtualEventLoginFormProvider>
    </React.Fragment>
  );
};

export default VirtualEvent;
