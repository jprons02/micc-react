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
import MrgHeader from "components/CustomHeaders/MrgHeader.js";
import MrgFooter from "components/CustomFooters/MrgFooter.js";

// Pages
import Home from "views/MRG/Pages/home/home.js";
import Accommodations from "views/MRG/Pages/accommodations/accommodations.js";
import Amenities from "views/MRG/Pages/amenities/amenities.js";
import Gaming from "views/MRG/Pages/gaming/gaming.js";
import GamingPromos from "views/MRG/Pages/gaming/gamingPromos/gamingPromos.js";
import DiningNightlife from "views/MRG/Pages/diningNightlife/diningNightlife.js";
import Events from "views/MRG/Pages/events/events.js";
import AidEvent from "views/MRG/Pages/events/virtual/21_americanIndianDay.js";
import Contact from "views/MRG/Pages/contact/contact.js";

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
        <Switch>
          <Route exact path={`${match.path}/`} component={Home} />
          <Route
            exact
            path={`${match.path}/accommodations`}
            component={Accommodations}
          />
          <Route exact path={`${match.path}/amenities`} component={Amenities} />
          <Route exact path={`${match.path}/gaming`} component={Gaming} />
          <Route
            exact
            path={`${match.path}/promotions`}
            component={GamingPromos}
          />
          <Route
            exact
            path={`${match.path}/dining-nightlife`}
            component={DiningNightlife}
          />
          <Route exact path={`${match.path}/events`} component={Events} />
          <Route
            exact
            path={`${match.path}/events/virtualevent`}
            component={AidEvent}
          />
          <Route exact path={`${match.path}/contact`} component={Contact} />
        </Switch>
        <MrgFooter />
      </div>
    </ThemeProvider>
  );
}
