import React from "react";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { Icon } from "@material-ui/core";

//testing
import styles from "assets/jss/material-kit-react/views/mrg";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// theme color
import { mrgColor } from "../../../themes/colors.js";
import mrgLogo from "assets/img/mrg/MRG_Logo.svg";

const useStyles = makeStyles(styles);

const MrgHeader = () => {
  //classes needed for social icon
  const classes = useStyles();
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
      link: "/dining-nightlife",
      subMenu: [
        {
          text: "Bravo Bravissimo!",
          link: "/bravo-bravissimo",
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
      text: "Contact",
      itemType: "",
      href: "",
      target: "",
      color: "",
      link: "/contact",
      //icon: () => <Icon>chevron_right</Icon>,
    },
    {
      text: "Book A Room",
      itemType: "action",
      href: "",
      target: "",
      color: "",
      link: "/gaming",
      //icon: () => <Icon>chevron_right</Icon>,
    },
  ];

  return (
    <Header
      borderColor={mrgColor[500]}
      color="white"
      //color="primary"
      //brand={<img style={{ width: "175px" }} src={mrgLogo} alt="mrg_logo" />}
      brand={mrgLogo}
      brandAlt="mrgLogo"
      rightLinks={<HeaderLinks menuItems={menuLinks} />}
      fixed
      changeColorOnScroll={{
        height: 200,
        color: "white",
      }}
    />
  );
};

//

export default MrgHeader;
