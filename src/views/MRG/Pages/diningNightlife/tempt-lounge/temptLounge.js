import React, { useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import FoodAndBevDisclaimer from '../disclaimer/disclaimer';

// Images
import bgImage from 'assets/media/img/mrg/dining/martini-bar/Martini-Bar-banner.jpeg';
import image1 from 'assets/media/img/mrg/dining/martini-bar/MartiniBar_01.jpeg';

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

//const imageArray = [image1];
const imageObj = [{ src: image1, alt: 'Martini bar' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const TemptLounge = () => {
  const language = useLanguage();
  const classes = useStyles();

  const history = useHistory();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div className={classes.leftTextArea}>
          <h2>Tempt Lounge</h2>
          <p
            style={{ fontSize: '24px', fontStyle: 'italic', marginTop: '20px' }}
          >
            Opening in September
          </p>
          <p>
            A modern entertainment destination is coming to Miccosukee Casino &
            Resort. Tempt Lounge will lure you in with its sleek, sexy design,
            state-of-the-art lighting and sound, expertly crafted cocktails, and
            live performances by the best local acts and DJs. Stay tuned for the
            grand opening date.
          </p>
        </div>
        <FoodAndBevDisclaimer />
      </RaisedContainer>
    </React.Fragment>
  );
};

export default TemptLounge;
