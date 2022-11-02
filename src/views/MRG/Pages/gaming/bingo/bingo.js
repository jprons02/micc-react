import React from 'react';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import Button from 'components/CustomButtons/Button.js';

// Images
import bgImage from 'assets/media/img/mrg/gaming/casino_header.jpg';
import image1 from 'assets/media/img/mrg/gaming/bingo/BINGO_SLIDE1.jpeg';
import image2 from 'assets/media/img/mrg/gaming/bingo/BINGO_SLIDE2.jpeg';
import image3 from 'assets/media/img/mrg/gaming/bingo/BINGO_SLIDE3.jpeg';
//import bingoPromoEn from 'assets/media/img/mrg/gaming/bingo/BINGO-ENLIGH-WEB.jpg';
import bingoPromoEn from 'assets/media/img/mrg/gaming/bingo/bingo_promos_en.jpg';
import bingoPromoSp from 'assets/media/img/mrg/gaming/bingo/bingo_promos_sp.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

// Services
import { isRunning } from 'services/functions/scheduleThis';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3];
const imageObj = [
  { src: image1, alt: 'Bingo image 1' },
  { src: image2, alt: 'Bingo image 2' },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Bingo = () => {
  const language = useLanguage();
  const classes = useStyles();
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Bingo</h2>
              <p>
                {language
                  ? 'A South Florida staple since 1990, Miccosukee Casino & Resort’s Bingo Hall is the high-stakes bingo room to try your luck in the classic game of chance! With high payouts and plenty of rewards through our Miccosukee One Rewards Program, our High Stakes Bingo pays to play! Regardless of experience, it’s perfect for single players, couples and large groups.'
                  : '¡Un establecimiento principal del Sur de la Florida desde 1990, la Sala de Bingo de Miccosukee Casino & Resort es el lugar ideal para probar su suerte con el bingo de altas apuestas! ¡Con grandes premios y pagos a través de nuestro programa Miccosukee One, nuestro Bingo de Altas Apuestas le recompensa por jugar! Sin importar su nivel de experiencia, es el lugar perfecto para jugadores solos, parejas y grupos grandes.'}
              </p>

              <div style={{ marginTop: '25px' }}>
                <h6>
                  {language
                    ? 'Bingo will operate on Wednesday, Thursday, Friday and Saturday'
                    : 'Bingo operará miércoles, jueves, viernes y sábado'}
                </h6>
                <ul>
                  <li>
                    {language
                      ? 'Sales begin at 4:15 P.M.'
                      : 'Ventas comienzan a las 4:15 P.M.'}
                  </li>
                  <li>
                    {language
                      ? 'Warm-ups begin at 6:30 P.M.'
                      : 'Prácticas comienzan a las 6:30 P.M.'}
                  </li>
                  <li>
                    {language
                      ? 'Regular session begins at 7:15 P.M.'
                      : 'Sesión regular comienza a las 7:15 P.M.'}
                  </li>
                </ul>

                {/*
                <h6>
                  {language
                    ? 'New safety measures:'
                    : 'Nuevas Medidas de Seguridad'}
                </h6>
                <ul>
                  <li>
                    {language
                      ? 'All gaming electronic devices will be sanitized prior to and after each use.'
                      : 'Todos los equipos electrónicos serán desinfectados antes y después de cada uso.'}
                  </li>
                </ul>
                */}

                {isRunning([2022, 11, 1], [2022, 11, 26]) ? (
                  <a
                    target="_blank"
                    href="https://mapa-media.s3.amazonaws.com/website/monthly_bingo_promo.pdf"
                  >
                    <img
                      style={{
                        width: '100%',
                        margin: '10px 0',
                        boxShadow:
                          '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
                      }}
                      src={language ? bingoPromoEn : bingoPromoSp}
                    />
                  </a>
                ) : null}
              </div>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              {/*<img
                style={{ width: "100%" }}
                src={language ? bingoPromoEn : bingoPromoSp}
              />*/}
              {<CustomImageSlider images={imageObj} />}
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Bingo;
