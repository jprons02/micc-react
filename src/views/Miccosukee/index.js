import React, { useState } from "react";

import Home from "./Pages/home";
import MRG from "./Pages/mrg";
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
        return <MRG click={cardClicked} />;
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

  return <React.Fragment>{renderMiccosukee()}</React.Fragment>;
};

export default Miccosukee;
