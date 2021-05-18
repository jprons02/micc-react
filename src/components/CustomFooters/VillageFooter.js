import React, { useState, useContext, useEffect } from "react";
import Footer from "components/Footer/Footer.js";
import { villageColor } from "themes/colors.js";
import { villageBusinessInfo } from "assets/business_info/genericInfo.js";
import CustomContactModal from "components/CustomModal/CustomContactModals/CustomContactModal.js";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";

const VillageFooter = () => {
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );

  // close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  const footerArray = [
    {
      header: "MICCOSUKEE",
      subMenu: [
        {
          linkText: "Main Home",
          linkTo: "/",
        },
        {
          linkText: "Covid-19",
          linkTo: "/village/covid-19",
        },
        {
          linkText: "Careers",
          linkTo: "#",
        },
      ],
    },
    {
      header: "ADDITIONAL LINKS",
      subMenu: [
        {
          linkText: "Contact",
          //linkTo: "#contact",
          clickFunction: () => openModal(setShowContactModal),
        },
        {
          externalLink: true,
          linkText: "Directions",
          linkTo: "https://goo.gl/maps/1qXGBd2L4s9BDe5h7",
        },
      ],
    },
    {
      header: "FOLLOW US",
      subMenu: [
        {
          externalLink: true,
          linkText: "Facebook",
          linkTo: "https://facebook.com",
        },
        {
          externalLink: true,
          linkText: "Instagram",
          linkTo: "https://instagram.com",
        },
        {
          externalLink: true,
          linkText: "Twitter",
          linkTo: "https://twitter.com",
        },
      ],
    },
    {
      action: true,
      headerDesktop: "SIGN UP FOR OUR PROMOTIONS",
      headerMobile: "SUBSCRIBE",
    },
  ];

  return (
    <React.Fragment>
      <Footer
        footerMenuItems={footerArray}
        color={villageColor}
        signup={villageBusinessInfo.name}
      />
    </React.Fragment>
  );
};

export default VillageFooter;
