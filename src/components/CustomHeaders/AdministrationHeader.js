import React, { useState, useContext, useEffect } from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// theme color
import { administrationColor } from "themes/colors.js";
import administrationLogo from "assets/logos/MiccosukeeTribeOfIndiansOfFlorida.svg";

// context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { MobileMenuDrawerContext } from "contexts/MobileMenuDrawerContext.js";

const AdministrationHeader = () => {
  //classes needed for social icon
  //const classes = useStyles();

  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
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
      text: "Police",
      itemType: "dropdown",
      href: "",
      target: "",
      color: "",
      link: "",
      subMenu: [
        {
          text: "History",
          link: "/police",
          target: "",
        },
        {
          text: "Locations",
          link: "/police/locations",
          target: "",
        },
        {
          text: "Specialized Units",
          link: "/police/specialized-units",
          target: "",
        },
        {
          text: "SORNA",
          link: "https://miccosukeetribe.nsopw.gov/Home.aspx",
          target: "_blank",
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
  ];

  return (
    <React.Fragment>
      <Header
        borderColor={administrationColor[500]}
        color="white"
        brand={administrationLogo}
        brandAlt="administrationLogo"
        brandLink="/administration"
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

export default AdministrationHeader;