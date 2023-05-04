import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

// context
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';

// Business info
import { mrgBusinessInfo } from 'business_info/genericInfo.js';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import Button from 'components/CustomButtons/Button.js';

//import Footer from 'components/CustomFooters/SimpleFooter';
import MrgFooter from 'components/CustomFooters/MrgFooter.js';

// styles
import styles from 'assets/jss/material-kit-react/views/landingPage/valet.js';
import headerStyle from 'assets/jss/material-kit-react/views/miccosukee/components/header.js';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';
import image1 from 'assets/media/img/landingPages/resortPackages/getaway_section-image_mobile.jpg';
import image2 from 'assets/media/img/landingPages/resortPackages/adventure_section-image_mobile.jpg';
import image3 from 'assets/media/img/landingPages/resortPackages/golf_section-image_mobile.jpg';

import image1desktop from 'assets/media/img/landingPages/resortPackages/getaway_section-image_desktop.jpg';
import image2desktop from 'assets/media/img/landingPages/resortPackages/adventure_section-image_desktop.jpg';
import image3desktop from 'assets/media/img/landingPages/resortPackages/golf_section-image_desktop.jpg';

const useStyles = makeStyles(styles);
const useHeaderStyles = makeStyles(headerStyle);

const Valet = () => {
  const classes = useStyles();
  const headerClasses = useHeaderStyles();

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  // Close contact modal on mount
  useEffect(() => {
    closeModal(setShowContactModal);
  }, []);
  const closeModal = (setState) => {
    setState(false);
  };

  const red = '#fe284f';
  const yellowTitle = '#ffd800';
  const yellow = '#ff9c00';
  const green = '#33ab88';

  const languageToggler = () => {
    return (
      <div style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
        <div style={{ display: 'inline-block' }}>
          <Button
            simple={language ? false : true}
            className={
              language
                ? headerClasses.languageTrue
                : headerClasses.languageFalse
            }
            //style={language ? languageTrue : languageFalse}
            onClick={!language ? toggleLanguage : null}
            color="danger"
            aria-pressed={language}
          >
            english
          </Button>
          <Button
            simple={!language ? false : true}
            className={
              !language
                ? headerClasses.languageTrue
                : headerClasses.languageFalse
            }
            //style={!language ? languageTrue : languageFalse}
            onClick={language ? toggleLanguage : null}
            color="danger"
            aria-pressed={!language}
          >
            español
          </Button>
        </div>
      </div>
    );
  };

  const disclaimer = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          {language
            ? 'In the event that you lose your claim check, a picture I.D. will be required to claim your vehicle.'
            : 'En caso de que pierda su Cheque de Reclamación, se le solicitará una identificación con fotografía para reclamar su vehículo.'}
        </p>
        <p style={{ fontStyle: 'italic' }}>
          {language
            ? 'We reserve the right to move the vehicle on this lot at any time. We assume no liability for theft, collision, accidents, fire damages of any kind to personal property from any course whatsoever. We assume no responsibility or liability for property left in vehicle. Property is left in the vehicle solely at the risk of the owner. Acceptance of Claim Check constitutes acknowledgment by holder that he/she has read and does agree to the foregoing conditions.'
            : 'Nos reservamos el derecho de mover el vehículo en este lote en cualquier momento. No asumimos ninguna responsabilidad por robo, colisión, accidentes, daños por incendio de ningún tipo a la propiedad personal de cualquier curso que sea. No asumimos ninguna responsabilidad por la propiedad dejada en el vehículo. La propiedad se deja en el vehículo únicamente a riesgo del propietario. La aceptación del Cheque de Reclamación constituye el reconocimiento por parte del titular de que ha leído y está de acuerdo con las condiciones anteriores.'}
        </p>
      </div>
    );
  };

  const renderValet = () => {
    const contentDivStyle = { marginTop: '70px' };
    const imageStyle = { width: '100%', borderRadius: '10px' };

    const header = () => {
      return (
        <React.Fragment>
          <Hidden smDown>
            <div
              style={{
                padding: '90px 0 140px 0',
                backgroundColor: '#373737',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  style={{
                    maxWidth: '80px',
                    display: 'inline-block',
                    marginRight: '20px',
                  }}
                  src={emblem}
                  alt="miccosukee emblem logo"
                />
                <h1
                  style={{
                    textAlign: 'center',
                    fontSize: '80px',
                    fontWeight: '800',
                    fontFamily: 'AvenirNextHeavy',
                    display: 'inline-block',
                    lineHeight: '.95',
                    color: 'white',
                  }}
                >
                  VALET
                </h1>
              </div>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div
              style={{
                padding: '40px 0 60px 0',
                backgroundColor: '#373737',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  style={{
                    maxWidth: '50px',
                    display: 'inline-block',
                    marginRight: '20px',
                  }}
                  src={emblem}
                  alt="miccosukee emblem logo"
                />
                <h1
                  style={{
                    textAlign: 'center',
                    fontSize: '50px',
                    fontWeight: '800',
                    fontFamily: 'AvenirNextHeavy',
                    display: 'inline-block',
                    lineHeight: '.95',
                    color: 'white',
                  }}
                >
                  VALET
                </h1>
              </div>
            </div>
          </Hidden>
        </React.Fragment>
      );
    };

    const horizontalRule = () => {
      return (
        <hr
          style={{
            border: '1px solid rgb(212 212 212)',
            width: '150px',
          }}
        />
      );
    };

    const ratesAndHours = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div>
          {/*<img src={image2desktop} style={imageStyle} />*/}
          <div>
            <h2
              style={{
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              {language ? 'VALET PARKING' : 'SERVICIO DE VALET'}
            </h2>
            {/*
            <div style={{ marginLeft: '10px' }}>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                }}
              >
                {language ? 'Rates: ' : 'Tarifas: '}
              </p>
              <ul style={{ paddingLeft: '24px', marginTop: '0px' }}>
                <li style={detailsCss}>
                  {language ? '$15 Standard' : '$15 Estándar'}
                </li>
                <li style={detailsCss}>
                  {language ? '$20 Overnight' : '$20 Por noche'}
                </li>
              </ul>
            </div>
            */}
            <div style={{ marginLeft: '10px' }}>
              {/*
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                }}
              >
                {language ? 'HOURS: ' : 'HORARIO: '}
              </p>
              */}
              <ul style={{ paddingLeft: '24px', marginTop: '0px' }}>
                <li style={{ fontSize: '18px', marginBottom: '8px' }}>
                  {language
                    ? 'Friday 8 am to Sunday at midnight'
                    : 'viernes 8 am a domingo a la medianoche'}
                </li>
                <li style={{ fontSize: '18px' }}>
                  {language
                    ? 'Please retrieve your keys at the Front Desk after Sunday at Midnight.'
                    : 'Busque sus llaves en la recepción del hotel si es después de la medianoche el domingo.'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        {header()}
        <div
          id="desktop"
          className={classes.container}
          style={{ marginBottom: '20px' }}
        >
          <RaisedContainer>
            {languageToggler()}
            {ratesAndHours()}
            <div style={{ paddingTop: '40px', paddingBottom: '40px' }}>
              {horizontalRule()}
            </div>
            {disclaimer()}
            <div style={{ height: '40px' }}></div>
          </RaisedContainer>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.main}>
      {renderValet()}
      <MrgFooter />
      <CustomContactModal
        language={language}
        showModal={showContactModal}
        closeModal={() => closeModal(setShowContactModal)}
        entity={mrgBusinessInfo}
      />
    </div>
  );
};

export default Valet;

/*
VALET HOURS

FRIDAY 8 AM TO SUNDAY AT MIDNIGHT

Please retrieve your keys at the Front Desk after Sunday at Midnight.

Busque sus llaves en la recepción del hotel si es después de la medianoche el domingo
*/
