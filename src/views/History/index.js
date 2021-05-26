import React, { useContext, useEffect } from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";

// Context
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";

// Theme
import { theme } from "../../themes";
import { ThemeProvider } from "@material-ui/core/styles";

// My components
import HistoryHeader from "components/CustomHeaders/HistoryHeader.js";
import HistoryFooter from "components/CustomFooters/HistoryFooter.js";

// Pages
import Home from "views/History/Pages/home/home.js";
import ProgramsBusiness from "views/History/Pages/programsBusiness/programsBusiness.js";

export default function Miccosukee(props) {
  let match = useRouteMatch();
  let location = useLocation();

  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <ThemeProvider theme={theme("history")}>
      <div>
        <HistoryHeader />
        <Switch>
          <Route exact path={`${match.path}/`} component={Home} />
          <Route
            exact
            path={`${match.path}/programs`}
            component={ProgramsBusiness}
          />
        </Switch>
        <HistoryFooter />
      </div>
    </ThemeProvider>
  );
}
