import React, { useState, useEffect, useContext } from 'react';
import { useRouteMatch, useLocation, Link } from 'react-router-dom';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
//My Custom Component
import StandardCard from 'components/CustomCards/PokerPromoCard.js';
import CustomPokerPromoModal from 'components/CustomModal/CustomPromosModal/poker/CustomPokerPromoModal.js';

//import englishCalendar from "https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/july_en.pdf";

// @material-ui/core components
import { Hidden } from '@material-ui/core';

// React component for creating beautiful carousel
import Slider from 'react-slick';

// Context
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';

import { isRunning } from 'services/functions/scheduleThis';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/pokerPromotionCardStyles.js';

// Images
import bgImage from 'assets/media/img/mrg/gaming/casino_header.jpg';

// Card Content
import { content } from 'views/MRG/Pages/gaming/gamingPromos/pokerPromos/cardContent/cardContent.js';
import { standardLinkColor } from 'themes/colors.js';

import PopupModal from 'components/CustomModal/CustomPopup/CustomPopupModal.js';
import { PopupContext } from 'contexts/PopupContext.js';

// services
import { popupManager } from 'services/functions/popups/popupManager';

const useStyles = makeStyles(styles);

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const PokerPromos = (props) => {
  const language = useLanguage();
  const classes = useStyles();
  const toggleLanguage = useLanguageUpdate();

  const [showModal, setShowModal] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState({});

  const [popupState, setPopupState] = useContext(PopupContext);

  useEffect(() => {
    popupManager(setPopupState, popupState, location);
  }, []);

  let location = useLocation();

  /*
  useEffect(() => {
    //Purpose is ability to link to specific promos from url
    // full example ENGLISH: http://localhost:3000/mrg/promotions#0
    content(language, month).data.map((item) => {
      if (window.location.hash === `#poker${item.id}`) {
        setSelectedPromo(item);
        setShowModal(true);
      }
    });
  }, []);
  */

  useEffect(() => {
    props.setStringState(getMonthString());
  }, [language, props.state]);

  const black = '#262626';
  const gold = '#b5966c';
  const silver = '#c4c2b6';

  const month = props.month;
  const monthContent = content(language, month);

  // Used if there is undefined content - will revert a url "X Promos" to "Current Month Promos".
  const getMonthString = () => {
    if (monthContent.data !== undefined) {
      if (language) {
        return monthContent.month.toUpperCase();
      } else {
        return monthContent.monthEs.toUpperCase();
      }
    } else {
      return 'LOADING...';
    }
  };

  const promoClick = (promo) => {
    setSelectedPromo(promo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderCards = () => {
    const cardContent = language ? monthContent.data : monthContent.dataEs;
    return cardContent.map((card) => {
      return (
        <StandardCard
          classes={classes}
          key={card.id}
          content={card}
          buttonText={language ? 'SEE DETAILS' : 'VER DETALLES'}
          buttonVariant="outlined"
          buttonFunction={() => promoClick(card)}
        />
      );
    });
  };

  const renderCalendarView = () => {
    const content = language
      ? monthContent.data(classes)
      : monthContent.dataEs(classes);
    return content;
  };

  const renderDesktopView = () => {
    if (monthContent.type === 'card') {
      return renderCards();
    } else {
      return renderCalendarView();
    }
  };

  const renderMobileView = () => {
    if (monthContent.type === 'card') {
      const settings = {
        arrows: false,
        infinite: false,
        speed: 150,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        dotsClass: `slick-dots ${classes.dots}`,
      };
      return <Slider {...settings}>{renderCards()}</Slider>;
    } else {
      return renderCalendarView();
    }
  };

  const renderDisclaimer = () => {
    return (
      <p className={classes.disclaimer}>
        {language
          ? 'Subject to change or cancellation without notice at the discretion of management. See your gaming attendant for details. Must be 18 years or older with proper ID.'
          : 'Sujeto a cambio o cancelación sin previo aviso a discreción de la gerencia. Consulte a su asistente de juego para obtener más detalles. Debe tener 18 años o más con identificación adecuada.​'}
      </p>
    );
  };

  return (
    <React.Fragment>
      <div style={{ textAlign: 'center' }}>
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
        {monthContent.type === 'calendar' ? null : (
          <React.Fragment>
            &nbsp; <span style={{ fontSize: '20px' }}>|</span> &nbsp;
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
          </React.Fragment>
        )}
      </div>
      <div className={classes.cardContainer}>
        <Hidden mdUp>{renderMobileView()}</Hidden>
        <Hidden smDown>{renderDesktopView()}</Hidden>
        {monthContent.type !== 'calendar' ? (
          <div>
            <p className={classes.subHook}>
              Payouts every 30 min for all promotions. Noon high hand payout
              once daily at 12 PM.
            </p>
            <p className={classes.hook}>*ONE CARD TAKES ALL*</p>
          </div>
        ) : null}
        {renderDisclaimer()}
      </div>
      <CustomPokerPromoModal
        selectedPromo={selectedPromo}
        closeModal={closeModal}
        showModal={showModal}
      />
      <PopupModal />
    </React.Fragment>
  );
};

export default PokerPromos;
