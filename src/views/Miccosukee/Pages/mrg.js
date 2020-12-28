import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import { Icon } from "@material-ui/core";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/miccosukee/pages/mrg.js";

const useStyles = makeStyles(styles);

const MRG = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <GridContainer style={{ height: "100%" }}>
        <GridItem className={classes.mrgBG} sm={12} md={6}>
          <div className={classes.container}>
            <div className={classes.innerContainer}>
              <h1 className={classes.header}>RESORT &amp; GAMING</h1>
              <p className={classes.description}>
                Located in the heart of the Everglades, Miccosukee Resort &amp;
                Gaming is home to South Florida’s original gaming and all-around
                entertainment emporium. With non-stop gaming thrills and the
                highest payouts in town, there is something for everyone. Come
                for the gaming, stay for the fun!
              </p>
              <div className={classes.buttonGroup}>
                <Button
                  className={classes.backButton}
                  color="white"
                  onClick={() => props.click("/")}
                >
                  BACK
                </Button>
                <Button className={classes.button} color="primary">
                  VISIT WEBSITE
                </Button>
              </div>
            </div>
          </div>
        </GridItem>
        <GridItem className={classes.golfBG} sm={12} md={6}>
          <div className={classes.container}>
            <div className={classes.innerContainer}>
              <h1 className={classes.header}>GOLF &amp; COUNTRY CLUB</h1>
              <p className={classes.description}>
                The Miccosukee Golf &amp; Country Club has hosted many LPGA and
                PGA events, including the Miccosukee Championship. In the heart
                of Kendall, this Mark Mahannah-designed masterpiece is
                considered by many to have the best layout in South Florida.
              </p>
              <div className={classes.buttonGroup}>
                <Button
                  className={classes.backButton}
                  color="white"
                  onClick={() => props.click("/")}
                >
                  BACK
                </Button>
                <Button className={classes.backButton} color="white">
                  VISIT WEBSITE
                </Button>
              </div>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default MRG;

//ICON EXAMPLE
//<Icon>arrow_back_ios</Icon>GO BACK
