import React, { useContext, useEffect } from "react";

// Custom Component
import Footer from "components/Footer/Footer.js";

// Theme
import { mrgColor } from "themes/colors.js";

// Business Info
import { mrgBusinessInfo } from "business_info/genericInfo.js";
import { mrgSocialMedia } from "business_info/socialMedia.js";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { useLanguage } from "contexts/languageContext.js";

const MrgFooter = () => {
  const language = useLanguage();
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
          linkText: language ? "Main Home" : "Página Principal",
          linkTo: "/",
        },
        {
          linkText: "Covid-19",
          linkTo: "/mrg/covid-19",
        },
        {
          externalLink: true,
          linkText: language ? "Careers" : "Empleos",
          linkTo:
            "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=346f5352-8215-418a-95b5-a67f6bba88ac&ccId=19000101_000001&type=MP&lang=en_US",
        },
      ],
    },
    {
      header: language ? "ADDITIONAL LINKS" : "ENLACES ADICIONALES",
      subMenu: [
        {
          linkText: language ? "Contact" : "Contacto",
          linkTo: "#contact",
          clickFunction: () => openModal(setShowContactModal),
        },
        {
          externalLink: true,
          linkText: language ? "Directions" : "Direcciones",
          linkTo: "https://goo.gl/maps/yZ9QCXJ869UqZRxJ9",
        },
        {
          linkText: language ? "Banquets & Catering" : "test",
          linkTo: "/mrg/banquets-catering",
        },
      ],
    },
    {
      header: language ? "FOLLOW US" : "CONÉCTESE CON NOSOTROS",
      subMenu: [
        {
          externalLink: true,
          linkText: "Facebook",
          linkTo: mrgSocialMedia.facebook,
        },
        {
          externalLink: true,
          linkText: "Instagram",
          linkTo: mrgSocialMedia.instagram,
        },
        {
          externalLink: true,
          linkText: "Twitter",
          linkTo: mrgSocialMedia.twitter,
        },
      ],
    },
    {
      action: true,
      headerDesktop: language
        ? "SIGN UP FOR OUR PROMOTIONS"
        : "INSCRÍBASE A NUESTRAS PROMOCIONES",
      headerMobile: language ? "SUBSCRIBE" : "SUSCRÍBASE",
    },
  ];

  return (
    <React.Fragment>
      <Footer
        footerMenuItems={footerArray}
        color={mrgColor}
        signup={mrgBusinessInfo.name}
      />
    </React.Fragment>
  );
};

export default MrgFooter;
