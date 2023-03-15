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

const Maxs = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Max's Room</h2>
              {renderPoiHours(mrgHours.poi.maxs, language)}
              <p
                style={{
                  marginTop: '-13px',
                  marginBottom: '15px',
                  fontSize: '12px',
                }}
              >
                {language
                  ? '(Breakfast ends at 12 P.M.)'
                  : 'Desayuno termina a las 12 P.M.'}
              </p>
              <p style={{ textTransform: 'uppercase', fontWeight: 400 }}>
                {language
                  ? 'Located on the 2nd Floor'
                  : 'Ubicado en el segundo piso'}
              </p>
              <p>
                {language
                  ? 'Stop by for breakfast, lunch, and dinner favorites at our second-floor location. Savor worldwide cuisine with our international plates, including Mexican, Asian, and Hispanic combinations. Take it to another level with flavorful executive plates perfect for steak and seafood lovers.'
                  : 'Visítanos para desayunar, almorzar y cenar en nuestra ubicación en el segundo piso. Saborea la cocina mundial con nuestros platos internacionales, que incluyen combinaciones mexicanas, asiáticas e hispanas. Llévalo a otro nivel con sabrosos platos ejecutivos perfectos para los amantes de la carne y los mariscos.'}
              </p>
              <Button
                target="_blank"
                href="https://mapa-media.s3.amazonaws.com/website/MaxsRoomMenu_Web.pdf"
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

export default Maxs;
