import React, { useContext, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

// google analytics
import GA4React from 'ga-4-react';

// metatag component
import ReactHelmetComponent from 'components/ReactHelmet/ReactHelmetComponent';

// context
import { LanguageProvider } from 'contexts/languageContext.js';
import { PopupProvider } from 'contexts/PopupContext.js';
import { AlertContext } from 'contexts/AlertContext.js';
import { ContactFormProvider } from 'contexts/ContactFormContext.js';
import { ContactModalProvider } from 'contexts/ContactFormModalContext.js';
import { FoodMenuProvider } from 'contexts/FoodMenuContext.js';
import { MobileMenuDrawerProvider } from 'contexts/MobileMenuDrawerContext.js';

// Snackbar
import SnackbarContent from 'components/Snackbar/SnackbarContent.js';
import Check from '@material-ui/icons/Check';

// my pages
import Miccosukee from 'views/Miccosukee';
import MRG from 'views/MRG';
import Golf from 'views/Golf';
import Village from 'views/Village';
import Airboats from 'views/Airboats';
import History from 'views/History';
import Administration from 'views/Administration';
//import AID from 'views/Miccosukee/Pages/virtual_event/21_americanIndianDay.js';

// landing pages
import Tomahawk from 'views/LandingPages/tomahawk.js';
import ResortPackages from 'views/LandingPages/resortPackages.js';
import Amenities from 'views/LandingPages/amenities.js';
import Aid from 'views/LandingPages/aid.js';
import Banquets from 'views/LandingPages/banquets.js';
import HolidayCards from 'views/LandingPages/community/holidayCards/index.js';
import ArtsAndCrafts from 'views/LandingPages/artsandcrafts.js';
import Valet from 'views/LandingPages/valet.js';

// my components
import PopupModal from 'components/CustomModal/CustomPopup/CustomPopupModal.js';

var hist = createBrowserHistory();

const App = () => {
  const [alerts, setAlerts] = useContext(AlertContext);

  useEffect(() => {
    //https://www.npmjs.com/package/ga-4-react
    const trackingId = 'UA-81355839-8'; // Replace with your Google Analytics tracking ID
    const history = createBrowserHistory();
    const ga4react = new GA4React(trackingId);
    ga4react.initialize().then(
      (ga4) => {
        history.listen((location) => {
          ga4.pageview(window.location.pathname);
          ga4.gtag('event', 'pageview', window.location.pathname);
        });
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  /*useEffect(() => {
    const history = createBrowserHistory();
    console.log('url: ', history.location.pathname);
    console.log('replace: ', history.location.pathname.replace('mrg', 'mcr'));
    //if regex is mrg or mrg/asdf then change url from /mrg to /mcr and then reload page
    const mrgRegex = /(\/mrg\/.)|(\/mrg)/i;
    if (mrgRegex.test(history.location.pathname)) {
      history.push(history.location.pathname.replace('mrg', 'mcr'));
      //window.location.reload();
    }
  }, []);*/

  // This is success message for signing/logging in
  // Snackbar unmounting is placed in the Footer.js and VirtualEvent.js components. Footer will handle all website unmounts with exception to the virtual events.
  const renderSnackbar = () => {
    // snackbar message determined by alert
    const getMessage = (id) => {
      if (id === 'virtualEventLoginId') {
        return (
          <span>
            <b>Congratulations!</b> You have successfully logged in!
          </span>
        );
      }
      if (id === 'signupAlertId') {
        return (
          <span>
            <b>Signup Successful!</b>
          </span>
        );
      }
      if (id === 'contactAlertId') {
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
              position: 'fixed',
              bottom: 0,
              zIndex: 5,
              width: '100%',
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
                  <ReactHelmetComponent url={window.location.pathname} />
                  <Switch>
                    {/*<Route exact path={"/virtual-event/aid"} component={AID} />*/}
                    <Route path="/" component={MRG} />
                    <Route path="/golf" component={Golf} />
                    <Route path="/village" component={Village} />
                    <Route path="/airboats" component={Airboats} />
                    <Route path="/history" component={History} />
                    <Route path="/administration" component={Administration} />
                    <Route path="/valet" component={Valet} />
                    {/* LANDING PAGES */}
                    <Route exact path={'/tomahawk'} component={Tomahawk} />
                    <Route
                      exact
                      path={'/resortpackages'}
                      component={ResortPackages}
                    />
                    <Route
                      exact
                      path={'/casino-resort-amenities'}
                      component={Amenities}
                    />
                    <Route path={'/aid'} component={Aid} />
                    <Route path={'/banquets-catering'} component={Banquets} />
                    <Route path={'/holidaycards'} component={HolidayCards} />
                    <Route path={'/artsandcrafts'} component={ArtsAndCrafts} />
                    {/* END LANDING PAGES */}
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
