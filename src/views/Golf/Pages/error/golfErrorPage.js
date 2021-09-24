import React from "react";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomStandard404Page from "components/Custom404Page/CustomStandard404.js";

// Images
import bgImage from "assets/media/img/golf/Golf_Header.jpg";

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const GolfErrorPage = (props) => {
  const handleClick = () => {
    props.history.push("/golf");
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

export default GolfErrorPage;
