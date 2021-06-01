import React, { useContext, useEffect } from "react";

// Custom Component
import Footer from "components/Footer/Footer.js";

// Theme
import { villageColor } from "themes/colors.js";

// Business Info
import { villageBusinessInfo } from "business_info/genericInfo.js";
import { villageSocialMedia } from "business_info/socialMedia.js";

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
          linkTo: villageSocialMedia.facebook,
        },
        {
          externalLink: true,
          linkText: "Instagram",
          linkTo: villageSocialMedia.instagram,
        },
        {
          externalLink: true,
          linkText: "Twitter",
          linkTo: villageSocialMedia.twitter,
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
