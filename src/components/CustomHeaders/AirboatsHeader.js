import React, { useState, useContext, useEffect } from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// theme color
import { airboatsColor } from "themes/colors.js";
import airboatsLogo from "assets/media/logos/MiccosukeeVillage&Airboats.svg";

// context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { ContactFormContext } from "contexts/ContactFormContext.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";

// context
import { useLanguage } from "contexts/languageContext.js";

const AirboatsHeader = () => {
  const language = useLanguage();
  //classes needed for social icon
  //const classes = useStyles();

  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);
  const [formValues, setFormValues] = useContext(ContactFormContext);

  const openModal = (setState) => {
    setMobileOpen(false);
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  const groupsClick = (setState) => {
    setFormValues({
      ...formValues,
      inputValues: {
        ...formValues.inputValues,
        ["select"]: "Airboat Groups",
      },
    });
    openModal(setState);
  };

  const menuLinks = [
    {
      text: language ? "Details" : "Detalles",
      itemType: "id",
      href: "",
      target: "",
      color: "",
      link: "/#details",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? "Pricing" : "Precios",
      itemType: "id",
      href: "",
      target: "",
      color: "",
      link: "/#pricing",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? "Groups" : "Grupos",
      itemType: "action",
      href: "",
      target: "",
      color: "",
      link: "",
      clickFunction: () => groupsClick(setShowContactModal),
      //icon: () => <Icon>chevron_right</Icon>,
    },
  ];

  return (
    <React.Fragment>
      <Header
        borderColor={airboatsColor[500]}
        color="white"
        brand={airboatsLogo}
        brandAlt="airboatsLogo"
        brandLink="/airboats"
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

export default AirboatsHeader;
