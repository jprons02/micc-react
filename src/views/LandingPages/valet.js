import React, { useState, useEffect } from 'react';

// context
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';

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
import image6 from 'assets/media/img/landingPages/banquets/banquets1_mobile.jpg';
import image6desktop from 'assets/media/img/landingPages/banquets/banquets1_desktop.jpg';
import { SettingsInputAntennaTwoTone } from '@material-ui/icons';

const useStyles = makeStyles(styles);
const useHeaderStyles = makeStyles(headerStyle);

const Valet = () => {
  const classes = useStyles();
  const headerClasses = useHeaderStyles();

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const [state, setState] = useState('Noon High Hand');

  const handleClick = (state) => {
    setState(state);
  };

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

  const header = () => {
    return (
      <div className={classes.headerSection}>
        <div className={classes.headerLogoSection}>
          <img
            className={classes.headerLogo}
            src={emblem}
            alt="miccosukee emblem logo"
          />
          <h1 className={classes.headerTitle}>
            <span className={classes.headerTitleSpan}>POKER</span>
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

    const renderPokerDetails = () => {
      return (
        <React.Fragment>
          <h2 className={classes.contentSectionHeader}>Poker</h2>
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
            onClick={() => handleClick('Noon High Hand')}
            className={classes.contentButton}
          >
            <span className={classes.contentButtonText}>Noon High Hand</span>
          </Button>
          <Button
            onClick={() => handleClick('Opening Friday High Hand')}
            className={classes.contentButton}
          >
            <span className={classes.contentButtonText}>
              Opening Friday High Hand
            </span>
          </Button>
          <Button
            onClick={() => handleClick('Sunday High Hand')}
            className={classes.contentButton}
          >
            <span className={classes.contentButtonText}>Sunday High Hand</span>
          </Button>
          <Button
            onClick={() => handleClick('Weekend High Hand')}
            className={classes.contentButton}
          >
            <span className={classes.contentButtonText}>Weekend High Hand</span>
          </Button>
          <Button
            onClick={() => handleClick('Rules')}
            className={classes.contentButton}
          >
            <span className={classes.contentButtonText}>Rules</span>
          </Button>
        </React.Fragment>
      );
    };

    return (
      <div>
        {renderTopImage()}
        <div className={classes.contentTextDiv}>{renderPokerDetails()}</div>
        {renderButtonContent()}
      </div>
    );
  };

  const noonHighHand = () => {
    return (
      <div>
        <div className={classes.contentTextDiv}>
          <h3 className={classes.contentSectionSubHeader}>
            {language ? 'Noon High Hand' : ''}
          </h3>
          <ul>
            <li>
              {language
                ? "Located on the resort's spacious 2nd floor, offering over 20,000 sq. ft. featuring 8 breakout areas"
                : 'Ubicado en el espacioso segundo piso del hotel, ofrece más de 20,000 pies cuadrados con 8 áreas de descanso.'}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const renderDetails = () => {
    switch (state) {
      case 'Noon High Hand':
        return noonHighHand();
      default:
        return noonHighHand();
    }
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
            {languageToggler()}
            <div className={classes.contentSection}>
              {renderTopSection()}
              {renderDetails()}
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
    </div>
  );
};

export default Valet;
