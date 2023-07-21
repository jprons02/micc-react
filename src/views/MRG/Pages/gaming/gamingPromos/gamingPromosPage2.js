import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Core Components
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CasinoPromos from 'views/MRG/Pages/gaming/gamingPromos/casinoPromos/casinoPromos2.js';
import PokerPromos from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/pokerPromos2.js';
import PokerDisclaimer from 'views/MRG/Pages/gaming/poker/pokerDisclaimer.js';

// Images
import bgImageMachines from 'assets/media/img/mrg/gaming/promos/promotions-page-banner.jpeg';
import bgImagePoker from 'assets/media/img/mrg/gaming/poker/poker-page-banner.jpeg';

// Styling
import { standardLinkColor } from 'themes/colors.js';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/pokerPromotionCardStyles.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

// Promo content
import { casinoContent } from 'views/MRG/Pages/gaming/gamingPromos/casinoPromos/cardContent/cardContent.js';
import { pokerContent } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/cardContent.js';

// Services
import { getPromoMonth } from 'services/functions/getPromoMonth.js';

const usePokerStyles = makeStyles(styles);

const GamingPromosPage = (props) => {
  const history = useHistory();
  const pokerClasses = usePokerStyles();
  const language = useLanguage();
  const regexCasino = /#casino\w*/;
  const regexPoker = /#poker\w*/;

  const [state, setState] = useState('casinoPromos');

  const bgImage = state === 'casinoPromos' ? bgImageMachines : bgImagePoker;
  const sliderContent = [
    {
      id: 1,
      bgImage: bgImage,
      header: '',
      subHeader: '',
    },
  ];

  const casinoMonthObj = getPromoMonth(
    'casinoPromos',
    language,
    props.match.params.month
  );
  const pokerMonthObj = getPromoMonth(
    'pokerPromos',
    language,
    props.match.params.month
  );

  const monthContent =
    state === 'casinoPromos'
      ? casinoContent(language, casinoMonthObj.en)
      : pokerContent(language, pokerMonthObj.en);

  useEffect(() => {
    // IF url has hash casino or poker. Ex) /casino/promotions/june#poker
    if (regexCasino.test(window.location.hash)) {
      setState('casinoPromos');
    }
    if (regexPoker.test(window.location.hash)) {
      setState('pokerPromos');
    }
  }, []);

  // Month may change depending if I have casino or poker promos ready. Need to revert to current month if data is undefined.
  const getMonthString = () => {
    const getCasinoMonthString = () => {
      if (casinoMonthObj) {
        return language
          ? `${casinoMonthObj.en.toUpperCase()} PROMOTIONS`
          : `PROMOCIONES DE ${casinoMonthObj.sp.toUpperCase()}`;
      } else {
        return 'Loading...';
      }
    };

    const getPokerMonthString = () => {
      return language
        ? `${pokerMonthObj.en.toUpperCase()} PROMOTIONS`
        : `PROMOCIONES DE ${pokerMonthObj.sp.toUpperCase()}`;
    };

    if (state === 'casinoPromos') {
      return getCasinoMonthString();
    } else {
      return getPokerMonthString();
    }
  };

  const handleClick = (state) => {
    setState(state);
    // If user is on url ex) /june#3 modal window is active. When you close modal and then click poker-
    // section and then click back to gaming, modal opens again because url hash will activate. This resets hash.
    history.push({ hash: '' });
  };

  const renderCalendarLink = () => {
    return (
      <div style={{ textAlign: 'center', paddingTop: '40px' }}>
        <a target="_blank" href={monthContent.calendarLink}>
          <span
            style={{
              color: standardLinkColor.color,
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: '400',
              marginTop: '-5px',
            }}
          >
            {language ? 'CALENDAR VIEW' : 'VER CALENDARIO'}
          </span>
        </a>
      </div>
    );
  };

  const renderPokerButtons = () => {
    return (
      <div style={{ textAlign: 'center', paddingTop: '40px' }}>
        <a
          target="_blank"
          href={
            'https://mapa-media.s3.amazonaws.com/mcr/PokerJackpotRules_Web.pdf'
          }
        >
          <span
            style={{
              color: standardLinkColor.color,
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: '400',
              marginTop: '-5px',
            }}
          >
            {language ? 'JACKPOT RULES' : 'REGLAS DE PREMIOS'}
          </span>
        </a>
        &nbsp; <span style={{ fontSize: '20px' }}>|</span> &nbsp;
        <a
          target="_blank"
          href={
            'https://mapa-media.s3.amazonaws.com/mcr/PokerGeneralRules_Web.pdf'
          }
        >
          <span
            style={{
              color: standardLinkColor.color,
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: '400',
              marginTop: '-5px',
            }}
          >
            {language ? 'GENERAL RULES' : 'REGLAS GENERALES'}
          </span>
        </a>
      </div>
    );
  };

  const renderContent = () => {
    switch (state) {
      case 'casinoPromos':
        return (
          <React.Fragment>
            {renderCalendarLink()}
            <CasinoPromos
              monthObj={casinoMonthObj}
              language={language}
              params={props.match.params.month}
            />
          </React.Fragment>
        );
      case 'pokerPromos':
        return (
          <React.Fragment>
            {renderPokerButtons()}
            <div
              style={{
                margin: 'auto',
                marginTop: '35px',
                marginBottom: '30px',
                maxWidth: '650px',
              }}
            >
              <PokerPromos
                monthObj={pokerMonthObj}
                language={language}
                params={props.match.params.month}
              />
            </div>
            <PokerDisclaimer className={pokerClasses.disclaimer} />
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            {renderCalendarLink()}
            <CasinoPromos
              monthObj={casinoMonthObj}
              language={language}
              params={props.match.params.month}
            />
          </React.Fragment>
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
            onClick={() => handleClick('casinoPromos')}
            usetheme={state === 'casinoPromos' ? 'contained' : 'outlined'}
          >
            {language ? 'Gaming' : 'Gaming'}
          </Button>
          &nbsp; &nbsp;
          <Button
            onClick={() => handleClick('pokerPromos')}
            usetheme={state === 'pokerPromos' ? 'contained' : 'outlined'}
          >
            {language ? 'Poker' : 'Póquer'}
          </Button>
        </div>
        <div>{renderContent()}</div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default GamingPromosPage;
