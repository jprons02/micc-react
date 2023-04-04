import React from 'react';

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
import image1 from 'assets/media/img/mrg/dining/deli/deli-01.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

import { isRunning } from 'services/functions/scheduleThis';

const useStyles = makeStyles(styles);

//const imageArray = [image1];
const imageObj = [{ src: image1, alt: 'Test1' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const MaxsGrabAndGo = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Max's Grab & Go</h2>
              {renderPoiHours(mrgHours.poi.maxsgrabandgo, language)}
              <p style={{ textTransform: 'uppercase', fontWeight: 400 }}>
                {language
                  ? 'Located in the Hotel Lobby'
                  : 'Ubicado en el Lobby del Hotel'}
              </p>
              <p>
                {language
                  ? 'Craving a quick bite or a sweet treat? Choose from a variety of sandwiches, snacks, desserts, and beverages conveniently located in the hotel lobby next to the gaming action.'
                  : '¿Se te antoja un aperitivo o algo dulce? Elige entre una variedad de sándwiches, refrigerios, postres y bebidas en nuestro local ubicado en el lobby del hotel junto a la acción del juego.'}
              </p>
              <Button
                target="_blank"
                href="https://mapa-media.s3.amazonaws.com/website/Max's_DigitalMenu.pdf"
                usetheme="contained"
              >
                {language ? 'MENU' : 'MENÚ'}
              </Button>
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

export default MaxsGrabAndGo;
