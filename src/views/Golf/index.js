import React, { useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

// Context
import { TeeTimeProvider } from "contexts/TeeTimeContext.js";
import { PopupContext } from "contexts/PopupContext.js";
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";

// Theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";

// My components
import GolfHeader from "components/CustomHeaders/GolfHeader.js";
import GolfFooter from "components/CustomFooters/GolfFooter.js";
import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";
import CustomContactModal from "components/CustomModal/CustomContactModals/CustomContactModal.js";

// Pages
import Home from "views/Golf/Pages/home/home.js";
import Courses from "views/Golf/Pages/courses/courses.js";
import Rates from "views/Golf/Pages/rates/rates.js";
import GolfEvents from "views/Golf/Pages/events/golfEvents.js";
import GolfEventPage from "views/Golf/Pages/events/golfEventPage";
import GolfCovidPage from "views/Golf/Pages/business_info/golfCovidPage.js";

// Business info
import { golfBusinessInfo } from "business_info/genericInfo.js";

// services
import { popupManager } from "services/popups/popupManager";

export default function Miccosukee(props) {
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
    <ThemeProvider theme={theme("golf")}>
      <TeeTimeProvider>
        <div>
          <GolfHeader />
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
              path={`${match.path}/covid-19`}
              component={GolfCovidPage}
            />
          </Switch>
          <GolfFooter />
          <PopupModal />
          <CustomContactModal
            showModal={showContactModal}
            closeModal={() => closeModal(setShowContactModal)}
            entity={golfBusinessInfo}
          />
        </div>
      </TeeTimeProvider>
    </ThemeProvider>
  );
}
