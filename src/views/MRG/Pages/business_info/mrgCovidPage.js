import React from 'react';

// My custom component
import HeroSection from 'components/CustomSections/HeroSection';
import AboutUs from 'views/Miccosukee/Pages/aboutUs.js';
import { mrgColor } from 'themes/colors.js';

// Images
import bgImage from 'assets/media/img/mrg/MRG_Header1.jpg';

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const MrgInfoPage = () => {
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <AboutUs badgeColor={mrgColor[500]} entityMargin={true} />
    </React.Fragment>
  );
};

export default MrgInfoPage;
