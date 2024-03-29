import React from "react";

// My custom component
import HeroSection from "components/CustomSections/HeroSection";
import CovidPage from "views/Miccosukee/Pages/covidPage.js";
import { airboatsColor } from "themes/colors.js";

// Images
import bgImage from "assets/media/img/village/Village_Header1.jpg";

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const AirboatsInfoPage = () => {
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <CovidPage badgeColor={airboatsColor[500]} entityMargin={true} />
    </React.Fragment>
  );
};

export default AirboatsInfoPage;
