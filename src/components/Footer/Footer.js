/*eslint-disable*/
import React, { useState, useContext, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

// nodejs library that concatenates classes
import classNames from 'classnames';

// social
import { mrgSocialMedia } from 'business_info/socialMedia.js';

// material-ui core components
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

// Custom Components
import Badge from 'components/Badge/Badge.js';

// My Custom Components
import DesktopFooter from 'components/Footer/Components/DesktopFooter.js';
import MobileFooter from 'components/Footer/Components/MobileFooter.js';
import DemoFooter from 'components/Footer/Components/DemoFooter.js';

// Styles
import styles from 'assets/jss/material-kit-react/components/footerStyle.js';
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';

// Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

// Contexts
import { SignupFormProvider } from 'contexts/SignupFormContext.js';
import { AlertContext, signupAlertId } from 'contexts/AlertContext.js';
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();
  let location = useLocation();

  const [alerts, setAlerts] = useContext(AlertContext);
  const [modal, setModal] = useState(false);
  const [mobileSignup, setMobileSignup] = useState(false);

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

  useEffect(() => {
    //Since signup provider is in footer, control signup form here.
    const history = createBrowserHistory();
    if (location.pathname === '/signup' || location.pathname === '/signup/') {
      setMobileSignup(true);
      setModal(true);
    }
  }, [location.pathname]);

  const renderSocialIcons = () => {
    return (
      <React.Fragment>
        <a
          href={mrgSocialMedia.facebook}
          target="_blank"
          style={{ margin: '0px 12px 0px 0px', display: 'inline-block' }}
        >
          <FacebookIcon
            fontSize="small"
            style={{ color: 'rgb(102 102 102)' }}
          />
        </a>
        <a
          href={mrgSocialMedia.instagram}
          target="_blank"
          style={{ margin: '0px 12px 0px 0px', display: 'inline-block' }}
        >
          <InstagramIcon
            fontSize="small"
            style={{ color: 'rgb(102 102 102)' }}
          />
        </a>
        <a
          href={mrgSocialMedia.linkedin}
          target="_blank"
          style={{ margin: '0px 20px 0px 0px', display: 'inline-block' }}
        >
          <LinkedinIcon
            fontSize="small"
            style={{ color: 'rgb(102 102 102)' }}
          />
        </a>
      </React.Fragment>
    );
  };

  /* ORIGINAL
  const renderFooter = () => {
    //Mobile signup is the complete form.
    if (mobileSignup) {
      return (
        <MobileFooter
          footerMenuItems={props.footerMenuItems}
          color={props.color}
          handleMobileSubscribeClick={openModal}
          modal={modal}
          closeModal={closeModal}
          entity={props.signup}
        />
      );
    } else {
      return (
        <footer className={footerClasses}>
          <div className={classes.container}>
            <Hidden smDown>
              <DesktopFooter
                footerMenuItems={props.footerMenuItems}
                color={props.color}
                onSubscribe={openModal}
                modal={modal}
                closeModal={closeModal}
                entity={props.signup}
              />
            </Hidden>
            <Hidden mdUp>
              <MobileFooter
                footerMenuItems={props.footerMenuItems}
                color={props.color}
                handleMobileSubscribeClick={openModal}
                modal={modal}
                closeModal={closeModal}
                entity={props.signup}
              />
            </Hidden>
            <div style={{ paddingBottom: '10px' }}>
              <div
                style={{
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                className={classes.left}
              >
                <img
                  style={{ width: '16px', marginRight: '2px' }}
                  alt="miccosukee emblem"
                  src={emblem}
                />{' '}
                Copyright &copy; {1900 + new Date().getYear()}
              </div>
              <div style={{ padding: '0px' }} className={classes.right}>
                {props.noLanguage ? (
                  ''
                ) : (
                  <Badge
                    styleProp={{ cursor: 'pointer', width: '70px' }}
                    onClick={toggleLanguage}
                    color="danger"
                    role="button"
                  >
                    {language ? 'español' : 'english'}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </footer>
      );
    }
  };
  */

  const renderFooter = () => {
    //Mobile signup is the complete form.
    if (mobileSignup) {
      return (
        <MobileFooter
          footerMenuItems={props.footerMenuItems}
          color={props.color}
          handleMobileSubscribeClick={openModal}
          modal={modal}
          closeModal={closeModal}
          entity={props.signup}
        />
      );
    } else {
      return (
        <footer className={footerClasses}>
          <div className={classes.container}>
            <Hidden smDown>
              <DesktopFooter
                footerMenuItems={props.footerMenuItems}
                color={props.color}
                onSubscribe={openModal}
                modal={modal}
                closeModal={closeModal}
                entity={props.signup}
              />
            </Hidden>
            <Hidden mdUp>
              <MobileFooter
                footerMenuItems={props.footerMenuItems}
                color={props.color}
                handleMobileSubscribeClick={openModal}
                modal={modal}
                closeModal={closeModal}
                entity={props.signup}
              />
            </Hidden>
            <div
              style={{
                paddingBottom: '10px',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                className={classes.left}
              >
                <img
                  style={{ width: '16px', marginRight: '2px' }}
                  alt="miccosukee emblem"
                  src={emblem}
                />{' '}
                Copyright &copy; {1900 + new Date().getYear()}
              </div>
              <div
                style={{ padding: '0px', alignItems: 'center' }}
                className={classes.right}
              >
                {renderSocialIcons()}
              </div>
            </div>
          </div>
        </footer>
      );
    }
  };

  return (
    <SignupFormProvider entity={props.signup}>
      {!props.footerMenuItems ? <DemoFooter /> : renderFooter()}
    </SignupFormProvider>
  );
}
