import React from "react";

// Mui Core
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { List, ListItem, Hidden } from "@material-ui/core";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";
import Button from "components/CustomButtons/Button.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE1.jpeg";
import image2 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE2.jpeg";
import image3 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE3.jpeg";

import image from "views/MRG/Pages/gaming/oneRewards/New-Memeber-webbanner.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";
import panelStyles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);
const usePanelStyles = makeStyles(panelStyles);

const imageArray = [image];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const faqsArray = [
  {
    question: "How do you earn points?",
    answer: () => {
      return (
        <div>
          <p>
            It’s simple; all you have to do is play with your Miccosukee One
            card and start earning valuable points! Video players, insert your
            card into any gaming machine while playing. Bingo players, present
            your card when purchasing your bingo cards.
          </p>
          <ul>
            <li>Gaming Machine: $10 = 1pt</li>
            <li>Bingo: $2.50 = 1pt</li>
          </ul>
        </div>
      );
    },
  },
  {
    question: "What can I use points for?",
    answer: () => {
      return (
        <div>
          <p>
            These points can be used like a gift card at most of our outlets.
            Below is a list of participating outlets:
          </p>
          <ul>
            <li>Free Play Rewards</li>
            <li>Empeeke Aaweeke International Buffet</li>
            <li>Empeek-Cheke</li>
            <li>Fine Dining</li>
            <li>Café Hammock</li>
            <li>Bingo Snack Bar</li>
            <li>Empeeke Aya Deli</li>
            <li>Hotel Stays</li>
            <li>Spa &amp; Salon</li>
            <li>Gift Shop</li>
          </ul>
        </div>
      );
    },
  },
  {
    question: "What other benefits do I have?",
    answer: () => {
      return (
        <div>
          <p>
            Miccosukee One card holders are currently entitled to discounts on
            Resort Standard Room Rates as well as admission to Miccosukee Indian
            Village &amp; Airboat Rides. The Miccosukee One card has four levels
            of card benefits based on rated play that they may include free
            valet parking, exclusive drawings and events, VIP giveaways and
            birthday meal vouchers.
          </p>
        </div>
      );
    },
  },
];

const OneRewards = () => {
  const classes = useStyles();
  const panelClasses = usePanelStyles();

  const renderExpansionPanel = () => {
    return faqsArray.map((faq) => {
      return (
        <MuiExpansionPanel
          key={faq.question}
          className={panelClasses.expansionPanel}
          square={true}
        >
          <MuiExpansionPanelSummary
            expandIcon={
              <ExpandMoreIcon
                className={panelClasses.expansionPanelHeaderIcon}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={panelClasses.expansionPanelHeader}>
              {faq.question}
            </Typography>
          </MuiExpansionPanelSummary>
          <MuiExpansionPanelDetails
            className={panelClasses.expansionPanelDetail}
          >
            {faq.answer()}
          </MuiExpansionPanelDetails>
        </MuiExpansionPanel>
      );
    });
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Miccosukee One Rewards</h2>
              <p>
                PLAY MORE, GET MORE! The only program that rewards you for your
                style of play.
              </p>
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2021/03/BINGO-PROGRAM-APPROVED_WEB.pdf"
                target="_blank"
                usetheme="contained"
              >
                VIEW PROGRAM
              </Button>
              <div style={{ marginTop: "25px" }}>
                <h4>FAQs</h4>
                <div style={{ width: "100%" }}>{renderExpansionPanel()}</div>
              </div>
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

export default OneRewards;
