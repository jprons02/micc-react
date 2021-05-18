import React from "react";

// My custom component
import HeroSection from "components/CustomSections/HeroSection";
import CovidPage from "views/Miccosukee/Pages/covidPage.js";
import { villageColor } from "themes/colors.js";

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

const VillageInfoPage = () => {
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <CovidPage badgeColor={villageColor[500]} entityMargin={true} />
    </React.Fragment>
  );
};

export default VillageInfoPage;
