import React, { useContext, useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
  Link,
} from 'react-router-dom';

// Context
import { TeeTimeProvider } from 'contexts/TeeTimeContext.js';
import { PopupContext } from 'contexts/PopupContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import { MobileMenuDrawerContext } from 'contexts/MobileMenuDrawerContext.js';
import { useLanguage } from 'contexts/languageContext.js';

// Theme
import { theme } from '../../themes';
import { ThemeProvider } from '@material-ui/core/styles';

// My components
import GolfHeader from 'components/CustomHeaders/GolfHeader.js';
import GolfFooter from 'components/CustomFooters/GolfFooter.js';
import PopupModal from 'components/CustomModal/CustomPopup/CustomPopupModal.js';
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';
import StandardAlert from 'components/CustomAlert/CustomStandardAlert.js';
import ReactHelmetComponent from 'components/ReactHelmet/ReactHelmetComponent';

// Pages
import Home from 'views/Golf/Pages/home/home.js';
import Courses from 'views/Golf/Pages/courses/courses.js';
import Rates from 'views/Golf/Pages/rates/rates.js';
import GolfEvents from 'views/Golf/Pages/events/golfEvents.js';
import GolfEventPage from 'views/Golf/Pages/events/golfEventPage';
import GolfCovidPage from 'views/Golf/Pages/business_info/golfCovidPage.js';
import GolfErrorPage from 'views/Golf/Pages/error/golfErrorPage.js';

// Business info
import { golfBusinessInfo } from 'business_info/genericInfo.js';

// services
import { popupManager } from 'services/functions/popups/popupManager';

export default function Miccosukee(props) {
  const language = useLanguage();
  let match = useRouteMatch();
  let location = useLocation();

  const [popupState, setPopupState] = useContext(PopupContext);
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);

  /*
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

  useEffect(() => {
    if (
      window.location.pathname === '/golf/covid-19' ||
      window.location.pathname === '/golf/covid-19/'
    ) {
      props.history.push('/golf/info');
    }
  }, []);
  */

  // REDIRECT ALL TRAFIC TO miccosukeegolf.com
  useEffect(() => {
    window.location.href = 'http://www.miccosukeegolf.com/';
  }, []);

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  return (
    <ThemeProvider theme={theme('golf')}>
      <TeeTimeProvider>
        <div>
          <GolfHeader />
          <ReactHelmetComponent url={window.location.pathname} />
          {/*
          <StandardAlert
            message={
              language ? (
                <div>
                  <b>
                    <Link
                      style={{ color: "white", fontWeight: "800" }}
                      to={`${match.path}/covid-19`}
                    >
                      Click HERE for the Golf &amp; Country Club COVID-19
                      guidelines.
                    </Link>
                  </b>
                </div>
              ) : (
                <div>
                  <b>
                    Oprima
                    <Link
                      style={{ color: "white", fontWeight: "800" }}
                      to={`${match.path}/covid-19`}
                    >
                      {" "}
                      AQUÍ{" "}
                    </Link>
                    para las últimas noticias de COVID-19 relacionadas a
                    nuestros establecimientos
                  </b>
                </div>
              )
            }
            close
            color="info"
            icon="info_outline"
          />
          */}
          <Switch>
            <Route exact path={`${match.path}/`} component={Home} />
            <Route exact path={`${match.path}/courses`} component={Courses} />
            <Route exact path={`${match.path}/rates`} component={Rates} />
            <Route exact path={`${match.path}/events`} component={GolfEvents} />
            <Route
              exact
              path={`${match.path}/events/:eventId`}
              component={GolfEventPage}
            />
            <Route
              exact
              path={`${match.path}/info`}
              component={GolfCovidPage}
            />
            <Route exact path={`${match.path}/*`} component={GolfErrorPage} />
          </Switch>
          <GolfFooter />
          <PopupModal />
          <CustomContactModal
            language={language}
            showModal={showContactModal}
            closeModal={() => closeModal(setShowContactModal)}
            entity={golfBusinessInfo}
          />
        </div>
      </TeeTimeProvider>
    </ThemeProvider>
  );
}
