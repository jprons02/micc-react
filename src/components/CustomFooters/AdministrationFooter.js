import React, { useContext, useEffect } from "react";

// Custom Component
import Footer from "components/Footer/Footer.js";

// Theme
import { administrationColor } from "themes/colors.js";

// Business Info
import { airboatsSocialMedia } from "business_info/socialMedia.js";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";

const AdministrationFooter = () => {
  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );

  // close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);

  /*
  const openModal = (setState) => {
    setState(true);
  };
  */

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
          externalLink: true,
          linkText: "Careers",
          linkTo:
            "https://www.indeed.com/cmp/Miccosukee-Tribe-of-Indians-of-Florida/jobs",
        },
      ],
    },
    {
      header: "GAMING & GOLF",
      subMenu: [
        {
          linkText: "Resort & Gaming",
          linkTo: "/mrg",
        },
        {
          linkText: "Golf & Country Club",
          linkTo: "/golf",
        },
      ],
    },
    {
      header: "EXPERIENCES",
      subMenu: [
        {
          linkText: "Indian Village",
          linkTo: "/village",
        },
        {
          linkText: "Airboats",
          linkTo: "/airboats",
        },
      ],
    },
    {
      header: "FOLLOW US",
      subMenu: [
        {
          externalLink: true,
          linkText: "Twitter",
          linkTo: airboatsSocialMedia.twitter,
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Footer footerMenuItems={footerArray} color={administrationColor} />
    </React.Fragment>
  );
};

export default AdministrationFooter;
