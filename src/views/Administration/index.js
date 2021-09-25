import React, { useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";
import { PopupContext } from "contexts/PopupContext.js";

// Theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";

// My components
import AdministrationHeader from "components/CustomHeaders/AdministrationHeader.js";
import AdministrationFooter from "components/CustomFooters/AdministrationFooter.js";
import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";
//import CustomContactModal from "components/CustomModal/CustomContactModals/CustomContactModal.js";

// Pages
import Home from "views/Administration/Pages/home/home.js";
import PoliceHistory from "views/Administration/Pages/Police/policeHistory.js";
import PoliceLocations from "views/Administration/Pages/Police/policeLocations.js";
import SpecializedUnits from "views/Administration/Pages/Police/specializedUnits";
import AdministrationErrorPage from "views/Administration/Pages/error/administrationErrorPage.js";

// services
import { popupManager } from "services/functions/popups/popupManager";

export default function Miccosukee(props) {
  let match = useRouteMatch();
  let location = useLocation();

  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);
  const [popupState, setPopupState] = useContext(PopupContext);

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

  /*
  const openModal = (setState) => {
    setState(true);
  };
  */

  const closeModal = (setState) => {
    setState(false);
  };

  return (
    <ThemeProvider theme={theme("administration")}>
      <div>
        <AdministrationHeader />
        <Switch>
          <Route exact path={`${match.path}/`} component={Home} />
          <Route
            exact
            path={`${match.path}/police`}
            component={PoliceHistory}
          />
          <Route
            exact
            path={`${match.path}/police/locations`}
            component={PoliceLocations}
          />
          <Route
            exact
            path={`${match.path}/police/specialized-units`}
            component={SpecializedUnits}
          />
          <Route
            exact
            path={`${match.path}/*`}
            component={AdministrationErrorPage}
          />
        </Switch>
        <AdministrationFooter />
        <PopupModal />
      </div>
    </ThemeProvider>
  );
}
