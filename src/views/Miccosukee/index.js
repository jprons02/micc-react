import React, { useEffect, useContext } from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

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

// styles
import styles from "assets/jss/material-kit-react/views/miccosukee/index.js";

// services
import { popupManager } from "services/popups/popupManager";

const useStyles = makeStyles(styles);

const Miccosukee = () => {
  const classes = useStyles();
  let { path } = useRouteMatch();
  let location = useLocation();

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
