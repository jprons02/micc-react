import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";
// core
import Button from "components/CustomButtons/Button.js";
import CustomButton from "@material-ui/core/Button";
// pages
import Accommodations from "views/MRG/Pages/accommodations.js";
import Amenities from "views/MRG/Pages/amenities.js";
import DiningNightlife from "views/MRG/Pages/diningNightlife.js";
import Events from "views/MRG/Pages/events.js";
import Gaming from "views/MRG/Pages/gaming.js";

import Typography from "@material-ui/core/Typography";

const HomeTest = () => {
  let { path, url } = useRouteMatch();
  return (
    <ThemeProvider theme={theme("mrg")}>
      <div>
        <Typography variant="h1">Testing.</Typography>
        <ul>
          <li>
            <Link to={`/`}>
              <Typography color="inherit" variant="inherit">
                BACK TO HOME
              </Typography>
            </Link>
          </li>
        </ul>
        <Typography color="inherit" variant="h2">
          Topics
        </Typography>
        <Typography paragraph={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <ul>
          <li>
            <Link to={`${url}/accommodations`}>
              <Typography color="inherit" variant="inherit">
                Accommodations
              </Typography>
            </Link>
          </li>
          <li>
            <Link to={`${url}/amenities`}>
              <Typography color="inherit" variant="inherit">
                Amenities
              </Typography>
            </Link>
          </li>
          <li>
            <Link to={`${url}/dining-nightlife`}>
              <Typography color="inherit" variant="inherit">
                Dining &amp; Nightlife
              </Typography>
            </Link>
          </li>
          <li>
            <Link to={`${url}/events`}>
              <Typography color="inherit" variant="inherit">
                Events
              </Typography>
            </Link>
          </li>
          <li>
            <Link to={`${url}/gaming`}>
              <Typography color="inherit" variant="inherit">
                Gaming
              </Typography>
            </Link>
          </li>
          <li>
            <Link to={`${url}`}>
              <Typography color="inherit" variant="inherit">
                Back
              </Typography>
            </Link>
          </li>
          <Button usetheme="true">TESTING BUTTON COMPONENT</Button>
          <CustomButton variant="contained">TESTING CUSTOM BUTTON</CustomButton>
        </ul>

        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
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
      </div>
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
