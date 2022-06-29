/*eslint-disable*/
import React, { useState, useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';

// nodejs library that concatenates classes
import classNames from 'classnames';

// material-ui core components
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import Badge from 'components/Badge/Badge.js';

// My Custom Components
import DesktopFooter from 'components/Footer/Components/DesktopFooter.js';
import MobileFooter from 'components/Footer/Components/MobileFooter.js';
import DemoFooter from 'components/Footer/Components/DemoFooter.js';

// Styles
import styles from 'assets/jss/material-kit-react/components/footerStyle.js';
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';

// Contexts
import { SignupFormProvider } from 'contexts/SignupFormContext.js';
import { AlertContext, signupAlertId } from 'contexts/AlertContext.js';
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';

// @material-ui/icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(styles);

export default function SimpleFooter(props) {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const [alerts, setAlerts] = useContext(AlertContext);
  const [modal, setModal] = useState(false);

  const classes = useStyles();

  const footerClasses = classNames({
    [classes.footer]: true,
  });

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  // Reset snackbar state when footer unmounts.
  useEffect(() => {
    return () => {
      setAlerts({ ...alerts, [signupAlertId]: false });
    };
  }, []);

  const renderMobileFooter = () => {
    return (
      <div style={{ paddingTop: '3px' }}>
        <div
          style={{ display: 'flex', alignItems: 'center', lineHeight: '0' }}
          className={classes.left}
        >
          <Link to={'/'}>
            <img
              style={{ width: '20px', marginRight: '2px' }}
              alt="miccosukee emblem"
              src={emblem}
            />
            <span
              style={{ color: '#3c4858', fontSize: '11px', fontWeight: 400 }}
            >
              MICCOSUKEE.COM
            </span>
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            lineHeight: '0',
            padding: '0',
          }}
          className={classes.right}
        >
          <a
            href="https://www.facebook.com/Miccosukee.Resort.Gaming"
            target="_blank"
          >
            <FacebookIcon
              fontSize="small"
              style={{ color: '#3c4858', margin: '0px 3px' }}
            />
          </a>
          <a
            href="https://www.instagram.com/miccosukee.resort.gaming/"
            target="_blank"
          >
            <InstagramIcon
              fontSize="small"
              style={{ color: '#3c4858', margin: '0px 3px' }}
            />
          </a>
          <a href="https://twitter.com/miccnationmiami" target="_blank">
            <TwitterIcon
              fontSize="small"
              style={{ color: '#3c4858', margin: '0px 0px 0px 3px' }}
            />
          </a>
        </div>
      </div>
    );
  };

  const renderDesktopFooter = () => {
    return (
      <div style={{ paddingTop: '12px' }}>
        <div
          style={{ display: 'flex', alignItems: 'center', lineHeight: '0' }}
          className={classes.left}
        >
          <Link to={'/'}>
            <img
              style={{ width: '20px', marginRight: '2px' }}
              alt="miccosukee emblem"
              src={emblem}
            />
            <span
              style={{ color: '#3c4858', fontSize: '11px', fontWeight: 400 }}
            >
              MICCOSUKEE.COM
            </span>
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            lineHeight: '0',
            padding: '0',
          }}
          className={classes.right}
        >
          <a
            href="https://www.facebook.com/Miccosukee.Resort.Gaming"
            target="_blank"
          >
            <FacebookIcon
              fontSize="small"
              style={{ color: '#3c4858', margin: '0px 3px' }}
            />
          </a>
          <a
            href="https://www.instagram.com/miccosukee.resort.gaming/"
            target="_blank"
          >
            <InstagramIcon
              fontSize="small"
              style={{ color: '#3c4858', margin: '0px 3px' }}
            />
          </a>
          <a href="https://twitter.com/miccnationmiami" target="_blank">
            <TwitterIcon
              fontSize="small"
              style={{ color: '#3c4858', margin: '0px 0px 0px 3px' }}
            />
          </a>
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <footer className={footerClasses}>
        <div className={classes.container}>
          <Hidden mdUp>{renderMobileFooter()}</Hidden>
          <Hidden smDown>{renderDesktopFooter()}</Hidden>
        </div>
      </footer>
    );
  };

  return (
    <SignupFormProvider entity={props.signup}>
      {renderFooter()}
    </SignupFormProvider>
  );
}
