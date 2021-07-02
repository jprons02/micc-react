import React from "react";

// My custom component
import HeroSection from "components/CustomSections/HeroSection";
import Events from "views/Miccosukee/Pages/events.js";
import { golfColor } from "themes/colors.js";

// Images
import bgImage from "assets/img/golf/Golf_Header.jpg";

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const GolfEvents = () => {
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <Events badgeColor={golfColor[500]} entityMargin={true} />
    </React.Fragment>
  );
};

export default GolfEvents;
