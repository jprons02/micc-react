import React from "react";

// My custom component
import HeroSection from "components/CustomSections/HeroSection";
import EventPage from "views/Miccosukee/Pages/eventPage.js";

// Images
import bgImage from "assets/media/img/mrg/MRG_Header1.jpg";

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
      <EventPage entity={"mrg"} entityMargin={true} />
    </React.Fragment>
  );
};

export default MrgEventPage;
