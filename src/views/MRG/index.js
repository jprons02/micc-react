import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

// theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";

// my components
import MrgHeader from "./Components/Header.js";

// pages
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
        <MrgHeader props={props} />
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
        <Footer />
      </div>
    </ThemeProvider>
  );
}
