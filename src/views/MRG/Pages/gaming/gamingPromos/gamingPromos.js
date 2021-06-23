import React, { useState, useEffect } from "react";

//My Custom Component
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import StandardCard from "components/CustomCards/StandardCard.js";
import CustomGamingPromoModal from "components/CustomModal/CustomPromosModal/CustomGamingPromoModal.js";

// @material-ui/core components
import { Hidden } from "@material-ui/core";

// Custom function
import { urlify } from "services/urlify.js";

// React component for creating beautiful carousel
import Slider from "react-slick";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/promotionCardStyles.js";

// Images
import bgImage from "assets/img/bg3.jpg";

// Card Content
import cardContent from "views/MRG/Pages/gaming/gamingPromos/cardContent";

import { standardLinkColor } from "themes/colors.js";

const useStyles = makeStyles(styles);

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const GamingPromos = () => {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState({});

  useEffect(() => {
    // link to specific promo - check current url and if x then open x promo modal
    cardContent.map((promo) => {
      //Purpose is ability to link to specific promos from url
      // example using urlify service) "Anniversary Gift" will become "anniversary-gift"
      if (
        window.location.href ===
          `http://localhost:3000/mrg/promotions#${urlify(promo.title)}` ||
        window.location.href ===
          `https://miccosukee.com/mrg/promotions#${urlify(promo.title)}`
      ) {
        setSelectedPromo(promo);
        setShowModal(true);
      }
    });
  }, []);

  const getMonth = () => {
    return "April".toUpperCase();
  };

  const getCalendarPdf = () => {
    return "https://mrg.miccosukee.com/wp-content/uploads/2021/04/April_Calendar_Flyer_EN_SP.pdf";
  };

  const promoClick = (promo) => {
    setSelectedPromo(promo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderCards = () => {
    return cardContent.map((card) => {
      return (
        <StandardCard
          classes={classes}
          key={card.id}
          img={card.img}
          title={card.oneLiner}
          body={""}
          buttonText="SEE DETAILS"
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
          <h2 style={{ fontSize: "30px" }}>{`${getMonth()} PROMOTIONS`}</h2>
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
              CALENDAR VIEW
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
    </React.Fragment>
  );
};

export default GamingPromos;
