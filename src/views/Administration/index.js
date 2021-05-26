import React, { useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";

// Theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";

// My components
import AdministrationHeader from "components/CustomHeaders/AdministrationHeader.js";
import AdministrationFooter from "components/CustomFooters/AdministrationFooter.js";
import CustomContactModal from "components/CustomModal/CustomContactModals/CustomContactModal.js";

// Pages
import Home from "views/Administration/Pages/home/home.js";
import PoliceHistory from "views/Administration/Pages/Police/policeHistory.js";
import PoliceLocations from "views/Administration/Pages/Police/policeLocations.js";
import SpecializedUnits from "views/Administration/Pages/Police/specializedUnits";

export default function Miccosukee(props) {
  let match = useRouteMatch();
  let location = useLocation();

  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

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
        </Switch>
        <AdministrationFooter />
      </div>
    </ThemeProvider>
  );
}
