import React from "react";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomStandard404Page from "components/Custom404Page/CustomStandard404.js";

// Images
import bgImage from "assets/img/mrg/MRG_Header1.jpg";

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const MrgErrorPage = (props) => {
  const handleClick = () => {
    props.history.push("/mrg");
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <CustomStandard404Page handleClick={handleClick} />
      </RaisedContainer>
    </React.Fragment>
  );
};

export default MrgErrorPage;
