import React, { useState, useEffect } from "react";
// material-ui core components
import { Hidden } from "@material-ui/core";
//import Button from "@material-ui/core/Button";
import Button from "components/CustomButtons/Button.js";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
//import GridContainer from "components/Grid/GridContainer.js";
//import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import { withStyles, makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

// My Custom Component
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer";
import CustomEventVideo from "components/CustomEventVideo/CustomEventVideo.js";
import CustomVirtualEventSchedule from "components/Testing/CustomVirtualEventSchedule.js";
// My styles
import styles from "assets/jss/material-kit-react/views/miccosukee/events/virtualEventsStyle.js";
// My content
import beesVid from "assets/event/bees.mp4";
import birdsVid from "assets/event/birds.mp4";
import weatherVid from "assets/event/weather.mp4";

import image1 from "assets/img/bg.jpg";

const useStyles = makeStyles(styles);

const VirtualEvent = () => {
  const classes = useStyles();
  // Set order of videos young to old for logic to work
  const events = [
    {
      key: "bees",
      poster: image1,
      source: beesVid,
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 12,
        minutes: 28,
      },
    },
    {
      key: "birds",
      poster: image1,
      source: birdsVid,
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 12,
        minutes: 27,
      },
    },
    {
      key: "weather",
      poster: image1,
      source: weatherVid,
      releaseTime: {
        year: 2021,
        month: 3,
        day: 18,
        hour: 11,
        minutes: 24,
      },
    },
  ];

  const sliderContent = [
    {
      id: 1,
      height: "40vh",
      bgImage: "",
      header: "AMERICAN INDIAN DAY",
      subHeader:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
  ];

  const renderWelcome = () => {
    return (
      <div className={classes.welcomeSection}>
        <Typography component={"h2"} className={classes.welcome}>
          Welcome to American Indian Day, we hope you enjoy your stay!
        </Typography>
      </div>
    );
  };

  const renderPurchaseButton = () => {
    return (
      <div className={classes.buttonSection}>
        <Button className={classes.button} variant="contained">
          <ShoppingCartIcon /> PURCHASE TICKETS
        </Button>
      </div>
    );
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
        <CustomVirtualEventSchedule events={events} />
      </div>
    );
  };

  const renderEvent = () => {
    return (
      <div className={classes.subsection}>
        <CustomEventVideo videos={events} />
      </div>
    );
  };

  const renderVendors = () => {
    return (
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
        <button>VENDOR 1</button>
      </div>
    );
  };

  const renderExtras = () => {
    return (
      <div className={classes.subsection}>
        <Hidden smDown>
          <Typography
            className={classes.subHeader}
            paragraph
            variant="h5"
            component="h3"
          >
            EXTRAS
          </Typography>
        </Hidden>
        <p>
          I think that’s a responsibility that I have, to push possibilities, to
          show people, this is the level that things could be at. I will be the
          leader of a company that ends up being worth billions of dollars,
          because I got the answers. I understand culture. I am the nucleus. I
          think that’s a responsibility that I have, to push possibilities, to
          show people, this is the level that things could be at.
        </p>
      </div>
    );
  };

  const renderMobileView = () => {
    return (
      <div style={{ marginTop: "50px" }}>
        <CustomTabs
          headerColor="primary"
          variant="fullWidth"
          cardBodyStyle={{ padding: "10px 15px 36px 15px" }}
          tabs={[
            {
              tabName: "Event",
              //tabIcon: Face,
              tabContent: (
                <React.Fragment>
                  {renderWelcome()}
                  {renderEvent()}
                  {renderPurchaseButton()}
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
              <CustomEventVideo videos={events} />
              {renderPurchaseButton()}
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
      <HeroSection sliderContent={sliderContent} />
      <Hidden mdUp>{renderMobileView()}</Hidden>
      <Hidden smDown>{renderDesktopView()}</Hidden>
    </React.Fragment>
  );
};

export default VirtualEvent;

//<Divider orientation="vertical" flexItem />
