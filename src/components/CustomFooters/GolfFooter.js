import React, { useContext, useEffect } from "react";

// Custom Component
import Footer from "components/Footer/Footer.js";

// Theme
import { golfColor } from "themes/colors.js";

// Business Info
import { golfBusinessInfo } from "business_info/genericInfo.js";
import { golfSocialMedia } from "business_info/socialMedia.js";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";

const GolfFooter = () => {
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
          linkTo: "/golf/covid-19",
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
          linkTo: "https://goo.gl/maps/SxyAMrs1jSX7MrVK8",
        },
      ],
    },
    {
      header: "FOLLOW US",
      subMenu: [
        {
          externalLink: true,
          linkText: "Facebook",
          linkTo: golfSocialMedia.facebook,
        },
        {
          externalLink: true,
          linkText: "Instagram",
          linkTo: golfSocialMedia.instagram,
        },
        {
          externalLink: true,
          linkText: "Twitter",
          linkTo: golfSocialMedia.twitter,
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
        color={golfColor}
        signup={golfBusinessInfo.name}
      />
    </React.Fragment>
  );
};

export default GolfFooter;
