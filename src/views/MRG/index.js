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
import News from 'views/MRG/Pages/news/news.js';
import Vendors from 'views/MRG/Pages/vendors/vendors.js';
import NewsPage from 'views/MRG/Pages/news/newsPage.js';
import Meetings from 'views/MRG/Pages/meetings/meetings.js';
import Weddings from 'views/MRG/Pages/meetings/weddings';
import Banquets from 'views/MRG/Pages/meetings/banquets';
import CorporateRetreats from 'views/MRG/Pages/meetings/corporate-retreats';
import Accommodations from 'views/MRG/Pages/accommodations/accommodations.js';
import Experiences from 'views/MRG/Pages/experiences/experiences.js';
import SalonSpa from 'views/MRG/Pages/amenities/salon-spa/salonSpa.js';
import ClubEgret from 'views/MRG/Pages/amenities/club-egret/clubEgret.js';
import PoolGym from 'views/MRG/Pages/amenities/pool-gym/poolGym.js';
import TeenArcade from 'views/MRG/Pages/amenities/teen-arcade/teenArcade.js';
import GamingMachines from 'views/MRG/Pages/gaming/gamingMachines/gamingMachines.js';
import GamingPromosPage from 'views/MRG/Pages/gaming/gamingPromos/gamingPromosPage2.js';
import MSphere from 'views/MRG/Pages/gaming/mSphere/mSphere.js';
import Bingo from 'views/MRG/Pages/gaming/bingo/bingo.js';
import Poker from 'views/MRG/Pages/gaming/poker/poker.js';
import Hosts from 'views/MRG/Pages/gaming/hosts/hosts.js';
import B1Grill from 'views/MRG/Pages/diningNightlife/b1grill/b1Grill.js';
import Buffet from 'views/MRG/Pages/diningNightlife/buffet/buffet.js';
import Bravo from 'views/MRG/Pages/diningNightlife/bravo-bravissimo/bravoBravissimo.js';
import Deli from 'views/MRG/Pages/diningNightlife/deli/deli.js';
import CafeHammock from 'views/MRG/Pages/diningNightlife/cafe-hammock/cafeHammock.js';
import CypressLounge from 'views/MRG/Pages/diningNightlife/cypress-lounge/cypressLounge.js';
import MartiniBar from 'views/MRG/Pages/diningNightlife/martini-bar/martiniBar.js';
import TemptLounge from 'views/MRG/Pages/diningNightlife/tempt-lounge/temptLounge.js';
import Maxs from 'views/MRG/Pages/diningNightlife/maxs/maxs.js';
import MaxsGrabAndGo from './Pages/diningNightlife/maxs/maxsgrabandgo';
import BanquetsCatering from 'views/MRG/Pages/banquetsCatering/banquetsCatering.js';
import MrgEvents from 'views/MRG/Pages/events/mrgEvents.js';
import MrgEventPage from 'views/MRG/Pages/events/mrgEventPage';
import McrInfoPage from 'views/MRG/Pages/business_info/mrgCovidPage.js';
import McrErrorPage from 'views/MRG/Pages/error/mrgErrorPage.js';

// Landing Pages
import Tomahawk from 'views/LandingPages/tomahawk.js';
import ResortPackages from 'views/LandingPages/resortPackages.js';
import Amenities from 'views/LandingPages/amenities.js';
import Aid from 'views/LandingPages/aid.js';
import HolidayCards from 'views/LandingPages/community/holidayCards/index.js';
import ArtsAndCrafts from 'views/LandingPages/artsandcrafts.js';
import Valet from 'views/LandingPages/valet.js';

// Properties
import Golf from 'views/Golf';
import Village from 'views/Village';
import Airboats from 'views/Airboats';
//import History from 'views/History';
import Administration from 'views/Administration';

import TribeHistory from 'views/MRG/Pages/tribe/tribeHistory.js';
import TribeAdministration from 'views/MRG/Pages/tribe/tribeAdministration.js';

// Business info
import { mrgBusinessInfo } from 'business_info/genericInfo.js';

// services
import { popupManager } from 'services/functions/popups/popupManager';
import { isRunning } from 'services/functions/scheduleThis';
import { is } from 'date-fns/locale';

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

    //mrg to mcr change and redirections.
    if (
      window.location.pathname === '/mrg/miccosukee-one' ||
      window.location.pathname === '/mrg/miccosukee-one/' ||
      window.location.pathname === '/mcr/miccosukee-one' ||
      window.location.pathname === '/mcr/miccosukee-one/'
    ) {
      props.history.push('/mcr/msphere');
    }
    if (
      window.location.pathname === '/mrg/info' ||
      window.location.pathname === '/mrg/info/' ||
      window.location.pathname === '/mcr/info' ||
      window.location.pathname === '/mcr/info/' ||
      window.location.pathname === '/info' ||
      window.location.pathname === '/info/'
    ) {
      props.history.push('/about-us');
    }
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

  const villageRegex = /\/village(\/.*)?/i;
  const isVillage = villageRegex.test(location.pathname);

  const airboatsRegex = /\/airboats(\/.*)?/i;
  const isAirboats = airboatsRegex.test(location.pathname);

  const renderHeader = () => {
    if (isVillage || isAirboats) {
      return null;
    } else {
      return <MrgHeader />;
    }
  };

  const renderFooter = () => {
    if (isVillage || isAirboats) {
      return null;
    } else {
      return <MrgFooter />;
    }
  };

  return (
    <ThemeProvider theme={theme('mrg')}>
      <BookRoomProvider>
        <div>
          {renderHeader()}
          {/*
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
          */}
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
            <Route exact path={`/`} component={Home} />
            {/* Other Properties */}
            <Route path="/golf" component={Golf} />
            <Route path="/village" component={Village} />
            <Route path="/airboats" component={Airboats} />
            <Route path="/miccosukee-tribe-history" component={TribeHistory} />
            <Route
              path="/miccosukee-tribe-administration"
              component={TribeAdministration}
            />
            <Route path="/administration" component={Administration} />
            <Route exact path={`/vendors`} component={Vendors} />
            <Route exact path={`/news`} component={News} />
            <Route
              exact
              path={`/meeting-events/meetings`}
              component={Meetings}
            />
            <Route
              exact
              path={`/meeting-events/weddings`}
              component={Weddings}
            />
            <Route
              exact
              path={`/meeting-events/banquets`}
              component={Banquets}
            />
            <Route
              exact
              path={`/meeting-events/corporate-retreats`}
              component={CorporateRetreats}
            />
            <Route exact path={`/news/:newsId`} component={NewsPage} />
            {/*CASINO*/}
            <Route
              exact
              path={`/casino/promotions`}
              component={GamingPromosPage}
            />
            <Route
              exact
              path={`/casino/promotions/:month`}
              component={GamingPromosPage}
            />
            <Route
              exact
              path={`/casio/promotions/es`}
              component={GamingPromosPage}
            />
            <Route exact path={`/casino/hosts`} component={Hosts} />
            <Route exact path={`/casino/slots`} component={GamingMachines} />
            <Route exact path={`/casino/bingo`} component={Bingo} />
            <Route exact path={`/casino/poker`} component={Poker} />
            {/*<Route exact path={`/casino/hosts`} component={CasinoHosts} />*/}

            {/*RESORT*/}
            <Route exact path={`/resort/rooms`} component={Accommodations} />
            <Route exact path={`/resort/pool-fitness`} component={PoolGym} />
            <Route exact path={`/resort/experiences`} component={Experiences} />

            {/*ENTERTAINMENT*/}
            <Route
              exact
              path={`/entertainment/events-concerts`}
              component={MrgEvents}
            />
            <Route
              exact
              path={`/entertainment/events-concerts/:eventId`}
              component={MrgEventPage}
            />

            {/*FOOD & DRINK*/}
            <Route exact path={`/food-drink/b1-grill`} component={B1Grill} />
            <Route
              exact
              path={`/food-drink/b1-grill-menu`}
              component={B1Grill}
            />
            <Route
              exact
              path={`/food-drink/tempt-lounge`}
              component={TemptLounge}
            />
            <Route exact path={`/food-drink/buffet`} component={Buffet} />
            <Route
              exact
              path={`/food-drink/maxs-grab-go`}
              component={MaxsGrabAndGo}
            />
            <Route
              exact
              path={`/food-drink/cafe-hammock`}
              component={CafeHammock}
            />
            <Route
              exact
              path={`/food-drink/cypress-lounge`}
              component={CypressLounge}
            />
            <Route
              exact
              path={`/food-drink/martini-bar`}
              component={MartiniBar}
            />

            <Route exact path={`/salon-spa`} component={SalonSpa} />
            <Route exact path={`/club-egret`} component={ClubEgret} />
            <Route exact path={`/teen-arcade`} component={TeenArcade} />
            <Route exact path={`/msphere`} component={MSphere} />

            <Route
              exact
              path={`/banquets-catering`}
              component={BanquetsCatering}
            />

            <Route exact path={`/about-us`} component={McrInfoPage} />
            {/* LANDING PAGES */}
            <Route path="/valet" component={Valet} />
            <Route exact path={'/tomahawk'} component={Tomahawk} />
            <Route exact path={'/resortpackages'} component={ResortPackages} />
            <Route
              exact
              path={'/casino-resort-amenities'}
              component={Amenities}
            />
            <Route path={'/aid'} component={Aid} />
            <Route path={'/banquets-catering'} component={Banquets} />
            <Route path={'/holidaycards'} component={HolidayCards} />
            <Route path={'/artsandcrafts'} component={ArtsAndCrafts} />
            {/* END LANDING PAGES */}
            <Route exact path={`/404`} component={McrErrorPage} />
            <Route exact path={`/*`} component={McrErrorPage} />
          </Switch>
          {renderFooter()}
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
