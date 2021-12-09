import React, { useState } from "react";
import Slider from "react-slick";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/customImageSlider.js";

const useStyles = makeStyles(styles);

const CustomImageSlider = (props) => {
  const classes = useStyles();

  const settings = () => {
    // allows me to set state on parent component. see tribalLeaders component for example.
    if (props.clickFunction) {
      return {
        customPaging: function (i) {
          return (
            <a>
              <img
                onClick={() => props.clickFunction(i)}
                className={classes.customSliderThumbs}
                src={
                  props.customImages
                    ? props.customImages[i].src
                    : props.images[i].src
                }
                alt={
                  props.customImages
                    ? props.customImages[i].alt
                    : props.images[i].alt
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
        accessibility: true,
      };
    } else {
      return {
        customPaging: function (i) {
          return (
            <a>
              <img
                className={classes.customSliderThumbs}
                src={
                  props.customImages
                    ? props.customImages[i].src
                    : props.images[i].src
                }
                alt={
                  props.customImages
                    ? props.customImages[i].alt
                    : props.images[i].alt
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
        accessibility: true,
      };
    }
  };

  const renderSliderImage = () => {
    // If these images have captions - example is history section, tribal leaders
    if (props.customImages) {
      return props.customImages.map((item) => {
        return (
          <div key={item.caption}>
            <img
              style={props.customStyle}
              className={classes.featuredImage}
              src={item.src}
              alt={`${item.caption}`}
            />
            <figcaption style={{ marginBottom: "5px", textAlign: "center" }}>
              {item.caption}
            </figcaption>
          </div>
        );
      });
    } else {
      // Standard images, such as mrg restaurants
      return props.images.map((image) => {
        return (
          <div key={image.src}>
            <img
              style={props.customStyle}
              className={classes.featuredImage}
              src={image.src}
              alt={image.alt}
            />
          </div>
        );
      });
    }
  };
  return (
    <div style={{ margin: "5px" }}>
      <Slider {...settings()}>{renderSliderImage()}</Slider>
    </div>
  );
};

export default CustomImageSlider;
