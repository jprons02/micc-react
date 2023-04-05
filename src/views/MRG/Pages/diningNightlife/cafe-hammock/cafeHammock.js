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
import image1 from 'assets/media/img/mrg/dining/cafe-hammock/CafeHammock_Interior.jpeg';
import image2 from 'assets/media/img/mrg/dining/cafe-hammock/filet.jpg';
import image3 from 'assets/media/img/mrg/dining/cafe-hammock/chicken.jpg';
import image4 from 'assets/media/img/mrg/dining/cafe-hammock/caprese.jpg';
import webbanner from 'assets/media/img/mrg/dining/cafe-hammock/Cafe-Hammock_Webbanner.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';
//import { isOrAfterDate } from "services/functions/scheduleThis";
import { isRunning } from 'services/functions/scheduleThis';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3];
const imageObj = [
  { src: image1, alt: 'Cafe Hammock interior' },
  { src: image2, alt: 'Steak' },
  { src: image3, alt: 'Chicken' },
  { src: image4, alt: 'Caprese salad' },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const CafeHammock = () => {
  const language = useLanguage();
  const classes = useStyles();

  const history = useHistory();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          {language
            ? 'Café Hammock has moved to the Resort 2nd floor. Please join us upstairs for your fine dining favorites!'
            : 'Café Hammock se ha mudado al segundo piso del resort. ¡visítanos para disfrutar de tus platos favoritos!'}
        </p>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Café Hammock</h2>
              {renderPoiHours(mrgHours.poi.hammock, language)}
              <p>
                {language
                  ? 'Enjoy casual dining with a sophisticated flair. Café Hammock serves up lunch & dinner favorites on the second floor of the Resort. Tasty dishes, craft cocktails, and a relaxed ambiance are all on the menu, so stop by and enjoy a delicious meal before or after you game with us.'
                  : 'Disfruta de una cena informal con un toque sofisticado. Café Hammock sirve tus comidas favoritas en el segundo piso del Resort. Deliciosos platos, cócteles artesanales y un ambiente relajado están todos en el menú, así que pasa y disfruta de una deliciosa comida antes o después de visitar nuestra sala de juegos.'}
              </p>
              <Button
                href="https://mapa-media.s3.amazonaws.com/website/CafeHammock_Menu_Web_2.pdf"
                target="_blank"
                usetheme="contained"
              >
                {language ? 'Menu' : 'Menú'}
              </Button>{' '}
              <img
                style={{
                  width: '100%',
                  margin: '10px 0',
                  marginTop: '30px',
                  boxShadow:
                    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
                }}
                src={webbanner}
                alt="meal promotion"
              />
            </div>
          </GridItem>
          {/*
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
          </GridItem>
          */}
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default CafeHammock;
