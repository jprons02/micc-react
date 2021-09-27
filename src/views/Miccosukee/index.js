import React, { useEffect, useContext } from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//components
import Header from "components/CustomHeaders/MiccosukeeHeader.js";
import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";

// Context
import { PopupContext } from "contexts/PopupContext.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";

//pages
import Home from "./Pages/home";

//import MRG from "./Pages/mrg";
import GamingGolf from "./Pages/gamingGolf";
import Everglades from "./Pages/everglades";
import Events from "./Pages/events";
import EventPage from "./Pages/eventPage";
import HistoryAdmin from "./Pages/historyAdmin";
import MiccosukeeErrorPage from "views/Miccosukee/Pages/error/miccosukeeErrorPage.js";

// business variables
import { mrgBusinessInfo } from "business_info/genericInfo.js";

// styles
import styles from "assets/jss/material-kit-react/views/miccosukee/index.js";

// services
import { popupManager } from "services/functions/popups/popupManager";
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const Miccosukee = (props) => {
  const classes = useStyles();
  let { path } = useRouteMatch();
  let location = useLocation();

  //rerouting
  useEffect(() => {
    //All subdomains are pointed to miccosukee.com or .io
    let host = window.location.host;
    let protocol = window.location.protocol;
    let parts = host.split(".");
    let subdomain = parts.length > 2 ? parts[0] : null;

    if (parseInt(parts[0]) === NaN) {
      if (parts[0] === "www") {
        parts.splice(0, 1);
      }
      // If we get more than 2 parts, then we have a subdomain
      if (parts.length > 2) {
        // Remove the subdomain from the parts list
        parts.splice(0, 1);
        // Set the location to the new url
        window.location =
          protocol +
          "//" +
          "www." +
          parts.join(".") +
          "/" +
          subdomain +
          location.pathname;
      }
      if (
        window.location.pathname === "/win" ||
        window.location.pathname === "/win/"
      ) {
        props.history.push("/mrg/promotions");
      }
      if (
        window.location.pathname === "/win/es" ||
        window.location.pathname === "/win/es/"
      ) {
        props.history.push("/mrg/promotions/es");
      }
      if (
        window.location.pathname === "/tribe" ||
        window.location.pathname === "/tribe/"
      ) {
        props.history.push("/history");
      }
      if (
        window.location.pathname === "/adp-job-board" ||
        window.location.pathname === "/adp-job-board/"
      ) {
        props.history.push("/careers");
      }
      if (
        window.location.pathname === "/careers" ||
        window.location.pathname === "/careers/"
      ) {
        props.history.push("/mrg");
        window.location.href = mrgBusinessInfo.careersLink;
      }
    }
  }, []);

  //const [showPopupModal, setShowPopupModal] = useContext(PopupContext);
  const [popupState, setPopupState] = useContext(PopupContext);
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);

  useEffect(() => {
    // Closes mobile drawer any time location changes
    setMobileOpen(false);
    // Check if popup should be displayed after location change
    popupManager(setPopupState, popupState, location);
  }, [location]);

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
          <Route exact path={`/404`} component={MiccosukeeErrorPage} />
          <Route exact path={`*`} component={MiccosukeeErrorPage} />
        </Switch>
        <PopupModal />
      </div>
    </div>
  );
};

export default Miccosukee;

/*
<PopupModal
  popupState={
    popupState.miccosukeePopup ? popupState.miccosukeePopup : ""
  }
  closeModal={() =>
    setPopupState({
      ...popupState,
      miccosukeePopup: {
        ...popupState.miccosukeePopup,
        showPopup: false,
      },
    })
  }
/>
*/

/*
<PopupModal
  website="miccosukee"
  showModal={showPopupModal}
  closeModal={() => setShowPopupModal(false)}
/>
*/
