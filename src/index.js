import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";

// context
import { LanguageProvider } from "./context/languageContext.js";

// demo pages for this product
import Components from "views/_demo_Components/Components.js";
import LandingPage from "views/_demo_LandingPage/LandingPage.js";
import ProfilePage from "views/_demo_ProfilePage/ProfilePage.js";
import LoginPage from "views/_demo_LoginPage/LoginPage.js";

// my pages
import Miccosukee from "views/Miccosukee";
import MRG from "views/MRG";

var hist = createBrowserHistory();

const App = () => {
  return (
    <LanguageProvider>
      <Router history={hist}>
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/components" component={Components} />
          <Route path="/resortandgaming" component={MRG} />
          <Route path="/" component={Miccosukee} />
        </Switch>
      </Router>
    </LanguageProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
