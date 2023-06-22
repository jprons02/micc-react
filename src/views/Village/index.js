import React, { useContext, useEffect, useState } from 'react';
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
import { SettingsApplicationsRounded } from '@material-ui/icons';

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

  useEffect(() => {
    // popup modal is triggered in main index file so that when user navigates around website and then back to home page, it does not trigger again.
    popupManager(setPopupState, popupState, location);

    // close contact modal on mount
    closeModal(setShowContactModal);
  }, []);

  useEffect(() => {
    if (
      window.location.pathname === '/village/covid-19' ||
      window.location.pathname === '/village/covid-19/'
    ) {
      props.history.push('/village/info');
    }
  }, []);

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  return (
    <ThemeProvider theme={theme('village')}>
      <PricingModalProvider>
        <div>
          <VillageHeader />
          <ReactHelmetComponent url={window.location.pathname} />
          {isRunning([2023, 6, 22], [2023, 7, 2]) ? (
            <StandardAlert
              message={
                language ? (
                  <div>
                    <b>
                      Both the Gift Shop and Village will be closed on July 1,
                      2023. They will reopen on July 2, 2023.
                    </b>
                  </div>
                ) : (
                  <div>
                    <b>
                      La tienda de regalos y el Village (aldea indígena​)
                      estarán cerrados el 1 de julio de 2023. Volverán a abrir
                      el 2 de julio de 2023.
                    </b>
                  </div>
                )
              }
              close
              color="warning"
              //icon="info_outline"
            />
          ) : (
            ''
          )}
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
              path={`${match.path}/info`}
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
