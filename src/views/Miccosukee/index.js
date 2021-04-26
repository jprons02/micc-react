import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//components
import Header from "components/CustomHeaders/MiccosukeeHeader.js";
//pages
import Home from "./Pages/home";
//import MRG from "./Pages/mrg";
import GamingGolf from "./Pages/gamingGolf";
import Everglades from "./Pages/everglades";
import Events from "./Pages/events";
import EventPage from "./Pages/eventPage";
import HistoryAdmin from "./Pages/historyAdmin";

import styles from "assets/jss/material-kit-react/views/miccosukee/index.js";

const useStyles = makeStyles(styles);

const Miccosukee = () => {
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  return (
    <div className={classNames(classes.main)}>
      <div className={classes.container}>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={`${path}gaming-golf`} component={GamingGolf} />
          <Route exact path={`${path}glades`} component={Everglades} />
          <Route exact path={`${path}events`} component={Events} />
          <Route exact path={`${path}events/:eventId`} component={EventPage} />
          <Route exact path={`${path}history-admin`} component={HistoryAdmin} />
        </Switch>
      </div>
    </div>
  );
};

export default Miccosukee;
