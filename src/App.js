import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// context
import { LanguageProvider } from "./contexts/languageContext.js";
import { AlertProvider } from "contexts/AlertContext.js";

// demo pages for this product
import Components from "views/_demo_Components/Components.js";
import LandingPage from "views/_demo_LandingPage/LandingPage.js";
import ProfilePage from "views/_demo_ProfilePage/ProfilePage.js";
import LoginPage from "views/_demo_LoginPage/LoginPage.js";

// my pages
import Miccosukee from "views/Miccosukee";
import MRG from "views/MRG";
import AID from "views/Miccosukee/Pages/virtual_event/21_americanIndianDay.js";

var hist = createBrowserHistory();

const App = () => {
  return (
    <LanguageProvider>
      <AlertProvider>
        <Router history={hist}>
          <Switch>
            <Route exact path="/landing-page" component={LandingPage} />
            <Route exact path="/profile-page" component={ProfilePage} />
            <Route exact path="/login-page" component={LoginPage} />
            <Route exact path="/components" component={Components} />
            <Route exact path={"/virtual-event/aid"} component={AID} />
            <Route path="/mrg" component={MRG} />
            <Route path="/" component={Miccosukee} />
          </Switch>
        </Router>
      </AlertProvider>
    </LanguageProvider>
  );
};

export default App;
