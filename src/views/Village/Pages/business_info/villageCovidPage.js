import React from 'react';

// My custom component
import HeroSection from 'components/CustomSections/HeroSection';
import AboutUs from 'views/Miccosukee/Pages/aboutUs.js';
import { villageColor } from 'themes/colors.js';

// Images
import bgImage from 'assets/media/img/village/Village_Header1.jpg';

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const VillageInfoPage = () => {
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <AboutUs badgeColor={villageColor[500]} entityMargin={true} />
    </React.Fragment>
  );
};

export default VillageInfoPage;
