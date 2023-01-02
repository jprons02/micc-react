import React, { useEffect, useContext } from 'react';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//components
import Header from 'components/CustomHeaders/MiccosukeeHeader.js';
import PopupModal from 'components/CustomModal/CustomPopup/CustomPopupModal.js';
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';
import ReactHelmetComponent from 'components/ReactHelmet/ReactHelmetComponent';

// Context
import { PopupContext } from 'contexts/PopupContext.js';
import { MobileMenuDrawerContext } from 'contexts/MobileMenuDrawerContext.js';

//pages
import Home from './Pages/home';

//import MRG from "./Pages/mrg";
import GamingGolf from './Pages/gamingGolf';
import Everglades from './Pages/everglades';
import Events from './Pages/events';
import EventPage from './Pages/eventPage';
import HistoryAdmin from './Pages/historyAdmin';
import MiccosukeeErrorPage from 'views/Miccosukee/Pages/error/miccosukeeErrorPage.js';

// business variables
import { mrgBusinessInfo } from 'business_info/genericInfo.js';

// styles
import styles from 'assets/jss/material-kit-react/views/miccosukee/index.js';

// services
import { popupManager } from 'services/functions/popups/popupManager';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';
import { getMetaData } from 'services/functions/getMetaData.js';

// context
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import { useLanguage } from 'contexts/languageContext.js';

// images
import webBannerMobile from 'assets/media/img/miccosukee/WebHeaderMobile.jpg';
import webBanner from 'assets/media/img/miccosukee/WebHeaderDesktop.jpeg';

const useStyles = makeStyles(styles);

const Miccosukee = (props) => {
  const classes = useStyles();
  const language = useLanguage();

  let { path } = useRouteMatch();
  let location = useLocation();

  //rerouting is all done server level with nginx
  /*
  useEffect(() => {
    //All subdomains are pointed to miccosukee.com or .io
    let host = window.location.host;
    let protocol = window.location.protocol;
    let parts = host.split(".");
    let subdomain = parts.length > 2 ? parts[0] : null;

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
  }, []);
  */

  //const [showPopupModal, setShowPopupModal] = useContext(PopupContext);
  const [popupState, setPopupState] = useContext(PopupContext);
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );

  useEffect(() => {
    // simple reroute
    if (
      window.location.pathname === '/gaming-golf' ||
      window.location.pathname === '/gaming-golf/'
    ) {
      //mrg to mcr change
      props.history.push('/mcr');
    }

    // Closes mobile drawer any time location changes
    setMobileOpen(false);
    // Check if popup should be displayed after location change
    popupManager(setPopupState, popupState, location);
  }, [location]);

  const closeModal = (setState) => {
    setState(false);
  };

  return (
    <div>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <Header />
          {/*
          <div className={classes.webBannerDiv}>
            <a href="/artsandcrafts" target="_blank">
              <Hidden mdUp>
                {<img className={classes.webBannerImg} src={webBannerMobile} />}
              </Hidden>
              <Hidden smDown>
                {<img className={classes.webBannerImg} src={webBanner} />}
              </Hidden>
            </a>
          </div>
          */}
          <ReactHelmetComponent url={window.location.pathname} />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={`${path}gaming-golf`} component={GamingGolf} />
            <Route exact path={`${path}glades`} component={Everglades} />
            <Route exact path={`${path}events`} component={Events} />
            <Route
              exact
              path={`${path}events/:eventId`}
              component={EventPage}
            />
            <Route
              exact
              path={`${path}history-admin`}
              component={HistoryAdmin}
            />
            <Route exact path={`/404`} component={MiccosukeeErrorPage} />
            <Route exact path={`*`} component={MiccosukeeErrorPage} />
          </Switch>
          <PopupModal />
          <CustomContactModal
            language={language}
            showModal={showContactModal}
            closeModal={() => closeModal(setShowContactModal)}
            entity={{ name: 'media' }}
          />
        </div>
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
