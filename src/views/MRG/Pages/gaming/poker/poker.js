import React from 'react';

// material-ui core components
import { Hidden } from '@material-ui/core';
import Button from 'components/CustomButtons/Button.js';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import CustomHorizontalTabs from 'components/CustomTabs/CustomHorizontalTabs.js';
import CustomVerticalTabs from 'components/CustomTabs/CustomVerticalTabs.js';

// Images
import bgImage from 'assets/media/img/mrg/poker/Poker_Header.jpeg';
import image1 from 'assets/media/img/mrg/poker/Poker_Logo.jpeg';
import pokerWeekly1 from 'assets/media/img/mrg/gaming/poker/weekly-poker-promos-layout-A.jpg';
import pokerWeekly2 from 'assets/media/img/mrg/gaming/poker/weekly-poker-promos-layout-B.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';
import { isRunning } from 'services/functions/scheduleThis';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1];
const imageObj = [{ src: image1, alt: 'Poker cards' }];
//const imageObj = [{ src: pokerWeekly2, alt: 'Poker Weekly Details' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Poker = () => {
  const language = useLanguage();
  const classes = useStyles();

  const tabContent = [
    {
      title: language ? 'Monday' : 'lunes',
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: '0', fontSize: '14px' }}>
              <li>High Hands every 45 minutes from 10 A.M. – 1 A.M.</li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? 'Tuesday' : 'martes',
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: '0', fontSize: '14px' }}>
              <li>$2,000 Guaranteed Texas Hold’em Tournament at 7 P.M.</li>
              <li>“Choose Your Stack” $20 or $40 buy-in</li>
              <li>
                2,500 or 7,500 starting stack ($10 optional dealer add-on for
                5,000 units)
              </li>
              <li>
                High Hands (up to $100) every 30 minutes from 8 A.M. – 1 A.M.
              </li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? 'Wednesday' : 'miércoloes',
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: '0', fontSize: '14px' }}>
              <li>
                High Hands every 30 minutes (up to $100) from 8 A.M. – 1 A.M.
              </li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? 'Thursday' : 'jueves',
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: '0', fontSize: '14px' }}>
              <li>$2,000 Guaranteed Texas Hold’em Tournament at 7 P.M.</li>
              <li>“Choose Your Stack” $20 or $40 buy-in</li>
              <li>
                2,500 or 5,000 starting stack ($10 optional dealer add-on for
                5,000 units)
              </li>
              <li>15 minute levels. Registrations open until level 10.</li>
              <li>
                High Hands (up to $100) every 30 minutes from 8 A.M. – 1 A.M.
              </li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? 'Friday' : 'viernes',
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: '0', fontSize: '14px' }}>
              <li>
                $3,000 Guaranteed Texas Hold’em Tournament at 7 P.M. (Except
                July 6)
              </li>
              <li>$50 buy-in</li>
              <li>
                5,000 starting stack ($10 optional dealer add-on for 5,000
                units)
              </li>
              <li>15 minute levels. Registrations open until level 10.</li>
              <li>High Hands $100 every 45 minutes from 10 A.M. – 6:15 P.M.</li>
              <li>Turbo Spin High Hands (every 30 minutes) 7 P.M. – 1 A.M.</li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? 'Saturday' : 'sábado',
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: '0', fontSize: '14px' }}>
              <li>
                Spin for Cash High Hand 10 A.M. – 6 P.M. (every 60 minutes), 7
                P.M. – 1 A.M. (every 30 minutes)
              </li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? 'Sunday' : 'domingo',
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: '0', fontSize: '14px' }}>
              <li>$2,000 Guaranteed Texas Hold’em Tournament at 2 P.M.</li>
              <li>“Choose Your Stack” $20 or $40 buy-in</li>
              <li>
                 2,500 or 5,000 starting stack ($10 optional dealer add-on for
                5,000 units)
              </li>
              <li>15 minute levels. Registrations open until level 10.</li>
              <li>
                 Spin for Cash High Hand 10 A.M. – 1 A.M. (every 60 minutes)
              </li>
            </ul>
          </div>
        );
      },
    },
  ];

  /*
  All Bets are On!
  NEW 24/7 POKER ROOM
  Opening on Friday, March 24, 2023, at 6 PM.
  Featuring 20 live-action tables, daily promotions, tournaments, and thousands in guaranteed cash prizes.

  ¡Hagan sus Apuestas!
  NUEVA SALA DE PÓQUER 24/7
  Inauguración el viernes, 24 de marzo de 2023 a las 6 PM
  20 mesas de acción en vivo, promociones diarias, torneos y miles de premios en efectivo garantizados.
  */

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? 'Poker' : 'Póquer'}</h2>
              {isRunning([2023, 3, 24]) ? null : (
                <h6>
                  {language ? 'Poker Grand Opening' : 'Gran Apertura de Póquer'}
                  <br />
                  {language
                    ? 'Friday, March 24, 2023 at 6 PM'
                    : 'viernes, 24 de marzo de 2023 a las 6 PM'}
                </h6>
              )}
              {isRunning([2023, 3, 24])
                ? renderPoiHours(mrgHours.poi.poker, language)
                : null}
              <p>
                {language ? 'All Bets are On!' : '¡Hagan sus Apuestas!'}
                <br />
                {language ? 'NEW 24/7 POKER ROOM' : 'NUEVA SALA DE PÓQUER 24/7'}
              </p>
              <p>
                {language
                  ? 'Featuring 20 live-action tables, daily promotions, tournaments, and thousands in guaranteed cash prizes.'
                  : '20 mesas de acción en vivo, promociones diarias, torneos y miles de premios en efectivo garantizados.'}
              </p>
              <Button
                href="https://mapa-media.s3.amazonaws.com/mcr/PokerJackpotRules_Web.pdf"
                target="_blank"
                usetheme="contained"
              >
                {language ? 'Jackpot Rules' : ''}
              </Button>
              &nbsp; &nbsp;
              <Button
                href="https://mapa-media.s3.amazonaws.com/mcr/PokerGeneralRules_Web.pdf"
                target="_blank"
                usetheme="contained"
              >
                {language ? 'General Rules' : ''}
              </Button>
              {/*
                <div style={{ marginTop: '30px', marginBottom: '20px' }}>
                  <Hidden mdUp>
                    <CustomHorizontalTabs
                      sectionTitle="Monthly Promotions"
                      tabContent={tabContent}
                    />
                  </Hidden>
                  <Hidden smDown>
                    <CustomVerticalTabs
                      customboxstyle={{ height: '400px', overflow: 'auto' }}
                      boxSpacing={0}
                      tabContent={tabContent}
                    />
                  </Hidden>
                </div>
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
    </React.Fragment>
  );
};

export default Poker;

// ORIGINAL return
/*
return (
  <React.Fragment>
    <HeroSection sliderContent={sliderContent} />
    <RaisedContainer>
      <GridContainer>
        <GridItem md={7}>
          <div className={classes.leftTextArea}>
            <h2>{language ? 'Poker' : 'Póquer'}</h2>
            <h6>
              {language ? 'Poker Grand Opening' : 'Gran Apertura de Póquer'}
              <br />
              {language
                ? 'Friday, March 24, 2023 at 6 PM'
                : 'viernes, 24 de marzo de 2023 a las 6 PM'}
            </h6>
            {//renderPoiHours(mrgHours.poi.poker, language)}
            <p>
              {language ? "WE'RE ALL-IN!" : '¡LO ESTAMOS APOSTANDO TODO!'}
            </p>
            <p>
              {language
                ? 'Be the first high hand winner of $5,000!'
                : '¡Sea el primer ganador de $5,000!'}
            </p>
              <div style={{ marginTop: '30px', marginBottom: '20px' }}>
                <Hidden mdUp>
                  <CustomHorizontalTabs
                    sectionTitle="Monthly Promotions"
                    tabContent={tabContent}
                  />
                </Hidden>
                <Hidden smDown>
                  <CustomVerticalTabs
                    customboxstyle={{ height: '400px', overflow: 'auto' }}
                    boxSpacing={0}
                    tabContent={tabContent}
                  />
                </Hidden>
              </div>
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
*/
