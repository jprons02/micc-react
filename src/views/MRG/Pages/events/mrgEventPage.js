import React from "react";

// My custom component
import HeroSection from "components/CustomSections/HeroSection";
import EventPage from "views/Miccosukee/Pages/eventPage.js";

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

const MrgEventPage = () => {
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <EventPage entityMargin={true} />
    </React.Fragment>
  );
};

export default MrgEventPage;
