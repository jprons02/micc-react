import React, { useContext, useEffect } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  Link,
} from "react-router-dom";

// Context
import { TeeTimeProvider } from "contexts/TeeTimeContext.js";
import { PopupContext } from "contexts/PopupContext.js";
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";
import { useLanguage } from "contexts/languageContext.js";

// Theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";

// My components
import AirboatsHeader from "components/CustomHeaders/AirboatsHeader.js";
import AirboatsFooter from "components/CustomFooters/AirboatsFooter.js";
import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";
import CustomContactModal from "components/CustomModal/CustomContactModals/CustomContactModal.js";
import StandardAlert from "components/CustomAlert/CustomStandardAlert.js";

// Pages
import Home from "views/Airboats/Pages/home/home.js";
import AirboatsCovidPage from "views/Airboats/Pages/business_info/airboatsCovidPage.js";
import AirboatsErrorPage from "views/Airboats/Pages/error/airboatsErrorPage.js";

// Business info
import { airboatsBusinessInfo } from "business_info/genericInfo.js";

// services
import { popupManager } from "services/popups/popupManager";

// Snackbar
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

// theme colors
import { standardLinkColor } from "themes/colors.js";

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
    <ThemeProvider theme={theme("airboats")}>
      <TeeTimeProvider>
        <div>
          <AirboatsHeader />
          <StandardAlert
            message={
              language ? (
                <span>
                  <b>Airboat rides are suspended until further notice.</b>
                </span>
              ) : (
                <span>
                  <b>
                    Los viajes en Airboats quedan suspendidos hasta nuevo aviso.
                  </b>
                </span>
              )
            }
            close
            color="danger"
            icon="info_outline"
          />
          <Switch>
            <Route exact path={`${match.path}/`} component={Home} />
            <Route
              exact
              path={`${match.path}/covid-19`}
              component={AirboatsCovidPage}
            />
            <Route
              exact
              path={`${match.path}/*`}
              component={AirboatsErrorPage}
            />
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
      </TeeTimeProvider>
    </ThemeProvider>
  );
}
