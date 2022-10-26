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
import { sawgrassCafeMenu } from 'business_info/foodMenu.js';

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

const SawgrassCafe = () => {
  const language = useLanguage();
  const classes = useStyles();
  let location = useLocation();

  const [showFoodMenu, setShowFoodMenu] = useContext(FoodMenuContext);

  // show food menu on load if url matches.
  // close contact modal on mount if url does not match menu url.
  useEffect(() => {
    //mrg to mcr change
    if (
      location.pathname === '/mrg/sawgrass-cafe-menu' ||
      location.pathname === '/mrg/sawgrass-cafe-menu/' ||
      location.pathname === '/mcr/sawgrass-cafe-menu' ||
      location.pathname === '/mcr/sawgrass-cafe-menu/'
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
              <h2>Sawgrass Cafe</h2>
              {renderPoiHours(mrgHours.poi.sawgrassCafe, language)}
              <p>
                {language
                  ? "Our laid-back cafe is home to the $8 Combo providing all the fuel you need to get back to the gaming action. Serving tasty sandwiches, soups, salads, and Latino favorites like pastelitos, we know you'll enjoy our appetizing dishes and generous portions."
                  : 'Nuestro café relajado es el lugar del Combo de $8 que provee todo el combustible que necesita para volver a la acción del juego. Sirviendo deliciosos sándwiches, sopas, ensaladas y favoritos latinos como pastelitos, sabemos que disfrutará de nuestros apetitosos platos y generosas porciones.'}
              </p>
              <Button
                onClick={() => setShowFoodMenu(true)}
                usetheme="contained"
              >
                {language ? 'MENU' : 'MENÚ'}
              </Button>{' '}
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
        menu={sawgrassCafeMenu}
        title="Sawgrass Cafe Menu"
      />
    </React.Fragment>
  );
};

export default SawgrassCafe;
