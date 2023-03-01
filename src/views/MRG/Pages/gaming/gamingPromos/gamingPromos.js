/*
import React, { useState, useEffect, useContext } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";

//My Custom Component
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import StandardCard from "components/CustomCards/StandardCard.js";
import CustomGamingPromoModal from "components/CustomModal/CustomPromosModal/CustomGamingPromoModal.js";

//import englishCalendar from "https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/july_en.pdf";

// @material-ui/core components
import { Hidden } from "@material-ui/core";

// Custom function
import { urlify } from "services/functions/urlify.js";

// React component for creating beautiful carousel
import Slider from "react-slick";

// Context
import { useLanguage, useLanguageUpdate } from "contexts/languageContext.js";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/promotionCardStyles.js";

// Images
import bgImage from "assets/media/img/mrg/MRG_Header1.jpg";

// Card Content
import {
  cardContent,
  futureCardContent,
} from "views/MRG/Pages/gaming/gamingPromos/cardContent";
import { standardLinkColor } from "themes/colors.js";

import PopupModal from "components/CustomModal/CustomPopup/CustomPopupModal.js";
import { PopupContext } from "contexts/PopupContext.js";

// services
import { popupManager } from "services/functions/popups/popupManager";

const useStyles = makeStyles(styles);

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const GamingPromos = (props) => {
  const language = useLanguage();
  const classes = useStyles();
  const toggleLanguage = useLanguageUpdate();

  const [showModal, setShowModal] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState({});

  const [popupState, setPopupState] = useContext(PopupContext);

  useEffect(() => {
    popupManager(setPopupState, popupState, location);
  }, []);

  let { path } = useRouteMatch();
  let location = useLocation();

  // On page load, determine language per url
  useEffect(() => {
    // regex ends with /es = /\/es$/gm
    const pattern = new RegExp(/\/es$/gm);
    // ex) domain.com/mrg/es
    const pathTest = pattern.test(path);
    // ex) domain.com/mrg#thing1/es
    const hashTest = pattern.test(location.hash);

    // this is used to pass to cardContent because the language toggle state will not be updated until re-render.
    let languageBool = true;

    if (pathTest || hashTest) {
      if (language) {
        toggleLanguage();
        languageBool = false;
      }
    }

    cardContent(languageBool).map((promo) => {
      //Purpose is ability to link to specific promos from url
      // full example ENGLISH: http://localhost:3000/mrg/promotions#0
      // full example SPANISH: http://localhost:3000/mrg/promotions#0/es
      if (
        window.location.hash === `#${promo.id}` ||
        window.location.hash === `#${promo.id}/es`
      ) {
        setSelectedPromo(promo);
        setShowModal(true);
      }
    });
  }, []);

  // use this to set state... have the useEffect above change when content state changes
  // getContent() should be in a useEffect[]
  const getContent = () => {
    //console.log("params: ", props.match.params.month);
    const monthNames = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    if (props.match.params.month) {
      if (futureCardContent().month === props.match.params.month) {
        return futureCardContent().data;
      } else {
        return cardContent();
      }
    } else {
      return cardContent();
    }
  };

  const getMonth = () => {
    return language
      ? `${"January".toUpperCase()} PROMOTIONS`
      : `PROMOCIONES DE ${"enero".toUpperCase()}`;
  };

  const getCalendarPdf = () => {
    const englishCalendar =
      "https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/january_en.pdf";
    const spanishCalendar =
      "https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/january_sp.pdf";

    if (language) {
      return englishCalendar;
    } else {
      return spanishCalendar;
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
    return cardContent(language).map((card) => {
      return (
        <StandardCard
          classes={classes}
          key={card.id}
          img={card.img}
          title={card.oneLiner}
          body={""}
          buttonText={language ? "SEE DETAILS" : "VER DETALLES"}
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

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "30px" }}>{getMonth()}</h2>
          <a target="_blank" href={getCalendarPdf()}>
            <span
              style={{
                color: standardLinkColor.color,
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "400",
                marginTop: "-5px",
              }}
            >
              {language ? "CALENDAR VIEW" : "VER CALENDARIO"}
            </span>
          </a>
        </div>
        <div className={classes.cardContainer}>
          <Hidden mdUp>{renderMobileView()}</Hidden>
          <Hidden smDown>{renderDesktopView()}</Hidden>
        </div>
      </RaisedContainer>
      <CustomGamingPromoModal
        selectedPromo={selectedPromo}
        closeModal={closeModal}
        showModal={showModal}
      />
      <PopupModal />
    </React.Fragment>
  );
};

export default GamingPromos;
*/

import React, { useState, useEffect, useContext } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';

//My Custom Component
import HeroSection from 'components/CustomSections/HeroSection.js';
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import StandardCard from 'components/CustomCards/StandardCard.js';
import CustomGamingPromoModal from 'components/CustomModal/CustomPromosModal/CustomGamingPromoModal.js';

//import englishCalendar from "https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/july_en.pdf";

// @material-ui/core components
import { Hidden } from '@material-ui/core';

// React component for creating beautiful carousel
import Slider from 'react-slick';

// Context
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/promotionCardStyles.js';

// Images
import bgImage from 'assets/media/img/mrg/gaming/casino_header.jpg';

// Card Content
import { content } from 'views/MRG/Pages/gaming/gamingPromos/cardContent/cardContent.js';
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

const GamingPromos = (props) => {
  const monthNames = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  const d = new Date();
  const currentMonth = monthNames[d.getMonth()];

  const language = useLanguage();
  const classes = useStyles();
  const toggleLanguage = useLanguageUpdate();

  const [showModal, setShowModal] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState({});
  const [popupState, setPopupState] = useContext(PopupContext);

  useEffect(() => {
    popupManager(setPopupState, popupState, location);
  }, []);

  let { path } = useRouteMatch();
  let location = useLocation();

  useEffect(() => {
    //Purpose is ability to link to specific promos from url
    // full example ENGLISH: http://localhost:3000/mrg/promotions#0
    content(language, month).data.map((item) => {
      if (window.location.hash === `#${item.id}`) {
        setSelectedPromo(item);
        setShowModal(true);
      }
    });
  }, []);

  const month = props.match.params.month
    ? props.match.params.month
    : currentMonth;

  const monthContent = content(language, month);

  const getMonth = () => {
    return language
      ? `${monthContent.month.toUpperCase()} PROMOTIONS`
      : `PROMOCIONES DE ${monthContent.monthEs.toUpperCase()}`;
  };

  const getCalendarPdf = () => {
    if (language) {
      return monthContent.calendarLink;
    } else {
      return monthContent.calendarLinkEs;
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
          img={card.img}
          title={card.oneLiner}
          body={''}
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

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        {/*
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '30px' }}>{getMonth()}</h2>
          <a target="_blank" href={getCalendarPdf()}>
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
        */}
        <div className={classes.cardContainer}>
          <Hidden mdUp>{renderMobileView()}</Hidden>
          <Hidden smDown>{renderDesktopView()}</Hidden>
        </div>
      </RaisedContainer>
      <CustomGamingPromoModal
        selectedPromo={selectedPromo}
        closeModal={closeModal}
        showModal={showModal}
      />
      <PopupModal />
    </React.Fragment>
  );
};

export default GamingPromos;
