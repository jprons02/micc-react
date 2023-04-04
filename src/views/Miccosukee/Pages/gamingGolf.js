import React, { useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
//images
import mrgImg from 'assets/media/img/miccosukee/pages/mrg_golf/mrg-card.jpg';
import golfImg from 'assets/media/img/miccosukee/pages/mrg_golf/golf-card.jpg';
//Miccosukee Component
import MiccosukeeCard from 'components/CustomCards/MiccosukeeCard.js';

import styles from 'assets/jss/material-kit-react/views/miccosukee/pages/gaming_golf.js';

import { useLanguage } from 'contexts/languageContext.js';

// Business info
import { mrgHours, golfHours } from 'business_info/hours.js';

import {
  mrgBusinessInfo,
  golfBusinessInfo,
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
      title: language ? 'Casino & Resort' : 'Casino & Resort',
      theme: mrgBusinessInfo.name,
      description: language
        ? 'Live it Up! Play On.'
        : '¡Vive el momento y disfruta el juego!',
      imgSrc: mrgImg,
      buttonOne: {
        text: language ? 'WEBSITE' : 'Página web',
        usesRouter: true,
        //mrg to mcr change
        link: `/mcr`,
      },
      //hours: mrgHours.todaysHours(dayOfWeek, language),
      hours: language ? ' 24 Hours' : ' 24 Horas',
      /*
      hours: language
        ? `Today's Hours: ${mrgHours.todaysHours(dayOfWeek, language)}`
        : `Horario de Hoy: ${mrgHours.todaysHours(dayOfWeek, language)}`,
      */
      phone: mrgBusinessInfo.phone,
      address: mrgBusinessInfo.address,
    },
    {
      id: 2,
      title: language ? 'Golf & Country Club' : 'Golf & Country Club',
      theme: golfBusinessInfo.name,
      description: language
        ? 'Enjoy breathtaking views and three challenging courses.'
        : 'Disfrute vistas impresionantes y tres campos desafiantes.',
      imgSrc: golfImg,
      buttonOne: {
        text: language ? 'WEBSITE' : 'Página web',
        usesRouter: true,
        link: '/golf',
      },
      hours: language
        ? `Today's Hours: ${golfHours[0].todaysHours(dayOfWeek)}`
        : `Horario de Hoy: ${golfHours[0].todaysHours(dayOfWeek)}`,
      phone: golfBusinessInfo.phone,
      address: golfBusinessInfo.address,
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
