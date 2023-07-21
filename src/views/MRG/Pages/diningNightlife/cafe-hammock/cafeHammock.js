import React from 'react';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import FoodAndBevDisclaimer from '../disclaimer/disclaimer';
import CustomFoodMenu from 'components/CustomFoodMenu/CustomFoodMenu.js';

// Images
import bgImage from 'assets/media/img/mrg/dining/cafe-hammock/Cafe-Hammock-page-banner.jpeg';
import webbanner from 'assets/media/img/mrg/dining/cafe-hammock/Cafe-Hammock_Webbanner.jpg';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';
import { cafeHammock } from 'business_info/foodMenu.js';
import { isRunning } from 'services/functions/scheduleThis';

// Context
import { useLanguage } from 'contexts/languageContext.js';

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

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div>
          <h2>Café Hammock</h2>
          {renderPoiHours(mrgHours.poi.hammock, language)}
          <p>
            {language
              ? 'Enjoy casual dining with a sophisticated flair. Café Hammock serves up lunch & dinner favorites on the second floor of the Resort. Tasty dishes, craft cocktails, and a relaxed ambiance are all on the menu, so stop by and enjoy a delicious meal before or after you game with us.'
              : 'Disfruta de una cena informal con un toque sofisticado. Café Hammock sirve tus comidas favoritas en el segundo piso del Resort. Deliciosos platos, cócteles artesanales y un ambiente relajado están todos en el menú, así que pasa y disfruta de una deliciosa comida antes o después de visitar nuestra sala de juegos.'}
          </p>
          <img
            style={{
              width: '100%',
              maxWidth: '500px',
              margin: '10px 0',
              marginTop: '20px',
              boxShadow:
                '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
            }}
            src={webbanner}
            alt="meal promotion"
          />
        </div>
        <div style={{ paddingTop: '35px', maxWidth: '850px' }}>
          <h3
            style={{
              fontWeight: '400',
              textTransform: 'uppercase',
              fontSize: '21px',
              textAlign: 'center',
            }}
          >
            Café Hammock Menu
          </h3>
          <CustomFoodMenu menu={cafeHammock} title={'Café Hammock Menu'} />
        </div>
        <FoodAndBevDisclaimer />
      </RaisedContainer>
    </React.Fragment>
  );
};

export default CafeHammock;
