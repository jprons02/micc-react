import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import FoodAndBevDisclaimer from '../disclaimer/disclaimer';
import CustomFoodMenu from 'components/CustomFoodMenu/CustomFoodMenu.js';

// Images
import bgImage from 'assets/media/img/mrg/dining/b1grill/b1-grill-banner.jpeg';
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

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div>
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
        </div>
        <div style={{ paddingTop: '30px', maxWidth: '850px' }}>
          <h3
            style={{
              fontWeight: '400',
              textTransform: 'uppercase',
              fontSize: '21px',
              textAlign: 'center',
            }}
          >
            B1 Grill Menu
          </h3>
          <CustomFoodMenu menu={b1GrillMenu} title={'B1 Grill Menu'} />
        </div>
        <FoodAndBevDisclaimer />
      </RaisedContainer>
    </React.Fragment>
  );
};

export default B1Grill;
