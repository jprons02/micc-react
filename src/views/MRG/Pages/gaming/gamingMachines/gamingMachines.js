import React from 'react';
import { Link, withRouter, useRouteMatch } from 'react-router-dom';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';

// Images
import bgImage from 'assets/media/img/mrg/gaming/machines/slots-page-banner-1.jpeg';
import image1 from 'assets/media/img/mrg/gaming/machines/MRG_Gaming1.jpg';
import image2 from 'assets/media/img/mrg/gaming/machines/MRG_Gaming2.jpg';
import image3 from 'assets/media/img/mrg/gaming/machines/MRG_Gaming3.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3];
const imageObj = [
  { src: image1, alt: 'Gaming machine 1' },
  { src: image2, alt: 'Gaming machine 2' },
  { src: image3, alt: 'Gaming machine 3' },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const GamingMachines = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? 'Gaming Machines' : 'Máquinas de Juego'}</h2>
              <p>
                {language
                  ? 'Get your game on with close to 2,000 slot machines featuring the latest special effects, bonuses, and rewards in a smoke-free environment. Enhance your gaming experience in our High-Limit Room, and feel free to light up in our dedicated Smoking Casino Area next to the M Sphere Rewards desk.'
                  : 'Empieza a jugar con cerca de 2000 máquinas tragamonedas que cuentan con los últimos efectos especiales, bonos y recompensas en un ambiente libre de humo. Mejore su experiencia de juego en nuestra sala de límite alto y siéntase libre de fumar en nuestra área de casino para fumadores junto al escritorio de M Sphere Rewards.'}
              </p>
              <Button
                component={Link}
                to="/casino/promotions"
                usetheme="contained"
              >
                {language ? 'Slots Promos' : 'promociones'}
              </Button>
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

export default GamingMachines;
