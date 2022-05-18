import React, { useContext, useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  Link,
} from 'react-router-dom';

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
import OneRewards from 'views/MRG/Pages/gaming/oneRewards/oneRewards.js';
import Bingo from 'views/MRG/Pages/gaming/bingo/bingo.js';
import Poker from 'views/MRG/Pages/gaming/poker/poker.js';
import SawgrassCafe from 'views/MRG/Pages/diningNightlife/sawgrass-cafe/sawgrassCafe.js';
import InternationalBuffet from 'views/MRG/Pages/diningNightlife/international-buffet/internationalBuffet.js';
import Bravo from 'views/MRG/Pages/diningNightlife/bravo-bravissimo/bravoBravissimo.js';
import Deli from 'views/MRG/Pages/diningNightlife/deli/deli.js';
import CafeHammock from 'views/MRG/Pages/diningNightlife/cafe-hammock/cafeHammock.js';
import CypressLounge from 'views/MRG/Pages/diningNightlife/cypress-lounge/cypressLounge.js';
import MartiniBar from 'views/MRG/Pages/diningNightlife/martini-bar/martiniBar.js';
import Maxs from 'views/MRG/Pages/diningNightlife/maxs/maxs.js';
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

export default function Miccosukee(props) {
  const language = useLanguage();
  let match = useRouteMatch();
  let location = useLocation();

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
    if (
      window.location.pathname === '/mrg/dining-nightlife' ||
      window.location.pathname === '/mrg/dining-nightlife/'
    ) {
      props.history.push('/mrg');
    }
    if (
      window.location.pathname === '/mrg/gaming' ||
      window.location.pathname === '/mrg/gaming/'
    ) {
      props.history.push('/mrg');
    }
    if (
      window.location.pathname === '/mrg/upcoming-events' ||
      window.location.pathname === '/mrg/upcoming-events/'
    ) {
      props.history.push('/mrg/events');
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
      location.pathname === '/mrg/contact/'
    ) {
      props.history.push('/mrg');
      setShowContactModal(true);
    } else {
      closeModal(setShowContactModal);
    }
  }, []);

  // show food menu on load if url matches.
  // close contact modal on mount if url does not match menu url.
  useEffect(() => {}, []);

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  return (
    <ThemeProvider theme={theme('mrg')}>
      <BookRoomProvider>
        <div>
          <MrgHeader />
          <ReactHelmetComponent url={window.location.pathname} />
          {isRunning([2022, 5, 20]) ? (
            <StandardAlert
              message={
                <div id="alert1a">
                  {language ? (
                    <div>
                      <b>
                        Now Open 24/7! New Smoking Gaming Area, located next to
                        the Miccosukee One Player’s Club.
                      </b>
                    </div>
                  ) : (
                    <div>
                      <b>
                        ¡Ya Abierta 24/7! Nueva Área de Juego para Fumadores,
                        ubicada al lado del Miccosukee One Player’s Club.
                      </b>
                    </div>
                  )}
                </div>
              }
              close
              color="success"
              //icon="info_outline"
            />
          ) : (
            <StandardAlert
              message={
                <div id="alert1a">
                  {language ? (
                    <div>
                      <b>
                        Coming Soon! New 24/7 Smoking Gaming Area opening on
                        Friday, May 20 at 9 AM.
                      </b>
                    </div>
                  ) : (
                    <div>
                      <b>
                        ¡Próximamente! Nueva Área de Juego para Fumadores
                        abriendo 24/7 a partir del viernes, 20 de mayo a las 9
                        AM.
                      </b>
                    </div>
                  )}
                </div>
              }
              close
              color="success"
              //icon="info_outline"
            />
          )}
          <StandardAlert
            message={
              <div id="alert2">
                {language ? (
                  <div>
                    <b>
                      <Link
                        style={{ color: 'white', fontWeight: '800' }}
                        to={`${match.path}/covid-19`}
                      >
                        Click HERE for the Miccosukee Resort &amp; Gaming
                        COVID-19 guidelines.
                      </Link>
                    </b>
                    <p style={{ fontWeight: '400' }}>
                      Guests must be 18 or older to enter the building. Masks
                      are optional for vaccinated patrons. Masks are mandatory
                      for unvaccinated patrons.
                    </p>
                  </div>
                ) : (
                  <div>
                    <b>
                      <Link
                        style={{ color: 'white', fontWeight: '800' }}
                        to={`${match.path}/covid-19`}
                      >
                        Oprima AQUÍ para las últimas noticias de COVID-19
                        relacionadas a nuestros establecimientos.
                      </Link>
                    </b>
                    <p style={{ fontWeight: '400' }}>
                      Los invitados deben tener 18 años o más para entrar al
                      establecimiento. El uso de mascarillas es opcional para
                      los clientes vacunados. El uso de mascarillas es
                      obligatorio para los clientes no vacunados.
                    </p>
                  </div>
                )}
              </div>
            }
            close
            color="info"
            //icon="info_outline"
          />
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
            <Route
              exact
              path={`${match.path}/miccosukee-one`}
              component={OneRewards}
            />
            <Route
              exact
              path={`${match.path}/sawgrass-cafe`}
              component={SawgrassCafe}
            />
            <Route
              exact
              path={`${match.path}/sawgrass-cafe-menu`}
              component={SawgrassCafe}
            />
            <Route exact path={`${match.path}/maxs`} component={Maxs} />
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
            <Route
              exact
              path={`${match.path}/covid-19`}
              component={MrgCovidPage}
            />
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
