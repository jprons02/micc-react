import React, { useState, useContext, useEffect } from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { Icon } from "@material-ui/core";

// Context
import { BookRoomContext } from "contexts/BookRoomContext.js";

//testing
import styles from "assets/jss/material-kit-react/views/mrg";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// theme color
import { mrgColor } from "themes/colors.js";
import mrgLogo from "assets/logos/MiccosukeeResort&Gaming.svg";

import BookRoomModal from "components/CustomModal/CustomBookRoomModal/CustomBookRoomModal.js";

const useStyles = makeStyles(styles);

const MrgHeader = () => {
  //classes needed for social icon
  //const classes = useStyles();
  useEffect(() => {
    //Close bookroom modal
    closeModal(setShowBookRoomModal);
  }, []);

  const [showBookRoomModal, setShowBookRoomModal] = useContext(BookRoomContext);

  const openModal = (setState) => {
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  const menuLinks = [
    {
      text: "Accommodations",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/accommodations",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Amenities",
      itemType: "dropdown",
      href: "",
      target: "",
      color: "",
      link: "",
      subMenu: [
        {
          text: "Salon & Spa",
          link: "/salon-spa",
          target: "",
        },
        {
          text: "Club Egret",
          link: "/club-egret",
          target: "",
        },
        {
          text: "Pool & Gym",
          link: "/pool-gym",
          target: "",
        },
        {
          text: "Teen Arcade",
          link: "/teen-arcade",
          target: "",
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Gaming",
      itemType: "dropdown",
      href: "",
      target: "",
      color: "",
      link: "/gaming",
      subMenu: [
        {
          text: "Promotions",
          link: "/promotions",
          target: "",
        },
        {
          text: "Miccosukee One Rewards Program",
          link: "/miccosukee-one",
          target: "",
        },
        {
          text: "Gaming Machines",
          link: "/gaming-machines",
          target: "",
        },
        {
          text: "Poker",
          link: "/poker",
          target: "",
        },
        {
          text: "Bingo",
          link: "/bingo",
          target: "",
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Dining & Nightlife",
      itemType: "dropdown",
      href: "",
      target: "",
      color: "",
      link: "",
      subMenu: [
        {
          text: "Bravo Bravissimo!",
          link: "/bravo-bravissimo",
          target: "",
        },
        {
          text: "Empeeke Aaweeke International Buffet",
          link: "/international-buffet",
          target: "",
        },
        {
          text: "Empeeke Aya Deli",
          link: "/deli",
          target: "",
        },
        {
          text: "Café Hammock",
          link: "/cafe-hammock",
          target: "",
          divider: true,
        },
        {
          text: "Cypress Lounge",
          link: "/cypress-lounge",
          target: "",
        },
        {
          text: "Martini Bar",
          link: "/martini-bar",
          target: "",
        },
      ],
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Events",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/events",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Book A Room",
      itemType: "action",
      href: "",
      target: "",
      color: "",
      link: "",
      clickFunction: () => openModal(setShowBookRoomModal),
      //icon: () => <Icon>chevron_right</Icon>,
    },
  ];

  return (
    <React.Fragment>
      <Header
        borderColor={mrgColor[500]}
        color="white"
        brand={mrgLogo}
        brandAlt="mrgLogo"
        brandLink="/mrg"
        rightLinks={<HeaderLinks menuItems={menuLinks} />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />
      <BookRoomModal
        showModal={showBookRoomModal}
        closeModal={() => closeModal(setShowBookRoomModal)}
      />
    </React.Fragment>
  );
};

//

export default MrgHeader;
