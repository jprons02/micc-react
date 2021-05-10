import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//components
import Header from "components/CustomHeaders/MiccosukeeHeader.js";
import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";

// Context
import { PopupContext } from "contexts/PopupContext.js";

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
  let location = useLocation();

  const [showPopupModal, setShowPopupModal] = useContext(PopupContext);

  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => {
        setShowPopupModal(true);
      }, 700);
    }
  }, []);

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
        <PopupModal
          website="miccosukee"
          showModal={showPopupModal}
          closeModal={() => setShowPopupModal(false)}
        />
      </div>
    </div>
  );
};

export default Miccosukee;
