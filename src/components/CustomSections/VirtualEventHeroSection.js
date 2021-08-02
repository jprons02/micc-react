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

export default function VirtualEventHeroSection(props) {
  const classes = props.classes;

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

  // desktop and mobile renders needed to implement bgImage dynamically for video background when transitioning to mobile view and we need to hide video and keep bg image.
  const renderSlides = () => {
    return props.sliderContent.map((slide) => {
      const renderDesktop = () => {
        return (
          <div key={slide.id}>
            <div
              className={props.large ? classes.large : classes.standard}
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className={classes.sliderContent}>
                <Typography
                  className={classes.heroHeader}
                  component="h1"
                  paragraph
                >
                  {slide.header()}
                </Typography>
                <Typography
                  className={classes.heroSubHeader}
                  component="h2"
                  paragraph
                >
                  {slide.subHeader()}
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
        return (
          <div key={slide.id}>
            <div
              className={props.large ? classes.large : classes.standard}
              style={{
                backgroundColor: slide.bgColor,
                height: "25vh",
              }}
            >
              <div className={classes.sliderContent}>
                <Typography className={classes.heroHeader} component="h1">
                  {slide.header()}
                </Typography>
                <Typography className={classes.heroSubHeader} component="h2">
                  {slide.subHeader()}
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
