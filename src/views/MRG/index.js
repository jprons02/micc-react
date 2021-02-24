import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

// Theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";

// My components
import MrgHeader from "./Components/MrgHeader.js";
import MrgFooter from "./Components/MrgFooter.js";

// Pages
import Home from "views/MRG/Pages/home.js";
import Accommodations from "views/MRG/Pages/accommodations.js";
import Amenities from "views/MRG/Pages/amenities.js";
import Gaming from "views/MRG/Pages/gaming.js";
import DiningNightlife from "views/MRG/Pages/diningNightlife.js";
import Events from "views/MRG/Pages/events.js";
import Contact from "views/MRG/Pages/contact.js";

const useStyles = makeStyles(styles);

export default function Miccosukee(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  let match = useRouteMatch();

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <ThemeProvider theme={theme("mrg")}>
      <div>
        <MrgHeader />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <Switch>
                <Route exact path={`${match.path}/`} component={Home} />
                <Route
                  exact
                  path={`${match.path}/accommodations`}
                  component={Accommodations}
                />
                <Route
                  exact
                  path={`${match.path}/amenities`}
                  component={Amenities}
                />
                <Route exact path={`${match.path}/gaming`} component={Gaming} />
                <Route
                  exact
                  path={`${match.path}/dining-nightlife`}
                  component={DiningNightlife}
                />
                <Route exact path={`${match.path}/events`} component={Events} />
                <Route
                  exact
                  path={`${match.path}/contact`}
                  component={Contact}
                />
              </Switch>
            </div>
          </div>
        </div>
        <MrgFooter />
      </div>
    </ThemeProvider>
  );
}
