import React, { useState } from "react";
//components
import Header from "./Components/header";
//pages
import Home from "./Pages/home";
//import MRG from "./Pages/mrg";
import GamingGolf from "./Pages/gamingGolf";
import Everglades from "./Pages/everglades";
import History from "./Pages/history";
import Administration from "./Pages/administration";

const Miccosukee = () => {
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
    <React.Fragment>
      <Header click={cardClicked} />
      {renderMiccosukee()}
    </React.Fragment>
  );
};

export default Miccosukee;
