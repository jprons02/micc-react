import React, { useContext, useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  Link,
} from 'react-router-dom';

// Context
import { PopupContext } from 'contexts/PopupContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import { MobileMenuDrawerContext } from 'contexts/MobileMenuDrawerContext.js';
import { PricingModalProvider } from 'contexts/PricingModalContext.js';
import { useLanguage } from 'contexts/languageContext.js';

// Theme
import { theme } from '../../themes';
import { ThemeProvider } from '@material-ui/core/styles';

// Icons
import Warning from '@material-ui/icons/Warning';

// My components
import VillageHeader from 'components/CustomHeaders/VillageHeader.js';
import VillageFooter from 'components/CustomFooters/VillageFooter.js';
import PopupModal from 'components/CustomModal/CustomPopup/CustomPopupModal.js';
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';
import StandardAlert from 'components/CustomAlert/CustomStandardAlert.js';
import ReactHelmetComponent from 'components/ReactHelmet/ReactHelmetComponent';

// Pages
import Home from 'views/Village/Pages/Home/home.js';
import GiftShop from 'views/Village/Pages/GiftShop/giftShop.js';
import Museum from 'views/Village/Pages/Museum/museum.js';
import AlligatorDemos from 'views/Village/Pages/AlligatorDemos/alligatorDemos.js';
import OurLittleShack from 'views/Village/Pages/OurLittleShack/ourLittleShack';
import VillageCovidPage from 'views/Village/Pages/business_info/villageCovidPage.js';
import VillageErrorPage from 'views/Village/Pages/error/villageErrorPage.js';

// Business info
import { villageBusinessInfo } from 'business_info/genericInfo.js';
import { villageHours } from 'business_info/hours.js';

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

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  /**
   * The Miccosukee Indian Village & Gift Shop will be closed on Saturday, December 25 and Friday, December 31. Happy Holidays!
   *
   * El Miccosukee Indian Village y Gift Shop estarán cerrados el sábado, 25 de diciembre y el viernes, 31 de diciembre. ¡Felices Fiestas!
   */

  return (
    <ThemeProvider theme={theme('village')}>
      <PricingModalProvider>
        <div>
          <VillageHeader />
          <ReactHelmetComponent url={window.location.pathname} />
          {isRunning([2021, 12, 21], [2022, 1, 1]) ? (
            <StandardAlert
              message={
                language ? (
                  <div>
                    <b>
                      The Miccosukee Indian Village &amp; Gift Shop will be
                      closed on Friday, December 31. Happy Holidays!
                    </b>
                  </div>
                ) : (
                  <div>
                    <b>
                      El Miccosukee Indian Village y Gift Shop estarán cerrados
                      el viernes, 31 de diciembre. ¡Felices Fiestas!
                    </b>
                  </div>
                )
              }
              close
              color="danger"
              icon={Warning}
            />
          ) : (
            <StandardAlert
              message={
                language ? (
                  <div>
                    <b>
                      Miccosukee Indian Village is temporarily closed due to
                      COVID-19, but the Gift Shop will remain open{' '}
                      {villageHours.poi.giftShop[0].days(language)} from{' '}
                      {villageHours.poi.giftShop[0].open} -{' '}
                      {villageHours.poi.giftShop[0].close}
                    </b>
                  </div>
                ) : (
                  <div>
                    <b>
                      El Miccosukee Indian Village permanecerá cerrado debido a
                      la pandemia del COVID-19, pero el Gift Shop estará abierto
                      los {villageHours.poi.giftShop[0].days(language)} de{' '}
                      {villageHours.poi.giftShop[0].open} -{' '}
                      {villageHours.poi.giftShop[0].close}
                    </b>
                  </div>
                )
              }
              close
              color="warning"
              icon={Warning}
            />
          )}
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
                      Click HERE for the Indian Village COVID-19 guidelines.
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
            <Route
              exact
              path={`${match.path}/gift-shop`}
              component={GiftShop}
            />
            <Route exact path={`${match.path}/museum`} component={Museum} />
            <Route
              exact
              path={`${match.path}/alligator-demonstrations`}
              component={AlligatorDemos}
            />
            <Route
              exact
              path={`${match.path}/our-little-shack`}
              component={OurLittleShack}
            />
            <Route
              exact
              path={`${match.path}/covid-19`}
              component={VillageCovidPage}
            />
            <Route
              exact
              path={`${match.path}/*`}
              component={VillageErrorPage}
            />
          </Switch>
          <VillageFooter />
          <PopupModal />
          <CustomContactModal
            language={language}
            showModal={showContactModal}
            closeModal={() => closeModal(setShowContactModal)}
            entity={villageBusinessInfo}
          />
        </div>
      </PricingModalProvider>
    </ThemeProvider>
  );
}
