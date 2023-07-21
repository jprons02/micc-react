import React from 'react';

//My Custom Component
import StandardCard from 'components/CustomCards/StandardCard.js';

// @material-ui/core components
import { Hidden } from '@material-ui/core';

// React component for creating beautiful carousel
import Slider from 'react-slick';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/promotionCardStyles.js';

const useStyles = makeStyles(styles);

const CasinoPromoCards = (props) => {
  const classes = useStyles();

  const promoClick = (promo) => {
    props.setSelectedPromo(promo);
    props.setShowModal(true);
  };

  const renderCards = () => {
    return props.cardContent.map((card) => {
      return (
        <StandardCard
          classes={classes}
          key={card.id}
          img={card.img}
          title={card.oneLiner}
          body={''}
          buttonText={props.language ? 'SEE DETAILS' : 'VER DETALLES'}
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
      <div className={classes.cardContainer}>
        <Hidden mdUp>{renderMobileView()}</Hidden>
        <Hidden smDown>{renderDesktopView()}</Hidden>
      </div>
    </React.Fragment>
  );
};

export default CasinoPromoCards;
