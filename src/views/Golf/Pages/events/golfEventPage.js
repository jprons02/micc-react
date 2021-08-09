import React from "react";

// My custom component
import HeroSection from "components/CustomSections/HeroSection";
import EventPage from "views/Miccosukee/Pages/eventPage.js";

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

const GolfEventPage = () => {
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <EventPage entity={"golf"} entityMargin={true} />
    </React.Fragment>
  );
};

export default GolfEventPage;
