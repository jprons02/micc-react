import React from 'react';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';

// Images
import bgImage from 'assets/media/img/mrg/MRG_Header1.jpg';
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
                  ? 'Miccosukee Casino & Resort is South Florida’s gaming pioneer. Players of all levels can try their luck on any of the sizzling 2,000+ machines on our floor — from classic games to the most cutting-edge machines featuring the latest gaming innovations, special effects, bonuses and rewards!'
                  : 'Miccosukee Resort & Casino es el pionero en juegos de casino en el Sur de la Florida. ¡Jugadores de todos los niveles pueden probar su suerte en cualquiera de las 2,000+ increíbles máquinas de nuestro casino – desde juegos clásicos, hasta las máquinas más modernas y tecnológicas con efectos especiales, bonos y premios!'}
              </p>
              <p>
                {language
                  ? 'Exclusive gaming spaces like our swanky High Limit Room are waiting to enhance your gaming experience. Miccosukee Casino & Resort is a non-smoking facility with designated smoking areas outside the building for your convenience. Regardless of how you enjoy yourself, you can play in the comfort of your individual style.'
                  : 'Espacios exclusivos como nuestra elegante High Limit Room están disponibles para realzar su experiencia de juego. Miccosukee Casino & Resort es un edificio libre de humo con áreas designadas para fumadores fuera del edificio para su conveniencia. Cualquiera que sea su preferencia, aquí puede jugar en la comodidad de su estilo individual.'}
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

export default GamingMachines;
