import React, { useState, useContext, useEffect } from 'react';

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
import CustomSimpleDialog from 'components/CustomModal/CustomSimpleModal/CustomSimpleModal';

// styles
import styles from 'assets/jss/material-kit-react/views/landingPage/holidayCards.js';
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

// Holiday card components
import ThanksgivingCards from './thanksgiving';
import XmasCards from './xmas';

// Cards
import xmas1a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas1_Inside.jpg';
import xmas1b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas1_Outside.jpg';

const useStyles = makeStyles(styles);
const useHeaderStyles = makeStyles(headerStyle);

const HolidayCards = () => {
  const classes = useStyles();
  const headerClasses = useHeaderStyles();
  const language = useLanguage();

  //Footer Dialog
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

  //Cards Dialog
  const [isOpen, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);
  const closeDialog = () => {
    setOpen(false);
  };
  const openDialog = () => {
    setOpen(true);
  };
  const getDialogContent = (data) => {
    setDialogContent(data);
  };

  const [holiday, setHoliday] = useState('thanksgiving');
  const handleClick = (state) => {
    setHoliday(state);
  };

  const renderButtons = () => {
    const thanksgivingStyle = {
      //backgroundColor: badgeColor ? badgeColor : errorColor,
      background: 'rgb(227, 137, 11)',
      color: 'white',
      cursor: 'pointer',
      margin: '4px',
    };
    const christmasStyle = {
      backgroundColor: 'green',
      //color: badgeColor ? badgeColor : errorColor,
      color: 'white',
      cursor: 'pointer',
      margin: '4px',
    };

    return (
      <div style={{ marginBottom: '10px' }}>
        <Button
          onClick={() => handleClick('thanksgiving')}
          style={thanksgivingStyle}
        >
          Thanksgiving
        </Button>
        <Button onClick={() => handleClick('christmas')} style={christmasStyle}>
          Christmas
        </Button>
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
        </div>
        <h1 className={classes.headerTitle}>
          <span className={classes.headerTitleSpan}>HOLIDAY CARDS</span>
        </h1>
      </div>
    );
  };

  const sectionTitle = () => {
    switch (holiday) {
      case 'halloween':
        return <h2 className={classes.contentSectionHeader}>Halloween</h2>;
      case 'thanksgiving':
        return <h2 className={classes.contentSectionHeader}>Thanksgiving</h2>;
      case 'christmas':
        return <h2 className={classes.contentSectionHeader}>Christmas</h2>;
      case 'newyears':
        return <h2 className={classes.contentSectionHeader}>New Year</h2>;
      default:
        return <h2 className={classes.contentSectionHeader}>Thanksgiving</h2>;
    }
  };

  const renderCards = () => {
    switch (holiday) {
      case 'thanksgiving':
        return (
          <ThanksgivingCards
            openDialog={openDialog}
            getDialogContent={getDialogContent}
            classes={classes}
          />
        );
      case 'christmas':
        return (
          <XmasCards
            openDialog={openDialog}
            getDialogContent={getDialogContent}
            classes={classes}
          />
        );
    }
  };

  const disclaimer = () => {
    return (
      <div className={classes.disclaimerSection}>
        <p className={classes.disclaimerBold}>
          Custom designs will incur a design fee and should be requested two
          weeks in advance to ensure timely delivery.
          <br />
          Please contact MAPA at 305-894-2375, mapa@miccosukee.com
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
              {renderButtons()}
              {sectionTitle()}
              <div>{renderCards()}</div>
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
      <CustomSimpleDialog
        isOpen={isOpen}
        closeDialog={closeDialog}
        dialogContent={dialogContent}
      />
    </div>
  );
};

export default HolidayCards;
