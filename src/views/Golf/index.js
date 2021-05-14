import React, { useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

// Context
import { TeeTimeProvider } from "contexts/TeeTimeContext.js";
import { PopupContext } from "contexts/PopupContext.js";

// Theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";

// My components
import GolfHeader from "components/CustomHeaders/GolfHeader.js";
import GolfFooter from "components/CustomFooters/GolfFooter.js";
import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";

// Pages
import Home from "views/Golf/Pages/home/home.js";
import Courses from "views/Golf/Pages/courses/courses.js";
import Rates from "views/Golf/Pages/rates/rates.js";
import GolfEvents from "views/Golf/Pages/events/golfEvents.js";
import GolfEventPage from "views/Golf/Pages/events/golfEventPage";
import GolfCovidPage from "views/Golf/Pages/business_info/golfCovidPage.js";

export default function Miccosukee(props) {
  let match = useRouteMatch();
  let location = useLocation();

  const [showPopupModal, setShowPopupModal] = useContext(PopupContext);

  // popup modal is triggered in main index file so that when user navigates around website and then back to home page, it does not trigger again.
  useEffect(() => {
    if (location.pathname === "/mrg") {
      setTimeout(() => {
        setShowPopupModal(true);
      }, 700);
    }
  }, []);

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
          <PopupModal
            website="mrg"
            showModal={showPopupModal}
            closeModal={() => setShowPopupModal(false)}
          />
        </div>
      </TeeTimeProvider>
    </ThemeProvider>
  );
}
