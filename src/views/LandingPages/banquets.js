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

// styles
import styles from 'assets/jss/material-kit-react/views/landingPage/banquets.js';
import headerStyle from 'assets/jss/material-kit-react/views/miccosukee/components/header.js';

// header image
import heroDesktop from 'assets/media/img/landingPages/resortPackages/hero_image_desktop.jpg';
import heroMobile from 'assets/media/img/landingPages/resortPackages/hero_image_mobile.jpg';

// Icons
import { Icon } from '@material-ui/core';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';

import image1 from 'assets/media/img/landingPages/amenities/Resort_Mobile.jpg';
import image2 from 'assets/media/img/landingPages/amenities/Slots_Mobile.jpg';
import image3 from 'assets/media/img/landingPages/amenities/Bingo_Mobile.jpg';
import image4 from 'assets/media/img/landingPages/amenities/Dining_Mobile.jpg';
import image5 from 'assets/media/img/landingPages/amenities/Pool_Mobile.jpg';
import image6 from 'assets/media/img/landingPages/amenities/Banquets_Mobile.jpeg';

import image1desktop from 'assets/media/img/landingPages/amenities/Resort_Desktop.jpg';
import image2desktop from 'assets/media/img/landingPages/amenities/Slots_Desktop.jpg';
import image3desktop from 'assets/media/img/landingPages/amenities/Bingo_Desktop.jpg';
import image4desktop from 'assets/media/img/landingPages/amenities/Dining_Desktop.jpg';
import image5desktop from 'assets/media/img/landingPages/amenities/Pool_Desktop.jpg';
import image6desktop from 'assets/media/img/landingPages/amenities/Banquets_Desktop.jpeg';

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
          <h1 style={{ color: yellowTitle }} className={classes.headerTitle}>
            <span className={classes.headerTitleSpan}>BANQUETS</span>
            <br />
            &amp; CATERING
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
            ? 'Miccosukee Resort & Convention Center'
            : 'Miccosukee Resort & Convention Center'}
        </h2>
      );
    };

    const details = () => {
      return (
        <React.Fragment>
          <ul>
            <li>
              Located 17 miles west of Miami International Airport, on the edge
              of the scenic Everglades.
            </li>
            <li>The resort offers 302 elegant guest rooms &amp; suites</li>
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
          {language ? 'Meetings & Ballrooms' : 'Meetings & Ballrooms'}
        </h3>
      );
    };

    const details = () => {
      return (
        <React.Fragment>
          <ul>
            <li>
              Located on the resort's spacious 2nd floor, offering over 20,000
              sq. ft. featuring 8 breakout areas.
            </li>
            <li>
              Our flexible meeting space provides ample room for all of your
              needs. Full open ballrooms can accommodate extensive general
              sessions, including banquet and catering services for up to 1,200
              guests.
            </li>
            <li>
              The 2nd floor features a reception lobby and lounge, adjacent to
              the ballrooms and the foyer. Dimensions are available for each
              area.
            </li>
            <li>
              High-capacity internet connectivity and hard-wired services are
              available in the meeting rooms, ballrooms, and foyer.
            </li>
            <li>
              Segmented Wi-Fi network is available in all conference spaces
              specific to your event.
            </li>
            <li>Outdoor space is also available.</li>
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

  const renderFoodAndBeverage = () => {
    const renderTitle = () => {
      return (
        <h3 className={classes.contentSectionSubHeader}>
          {language ? 'Food & Beverage' : 'Food & Beverage'}
        </h3>
      );
    };

    const details = () => {
      return (
        <React.Fragment>
          <ul>
            <li>
              Banquet and catering services can accommodate up to 1,200 guests.
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

  const renderElevators = () => {
    const renderTitle = () => {
      return (
        <h3 className={classes.contentSectionSubHeader}>
          {language ? 'Elevators' : 'Elevators'}
        </h3>
      );
    };

    const details = () => {
      return (
        <React.Fragment>
          <ul>
            <li>
              Service elevator with direct access to the 2nd floor ballrooms.
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

  const renderParking = () => {
    const renderTitle = () => {
      return (
        <h3 className={classes.contentSectionSubHeader}>
          {language ? 'Parking' : 'Parking'}
        </h3>
      );
    };

    const details = () => {
      return (
        <React.Fragment>
          <ul>
            <li>Complimentary parking for all patrons.</li>
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

  const renderDigitalSignage = () => {
    const renderTitle = () => {
      return (
        <h3 className={classes.contentSectionSubHeader}>
          {language ? 'Digital Signage' : 'Digital Signage'}
        </h3>
      );
    };

    const details = () => {
      return (
        <React.Fragment>
          <ul>
            <li>
              Available to customers in key places throughout our facility.
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

  const renderAttractions = () => {
    const renderTitle = () => {
      return (
        <h3 className={classes.contentSectionSubHeader}>
          {language ? 'Attractions' : 'Attractions'}
        </h3>
      );
    };

    const details = () => {
      return (
        <React.Fragment>
          <ul>
            <li>
              The Everglades experience includes the Miccosukee Indian Village
              and Airboat rides.
            </li>
            <li>
              Group and business outings are available at the Miccosukee Golf
              &amp; Country Club.
            </li>
            <li>
              Nearby attractions include Shark Valley, the Dolphin Mall, and
              more.
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

  const renderAmenities = () => {
    const renderTitle = () => {
      return (
        <h3 className={classes.contentSectionSubHeader}>
          {language ? 'Amenities' : 'Amenities'}
        </h3>
      );
    };

    const details = () => {
      return (
        <React.Fragment>
          <ul>
            <li>Indoor Pool/Outdoor Patio</li>
            <li>24-hour Dining Options</li>
            <li>High Stakes Bingo Hall</li>
            <li>Fitness Center</li>
            <li>Gift Shop</li>
            <li>1,800+ Slot Machines on our casino floor</li>
            <li>
              All resort guest rooms conveniently feature Wi-Fi, premium cable
              programming, pay-per-view entertainment, in-room safe, flat-screen
              TVs, and more.
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
            : 'Please contact the Sales Department at 305-925-2561, Sales&Catering@miccosukee.com'}
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
              {renderMeetingsAndBallrooms()}
              {renderFoodAndBeverage()}
              {renderElevators()}
              {renderParking()}
              {renderDigitalSignage()}
              {renderAttractions()}
              {renderAmenities()}
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
