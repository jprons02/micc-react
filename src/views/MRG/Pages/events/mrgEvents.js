import React from "react";

// My custom component
import HeroSection from "components/CustomSections/HeroSection";
import Events from "views/Miccosukee/Pages/events.js";
import { mrgColor } from "themes/colors.js";

// Images
import bgImage from "assets/img/bg3.jpg";

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const MrgEvents = () => {
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <Events badgeColor={mrgColor[500]} entityMargin={true} />
    </React.Fragment>
  );
};

export default MrgEvents;
