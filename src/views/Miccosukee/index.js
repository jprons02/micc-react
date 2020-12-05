import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//components
import Header from "./Components/Header";
//pages
import Home from "./Pages/home";
//import MRG from "./Pages/mrg";
import GamingGolf from "./Pages/gamingGolf";
import Everglades from "./Pages/everglades";
import History from "./Pages/history";
import Administration from "./Pages/administration";

import styles from "assets/jss/material-kit-react/views/miccosukee/index.js";

const useStyles = makeStyles(styles);

const Miccosukee = () => {
  const classes = useStyles();

  const [page, setPage] = useState("/");

  //x is passed up from home.js <Card onClick function
  const cardClicked = (x) => {
    setPage(x);
  };

  const renderMiccosukee = () => {
    switch (page) {
      case "/":
        return <Home click={cardClicked} />;
      case "Miccosukee Resort & Gaming":
        return <GamingGolf click={cardClicked} />;
      case "Everglades Experiences":
        return <Everglades click={cardClicked} />;
      case "History":
        return <History click={cardClicked} />;
      case "Administration":
        return <Administration click={cardClicked} />;
      default:
        return <Home click={cardClicked} />;
    }
  };

  return (
    <div className={classNames(classes.main)}>
      <div className={classes.container}>
        <Header click={cardClicked} />
        {renderMiccosukee()}
      </div>
    </div>
  );
};

export default Miccosukee;
