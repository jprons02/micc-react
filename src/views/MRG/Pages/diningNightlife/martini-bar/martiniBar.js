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

// Images
import bgImage from 'assets/media/img/mrg/dining/dining_header.jpg';
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

// Dates
import { isMartiniBarOpen } from 'business_info/importantDates';

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

const MartiniBar = () => {
  const language = useLanguage();
  const classes = useStyles();

  const history = useHistory();
  /*
  useEffect(() => {
    // If martini bar is not open, redirect to home page.
    if (!isMartiniBarOpen()) {
      history.push('/mcr');
    }
  }, []);
  */

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Martini Bar</h2>
              {isMartiniBarOpen()
                ? renderPoiHours(mrgHours.poi.martiniBar, language)
                : ''}
              {!isMartiniBarOpen() ? (
                <h6 style={{ color: 'red' }}>
                  {language
                    ? 'Martini Bar NOW OPEN every Friday & Saturday 6 PM - 2 AM'
                    : 'Martini Bar AHORA ABIERTO todos los viernes y sábados, de 6 PM a 2 AM'}
                </h6>
              ) : (
                ''
              )}
              <p>
                {language
                  ? 'Chic and comfortable, the Martini Bar is the perfect place to unwind. Join us for live entertainment, classic cocktails, and great times!'
                  : 'Elegante y cómodo, el Martini Bar es el lugar perfecto para relajarte. ¡Visítanos para disfrutar de entretenimiento en vivo, cócteles clásicos y mucha diversión!'}
              </p>
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

export default MartiniBar;
