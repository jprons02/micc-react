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
import SalonSpa from "views/MRG/Pages/amenities/salon-spa/salonSpa.js";
import ClubEgret from "views/MRG/Pages/amenities/club-egret/clubEgret.js";
import PoolGym from "views/MRG/Pages/amenities/pool-gym/poolGym.js";
import TeenArcade from "views/MRG/Pages/amenities/teen-arcade/teenArcade.js";
import GamingMachines from "views/MRG/Pages/gaming/gamingMachines/gamingMachines.js";
import GamingPromos from "views/MRG/Pages/gaming/gamingPromos/gamingPromos.js";
import OneRewards from "views/MRG/Pages/gaming/oneRewards/oneRewards.js";
import Bingo from "views/MRG/Pages/gaming/bingo/bingo.js";
import Poker from "views/MRG/Pages/gaming/poker/poker.js";
import InternationalBuffet from "views/MRG/Pages/diningNightlife/international-buffet/internationalBuffet.js";
import Bravo from "views/MRG/Pages/diningNightlife/bravo-bravissimo/bravoBravissimo.js";
import Deli from "views/MRG/Pages/diningNightlife/deli/deli.js";
import CafeHammock from "views/MRG/Pages/diningNightlife/cafe-hammock/cafeHammock.js";
import CypressLounge from "views/MRG/Pages/diningNightlife/cypress-lounge/cypressLounge.js";
import MartiniBar from "views/MRG/Pages/diningNightlife/martini-bar/martiniBar.js";
import Events from "views/MRG/Pages/events/events.js";
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
          <Route exact path={`${match.path}/salon-spa`} component={SalonSpa} />
          <Route
            exact
            path={`${match.path}/club-egret`}
            component={ClubEgret}
          />
          <Route exact path={`${match.path}/pool-gym`} component={PoolGym} />
          <Route
            exact
            path={`${match.path}/teen-arcade`}
            component={TeenArcade}
          />
          <Route
            exact
            path={`${match.path}/gaming-machines`}
            component={GamingMachines}
          />
          <Route exact path={`${match.path}/bingo`} component={Bingo} />
          <Route exact path={`${match.path}/poker`} component={Poker} />
          <Route
            exact
            path={`${match.path}/promotions`}
            component={GamingPromos}
          />
          <Route
            exact
            path={`${match.path}/miccosukee-one`}
            component={OneRewards}
          />
          <Route
            exact
            path={`${match.path}/bravo-bravissimo`}
            component={Bravo}
          />
          <Route
            exact
            path={`${match.path}/international-buffet`}
            component={InternationalBuffet}
          />
          <Route exact path={`${match.path}/deli`} component={Deli} />
          <Route
            exact
            path={`${match.path}/cafe-hammock`}
            component={CafeHammock}
          />
          <Route
            exact
            path={`${match.path}/cypress-lounge`}
            component={CypressLounge}
          />
          <Route
            exact
            path={`${match.path}/martini-bar`}
            component={MartiniBar}
          />
          <Route exact path={`${match.path}/events`} component={Events} />
          <Route exact path={`${match.path}/contact`} component={Contact} />
        </Switch>
        <MrgFooter />
      </div>
    </ThemeProvider>
  );
}
