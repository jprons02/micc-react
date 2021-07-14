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
          <img
            className={classes.customSliderThumbs}
            src={
              props.customImages ? props.customImages[i].src : props.images[i]
            }
          />
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
    if (props.customImages) {
      return props.customImages.map((item) => {
        return (
          <div key={item.caption}>
            <img
              style={props.customStyle}
              className={classes.featuredImage}
              src={item.src}
            />
            <figcaption style={{ marginBottom: "5px", textAlign: "center" }}>
              {item.caption}
            </figcaption>
          </div>
        );
      });
    } else {
      return props.images.map((image) => {
        return (
          <div key={image}>
            <img
              style={props.customStyle}
              className={classes.featuredImage}
              src={image}
            />
          </div>
        );
      });
    }
  };
  return (
    <div style={{ margin: "5px" }}>
      <Slider {...settings}>{renderSliderImage()}</Slider>
    </div>
  );
};

export default CustomImageSlider;
