import React from 'react';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';

// Images
import bgImage from 'assets/media/img/mrg/amenities/pool-gym/pool-fitness-page-banner.jpeg';
import image1 from 'assets/media/img/mrg/amenities/pool-gym/pool.jpeg';
import image2 from 'assets/media/img/mrg/amenities/pool-gym/pool-chairs.jpeg';
import image3 from 'assets/media/img/mrg/amenities/pool-gym/hottub.jpeg';
import image4 from 'assets/media/img/mrg/amenities/pool-gym/fitness1.jpeg';
import image5 from 'assets/media/img/mrg/amenities/pool-gym/fitness2.jpeg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3, image4, image5];
const imageObj = [
  { src: image1, alt: 'Pool side a' },
  { src: image2, alt: 'Pool side b' },
  { src: image3, alt: 'Gym cardio equipment' },
  { src: image4, alt: 'Gym weights' },
  { src: image5, alt: 'Courtyard' },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const PoolGym = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <div>
                <h2>{language ? 'Pool & Spa' : 'Piscina'}</h2>
                {renderPoiHours(mrgHours.poi.poolGym, language)}
                <p>
                  Looking for a luxurious getaway with a stunning pool? Look no
                  further than Miccosukee Casino Resort! Our pool area boasts a
                  unique design with plenty of seating options for our guests to
                  enjoy. The pool area also features a hot tub, perfect for a
                  relaxing soak after a long day.
                </p>
              </div>
              <div style={{ marginTop: '30px' }}>
                <h2>{language ? 'Fitness Center' : 'Fitness Center'}</h2>
                {renderPoiHours(mrgHours.poi.poolGym, language)}
                <p>
                  We understand the importance of maintaining a healthy
                  lifestyle even while on vacation. That’s why we offer our
                  fully equipped fitness center to all guests.
                </p>
                <p>
                  Whether you’re a fitness enthusiast or just looking to
                  maintain your health while on vacation, our fitness center
                  provides a comfortable and motivating environment for all.
                </p>
              </div>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default PoolGym;
