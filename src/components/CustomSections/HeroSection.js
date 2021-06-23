import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";
// react component for creating beautiful carousel
import Slider from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CustomButton from "@material-ui/core/Button";
import { Hidden } from "@material-ui/core";

import styles from "assets/jss/material-kit-react/views/miccosukee/components/customHeroSectionStyle.js";
import videoStyles from "assets/jss/material-kit-react/views/miccosukee/components/bgVideoStyle.js";

const useStyles = makeStyles(styles);
const useVideoStyles = makeStyles(videoStyles);

export default function HeroSection(props) {
  const classes = useStyles();
  const videoClasses = useVideoStyles();

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

  /*
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
  */

  const videoStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    zIndex: "-100",
    transform: `translateX(-50%) translateY(-50%)`,
    //background: `url('${props.bgImage}') no-repeat`,
    backgroundSize: "cover",
    transition: "1s opacity",
  };

  // desktop and mobile renders needed to implement bgImage dynamically for video background when transitioning to mobile view and we need to hide video and keep bg image.
  const renderSlides = () => {
    return props.sliderContent.map((slide) => {
      const renderDesktop = () => {
        return (
          <div key={slide.id}>
            <div
              className={props.large ? classes.large : classes.standard}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
                  slide.gradient ? slide.gradient : "0.5"
                }), rgba(0, 0, 0, ${
                  slide.gradient ? slide.gradient : "0.5"
                })), url(${slide.bgVideo ? "" : slide.bgImage})`,
              }}
            >
              {slide.bgVideo ? (
                <video
                  id="videoBG"
                  className={videoClasses.main}
                  poster={slide.bgImage}
                  autoPlay
                  muted
                  loop
                >
                  <source src={slide.bgVideo} type="video/mp4" />
                </video>
              ) : null}
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
                    onClick={
                      slide.button.clickFunction
                        ? slide.button.clickFunction
                        : () => history.push(slide.button.link)
                    }
                  >
                    {slide.button.text}
                  </CustomButton>
                ) : null}
              </div>
            </div>
          </div>
        );
      };
      const renderMobile = () => {
        const getStyle = () => {
          if (slide.backgroundPlain) {
            return {
              backgroundImage: `url(${slide.bgImage})`,
              height: `${slide.height}`,
            };
          } else {
            return {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgImage})`,
            };
          }
        };

        return (
          <div key={slide.id}>
            <div
              className={props.large ? classes.large : classes.standard}
              style={getStyle()}
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
                    onClick={
                      slide.button.clickFunction
                        ? slide.button.clickFunction
                        : () => history.push(slide.button.link)
                    }
                  >
                    {slide.button.text}
                  </CustomButton>
                ) : null}
              </div>
            </div>
          </div>
        );
      };
      return (
        <div key={slide.id}>
          <Hidden smDown>{renderDesktop()}</Hidden>
          <Hidden mdUp>{renderMobile()}</Hidden>
        </div>
      );
    });
  };

  return <Slider {...settings}>{renderSlides()}</Slider>;
}

//'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url("../../media/examples/lizard.png")',

/*
<video id="videoBG" poster={golfVidImage} autoPlay muted loop>
  <source src={golfVid} type="video/mp4" />
</video>
*/
