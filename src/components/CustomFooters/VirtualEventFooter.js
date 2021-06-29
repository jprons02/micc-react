import React, { useEffect } from "react";

import { historyColor } from "themes/colors.js";

// Custom Component
import Footer from "components/Footer/Footer.js";

// Business Info
import { airboatsSocialMedia } from "business_info/socialMedia.js";

const VirtualEventFooter = () => {
  const footerArray = [
    {
      header: "MICCOSUKEE",
      subMenu: [
        {
          linkText: "Main Home",
          linkTo: "/",
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
      <Footer noLanguage={true} footerMenuItems={footerArray} />
    </React.Fragment>
  );
};

export default VirtualEventFooter;
