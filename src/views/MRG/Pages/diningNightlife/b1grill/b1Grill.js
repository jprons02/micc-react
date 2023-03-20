import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import CustomFoodMenuModal from 'components/CustomModal/CustomFoodMenuModal/CustomFoodMenuModal.js';

// Images
import bgImage from 'assets/media/img/mrg/dining/dining_header.jpg';
import image1 from 'assets/media/img/mrg/home/burgerfries.jpg';
import image2 from 'assets/media/img/mrg/home/fresh-tasty-hot-dog-with-fried-potatoes.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';
import { b1GrillMenu } from 'business_info/foodMenu.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';
import { FoodMenuContext } from 'contexts/FoodMenuContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2];
const imageObj = [
  { src: image1, alt: 'Hamburger' },
  { src: image2, alt: 'Hot dog' },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const B1Grill = () => {
  const language = useLanguage();
  const classes = useStyles();
  let location = useLocation();

  const [showFoodMenu, setShowFoodMenu] = useContext(FoodMenuContext);

  // show food menu on load if url matches.
  // close contact modal on mount if url does not match menu url.
  useEffect(() => {
    //mrg to mcr change
    if (
      location.pathname === '/mrg/b1grill-menu' ||
      location.pathname === '/mrg/b1grill-menu/' ||
      location.pathname === '/mcr/b1grill-menu' ||
      location.pathname === '/mcr/b1grill-menu/'
    ) {
      setShowFoodMenu(true);
    } else {
      closeModal(setShowFoodMenu);
    }
  }, []);

  const closeModal = (setState) => {
    setState(false);
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>B1 Grill</h2>
              {renderPoiHours(mrgHours.poi.b1Grill, language)}
              <p style={{ fontWeight: 400 }}>
                {language
                  ? 'Located in the Bingo Hall.'
                  : 'Ubicado en la Sala de Bingo.'}
              </p>
              <p>
                {language
                  ? 'Do it your way with quick and casual eats located in the Bingo Hall. Open Sunday - Thursday, 12 PM - 12 AM, and Friday & Saturday, 12 PM - 1 AM.'
                  : 'Nuestro café sirve sándwiches, sopas, ensaladas en la Sala de Bingo. Abierto de domingo a jueves, de 12 PM a 12 AM, y viernes y sábado, de 12 PM a 1 AM.'}
              </p>
              {/*
              <Button
                onClick={() => setShowFoodMenu(true)}
                usetheme="contained"
              >
                {language ? 'MENU' : 'MENÚ'}
              </Button>{' '}
              */}
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
      <CustomFoodMenuModal
        showModal={showFoodMenu}
        closeModal={() => closeModal(setShowFoodMenu)}
        menu={b1GrillMenu}
        title="B1 Grill Menu"
      />
    </React.Fragment>
  );
};

export default B1Grill;
