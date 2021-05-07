import React from "react";
import { Link, useHistory } from "react-router-dom";
// react component for creating beautiful carousel
import Slider from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CustomButton from "@material-ui/core/Button";

import styles from "assets/jss/material-kit-react/views/miccosukee/components/customHeroSectionStyle.js";

const useStyles = makeStyles(styles);

export default function HeroSection(props) {
  const classes = useStyles();
  const history = useHistory();
  //<Link to={`${match.url}/accommodations`}>
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  //const handleClick = (link) => {};

  const renderSlides = () => {
    return props.sliderContent.map((slide) => {
      return (
        <div key={slide.id}>
          <div
            className={props.large ? classes.large : classes.standard}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgImage})`,
            }}
          >
            <div className={classes.sliderContent}>
              <Typography className={classes.header} component="h1" paragraph>
                {slide.header}
              </Typography>
              <Typography
                className={classes.subHeader}
                component="h2"
                paragraph
              >
                {slide.subHeader}
              </Typography>
              {slide.button ? (
                <CustomButton
                  className={classes.customButton}
                  variant="outlined"
                  onClick={() => history.push(slide.button.link)}
                >
                  {slide.button.text}
                </CustomButton>
              ) : null}
            </div>
          </div>
        </div>
      );
    });
  };

  return <Slider {...settings}>{renderSlides()}</Slider>;
}

//'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url("../../media/examples/lizard.png")',
