import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//components
import Header from "./Components/header.js";
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

  const pages = [
    {
      id: "/",
      component: () => <Home click={cardClicked} />,
    },
    {
      id: "Miccosukee Resort & Gaming",
      component: () => <GamingGolf click={cardClicked} />,
    },
    {
      id: "Everglades Experiences",
      component: () => <Everglades click={cardClicked} />,
    },
    {
      id: "History",
      component: () => <History click={cardClicked} />,
    },
    {
      id: "Administration",
      component: () => <Administration click={cardClicked} />,
    },
  ];

  const [page, setPage] = useState(0);

  const transitions = useTransition(pages[page], (item) => item.id, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  //x is passed up from home.js <Card onClick function
  const cardClicked = (x) => {
    switch (x) {
      case "/":
        return setPage(0);
      case "Miccosukee Resort & Gaming":
        return setPage(1);
      case "Everglades Experiences":
        return setPage(2);
      case "History":
        return setPage(3);
      case "Administration":
        return setPage(4);
      default:
        return setPage(0);
    }
  };

  return (
    <div className={classNames(classes.main)}>
      <div className={classes.container}>
        <Header click={cardClicked} page={page} />
        {transitions.map(({ item, key, props }) => {
          return (
            <animated.div key={key} style={{ ...props }}>
              {item.component()}
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default Miccosukee;
