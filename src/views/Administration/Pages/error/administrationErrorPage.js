import React from "react";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomStandard404Page from "components/Custom404Page/CustomStandard404.js";

const sliderContent = [
  {
    id: 1,
    bgImage: "",
    header: "",
    subHeader: "",
  },
];

const AdministrationErrorPage = (props) => {
  const handleClick = () => {
    props.history.push("/administration");
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

export default AdministrationErrorPage;
