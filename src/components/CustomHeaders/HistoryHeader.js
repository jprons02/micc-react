import React, { useState, useContext, useEffect } from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// theme color
import { historyColor } from "themes/colors.js";
import historyLogo from "assets/logos/MiccosukeeTribeOfIndiansOfFlorida.svg";

// context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";

const HistoryHeader = () => {
  //classes needed for social icon
  //const classes = useStyles();

  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);

  const openModal = (setState) => {
    setMobileOpen(false);
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  const menuLinks = [
    {
      text: "History",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/#",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Programs & Business",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/programs",
      //icon: () => <Icon>chevron_right</Icon>,
    },
  ];

  return (
    <React.Fragment>
      <Header
        borderColor={historyColor[500]}
        color="white"
        brand={historyLogo}
        brandAlt="historyLogo"
        brandLink="/history"
        rightLinks={<HeaderLinks menuItems={menuLinks} />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />
    </React.Fragment>
  );
};

export default HistoryHeader;
