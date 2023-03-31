import React, { useState, useEffect } from 'react';

// Mui Core
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import Button from 'components/CustomButtons/Button.js';
//import Button from '@material-ui/core/Button';

// Images
//import bgImage from 'assets/media/img/mrg/gaming/casino_header.jpg';
import bgImage from 'assets/media/img/mrg/gaming/msphere/WebHeaderBanner_MSphere_2x.jpg';
import selectImage from 'assets/media/img/mrg/gaming/msphere/MSphere_Select.png';
import primeImage from 'assets/media/img/mrg/gaming/msphere/MSphere_Prime.png';
import nobleImage from 'assets/media/img/mrg/gaming/msphere/MSphere_Noble.png';
import regalImage from 'assets/media/img/mrg/gaming/msphere/MSphere_Regal.png';
import chairmanImage from 'assets/media/img/mrg/gaming/msphere/MSphere_Chairman.png';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';
import customButtonStyles from 'assets/jss/material-kit-react/components/customButtonStyles.js';
import panelStyles from 'assets/jss/material-kit-react/components/footerStyle.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';
import { SettingsInputAntennaTwoTone } from '@material-ui/icons';

const useStyles = makeStyles(styles);
const useButtonStyles = makeStyles(customButtonStyles);

const usePanelStyles = makeStyles(panelStyles);

//const imageArray = [image];
//const imageObj = [{ src: image, alt: 'Miccosukee One cards' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
    gradient: '.1',
  },
];

const MSphere = () => {
  const language = useLanguage();
  const classes = useStyles();
  const buttonClasses = useButtonStyles();
  const panelClasses = usePanelStyles();

  /*
  useEffect(() => {
    //NEED TO REDIRECT /miccosukee-one to /msphere.
    //NEED TO REDIRECT /miccosukee-one to /msphere.
    //NEED TO REDIRECT /miccosukee-one to /msphere.
    //NEED TO REDIRECT /miccosukee-one to /msphere.
  }, [])
  */

  const [cardSelected, setCardSelected] = useState('select');

  const handleClick = (state) => {
    setCardSelected(state);
  };

  const faqsArray = () => {
    //ENGLISH FAQS
    if (language) {
      return [
        {
          question: 'HOW DO YOU EARN POINTS?',
          answer: () => {
            return (
              <div>
                <p>
                  It's simple. The power to earn is in your hands. Unlock the
                  benefits you deserve by using your M Sphere Rewards card with
                  every purchase. You will earn two types of points:{' '}
                  <span style={{ fontWeight: '500' }}>REWARD </span>
                  points and <span style={{ fontWeight: '500' }}>
                    TIER
                  </span>{' '}
                  points.
                </p>
                <p>
                  <span style={{ fontWeight: '500' }}>Reward Points</span> are
                  earned through slot, bingo, and poker play, as well as hotel
                  and dining purchases.
                </p>
                <p>
                  <span style={{ fontWeight: '500' }}>Tier Points</span> are
                  earned the same as reward points but do not hold any monetary
                  value. Tier points are used exclusively for determining your
                  tier status. When you redeem your reward points, your tier
                  points remain the same.
                </p>
                <p>
                  Coming soon, you can check your point totals anytime by
                  visiting the M Sphere Rewards player portal. Be on the lookout
                  for more information coming soon.
                </p>
                <p>
                  Tier points are based on a bi-annual period: <br />
                  April - September & October - March
                </p>
                <div style={{ marginTop: '25px', marginBottom: '25px' }}>
                  <p>
                    <span style={{ fontSize: '18px', fontWeight: '500' }}>
                      SLOTS
                    </span>
                    <br />
                    $10 wagered = 1 reward point & 1 tier point
                  </p>
                  <p>
                    <span style={{ fontSize: '18px', fontWeight: '500' }}>
                      BINGO
                    </span>
                    <br />
                    $2.50 wagered = 1 reward point & 1 tier point
                  </p>
                  <p>
                    <span style={{ fontSize: '18px', fontWeight: '500' }}>
                      POKER
                    </span>
                    <br />1 hour of rated play = 10 tier points
                  </p>
                  <p>
                    <span style={{ fontSize: '18px', fontWeight: '500' }}>
                      RETAIL
                    </span>
                    <br />
                    $10 in qualified spend = 1 reward point & 1 tier point
                  </p>
                </div>
              </div>
            );
          },
        },
        {
          question: 'WHERE CAN YOU REDEEM POINTS?',
          answer: () => {
            return (
              <div>
                <p>
                  <span style={{ fontWeight: 500 }}>Reward Points</span> can be
                  redeemed on many amenities such as slot play, dining, and
                  hotel visits.
                </p>
                <p>
                  <span style={{ fontWeight: 500 }}>Tier Points</span> do not
                  have monetary value and cannot be redeemed. They are used
                  exclusively for determining your tier status.
                </p>
              </div>
            );
          },
        },
        {
          question: 'WHAT OTHER BENEFITS DO I HAVE?',
          answer: () => {
            return (
              <div>
                <p>
                  <span style={{ fontWeight: '500' }}>M Sphere</span> card
                  holders are entitled to a world of discounts at the hotel,
                  dining outlets, Miccosukee Golf & Country Club, Miccosukee
                  Indian Village & Airboat Rides. In addition, they could
                  qualify for access to free valet parking, private gated
                  parking, exclusive drawing and event invitations, VIP
                  giveaways, and companion card: shared status - just to name a
                  few.
                </p>
              </div>
            );
          },
        },
      ];
    }
    //SPANISH FAQS
    else {
      return [
        {
          question: '¿CÓMO GANAS PUNTOS?',
          answer: () => {
            return (
              <div>
                <p>
                  Es sencillo. El poder de ganar está en tus manos. Accede a los
                  beneficios que te mereces usando tu tarjeta M Sphere Rewards
                  con cada compra. Obtendrás dos tipos de puntos: puntos de
                  RECOMPENSA y puntos de NIVEL.
                </p>
                <p>
                  Los puntos de recompensa se obtienen a través de tragamonedas,
                  bingo, juegos de póquer, además de compras en el hotel y
                  restaurantes.
                </p>
                <p>
                  Los puntos de nivel se ganan igual que los puntos de
                  recompensa, pero no tienen valor monetario. Los puntos de
                  nivel se utilizan exclusivamente para determinar tu estado de
                  nivel. Cuando canjeas tus puntos de recompensa, tus puntos de
                  nivel siguen siendo los mismos.
                </p>
                <p>
                  Próximamente, podrás verificar el total de tus puntos en
                  cualquier momento visitando el portal para jugadores de M
                  Sphere Rewards. Atento a más información próximamente.
                </p>
                <p>
                  Los puntos de nivel se basan en un período semestral: <br />
                  abril a septiembre y octubre a marzo
                </p>
                <p style={{ marginTop: '25px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    TRAGAMONEDAS
                  </span>
                  <br />
                  $10 apostados = 1 punto de recompensa y 1 punto de nivel
                </p>
                <p>
                  <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    BINGO
                  </span>
                  <br />
                  $2.50 apostados = 1 punto de recompensa y 1 punto de nivel
                </p>
                <p>
                  <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    PÓQUER
                  </span>
                  <br />1 hora de juego clasificado = 10 puntos de nivel
                </p>
                <p>
                  <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    COMPRAS
                  </span>
                  <br />
                  $10 en gastos calificados = 1 punto de recompensa y 1 punto de
                  nivel
                </p>
              </div>
            );
          },
        },
        {
          question: '¿DÓNDE PUEDO CANJEAR LOS PUNTOS?',
          answer: () => {
            return (
              <div>
                <p>
                  Los puntos de recompensa se pueden canjear en muchos
                  servicios, como juegos de tragamonedas, cenas y visitas al
                  hotel.
                </p>
                <p>
                  Los puntos de nivel no tienen valor monetario y no se pueden
                  canjear. Se utilizan exclusivamente para determinar el estado
                  de su nivel.
                </p>
              </div>
            );
          },
        },
        {
          question: '¿QUÉ OTROS BENEFICIOS TENGO?',
          answer: () => {
            return (
              <div>
                <p>
                  Los titulares de la tarjeta M Sphere tienen derecho a un mundo
                  de descuentos en el hotel, restaurantes, Miccosukee Golf &
                  Country Club, Miccosukee Indian Village y paseos en
                  hidrodeslizador. Además, podrían calificar para acceder al
                  servicio de estacionamiento gratuito, estacionamiento privado,
                  invitaciones exclusivas a sorteos y eventos, obsequios VIP y
                  tarjeta de acompañante: estado compartido, sólo por nombrar
                  algunos.
                </p>
              </div>
            );
          },
        },
      ];
    }
  };

  const renderExpansionPanel = () => {
    return faqsArray().map((faq) => {
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

  const renderDisclaimer = () => {
    return (
      <div style={{ paddingTop: '40px', paddingBottom: '20px' }}>
        <p style={{ fontStyle: 'italic', fontSize: '11px' }}>
          The use of this card constitutes acceptance of all terms and
          conditions of the M Sphere Rewards program. Visit the M Sphere Rewards
          desk for official rules and regulations. This card is
          non-transferable. Must be 18 years of age or older to participate.
          Valid identification required. For information: 305-925-2555
          www.miccosukee.com/mcr If you or someone you know has a gambling
          problem, please call 1-888-ADMIT-IT.
        </p>
      </div>
    );
  };

  const renderButtons = () => {
    return (
      <div>
        <Button
          onClick={() => handleClick('select')}
          variant="outlined"
          className={
            cardSelected === 'select'
              ? buttonClasses.selectedSelectButton
              : buttonClasses.selectButton
          }
          style={{ marginRight: '20px' }}
        >
          SELECT
        </Button>
        <Button
          onClick={() => handleClick('prime')}
          variant="outlined"
          className={
            cardSelected === 'prime'
              ? buttonClasses.selectedPrimeButton
              : buttonClasses.primeButton
          }
          style={{ marginRight: '20px' }}
        >
          PRIME
        </Button>
        <Button
          onClick={() => handleClick('noble')}
          variant="outlined"
          className={
            cardSelected === 'noble'
              ? buttonClasses.selectedNobleButton
              : buttonClasses.nobleButton
          }
          style={{ marginRight: '20px' }}
        >
          NOBLE
        </Button>
        <Button
          onClick={() => handleClick('regal')}
          variant="outlined"
          className={
            cardSelected === 'regal'
              ? buttonClasses.selectedRegalButton
              : buttonClasses.regalButton
          }
          style={{ marginRight: '20px' }}
        >
          REGAL
        </Button>
        <Button
          onClick={() => handleClick('chairman')}
          variant="outlined"
          className={
            cardSelected === 'chairman'
              ? buttonClasses.selectedChairmanButton
              : buttonClasses.chairmanButton
          }
          style={{ marginRight: '20px' }}
        >
          CHAIRMAN
        </Button>
      </div>
    );
  };

  const renderCardButtons = () => {
    const cardStyle = {
      width: '200px',
      marginLeft: '-40px',
      cursor: 'pointer',
    };
    return (
      <div>
        <img
          onClick={() => handleClick('select')}
          src={selectImage}
          style={{ width: '200px', cursor: 'pointer' }}
        />
        <img
          onClick={() => handleClick('prime')}
          src={primeImage}
          style={cardStyle}
        />
        <img
          onClick={() => handleClick('noble')}
          src={nobleImage}
          style={cardStyle}
        />
        <img
          onClick={() => handleClick('regal')}
          src={regalImage}
          style={cardStyle}
        />
        <img
          onClick={() => handleClick('chairman')}
          src={chairmanImage}
          style={cardStyle}
        />
      </div>
    );
  };

  const renderTierDetails = () => {
    const divStyle = { marginTop: '15px' };
    const imageStyle = { marginTop: '-30px', width: '100px' };
    const selectDetails = () => {
      if (language) {
        return (
          <div style={divStyle}>
            <div>
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  marginRight: '20px',
                }}
              >
                Select <br />0 - 749
              </p>
              <img src={selectImage} style={imageStyle} />
            </div>
            <ul>
              <li>Earn Tier Points on Slot, Bingo, and Poker Play</li>
              <li>Redeemable Points for Gaming, Retail, and Dining</li>
              <li>Access to Exclusive Bonus Free Play Offers</li>
              <li>Invitations to Promotions</li>
              <li>Special Birthday Offer</li>
              <li>Tier Multiplier Incentives</li>
              <li>
                5% Discount on Miccosukee Indian Village Purchases & Airboat
                Rides
              </li>
            </ul>
          </div>
        );
      } else {
        return (
          <div style={divStyle}>
            <div>
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  marginRight: '20px',
                }}
              >
                Select <br />0 - 749
              </p>
              <img src={selectImage} style={imageStyle} />
            </div>
            <ul>
              <li>
                Gane puntos de nivel en juegos de tragamonedas, bingo y póquer
              </li>
              <li>Puntos canjeables para juegos, tiendas y restaurantes</li>
              <li>Acceso a ofertas exclusivas de bono free play</li>
              <li>Invitaciones a promociones</li>
              <li>Oferta especial de cumpleaños</li>
              <li>Incentivos multiplicadores de nivel</li>
              <li>
                5% de descuento en compras y paseos en hidrodeslizador en
                Miccosukee Indian Village
              </li>
            </ul>
          </div>
        );
      }
    };
    const primeDetails = () => {
      if (language) {
        return (
          <div style={divStyle}>
            <div>
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  marginRight: '20px',
                }}
              >
                Prime <br />
                750 - 4,999 <br />
              </p>
              <img src={primeImage} style={imageStyle} />
            </div>
            <p style={{ fontSize: '16px', paddingTop: '10px' }}>
              Benefits include all M Sphere Select Rewards, plus
            </p>
            <ul>
              <li>
                10% Discount Miccosukee Indian Village Purchases & Airboat Rides
              </li>
              <li>10% Hotel and Dining Cash Discount</li>
              <li>$5 Off Express Valet Parking and Retrieval</li>
              <li>Access to Exclusive Offers</li>
              <li>Tier Achievement Offer</li>
              <li>Exclusive Tier-Based Promotions / Events</li>
              <li>Bonus Entries / Payouts in Select Promotions</li>
              <li>Special Senior Day Monthly Offer</li>
              <li>10% Miccosukee Golf & Country Club Discount*</li>
            </ul>
          </div>
        );
      } else {
        return (
          <div style={divStyle}>
            <div>
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  marginRight: '20px',
                }}
              >
                Prime <br />
                750 - 4,999 <br />
              </p>
              <img src={primeImage} style={imageStyle} />
            </div>
            <p style={{ fontSize: '16px', paddingTop: '16px' }}>
              Incluye todos los beneficios del nivel Select de M Sphere, más
            </p>
            <ul>
              <li>
                10% de descuento en compras y paseos en hidrodeslizador en
                Miccosukee Indian Village
              </li>
              <li>10% de descuento en efectivo en el hotel y restaurantes</li>
              <li>
                $5 de descuento en estacionamiento y recuperación de valet
                exprés
              </li>
              <li>Acceso a ofertas exclusivas</li>
              <li>Oferta de logro de nivel</li>
              <li>Promociones / eventos exclusivos basados en niveles</li>
              <li>Entradas de bono / pagos en promociones seleccionadas</li>
              <li>Oferta mensual Día Especial Senior</li>
              <li>10% de descuento en el Miccosukee Golf & Country Club*</li>
            </ul>
          </div>
        );
      }
    };
    //Noble 5,000 - 24,999
    const nobleDetails = () => {
      if (language) {
        return (
          <div style={divStyle}>
            <div>
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  marginRight: '20px',
                }}
              >
                Noble <br />
                5,000 - 24,999 <br />
              </p>
              <img src={nobleImage} style={imageStyle} />
            </div>
            <p style={{ fontSize: '16px', paddingTop: '10px' }}>
              Benefits include all M Sphere Prime Rewards, plus
            </p>
            <ul>
              <li>
                15% Discount Miccosukee Indian Village Purchases & Airboat Rides
              </li>
              <li>15% Hotel and Dining Cash Discount</li>
              <li>$10 Off Express Valet Parking and Retrieval</li>
              <li>15% Miccosukee Golf & Country Club Discount*</li>
              <li>500 Rollover Tier Points</li>
              <li>Invitation-Only VIP Exclusive Events</li>
              <li>Exclusive Rates for Meetings and Banquets</li>
              <li>Complimentary Non-Alcoholic Beverages while Playing</li>
              <li>Access to Personal Casino Host Service</li>
            </ul>
          </div>
        );
      } else {
        return (
          <div style={divStyle}>
            <div>
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  marginRight: '20px',
                }}
              >
                Noble <br />
                5,000 - 24,999 <br />
              </p>
              <img src={nobleImage} style={imageStyle} />
            </div>
            <p style={{ fontSize: '16px', paddingTop: '10px' }}>
              Incluye todos los beneficios del nivel Prime de M Sphere, más
            </p>
            <ul>
              <li>
                15 % de descuento en compras y paseos en hidrodeslizador en
                Miccosukee Indian Village
              </li>
              <li>15% de descuento en efectivo en el hotel y restaurantes</li>
              <li>
                $10 de descuento en estacionamiento y recuperación de valet
                exprés
              </li>
              <li>15% de descuento en el Miccosukee Golf & Country Club*</li>
              <li>500 puntos de nivel acumulados</li>
              <li>Eventos VIP exclusivos solo por invitación</li>
              <li>Tarifas exclusivas para reuniones y banquetes</li>
              <li>Bebidas sin alcohol gratuitas mientras juega</li>
              <li>Acceso al servicio de anfitrión personal</li>
            </ul>
          </div>
        );
      }
    };
    //Regal 25,000+
    const regalDetails = () => {
      if (language) {
        return (
          <div style={divStyle}>
            <div>
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  marginRight: '20px',
                }}
              >
                Regal <br />
                25,000+ <br />
              </p>
              <img src={regalImage} style={imageStyle} />
            </div>
            <p style={{ fontSize: '16px', paddingTop: '10px' }}>
              Benefits include all M Sphere Noble Rewards, plus
            </p>
            <ul>
              <li>
                20% Discount Miccosukee Indian Village Purchases & Airboat Rides
              </li>
              <li>20% Hotel and Dining Cash Discount</li>
              <li>Free Express Valet Parking and Retrieval</li>
              <li>20% Miccosukee Golf & Country Club Discount*</li>
              <li>3,750 Rollover Tier Points</li>
              <li>Free Beverages while Playing</li>
              <li>Priority Slot Service</li>
              <li>Gated VIP Parking</li>
              <li>Priority Lines for Hotel, Cage, and Rewards Club</li>
              <li>Suite Upgrade (Based on Availability)**</li>
              <li>Resort Fee Waived</li>
              <li>Two Tickets to Regular Season Sporting Event**</li>
              <li>Early Check-In / Late Check-Out**</li>
            </ul>
          </div>
        );
      } else {
        return (
          <div style={divStyle}>
            <div>
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  marginRight: '20px',
                }}
              >
                Regal <br />
                25,000+ <br />
              </p>
              <img src={regalImage} style={imageStyle} />
            </div>
            <p style={{ fontSize: '16px', paddingTop: '10px' }}>
              Incluye todos los beneficios del nivel Noble de M Sphere, más
            </p>
            <ul>
              <li>
                20% de descuento en compras y paseos en hidrodeslizador en
                Miccosukee Indian Village
              </li>
              <li>20% de descuento en efectivo en el hotel y restaurantes</li>
              <li>
                Servicio de estacionamiento y recuperación de valet exprés
                gratuito
              </li>
              <li>20% de descuento en Miccosukee Golf & Country Club*</li>
              <li>3,750 puntos de nivel acumulados</li>
              <li>Bebidas gratis mientras juega</li>
              <li>Servicio prioritario en tragamonedas</li>
              <li>Estacionamiento VIP privado</li>
              <li>
                Líneas prioritarias para el hotel, cajeros, y club de premios
              </li>
              <li>Actualización de suite (según disponibilidad)**</li>
              <li>Tarifa de resort eliminada</li>
              <li>
                Dos entradas para el evento deportivo de la temporada regular**
              </li>
              <li>Entrada anticipada / salida tardía**</li>
            </ul>
          </div>
        );
      }
    };
    //Chairman By Invitation
    const chairmanDetails = () => {
      if (language) {
        return (
          <div style={divStyle}>
            <div>
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  marginRight: '20px',
                }}
              >
                Chairman <br />
                By Invitation <br />
              </p>
              <img src={chairmanImage} style={imageStyle} />
            </div>
            <p style={{ fontSize: '16px', paddingTop: '10px' }}>
              Benefits include all M Sphere Regal Rewards, plus
            </p>
            <ul>
              <li>Free Entry to Miccosukee Indian Village & Airboat Rides</li>
              <li>
                25% Discount Miccosukee Indian Village Purchases & Airboat Rides
              </li>
              <li>25% Hotel and Dining Cash Discount</li>
              <li>Free Express Valet Parking and Retrieval</li>
              <li>25% Miccosukee Golf & Country Club Discount*</li>
              <li>Round of Golf for 2 at Miccosukee Golf & Country Club</li>
              <li>20,000 Rollover Tier Points</li>
              <li>Free Beverages while Playing</li>
              <li>Free Companion Card: Shared Status Only</li>
              <li>Priority Seating at Entertainment Events**</li>
              <li>Credit Card Fee Waived</li>
              <li>Reserve Slot Machine (30 minutes)</li>
            </ul>
          </div>
        );
      } else {
        return (
          <div style={divStyle}>
            <div>
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '22px',
                  lineHeight: '1.3',
                  marginRight: '20px',
                }}
              >
                Chairman <br />
                Por invitación <br />
              </p>
              <img src={chairmanImage} style={imageStyle} />
            </div>
            <p style={{ fontSize: '16px', paddingTop: '10px' }}>
              Incluye todos los beneficios del nivel Regal de M Sphere, más
            </p>
            <ul>
              <li>
                Entrada gratuita a Miccosukee Indian Village y paseos en
                hidrodeslizador
              </li>
              <li>25% de descuento en Miccosukee Indian Village & Airboats</li>
              <li>25% de descuento en efectivo en el hotel y restaurantes</li>
              <li>
                Servicio de estacionamiento y recuperación de valet exprés
                gratuito
              </li>
              <li>25% de descuento en Miccosukee Golf & Country Club*</li>
              <li>
                Ronda de golf gratuita para 2 en Miccosukee Golf & Country Club
              </li>
              <li>20,000 puntos de nivel acumulados</li>
              <li>Bebidas gratis mientras juega</li>
              <li>Tarjeta de acompañante gratuita: solo estatus compartido</li>
              <li>Asientos prioritarios en eventos de entretenimiento**</li>
              <li>Tarifa de tarjeta de crédito eliminada</li>
              <li>Reserva de máquina tragamonedas (30 minutos)</li>
            </ul>
          </div>
        );
      }
    };

    switch (cardSelected) {
      case 'select':
        return selectDetails();
      case 'prime':
        return primeDetails();
      case 'noble':
        return nobleDetails();
      case 'regal':
        return regalDetails();
      case 'chairman':
        return chairmanDetails();
      default:
        return selectDetails();
    }
  };

  const renderComingSoon = () => {
    return (
      <div>
        <p style={{ fontWeight: '500' }}>
          {language ? 'COMING SOON:' : 'PRÓXIMAMENTE:'}
        </p>
        <ul>
          <li>
            {language
              ? 'Player Portal Access (All Tiers)'
              : 'Acceso al portal de jugadores (todos los niveles)'}
          </li>
          <li>
            {language
              ? 'Complimentary Trip to Reciprocal Partner Location** (Chairman Tier)'
              : 'Viaje de cortesía a la ubicación del socio recíproco** (Chairman solamente)'}
          </li>
          <li>
            {language
              ? 'Complimentary Cruise on Partner Cruise Line (Chairman Tier)'
              : 'Crucero de cortesía en una línea de cruceros asociada (Chairman solamente)'}
          </li>
        </ul>
        <p style={{ fontStyle: 'italic' }}>
          {language
            ? '*Discount for card member only. Chairman tier qualifies for an additional guest discount.'
            : '**Descuento sólo para destinatario. El nivel Chairman califica para un descuento adicional de invitado.'}
        </p>
        <p style={{ fontStyle: 'italic' }}>
          {language
            ? '**Please contact Casino Host. Based on availability.'
            : '**Favor de consultar a un anfitrión del casino. Basado en disponibilidad.'}
        </p>
      </div>
    );
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div className={classes.leftTextArea}>
          <h2>M Sphere Rewards</h2>
          <p>
            {language
              ? 'Unlock the benefits you deserve by using your M Sphere Rewards card with every purchase. Gain access to exclusive events and experiences by earning points and advancing through our five-tier program designed just for you.'
              : 'Accede a los beneficios que te mereces usando tu tarjeta M Sphere Rewards con cada compra. Obtén acceso a eventos y experiencias exclusivas ganando puntos y avanzando a través de nuestro programa de cinco niveles diseñado sólo para tí.'}
          </p>
          <div style={{ marginTop: '30px' }}>
            <h4>{language ? 'Member Benefits' : 'Beneficios para Miembros'}</h4>
            {/*renderCardButtons()*/}
            {renderButtons()}
            {renderTierDetails()}
            {renderComingSoon()}
          </div>
          <div style={{ height: '60px' }}></div>
          <div>
            <h4>
              {language ? 'Live it up! PLAY ON.' : 'Live it up! PLAY ON.'}
            </h4>
            <div style={{ width: '100%' }}>{renderExpansionPanel()}</div>
          </div>
          {renderDisclaimer()}
        </div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default MSphere;

/*
 <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>M Sphere Rewards program</h2>
              <h4>
                {language ? 'Live it up! PLAY ON.' : 'Live it up! PLAY ON.'}
              </h4>
              <div style={{ marginTop: '25px' }}>
                <div style={{ width: '100%' }}>{renderExpansionPanel()}</div>
              </div>
              {renderDisclaimer()}
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
          </GridItem>
        </GridContainer>
*/
