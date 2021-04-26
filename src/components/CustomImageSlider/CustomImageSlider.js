import React from "react";
import Slider from "react-slick";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/customImageSlider.js";

const useStyles = makeStyles(styles);

const CustomImageSlider = (props) => {
  const classes = useStyles();

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img className={classes.customSliderThumbs} src={props.images[i]} />
        </a>
      );
    },
    arrows: false,
    dots: true,
    dotsClass: `slick-dots slick-thumb ${classes.imageThumbs}`,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderSliderImage = () => {
    return props.images.map((image) => {
      return (
        <div key={image}>
          <img className={classes.featuredImage} src={image} />
        </div>
      );
    });
  };
  return (
    <div>
      <Slider {...settings}>{renderSliderImage()}</Slider>
    </div>
  );
};

export default CustomImageSlider;
