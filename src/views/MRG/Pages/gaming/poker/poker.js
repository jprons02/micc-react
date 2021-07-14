import React from "react";

// material-ui core components
import { Hidden } from "@material-ui/core";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";
import CustomHorizontalTabs from "components/CustomTabs/CustomHorizontalTabs.js";
import CustomVerticalTabs from "components/CustomTabs/CustomVerticalTabs.js";

// Images
import bgImage from "assets/img/mrg/MRG_Header1.jpg";
import image1 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE1.jpeg";
import image2 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE2.jpeg";
import image3 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE3.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";

// Services
import { renderPoiHours } from "services/renderPoiHours.js";

// Context
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2, image3];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const Poker = () => {
  const language = useLanguage();
  const classes = useStyles();

  const tabContent = [
    {
      title: language ? "Monday" : "lunes",
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: "0", fontSize: "14px" }}>
              <li>High Hands every 45 minutes from 10 A.M. – 1 A.M.</li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? "Tuesday" : "martes",
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: "0", fontSize: "14px" }}>
              <li>$2,000 Guaranteed Texas Hold’em Tournament at 7 P.M.</li>
              <li>“Choose Your Stack” $20 or $40 buy-in</li>
              <li>
                2,500 or 7,500 starting stack ($10 optional dealer add-on for
                5,000 units)
              </li>
              <li>
                High Hands (up to $100) every 30 minutes from 8 A.M. – 1 A.M.
              </li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? "Wednesday" : "miércoloes",
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: "0", fontSize: "14px" }}>
              <li>
                High Hands every 30 minutes (up to $100) from 8 A.M. – 1 A.M.
              </li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? "Thursday" : "jueves",
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: "0", fontSize: "14px" }}>
              <li>$2,000 Guaranteed Texas Hold’em Tournament at 7 P.M.</li>
              <li>“Choose Your Stack” $20 or $40 buy-in</li>
              <li>
                2,500 or 5,000 starting stack ($10 optional dealer add-on for
                5,000 units)
              </li>
              <li>15 minute levels. Registrations open until level 10.</li>
              <li>
                High Hands (up to $100) every 30 minutes from 8 A.M. – 1 A.M.
              </li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? "Friday" : "viernes",
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: "0", fontSize: "14px" }}>
              <li>
                $3,000 Guaranteed Texas Hold’em Tournament at 7 P.M. (Except
                July 6)
              </li>
              <li>$50 buy-in</li>
              <li>
                5,000 starting stack ($10 optional dealer add-on for 5,000
                units)
              </li>
              <li>15 minute levels. Registrations open until level 10.</li>
              <li>High Hands $100 every 45 minutes from 10 A.M. – 6:15 P.M.</li>
              <li>Turbo Spin High Hands (every 30 minutes) 7 P.M. – 1 A.M.</li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? "Saturday" : "sábado",
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: "0", fontSize: "14px" }}>
              <li>
                Spin for Cash High Hand 10 A.M. – 6 P.M. (every 60 minutes), 7
                P.M. – 1 A.M. (every 30 minutes)
              </li>
            </ul>
          </div>
        );
      },
    },
    {
      title: language ? "Sunday" : "domingo",
      text: () => {
        return (
          <div>
            <ul style={{ marginTop: "0", fontSize: "14px" }}>
              <li>$2,000 Guaranteed Texas Hold’em Tournament at 2 P.M.</li>
              <li>“Choose Your Stack” $20 or $40 buy-in</li>
              <li>
                 2,500 or 5,000 starting stack ($10 optional dealer add-on for
                5,000 units)
              </li>
              <li>15 minute levels. Registrations open until level 10.</li>
              <li>
                 Spin for Cash High Hand 10 A.M. – 1 A.M. (every 60 minutes)
              </li>
            </ul>
          </div>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? "Poker" : "Póker"}</h2>
              {renderPoiHours(mrgHours.poi.poker, language)}
              <p>
                {language
                  ? "Our new Poker Game Room is now open! With a whole new look and it being a non-smoking room, it’s the perfect place to come and play."
                  : "¡Nuestra nueva Sala de Póker ya está abierta! Con un nuevo look y libre de humo, es el lugar perfecto para venir a jugar."}
              </p>
              <p>
                {language
                  ? "All we’re missing is you, we can’t wait to see you there!"
                  : "Lo único que nos falta es usted, ¡y estamos ansiosos de que nos visite!"}
              </p>
              {/*
              <div style={{ marginTop: "30px", marginBottom: "20px" }}>
                <Hidden mdUp>
                  <CustomHorizontalTabs
                    sectionTitle="Monthly Promotions"
                    tabContent={tabContent}
                  />
                </Hidden>
                <Hidden smDown>
                  <CustomVerticalTabs
                    customboxstyle={{ height: "400px", overflow: "auto" }}
                    boxSpacing={0}
                    tabContent={tabContent}
                  />
                </Hidden>
              </div>
              */}
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageArray} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Poker;
