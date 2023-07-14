import React from 'react';
import { Link } from 'react-router-dom';

// material-ui core components
import Button from 'components/CustomButtons/Button.js';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import PokerPromos from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/pokerPromos.js';

// Images
import bgImage from 'assets/media/img/mrg/gaming/poker/poker-page-banner.jpeg';
import image1 from 'assets/media/img/mrg/poker/Poker_Logo.jpeg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

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

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? 'Poker' : 'Póquer'}</h2>
              <div
                style={{
                  borderBottom: '1px solid #e8e8e8',
                  paddingBottom: '20px',
                  border: 'none',
                }}
              >
                <p>{language ? 'All Bets are On!' : '¡Hagan sus Apuestas!'}</p>
                <p>
                  Experience the heart-pounding thrills of 24/7 live Poker
                  action at Miccosukee! Pull up a seat and stack the chips in
                  one of 20 tables, plus take advantage of daily promotions,
                  tournaments, and thousands in guaranteed cash prizes, all day,
                  every day!
                </p>
                <Button
                  href="https://mapa-media.s3.amazonaws.com/mcr/PokerJackpotRules_Web.pdf"
                  target="_blank"
                  usetheme="contained"
                >
                  {language ? 'Jackpot Rules' : 'Reglas de Premios'}
                </Button>
                &nbsp; &nbsp;
                <Button
                  href="https://mapa-media.s3.amazonaws.com/mcr/PokerGeneralRules_Web.pdf"
                  target="_blank"
                  usetheme="contained"
                >
                  {language ? 'General Rules' : 'Reglas Generales'}
                </Button>
                &nbsp; &nbsp;
                <Button
                  component={Link}
                  to="/casino/promotions#poker"
                  usetheme="contained"
                >
                  {language ? 'Poker Promos' : 'promociones de póquer'}
                </Button>
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
};

export default Poker;
