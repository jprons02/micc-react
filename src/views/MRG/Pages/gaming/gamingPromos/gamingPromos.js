import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import GamingMachinePromos from 'views/MRG/Pages/gaming/gamingPromos/machinePromos/gamingMachinePromos.js';
import PokerPromos from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/pokerPromos.js';

// Images
import bgImageMachines from 'assets/media/img/mrg/gaming/casino_header.jpg';
import bgImagePoker from 'assets/media/img/mrg/poker/Poker_Header.jpeg';
import image1 from 'assets/media/img/mrg/amenities/club-egret/club_egret_01.jpg';
import image2 from 'assets/media/img/mrg/amenities/club-egret/club_egret_02.jpg';
import image3 from 'assets/media/img/mrg/amenities/club-egret/club_egret_03.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3];
const imageObj = [
  { src: image1, alt: 'playground' },
  { src: image2, alt: 'playground climbing' },
  { src: image3, alt: 'child car toys' },
];

const GamingPromos = (props) => {
  const language = useLanguage();
  const classes = useStyles();

  const [state, setState] = useState('machinePromos');

  const regexMachine = /#machine\w*/;
  const regexPoker = /#poker\w*/;

  useEffect(() => {
    if (regexMachine.test(window.location.hash)) {
      setState('machinePromos');
    }
    if (regexPoker.test(window.location.hash)) {
      setState('pokerPromos');
    }
  }, []);

  const bgImage = state === 'machinePromos' ? bgImageMachines : bgImagePoker;
  const sliderContent = [
    {
      id: 1,
      bgImage: bgImage,
      header: '',
      subHeader: '',
    },
  ];

  const monthNames = [
    language ? 'january' : 'enero',
    language ? 'february' : 'febrero',
    language ? 'march' : 'marzo',
    language ? 'april' : 'abril',
    language ? 'may' : 'mayo',
    language ? 'june' : 'junio',
    language ? 'july' : 'julio',
    language ? 'august' : 'agosto',
    language ? 'september' : 'septiembre',
    language ? 'october' : 'octubre',
    language ? 'november' : 'noviembre',
    language ? 'december' : 'diciembre',
  ];
  const d = new Date();
  const currentMonth = monthNames[d.getMonth()];

  const month = props.match.params.month
    ? props.match.params.month
    : currentMonth;

  /* ORIGINAL HERE.
  const getMonth = () => {
    return language
      ? `${month.toUpperCase()} PROMOTIONS`
      : `PROMOCIONES DE ${month.toUpperCase()}`;
  };
  */

  const getMachineMonthString = () => {
    return language
      ? `${month.toUpperCase()} PROMOTIONS`
      : `PROMOCIONES DE ${month.toUpperCase()}`;
  };

  const getPokerMonthString = () => {
    return language
      ? `${month.toUpperCase()} PROMOTIONS`
      : `PROMOCIONES DE ${month.toUpperCase()}`;
  };

  // Month may change depending if I have machine or poker promos ready. Need to revert to current month if data is undefined.
  const getMonthString = () => {
    if (state === 'machinePromos') {
      return getMachineMonthString();
    } else {
      return getPokerMonthString();
    }
  };

  const handleClick = (state) => {
    props.history.push(props.history.pathname);
    setState(state);
  };

  // SWITCH OUT CURRENT MONTH ON POKER WHEN CARD CONTENT IS ADDED FOR FUTURE MONTH
  // SWITCH OUT CURRENT MONTH ON POKER WHEN CARD CONTENT IS ADDED FOR FUTURE MONTH
  // SWITCH OUT CURRENT MONTH ON POKER WHEN CARD CONTENT IS ADDED FOR FUTURE MONTH
  const renderContent = () => {
    switch (state) {
      case 'machinePromos':
        return (
          <GamingMachinePromos
            getMachineMonthString={getMachineMonthString}
            month={month}
          />
        );
      case 'pokerPromos':
        return <PokerPromos month={currentMonth} />;
      default:
        return (
          <GamingMachinePromos
            getMachineMonthString={getMachineMonthString}
            month={month}
          />
        );
    }
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '30px' }}>{getMonthString()}</h2>
          <Button
            onClick={() => handleClick('machinePromos')}
            usetheme={state === 'machinePromos' ? 'contained' : 'outlined'}
          >
            {language ? 'Machine Promos' : 'Máquinas de Juego'}
          </Button>
          &nbsp; &nbsp;
          <Button
            onClick={() => handleClick('pokerPromos')}
            usetheme={state === 'pokerPromos' ? 'contained' : 'outlined'}
          >
            {language ? 'Poker Promos' : 'Póquer'}
          </Button>
        </div>
        <div style={{ paddingTop: '80px' }}>{renderContent()}</div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default GamingPromos;
