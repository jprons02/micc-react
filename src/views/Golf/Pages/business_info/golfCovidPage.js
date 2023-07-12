import React from 'react';

// My custom component
import HeroSection from 'components/CustomSections/HeroSection';
import AboutUs from 'views/Miccosukee/Pages/aboutUs.js';
import { golfColor } from 'themes/colors.js';

// Images
import bgImage from 'assets/media/img/golf/Golf_Header.jpg';

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const GolfInfoPage = () => {
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <AboutUs badgeColor={golfColor[500]} entityMargin={true} />
    </React.Fragment>
  );
};

export default GolfInfoPage;
