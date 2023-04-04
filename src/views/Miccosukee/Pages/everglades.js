import React, { useEffect } from 'react';

import { isRunning } from 'services/functions/scheduleThis';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

//images
import villageImg from 'assets/media/img/miccosukee/pages/glades/alligator_demo.jpg';
import airboatsImg from 'assets/media/img/miccosukee/pages/glades/airboats_1.jpg';

//Miccosukee Component
import MiccosukeeCard from 'components/CustomCards/MiccosukeeCard.js';

// styles
import styles from 'assets/jss/material-kit-react/views/miccosukee/pages/gaming_golf.js';

// context
import { useLanguage } from 'contexts/languageContext.js';

// business info
import { villageHours, airboatsHours } from 'business_info/hours.js';
import {
  villageBusinessInfo,
  airboatsBusinessInfo,
} from 'business_info/genericInfo.js';

const useStyles = makeStyles(styles);

const GamingGolf = () => {
  const language = useLanguage();
  const classes = useStyles();

  const d = new Date();
  // returns 0-6, starts on sunday, sunday = 0
  const dayOfWeek = d.getDay();

  const cards = [
    {
      id: 1,
      title: language ? 'Indian Village' : 'Indian Village (Aldea Indígena)',
      theme: 'village',
      description: language
        ? 'Adventure into the native habitat of the Miccosukee Tribe and learn about their culture, lifestyle and history.'
        : 'Descubre el hábitat nativo de la Tribu Miccosukee y aprende sobre su cultura, estilo de vida e historia.',
      imgSrc: villageImg,
      buttonOne: {
        text: language ? 'WEBSITE' : 'Página web',
        usesRouter: true,
        link: '/village',
      },
      hours: language
        ? `Today's Hours: ${villageHours.todaysHours(dayOfWeek, language)} ${
            isRunning([2022, 11, 24], [2022, 11, 25])
              ? '(Thanksgiving Day Hours)'
              : ''
          }`
        : `Horario de Hoy: ${villageHours.todaysHours(dayOfWeek, language)} ${
            isRunning([2022, 11, 24], [2022, 11, 25])
              ? '(Horario del Día Acción de Gracias​)'
              : ''
          }`,
      phone: villageBusinessInfo.phone,
      address: villageBusinessInfo.address,
    },
    {
      id: 2,
      title: language ? 'Airboats' : 'Airboats (Paseos en Hidrodeslizador)',
      theme: airboatsBusinessInfo.name,
      description: language
        ? 'Take an exhilarating ride and discover the Everglades like never before!'
        : '¡Toma un paseo emocionante y descrubre los Everglades como nunca antes!',
      imgSrc: airboatsImg,
      buttonOne: {
        text: language ? 'WEBSITE' : 'Página web',
        usesRouter: true,
        link: '/airboats',
      },
      hours: language
        ? `Today's Hours: ${airboatsHours[0].todaysHours(dayOfWeek, language)}`
        : `Horario de Hoy: ${airboatsHours[0].todaysHours(
            dayOfWeek,
            language
          )}`,
      phone: airboatsBusinessInfo.phone,
      address: airboatsBusinessInfo.address,
    },
  ];

  const renderCards = () => {
    return cards.map((card) => {
      return (
        <GridItem key={card.id} sm={12} md={6} className={classes.gridItem}>
          <MiccosukeeCard
            title={card.title}
            theme={card.theme}
            description={card.description}
            imgSrc={card.imgSrc}
            buttonOne={card.buttonOne}
            buttonTwo={card.buttonTwo ? card.buttonTwo : ''}
            hours={card.hours}
            phone={card.phone}
            address={card.address}
          />
        </GridItem>
      );
    });
  };

  return (
    <GridContainer
      className={classes.gridContainer}
      justify="center"
      style={{ position: 'static' }}
    >
      {renderCards()}
    </GridContainer>
  );
};

export default GamingGolf;
