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
import image1 from 'assets/media/img/mrg/dining/international-buffet/HotDish_1024x642.jpeg';
import image2 from 'assets/media/img/mrg/dining/international-buffet/Paella_1024x642.jpeg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';
import { isRunning } from 'services/functions/scheduleThis';

// Context
import { useLanguage } from 'contexts/languageContext.js';
const useStyles = makeStyles(styles);

//const imageArray = [image1, image2];
const imageObj = [
  { src: image1, alt: 'Test' },
  { src: image2, alt: 'Test2' },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Bravo = () => {
  const language = useLanguage();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    history.push('/mcr');
  }, []);

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Bravo Bravissimo!</h2>
              {renderPoiHours(mrgHours.poi.bravo, language)}
              {isRunning([2022, 11, 4]) ? null : (
                <p style={{ fontWeight: '500', fontSize: '15px' }}>
                  {language
                    ? 'Bravo Bravissimo is BACK on Friday, November 4, 2022!'
                    : 'Bravo Bravissimo REGRESA el viernes, 4 de noviembre de 2022!'}
                </p>
              )}
              <p>
                {language
                  ? 'Enjoy traditional Italian dishes and an extensive wine selection in a casual, cozy setting perfect for couples and families alike.'
                  : 'Disfrute platos tradicionales de la cocina Italiana y una extensa selección de vinos en un ambiente casual y acogedor perfecto para parejas y familias.'}
              </p>
              {isRunning([2022, 11, 4]) ? (
                <Button
                  href="https://mapa-media.s3.amazonaws.com/mcr/BravoBravissimo_Menu_Web.pdf"
                  target="_blank"
                  usetheme="contained"
                >
                  {language ? 'MENU' : 'MENÚ'}
                </Button>
              ) : null}
            </div>
          </GridItem>
          <GridItem md={5}>
            {/*
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
            */}
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Bravo;
