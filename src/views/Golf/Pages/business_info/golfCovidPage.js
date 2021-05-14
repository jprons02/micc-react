import React from "react";

// My custom component
import HeroSection from "components/CustomSections/HeroSection";
import CovidPage from "views/Miccosukee/Pages/covidPage.js";
import { golfColor } from "themes/colors.js";

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

const GolfInfoPage = () => {
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <CovidPage badgeColor={golfColor[500]} entityMargin={true} />
    </React.Fragment>
  );
};

export default GolfInfoPage;
