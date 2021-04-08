import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";
// theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";
// Pages
import Home from "views/MRG/Pages/home/home.js";
import Accommodations from "views/MRG/Pages/accommodations/accommodations.js";
import Amenities from "views/MRG/Pages/amenities/amenities.js";
import Gaming from "views/MRG/Pages/gaming/gaming.js";
import DiningNightlife from "views/MRG/Pages/diningNightlife/diningNightlife.js";
import Events from "views/MRG/Pages/events/events.js";
import AidEvent from "views/MRG/Pages/events/virtual/21_americanIndianDay.js";
import Contact from "views/MRG/Pages/contact/contact.js";

// my components
import MrgHeader from "components/CustomHeaders/MrgHeader.js";
import MrgFooter from "components/CustomFooters/MrgFooter.js";

const HomeTest = () => {
  let match = useRouteMatch();

  return (
    <ThemeProvider theme={theme("mrg")}>
      <MrgHeader />
      <Switch>
        <Route exact path={`${match.path}/`} component={Home} />
        <Route
          exact
          path={`${match.path}/accommodations`}
          component={Accommodations}
        />
        <Route exact path={`${match.path}/amenities`} component={Amenities} />
        <Route
          exact
          path={`${match.path}/accommodations`}
          component={Accommodations}
        />
        <Route
          exact
          path={`${match.path}/dining-nightlife`}
          component={DiningNightlife}
        />
        <Route exact path={`${match.path}/events`} component={Events} />
        <Route exact path={`${match.path}/gaming`} component={Gaming} />
      </Switch>
      <MrgFooter />
    </ThemeProvider>
  );
};

export default HomeTest;

/*import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

// pages
import HomeTest from "./Pages/home.js";
import Accommodations from "views/MRG/Pages/accommodations.js";
import Amenities from "views/MRG/Pages/amenities.js";
import DiningNightlife from "views/MRG/Pages/diningNightlife.js";
import Events from "views/MRG/Pages/events.js";
import Gaming from "views/MRG/Pages/gaming.js";

const App = () => {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <h3>Please select a topic.</h3>
      </Route>
      <Route path={`${path}/mrg2`}>
        <HomeTest />
      </Route>
      <Route path={`${path}/accommodations`}>
        <Accommodations />
      </Route>
      <Route path={`${path}/amenities`}>
        <Amenities />
      </Route>
      <Route path={`${path}/dining-nightlife`}>
        <DiningNightlife />
      </Route>
      <Route path={`${path}/events`}>
        <Events />
      </Route>
      <Route path={`${path}/gaming`}>
        <Gaming />
      </Route>
    </Switch>
  );
};

export default App;
*/
