import React, { useContext, useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  Link,
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// styles
import styles from 'assets/jss/material-kit-react/views/mrg/index.js';

// web banners
import webBanner from 'assets/media/img/mrg/banners/ResidentDiscount_Banner_Mobile.jpg';
import webBannerDesktop from 'assets/media/img/mrg/banners/ResidentDiscount_Banner_Desktop.jpg';

// Context
import { BookRoomProvider } from 'contexts/BookRoomContext.js';
import { PopupContext } from 'contexts/PopupContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import { MobileMenuDrawerContext } from 'contexts/MobileMenuDrawerContext.js';
import { useLanguage } from 'contexts/languageContext.js';

// Theme
import { theme } from '../../themes';
import { ThemeProvider } from '@material-ui/core/styles';

// My components
import MrgHeader from 'components/CustomHeaders/MrgHeader.js';
import MrgFooter from 'components/CustomFooters/MrgFooter.js';
import PopupModal from 'components/CustomModal/CustomPopup/CustomPopupModal.js';
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';
import StandardAlert from 'components/CustomAlert/CustomStandardAlert.js';
import ReactHelmetComponent from 'components/ReactHelmet/ReactHelmetComponent';

// Pages
import Home from 'views/MRG/Pages/home/home.js';
import Accommodations from 'views/MRG/Pages/accommodations/accommodations.js';
import SalonSpa from 'views/MRG/Pages/amenities/salon-spa/salonSpa.js';
import ClubEgret from 'views/MRG/Pages/amenities/club-egret/clubEgret.js';
import PoolGym from 'views/MRG/Pages/amenities/pool-gym/poolGym.js';
import TeenArcade from 'views/MRG/Pages/amenities/teen-arcade/teenArcade.js';
import GamingMachines from 'views/MRG/Pages/gaming/gamingMachines/gamingMachines.js';
import GamingPromos from 'views/MRG/Pages/gaming/gamingPromos/gamingPromos.js';
import MSphere from 'views/MRG/Pages/gaming/mSphere/mSphere.js';
import Bingo from 'views/MRG/Pages/gaming/bingo/bingo.js';
import Poker from 'views/MRG/Pages/gaming/poker/poker.js';
import B1Grill from 'views/MRG/Pages/diningNightlife/b1grill/b1Grill.js';
import InternationalBuffet from 'views/MRG/Pages/diningNightlife/international-buffet/internationalBuffet.js';
import Bravo from 'views/MRG/Pages/diningNightlife/bravo-bravissimo/bravoBravissimo.js';
import Deli from 'views/MRG/Pages/diningNightlife/deli/deli.js';
import CafeHammock from 'views/MRG/Pages/diningNightlife/cafe-hammock/cafeHammock.js';
import CypressLounge from 'views/MRG/Pages/diningNightlife/cypress-lounge/cypressLounge.js';
import MartiniBar from 'views/MRG/Pages/diningNightlife/martini-bar/martiniBar.js';
import Maxs from 'views/MRG/Pages/diningNightlife/maxs/maxs.js';
import MaxsGrabAndGo from './Pages/diningNightlife/maxs/maxsgrabandgo';
import BanquetsCatering from 'views/MRG/Pages/banquetsCatering/banquetsCatering.js';
import MrgEvents from 'views/MRG/Pages/events/mrgEvents.js';
import MrgEventPage from 'views/MRG/Pages/events/mrgEventPage';
import MrgCovidPage from 'views/MRG/Pages/business_info/mrgCovidPage.js';
import MrgErrorPage from 'views/MRG/Pages/error/mrgErrorPage.js';

// Business info
import { mrgBusinessInfo } from 'business_info/genericInfo.js';

// services
import { popupManager } from 'services/functions/popups/popupManager';
import { isRunning } from 'services/functions/scheduleThis';

const useStyles = makeStyles(styles);

export default function Miccosukee(props) {
  const language = useLanguage();
  let match = useRouteMatch();
  let location = useLocation();
  const classes = useStyles();

  const [popupState, setPopupState] = useContext(PopupContext);
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // popup modal is triggered in main index file so that when user navigates around website and then back to home page, it does not trigger again.
  useEffect(() => {
    popupManager(setPopupState, popupState, location);
  }, []);

  // Close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);

  //reroute
  useEffect(() => {
    //if regex is mrg or mrg/asdf then change url from /mrg to /mcr and then reload page
    const history = createBrowserHistory();
    const mrgRegex = /(\/mrg\/.)|(\/mrg)/i;
    if (mrgRegex.test(history.location.pathname)) {
      history.push(history.location.pathname.replace('mrg', 'mcr'));
      //window.location.reload();
    }

    //mrg to mcr change
    if (
      window.location.pathname === '/mrg/dining-nightlife' ||
      window.location.pathname === '/mrg/dining-nightlife/' ||
      window.location.pathname === '/mcr/dining-nightlife' ||
      window.location.pathname === '/mcr/dining-nightlife/'
    ) {
      props.history.push('/mcr');
    }
    if (
      window.location.pathname === '/mrg/gaming' ||
      window.location.pathname === '/mrg/gaming/' ||
      window.location.pathname === '/mcr/gaming' ||
      window.location.pathname === '/mcr/gaming/'
    ) {
      props.history.push('/mcr');
    }
    if (
      window.location.pathname === '/mrg/upcoming-events' ||
      window.location.pathname === '/mrg/upcoming-events/' ||
      window.location.pathname === '/mcr/upcoming-events' ||
      window.location.pathname === '/mcr/upcoming-events/'
    ) {
      props.history.push('/mcr/events');
    }
    if (
      window.location.pathname === '/mrg/covid-19' ||
      window.location.pathname === '/mrg/covid-19/' ||
      window.location.pathname === '/mcr/covid-19' ||
      window.location.pathname === '/mcr/covid-19/'
    ) {
      props.history.push('/mcr/info');
    }
    if (
      window.location.pathname ===
        '/mrg/event/american-indian-day-2020-09-28' ||
      window.location.pathname === '/mrg/event/american-indian-day-2020-09-28/'
    ) {
      props.history.push('/virtual-event/aid');
    }
    if (
      location.pathname === '/mrg/contact' ||
      location.pathname === '/mrg/contact/' ||
      location.pathname === '/mcr/contact' ||
      location.pathname === '/mcr/contact/'
    ) {
      props.history.push('/mcr');
      setShowContactModal(true);
    } /*else {
      closeModal(setShowContactModal);
    }*/
    if (
      location.pathname === '/mrg/signup' ||
      location.pathname === '/mrg/signup/' ||
      location.pathname === '/mcr/signup' ||
      location.pathname === '/mcr/signup/'
    ) {
      props.history.push('/mcr');
    }
  }, [props.history.location.pathname]);

  // show food menu on load if url matches.
  // close contact modal on mount if url does not match menu url.
  useEffect(() => {}, []);

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  //alert colors: success, warning, danger, info

  return (
    <ThemeProvider theme={theme('mrg')}>
      <BookRoomProvider>
        <div>
          <MrgHeader />
          <div className={classes.webBannerDiv}>
            <a href="tel:+13059252555" target="_blank">
              <Hidden mdUp>
                {<img className={classes.webBannerImg} src={webBanner} />}
              </Hidden>
              <Hidden smDown>
                {
                  <img
                    className={classes.webBannerImg}
                    src={webBannerDesktop}
                  />
                }
              </Hidden>
            </a>
          </div>
          <ReactHelmetComponent url={window.location.pathname} />
          {/*
            <StandardAlert
              message={
                <div id="alert1a">
                  {language ? (
                    <div>
                      <b>All gaming areas NOW OPEN 24/7!</b>
                      <p style={{ fontWeight: '400' }}>
                        Guests must be 18 or older to enter the building.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <b>¡Todas las áreas de juego ya están ABIERTAS 24/7!</b>
                      <p style={{ fontWeight: '400' }}>
                        Los invitados deben tener 18 años o más para entrar al
                        establecimiento.
                      </p>
                    </div>
                  )}
                </div>
              }
              close
              color="success"
              //icon="info_outline"
            />
            */}
          <Switch>
            <Route exact path={`${match.path}/`} component={Home} />
            <Route
              exact
              path={`${match.path}/accommodations`}
              component={Accommodations}
            />
            <Route
              exact
              path={`${match.path}/salon-spa`}
              component={SalonSpa}
            />
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
              path={`${match.path}/promotions/:month`}
              component={GamingPromos}
            />
            <Route
              exact
              path={`${match.path}/promotions/es`}
              component={GamingPromos}
            />
            <Route exact path={`${match.path}/msphere`} component={MSphere} />
            <Route exact path={`${match.path}/b1grill`} component={B1Grill} />
            <Route
              exact
              path={`${match.path}/b1grill-menu`}
              component={B1Grill}
            />
            <Route exact path={`${match.path}/maxs`} component={Maxs} />
            <Route
              exact
              path={`${match.path}/maxsgrabandgo`}
              component={MaxsGrabAndGo}
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
            <Route
              exact
              path={`${match.path}/banquets-catering`}
              component={BanquetsCatering}
            />
            <Route exact path={`${match.path}/events`} component={MrgEvents} />
            <Route
              exact
              path={`${match.path}/events/:eventId`}
              component={MrgEventPage}
            />
            {/* Old covid page. */}
            <Route exact path={`${match.path}/info`} component={MrgCovidPage} />
            <Route exact path={`/404`} component={MrgErrorPage} />
            <Route exact path={`${match.path}/*`} component={MrgErrorPage} />
          </Switch>
          <MrgFooter />
          <PopupModal />
          <CustomContactModal
            language={language}
            showModal={showContactModal}
            closeModal={() => closeModal(setShowContactModal)}
            entity={mrgBusinessInfo}
          />
        </div>
      </BookRoomProvider>
    </ThemeProvider>
  );
}

/**
 * Idea for promotion month specific urls...
 * /win take you to current month
 * /promotions take you to current month
 * /promotions#december take you to specified month but to prevent error, if image doesnt exist use current month
 */

/* 
Coming Soon! New 24/7 Smoking Casino opening on Friday, May 20 at 9 AM.

¡Próximamente! Nuevo Casino para Fumadores abriendo 24/7 a partir del viernes, 20 de mayo a las 9 AM.

Now Open! New 24/7 Smoking Casino, located next to the Miccosukee One Player’s Club.

¡Ya Abierto! Nuevo Casino para Fumadores abierto 24/7, ubicado al lado del Miccosukee One Player’s Club.
*/
