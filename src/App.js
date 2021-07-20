import React, { useContext, useEffect } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// google analytics
import GA4React from "ga-4-react";

// demo pages for this product
import Components from "views/_demo_Components/Components.js";
import LandingPage from "views/_demo_LandingPage/LandingPage.js";
import ProfilePage from "views/_demo_ProfilePage/ProfilePage.js";
import LoginPage from "views/_demo_LoginPage/LoginPage.js";

// context
import { LanguageProvider } from "contexts/languageContext.js";
import { PopupProvider } from "contexts/PopupContext.js";
import { AlertContext } from "contexts/AlertContext.js";
import { ContactFormProvider } from "contexts/ContactFormContext.js";
import { ContactModalProvider } from "contexts/ContactFormModalContext.js";
import { FoodMenuProvider } from "contexts/FoodMenuContext.js";
import { MobileMenuDrawerProvider } from "contexts/MobileMenuDrawerContext.js";

// Snackbar
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

// my pages
import Miccosukee from "views/Miccosukee";
import MRG from "views/MRG";
import Golf from "views/Golf";
import Village from "views/Village";
import Airboats from "views/Airboats";
import History from "views/History";
import Administration from "views/Administration";
import AID from "views/Miccosukee/Pages/virtual_event/21_americanIndianDay.js";

// my components
import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";

var hist = createBrowserHistory();

const App = () => {
  const [alerts, setAlerts] = useContext(AlertContext);

  //https://www.npmjs.com/package/ga-4-react
  const trackingId = "G-7PV911VYR0"; // Replace with your Google Analytics tracking ID
  const history = createBrowserHistory();
  const ga4react = new GA4React(trackingId);
  ga4react.initialize().then(
    (ga4) => {
      history.listen((location) => {
        ga4.pageview(window.location.pathname);
        ga4.gtag("event", "pageview", window.location.pathname);
      });
    },
    (err) => {
      console.error(err);
    }
  );

  // Snackbar unmounting is placed in the Footer.js and VirtualEvent.js components. Footer will handle all website unmounts with exception to the virtual events.
  const renderSnackbar = () => {
    // snackbar message determined by alert
    const getMessage = (id) => {
      if (id === "virtualEventLoginId") {
        return (
          <span>
            <b>Congratulations!</b> You have successfully logged in!
          </span>
        );
      }
      if (id === "signupAlertId") {
        return (
          <span>
            <b>Message Sent Successfully:</b> Now P$ gonna send you some cool
            stuff.
          </span>
        );
      }
      if (id === "contactAlertId") {
        return (
          <span>
            <b>Message Sent Successfully!</b>
          </span>
        );
      }
    };

    // iterate through all alerts and set id to the one that is true
    for (const alert in alerts) {
      if (alerts[alert] === true) {
        return (
          <div
            style={{
              position: "fixed",
              bottom: 0,
              zIndex: 5,
              width: "100%",
            }}
          >
            <SnackbarContent
              id={alert}
              message={getMessage(alert)}
              close
              color="success"
              icon={Check}
            />
          </div>
        );
      }
    }
  };

  return (
    <LanguageProvider>
      <MobileMenuDrawerProvider>
        <PopupProvider>
          <ContactModalProvider>
            <ContactFormProvider>
              <FoodMenuProvider>
                <Router history={hist}>
                  <Switch>
                    <Route exact path="/landing-page" component={LandingPage} />
                    <Route exact path="/profile-page" component={ProfilePage} />
                    <Route exact path="/login-page" component={LoginPage} />
                    <Route exact path="/components" component={Components} />
                    <Route exact path={"/virtual-event/aid"} component={AID} />
                    <Route path="/mrg" component={MRG} />
                    <Route path="/golf" component={Golf} />
                    <Route path="/village" component={Village} />
                    <Route path="/airboats" component={Airboats} />
                    <Route path="/history" component={History} />
                    <Route path="/administration" component={Administration} />
                    <Route path="/" component={Miccosukee} />
                  </Switch>
                </Router>
                {renderSnackbar()}
              </FoodMenuProvider>
            </ContactFormProvider>
          </ContactModalProvider>
        </PopupProvider>
      </MobileMenuDrawerProvider>
    </LanguageProvider>
  );
};

export default App;
