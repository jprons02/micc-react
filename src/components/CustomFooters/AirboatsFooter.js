import React, { useContext, useEffect } from "react";

// Custom Component
import Footer from "components/Footer/Footer.js";

// Theme
import { airboatsColor } from "themes/colors.js";

// Business Info
import { airboatsBusinessInfo } from "business_info/genericInfo.js";
import { airboatsSocialMedia } from "business_info/socialMedia.js";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";

const AirboatsFooter = () => {
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
          linkTo: "/airboats/covid-19",
        },
        {
          externalLink: true,
          linkText: "Careers",
          linkTo:
            "https://www.indeed.com/cmp/Miccosukee-Tribe-of-Indians-of-Florida/jobs",
        },
      ],
    },
    {
      header: "ADDITIONAL LINKS",
      subMenu: [
        {
          linkText: "Contact",
          linkTo: "#",
          clickFunction: () => openModal(setShowContactModal),
        },
        {
          externalLink: true,
          linkText: "Directions",
          linkTo: "https://goo.gl/maps/wvmyDUyHrpPk7bfq9",
        },
      ],
    },
    {
      header: "FOLLOW US",
      subMenu: [
        {
          externalLink: true,
          linkText: "Facebook",
          linkTo: airboatsSocialMedia.facebook,
        },
        {
          externalLink: true,
          linkText: "Instagram",
          linkTo: airboatsSocialMedia.instagram,
        },
        {
          externalLink: true,
          linkText: "Twitter",
          linkTo: airboatsSocialMedia.twitter,
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
        color={airboatsColor}
        signup={airboatsBusinessInfo.name}
      />
    </React.Fragment>
  );
};

export default AirboatsFooter;
