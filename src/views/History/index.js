import React, { useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

// Context
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";
import { PopupContext } from "contexts/PopupContext.js";

// Theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";

// My components
import HistoryHeader from "components/CustomHeaders/HistoryHeader.js";
import HistoryFooter from "components/CustomFooters/HistoryFooter.js";
import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";
import ReactHelmetComponent from "components/ReactHelmet/ReactHelmetComponent";

// Pages
import Home from "views/History/Pages/home/home.js";
import ProgramsBusiness from "views/History/Pages/programsBusiness/programsBusiness.js";
import TribalLeaders from "views/History/Pages/leaders/tribalLeaders.js";
import HistoryErrorPage from "views/History/Pages/error/historyErrorPage.js";

// services
import { popupManager } from "services/functions/popups/popupManager";

export default function Miccosukee(props) {
  let match = useRouteMatch();
  let location = useLocation();

  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);
  const [popupState, setPopupState] = useContext(PopupContext);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // popup modal is triggered in main index file so that when user navigates around website and then back to home page, it does not trigger again.
  useEffect(() => {
    popupManager(setPopupState, popupState, location);
  }, []);

  return (
    <ThemeProvider theme={theme("history")}>
      <div>
        <HistoryHeader />
        <ReactHelmetComponent url={window.location.pathname} />
        <Switch>
          <Route exact path={`${match.path}/`} component={Home} />
          <Route
            exact
            path={`${match.path}/programs`}
            component={ProgramsBusiness}
          />
          <Route
            exact
            path={`${match.path}/tribal-leaders`}
            component={TribalLeaders}
          />
          <Route exact path={`${match.path}/*`} component={HistoryErrorPage} />
        </Switch>
        <PopupModal />
        <HistoryFooter />
      </div>
    </ThemeProvider>
  );
}
