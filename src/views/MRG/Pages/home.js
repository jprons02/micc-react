import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
// core
import Button from "components/CustomButtons/Button.js";
import CustomButton from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";

const Home = () => {
  let match = useRouteMatch();
  return (
    <div>
      <Typography variant="h2">Testing.</Typography>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <ul>
        <li>
          <Link to={`${match.url}/accommodations`}>
            <Typography color="inherit" variant="inherit">
              Accommodations
            </Typography>
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/amenities`}>
            <Typography color="inherit" variant="inherit">
              Amenities
            </Typography>
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/dining-nightlife`}>
            <Typography color="inherit" variant="inherit">
              Dining &amp; Nightlife
            </Typography>
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/events`}>
            <Typography color="inherit" variant="inherit">
              Events
            </Typography>
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/gaming`}>
            <Typography color="inherit" variant="inherit">
              Gaming
            </Typography>
          </Link>
        </li>
        <li>
          <Link to="#">
            <Typography color="inherit" variant="inherit">
              Empty Link Test
            </Typography>
          </Link>
        </li>
        <Button usetheme="true">TESTING BUTTON COMPONENT</Button>
        <CustomButton variant="contained">TESTING CUSTOM BUTTON</CustomButton>
      </ul>
    </div>
  );
};

export default Home;
