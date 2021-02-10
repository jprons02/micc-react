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
//test
import MRG2 from "views/MRG/index2";

var hist = createBrowserHistory();

const App = () => {
  return (
    <LanguageProvider>
      <AlertProvider>
        <Router history={hist}>
          <Switch>
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/components" component={Components} />
            <Route path="/mrg" component={MRG} />
            <Route path="/mrg2" component={MRG2} />
            <Route path="/" component={Miccosukee} />
          </Switch>
        </Router>
      </AlertProvider>
    </LanguageProvider>
  );
};

export default App;
