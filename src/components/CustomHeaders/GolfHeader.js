import React, { useState, useContext, useEffect } from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { Icon } from "@material-ui/core";

// Context
import { TeeTimeContext } from "contexts/TeeTimeContext.js";
import TeeTimeModal from "components/CustomModal/CustomTeeTimeModal/CustomTeeTimeModal.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";

// theme color
import { golfColor } from "themes/colors.js";
import golfLogo from "assets/logos/MiccosukeeGolf&CountryClub.svg";

const GolfHeader = () => {
  //classes needed for social icon
  //const classes = useStyles();
  useEffect(() => {
    //Close TeeTime modal
    closeModal(setShowTeeTimeModal);
  }, []);

  const [showTeeTimeModal, setShowTeeTimeModal] = useContext(TeeTimeContext);
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
      text: "Courses",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/courses",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Rates",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/rates",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Events",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/events",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Book A Tee Time",
      itemType: "action",
      href: "",
      target: "",
      color: "",
      link: "",
      clickFunction: () => openModal(setShowTeeTimeModal),
      //icon: () => <Icon>chevron_right</Icon>,
    },
  ];

  return (
    <React.Fragment>
      <Header
        borderColor={golfColor[500]}
        color="white"
        brand={golfLogo}
        brandAlt="golfLogo"
        brandLink="/golf"
        rightLinks={<HeaderLinks menuItems={menuLinks} />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />
      <TeeTimeModal
        showModal={showTeeTimeModal}
        closeModal={() => closeModal(setShowTeeTimeModal)}
      />
    </React.Fragment>
  );
};

export default GolfHeader;