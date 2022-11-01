import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';

// context
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext.js';
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';
import { ContactFormContext } from 'contexts/ContactFormContext.js';

// Business info
import { mrgBusinessInfo } from 'business_info/genericInfo.js';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import Button from 'components/CustomButtons/Button.js';

//import Footer from 'components/CustomFooters/SimpleFooter';
import MrgFooter from 'components/CustomFooters/MrgFooter.js';

// Custom Components
import Badge from 'components/Badge/Badge.js';

// styles
import styles from 'assets/jss/material-kit-react/views/landingPage/banquets.js';
import headerStyle from 'assets/jss/material-kit-react/views/miccosukee/components/header.js';

// header image
import heroDesktop from 'assets/media/img/landingPages/resortPackages/hero_image_desktop.jpg';
import heroMobile from 'assets/media/img/landingPages/resortPackages/hero_image_mobile.jpg';

// Icons
import { Icon } from '@material-ui/core';

// Colors
import { errorColor } from 'themes/colors.js';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';
import image6 from 'assets/media/img/landingPages/banquets/banquets1_mobile.jpg';
import image6desktop from 'assets/media/img/landingPages/banquets/banquets1_desktop.jpg';

const useStyles = makeStyles(styles);
const useHeaderStyles = makeStyles(headerStyle);

const ResortPackages = () => {
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

  const [formValues, setFormValues] = useContext(ContactFormContext);

  const handleContactClick = () => {
    setFormValues({
      ...formValues,
      inputValues: {
        ...formValues.inputValues,
        ['select']: 'Banquet/Catering',
        ['selectError']: false,
        ['selectTouched']: true,
      },
    });
    setShowContactModal(true);
  };

  const red = '#fe284f';
  const yellowTitle = '#ffd800';
  const yellow = '#ff9c00';
  const green = '#33ab88';

  const renderBadges = () => {
    const badgeColor = 'danger';

    const selectedStyle = {
      backgroundColor: badgeColor ? badgeColor : errorColor,
      color: 'white',
      cursor: 'pointer',
      margin: '2px',
    };
    const defaultStyle = {
      backgroundColor: 'transparent',
      color: badgeColor ? badgeColor : errorColor,
      cursor: 'pointer',
      margin: '2px',
    };

    return (
      <div style={{ marginBottom: '20px' }}>
        <Badge
          margin="2px"
          color="danger"
          //onClick={() => handleBadgeClick(business.category)}
        >
          Testing
        </Badge>
        <Badge
          margin="2px"
          color="success"
          //onClick={() => handleBadgeClick(business.category)}
        >
          Testing
        </Badge>
      </div>
    );
  };

  const header = () => {
    return (
      <div className={classes.headerSection}>
        <div className={classes.headerLogoSection}>
          <img
            className={classes.headerLogo}
            src={emblem}
            alt="miccosukee emblem logo"
          />
          <h1 style={{ color: yellowTitle }} className={classes.headerTitle}>
            <span className={classes.headerTitleSpan}>HOLIDAY</span>
            <br />
            CARDS
          </h1>
        </div>
      </div>
    );
  };

  const renderTopSection = () => {
    const renderTopImage = () => {
      return (
        <div>
          <Hidden mdUp>
            <img src={image6} className={classes.contentImage} />
          </Hidden>
          <Hidden smDown>
            <img src={image6desktop} className={classes.contentImage} />
          </Hidden>
        </div>
      );
    };

    const renderTitle = () => {
      return (
        <h2 className={classes.contentSectionHeader}>
          {language
            ? 'Ballrooms, Conference Space & More'
            : 'Miccosukee: Hotel y Centro de Convenciones'}
        </h2>
      );
    };

    const details = () => {
      return (
        <React.Fragment>
          <ul>
            <li>
              {language
                ? 'Located 17 miles west of Miami International Airport, on the edge of the scenic Everglades'
                : 'Ubicado a 17 millas al oeste del Aeropuerto Internacional de Miami, en el borde de los pintorescos Everglades'}
            </li>
            <li>
              {language
                ? 'The resort offers 302 elegant guest rooms & suites.'
                : 'El complejo ofrece 302 elegantes habitaciones y suites.'}
            </li>
          </ul>
        </React.Fragment>
      );
    };

    const renderButtonContent = () => {
      return (
        <React.Fragment>
          <Button
            href="https://mapa-media.s3.amazonaws.com/mrg/Meeting_BanquetSpace.pdf"
            target="_blank"
            className={classes.contentButton}
          >
            <span className={classes.contentButtonText}>
              {language
                ? 'FACILITY DIMENSIONS'
                : 'DIMENSIONES DE INSTALACIONES'}
            </span>
          </Button>
          <Button
            onClick={handleContactClick}
            className={classes.contentButton}
          >
            <span className={classes.contentButtonText}>
              {language ? 'CONTACT' : 'CONTACTO'}
            </span>
          </Button>
        </React.Fragment>
      );
    };

    return (
      <div>
        {renderTopImage()}
        <div className={classes.contentTextDiv}>
          {renderTitle()}
          {details()}
        </div>
        {renderButtonContent()}
      </div>
    );
  };

  const renderMeetingsAndBallrooms = () => {
    const renderTitle = () => {
      return (
        <h3 className={classes.contentSectionSubHeader}>
          {language ? 'Meetings & Ballrooms' : 'Salones de Reuniones y Fiestas'}
        </h3>
      );
    };

    const details = () => {
      return (
        <React.Fragment>
          <ul>
            <li>
              {language
                ? "Located on the resort's spacious 2nd floor, offering over 20,000 sq. ft. featuring 8 breakout areas"
                : 'Ubicado en el espacioso segundo piso del hotel, ofrece más de 20,000 pies cuadrados con 8 áreas de descanso.'}
            </li>
            <li>
              {language
                ? 'Our flexible meeting space provides ample room for all of your needs. Full open ballrooms can accommodate extensive general sessions, including banquet and catering services for up to 1,200 guests.'
                : 'Nuestra área para reuniones ofrece un amplio espacio para todas sus necesidades. Los salones completamente abiertos pueden acomodar sesiones generales extensas, incluidos servicios de banquetes y catering para hasta 1,200 invitados.'}
            </li>
            <li>
              {language
                ? 'The 2nd floor features a reception lobby and lounge, adjacent to the ballrooms and the foyer. Dimensions are available for each area.'
                : 'El segundo piso cuenta con un vestíbulo de recepción y sala de estancia junto a los salones. Las dimensiones están disponibles para cada área.'}
            </li>
            <li>
              {language
                ? 'High-capacity internet connectivity and hard-wired services are available in the meeting rooms, ballrooms, and foyer.'
                : 'La conectividad a Internet de alta capacidad y los servicios por cable están disponibles en las salas de reuniones y el vestíbulo.'}
            </li>
            <li>
              {language
                ? 'Segmented Wi-Fi network is available in all conference spaces specific to your event.'
                : 'La red Wi-Fi segmentada está disponible en todos los espacios de conferencias específicos para su evento.'}
            </li>
            <li>
              {language
                ? 'Outdoor space is also available.'
                : 'El espacio al aire libre también está disponible.'}
            </li>
          </ul>
        </React.Fragment>
      );
    };

    return (
      <div>
        <div className={classes.contentTextDiv}>
          {renderTitle()}
          {details()}
        </div>
      </div>
    );
  };

  const disclaimer = () => {
    return (
      <div className={classes.disclaimerSection}>
        <p className={classes.disclaimerBold}>
          {language
            ? 'Please contact the Sales Department at 305-925-2561, Sales&Catering@miccosukee.com'
            : 'Comuníquese con el Departamento de Ventas al 305-925-2561, Sales&Catering@miccosukee.com'}
        </p>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div>
        {header()}
        <div className={classes.container} style={{ marginBottom: '20px' }}>
          <RaisedContainer>
            <div className={classes.contentSection}>
              {renderBadges()}
              {renderTopSection()}
              {renderMeetingsAndBallrooms()}
              <hr
                className={classes.horizontalRule}
                style={{ marginTop: '60px', marginBottom: '40px' }}
              />
              {disclaimer()}
            </div>
          </RaisedContainer>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderContent()}
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

export default ResortPackages;

/*
Contact
Gricel Galarza
Contact the Sales Department at 305-925-2561
Sales&Catering@miccosukee.com
*/
