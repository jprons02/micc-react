import React, { useState, useContext, useEffect } from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { Icon } from "@material-ui/core";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { PricingModalContext } from "contexts/PricingModalContext.js";

// theme color
import { villageColor } from "themes/colors.js";
import villageLogo from "assets/logos/MiccosukeeVillage&Airboats.svg";

// Modal
import VillagePricingModal from "components/CustomModal/PricingModal/VillagePricingModal.js";

const VillageHeader = () => {
  //classes needed for social icon
  //const classes = useStyles();
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [showPricingModal, setShowPricingModal] = useContext(
    PricingModalContext
  );

  // Close contact modal on mount
  useEffect(() => {
    closeModal(setShowPricingModal);
  }, []);

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
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
      text: "Village Museum",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/museum",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Alligator Demonstrations",
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
      clickFunction: () => openModal(setShowContactModal),
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
