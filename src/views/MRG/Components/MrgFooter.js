import React from "react";
import Footer from "components/Footer/Footer.js";
import { mrgColor } from "themes/colors.js";

const MrgFooter = () => {
  const miccoMenuItems = [
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
  ];

  const additionalLinksMenuItems = [
    {
      linkText: "Test",
      linkTo: "#",
    },
  ];

  const followUsMenuItems = [
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
  ];

  /*
  const subscribeClick = () => {
    console.log("SUBSCRIBED CLICKED!!");
  };
  */

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
};

export default MrgFooter;
