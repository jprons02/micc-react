import React from "react";

// Mui Core
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

import image from "views/MRG/Pages/gaming/oneRewards/New-Memeber-webbanner.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";
import panelStyles from "assets/jss/material-kit-react/components/footerStyle.js";

// Context
import { useLanguage } from "contexts/languageContext.js";

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

const OneRewards = () => {
  const language = useLanguage();
  const classes = useStyles();
  const panelClasses = usePanelStyles();

  const faqsArray = [
    {
      question: language
        ? "How do you earn points?"
        : "¿Cómo se ganan los puntos?",
      answer: () => {
        return (
          <div>
            <p>
              {language
                ? "It’s simple; all you have to do is play with your Miccosukee One card and start earning valuable points! Video players, insert your card into any gaming machine while playing. Bingo players, present your card when purchasing your bingo cards."
                : "Es sencillo. ¡Lo único que tiene que hacer es jugar con su tarjeta Miccosukee One para comenzar a ganar puntos! Inserte su tarjeta en cualquier máquina mientras juega. Jugadores de bingo, presenten su tarjeta cuando compren sus cartones de bingo."}
            </p>
            <ul>
              <li>
                {language ? "Gaming Machine: " : "Máquina de juego: "}$10 = 1pt
              </li>
              <li>Bingo: $2.50 = 1pt</li>
            </ul>
          </div>
        );
      },
    },
    {
      question: language
        ? "What can I use points for?"
        : "¿En qué puedo usar los puntos? ",
      answer: () => {
        return (
          <div>
            <p>
              {language
                ? "These points can be used like a gift card at most of our outlets. Below is a list of participating outlets:"
                : "Estos puntos pueden ser usados como una tarjeta de regalo en la mayoría de nuestros establecimientos. Aquí una lista de los locales participantes:"}
            </p>
            <ul>
              {language ? (
                <React.Fragment>
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
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li>Premios Free Play</li>
                  <li>Bufé Internacional Empeeke Aaweeke</li> 
                  <li>Empeek-Cheke</li> 
                  <li>Restaurantes  de alta cocina</li>
                  <li>Café Hammock</li>
                  <li>Bar de entremeses Bingo</li>
                  <li>Deli Empeeke Aya</li>
                  <li>Habitaciones de hotel</li> 
                  <li>Spa &amp; Salón</li>
                  <li>Gift Shop</li> 
                </React.Fragment>
              )}
            </ul>
          </div>
        );
      },
    },
    {
      question: language
        ? "What other benefits do I have?"
        : "¿Qué otros beneficios tengo?",
      answer: () => {
        return (
          <div>
            <p>
              {language
                ? "Miccosukee One card holders are currently entitled to discounts on Resort Standard Room Rates as well as admission to Miccosukee Indian Village & Airboat Rides. The Miccosukee One card has four levels of card benefits based on rated play that they may include free valet parking, exclusive drawings and events, VIP giveaways and birthday meal vouchers."
                : "Titulares de la tarjeta Miccosukee One son elegibles para recibir descuentos en las tarifas de habitaciones standard del Resort y entradas para el Miccosukee Indian Village & Airboats. La tarjeta Miccosukee One tiene cuatro niveles de beneficios basados en frecuencia de juego que incluyen estacionamiento valet gratis, sorteos exclusivos y eventos, regalos VIP, y cupones para cenar en su cumpleaños."}
            </p>
          </div>
        );
      },
    },
  ];

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
                {language
                  ? "PLAY MORE, GET MORE! The only program that rewards you for your style of play."
                  : "¡JUEGUE MÁS, GANE MÁS! El único programa que le premia por su estilo de juego."}
              </p>
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2021/03/BINGO-PROGRAM-APPROVED_WEB.pdf"
                target="_blank"
                usetheme="contained"
              >
                {language ? "VIEW PROGRAM" : "VER PROGRAMA"}
              </Button>
              <div style={{ marginTop: "25px" }}>
                <h4>{language ? "FAQs" : "PREGUNTAS FRECUENTES (FAQs)"}</h4>
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
