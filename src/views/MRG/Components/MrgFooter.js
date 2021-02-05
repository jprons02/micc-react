import React from "react";
import Footer from "components/Footer/Footer.js";
import { mrgColor } from "themes/colors.js";

const MrgFooter = () => {
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
          linkTo: "#",
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
          linkText: "Test",
          linkTo: "#",
        },
      ],
    },
    {
      header: "FOLLOW US",
      subMenu: [
        {
          linkText: "Facebook",
          linkTo: "#",
        },
        {
          linkText: "Instagram",
          linkTo: "#",
        },
        {
          linkText: "Twitter",
          linkTo: "#",
        },
      ],
    },
    {
      action: true,
      headerDesktop: "SIGN UP FOR OUR PROMOTIONS",
      headerMobile: "SUBSCRIBE",
    },
  ];

  /*
  const subscribeClick = () => {
    console.log("SUBSCRIBED CLICKED!!");
  };
  */

  return <Footer footerMenuItems={footerArray} color={mrgColor} signup="mrg" />;
};

export default MrgFooter;

/*
  return (
    <Footer
      header1="MICCOSUKEE"
      headersubmenu1={miccoMenuItems}
      header2="ADDITIONAL LINKS"
      headersubmenu2={additionalLinksMenuItems}
      header3="FOLLOW US"
      headersubmenu3={followUsMenuItems}
      header4="SUBSCRIBE"
      header4Desktop="SIGN UP FOR OUR PROMOTIONS"
      //header4onclick={subscribeClick}
      color={mrgColor}
      signup="mrg"
    />
  );
*/
