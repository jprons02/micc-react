import React, { useState, useEffect, useContext } from 'react';
import { useRouteMatch, useLocation, Link } from 'react-router-dom';

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

  const month = props.month;
  const monthContent = content(language, month);

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

  const renderDesktopView = () => {
    return renderCards();
  };

  const renderMobileView = () => {
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
  };

  const renderOpeningAnnouncement = () => {
    if (isRunning([2023, 3, 24])) {
      return null;
    } else {
      return (
        <p
          style={{
            color: 'red',
            fontWeight: '600',
            marginBottom: '20px',
            fontStyle: 'italic',
          }}
        >
          POKER GRAND OPENING FRIDAY, MARCH 24, 2023 AT 6 PM
        </p>
      );
    }
  };

  const renderDisclaimer = () => {
    return (
      <p className={classes.disclaimer}>
        Subject to change or cancellation without notice at the discretion of
        management. See your gaming attendant for details. Must be 18 years or
        older with proper ID.
      </p>
    );
  };

  return (
    <React.Fragment>
      <div style={{ textAlign: 'center' }}>
        <div>{renderOpeningAnnouncement()}</div>
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
        &nbsp; <span style={{ fontSize: '20px' }}>|</span> &nbsp;
        <a
          target="_blank"
          href={
            'https://mapa-media.s3.amazonaws.com/mcr/PokerCalendar_March.pdf'
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
            {language ? 'CALENDAR VIEW' : 'VER CALENDARIO'}
          </span>
        </a>
      </div>
      <div className={classes.cardContainer}>
        <Hidden mdUp>{renderMobileView()}</Hidden>
        <Hidden smDown>{renderDesktopView()}</Hidden>
        <p className={classes.subHook}>
          Payouts every 30 min for all promotions. Noon high hand payout once
          daily at 12 PM.
        </p>
        <p className={classes.hook}>*ONE CARD TAKES ALL*</p>
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
