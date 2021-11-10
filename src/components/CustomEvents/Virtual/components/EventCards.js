import React from "react";

// My custom component
import StandardCard from "components/CustomCards/StandardCard.js";
import StandardHorizontalCard from "components/CustomCards/StandardHorizontalCard";

import Typography from "@material-ui/core/Typography";

// Card Images
import cardImage1 from "assets/media/img/mrg/gaming/machines/MRG_Gaming1.jpg";

// react component for creating beautiful carousel
import Slider from "react-slick";

// Styles
import { makeStyles } from "@material-ui/core/styles";
import cardStyles from "assets/jss/material-kit-react/components/virtualEvent/performerBiosStyle.js";
const useCardStyles = makeStyles(cardStyles);

const EventCards = (props) => {
  const cardClasses = useCardStyles();

  const renderEventInfoSection = () => {
    // slider settings
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

    return props.content.map((section) => {
      return (
        <div
          style={
            props.device === "mobile"
              ? { marginBottom: "-10px" }
              : { marginBottom: "-30px" }
          }
          key={section.title}
        >
          <Typography
            className={props.class}
            paragraph
            variant="h5"
            component="h3"
          >
            {section.title}
          </Typography>
          <Slider {...settings}>
            {renderCards(section.content, props.device)}
          </Slider>
        </div>
      );
    });
  };

  const renderCards = (content, device) => {
    return device === "desktop"
      ? content.map((card) => {
          const imgFix = {
            src: card.img,
            alt: card.cardTitle,
          };
          return (
            <StandardHorizontalCard
              width="99.5%"
              classes={cardClasses}
              key={card.cardTitle}
              img={imgFix}
              title={card.cardTitle}
              body={card.cardBody()}
            />
          );
        })
      : content.map((card) => {
          const imgFix = {
            src: card.img,
            alt: card.cardTitle,
          };
          return (
            <StandardCard
              classes={cardClasses}
              key={card.cardTitle}
              img={imgFix}
              title={card.cardTitle}
              body={card.cardBody()}
            />
          );
        });
  };

  return <React.Fragment>{renderEventInfoSection()}</React.Fragment>;
};

export default EventCards;

/*
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
*/
