import React, { useContext, useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  Link,
} from 'react-router-dom';

// Icons
import Warning from '@material-ui/icons/Warning';

// Context
import { PopupContext } from 'contexts/PopupContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import { MobileMenuDrawerContext } from 'contexts/MobileMenuDrawerContext.js';
import { useLanguage } from 'contexts/languageContext.js';

// Theme
import { theme } from '../../themes';
import { ThemeProvider } from '@material-ui/core/styles';

// My components
import AirboatsHeader from 'components/CustomHeaders/AirboatsHeader.js';
import AirboatsFooter from 'components/CustomFooters/AirboatsFooter.js';
import PopupModal from 'components/CustomModal/CustomPopup/CustomPopupModal.js';
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';
import StandardAlert from 'components/CustomAlert/CustomStandardAlert.js';
import ReactHelmetComponent from 'components/ReactHelmet/ReactHelmetComponent';

// Pages
import Home from 'views/Airboats/Pages/home/home.js';
import AirboatsCovidPage from 'views/Airboats/Pages/business_info/airboatsCovidPage.js';
import AirboatsErrorPage from 'views/Airboats/Pages/error/airboatsErrorPage.js';

// Business info
import { airboatsBusinessInfo } from 'business_info/genericInfo.js';

// services
import { popupManager } from 'services/functions/popups/popupManager';
import { isRunning } from 'services/functions/scheduleThis';

// Snackbar
import SnackbarContent from 'components/Snackbar/SnackbarContent.js';

// theme colors
import { standardLinkColor } from 'themes/colors.js';

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

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  return (
    <ThemeProvider theme={theme('airboats')}>
      <div>
        <AirboatsHeader />
        <ReactHelmetComponent url={window.location.pathname} />
        {isRunning([2021, 12, 21], [2022, 1, 2]) ? (
          /*
          <StandardAlert
            message={
              language ? (
                <div>
                  <b>
                    Airboat Rides will be closed on Friday, December 31. Happy
                    Holidays!
                  </b>
                </div>
              ) : (
                <div>
                  <b>
                    Los viajes en Airboats (hidrodeslizadores) estarán cerrados
                    el viernes, 31 de diciembre. ¡Felices Fiestas!
                  </b>
                </div>
              )
            }
            close
            color="danger"
            icon={Warning}
          />
          */
          <StandardAlert
            message={
              language ? (
                <div>
                  <b>Week of December 27, 2021 - January 2, 2022:</b>
                  <p>
                    AIRBOATS - UPDATED HOURS: 9 AM - 5 PM
                    <br />
                    Monday-Thursday- Open
                    <br />
                    Friday (New Year's Eve)- Closed
                    <br />
                    Saturday &amp; Sunday- Open
                    <br />
                  </p>
                </div>
              ) : (
                <div>
                  <b>
                    Semana del 27 de diciembre de 2021 - 2 de enero de 2022:
                  </b>
                  <p>
                    AIRBOATS - HORARIO ACTUALIZADO: 9 AM - 5 PM
                    <br />
                    lunes-jueves - Abierto
                    <br />
                    viernes (Víspera de Año Nuevo)- Cerrado
                    <br />
                    sábado y domingo- Abierto
                    <br />
                  </p>
                </div>
              )
            }
            close
            color="danger"
            //icon={Warning}
          />
        ) : null}
        <Switch>
          <Route exact path={`${match.path}/`} component={Home} />
          <Route
            exact
            path={`${match.path}/covid-19`}
            component={AirboatsCovidPage}
          />
          <Route exact path={`${match.path}/*`} component={AirboatsErrorPage} />
        </Switch>
        <AirboatsFooter />
        <PopupModal />
        <CustomContactModal
          language={language}
          showModal={showContactModal}
          closeModal={() => closeModal(setShowContactModal)}
          entity={airboatsBusinessInfo}
        />
      </div>
    </ThemeProvider>
  );
}
