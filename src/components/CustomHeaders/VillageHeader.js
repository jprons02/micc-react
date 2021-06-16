import React, { useState, useContext, useEffect } from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { Icon } from "@material-ui/core";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { ContactFormContext } from "contexts/ContactFormContext.js";
import { PricingModalContext } from "contexts/PricingModalContext.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";
import { useLanguage } from "contexts/languageContext.js";

// theme color
import { villageColor } from "themes/colors.js";
import villageLogo from "assets/logos/MiccosukeeVillage&Airboats.svg";

// Modal
import VillagePricingModal from "components/CustomModal/PricingModal/VillagePricingModal.js";

const VillageHeader = () => {
  const language = useLanguage();
  //classes needed for social icon
  //const classes = useStyles();
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [showPricingModal, setShowPricingModal] = useContext(
    PricingModalContext
  );
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);
  const [formValues, setFormValues] = useContext(ContactFormContext);

  // Close contact modal on mount
  useEffect(() => {
    closeModal(setShowPricingModal);
  }, []);

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
        ["select"]: "Indian Village Groups",
      },
    });
    openModal(setState);
  };

  const menuLinks = [
    {
      text: "Gift Shop",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/gift-shop",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language ? "Village Museum" : "Museo",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/museum",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: language
        ? "Alligator Demonstrations"
        : "Demostraciones de Caimanes",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/alligator-demonstrations",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Our Little Shack",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/our-little-shack",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Admission",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "",
      clickFunction: () => openModal(setShowPricingModal),
    },
    {
      text: "Groups",
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
        borderColor={villageColor[500]}
        color="white"
        brand={villageLogo}
        brandAlt="villageLogo"
        brandLink="/village"
        rightLinks={<HeaderLinks menuItems={menuLinks} />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />
      <VillagePricingModal
        showModal={showPricingModal}
        closeModal={() => closeModal(setShowPricingModal)}
      />
    </React.Fragment>
  );
};

export default VillageHeader;
