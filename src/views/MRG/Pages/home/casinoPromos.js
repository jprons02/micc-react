import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// My Custom Component
import StandardCard from 'components/CustomCards/StandardCard.js';
import CustomGamingPromoModal from 'components/CustomModal/CustomPromosModal/CustomGamingPromoModal.js';

// React component for creating beautiful carousel
import Slider from 'react-slick';

// Context
import { useLanguage } from 'contexts/languageContext.js';

// Card Content
import { content } from 'views/MRG/Pages/gaming/gamingPromos/machinePromos/cardContent/cardContent.js';

// Styling
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/home.js';
import cardStyles from 'assets/jss/material-kit-react/views/mrg/promotionCardStyles.js';

const useStyles = makeStyles(styles);
const useCardStyles = makeStyles(cardStyles);

const CasinoPromos = (props) => {
  const language = useLanguage();
  const classes = useStyles();
  const cardClasses = useCardStyles();
  const [showModal, setShowModal] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState({});

  const month = props.month;
  const monthContent = content(language, month);

  const closeModal = () => {
    setShowModal(false);
  };

  const promoClick = (promo) => {
    setSelectedPromo(promo);
    setShowModal(true);
  };

  // Get list of current month promos and pick one that has attribute "feature"

  const renderCards = () => {
    const cardContent = language ? monthContent.data : monthContent.dataEs;
    const featuredArray = cardContent.filter((obj) => obj.featured === true);

    return featuredArray.map((card) => {
      return (
        <StandardCard
          classes={cardClasses}
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
      dotsClass: `slick-dots ${cardClasses.dots}`,
    };
    return <Slider {...settings}>{renderCards()}</Slider>;
  };

  return (
    <React.Fragment>
      <div>{props.mobile ? renderMobileView() : renderDesktopView()}</div>
      <CustomGamingPromoModal
        selectedPromo={selectedPromo}
        closeModal={closeModal}
        showModal={showModal}
      />
    </React.Fragment>
  );
};

export default CasinoPromos;
