import React, { useContext } from 'react';

// Context
import { ContactModalContext } from 'contexts/ContactFormModalContext';
import { MobileMenuDrawerContext } from 'contexts/MobileMenuDrawerContext';
import { ContactFormContext } from 'contexts/ContactFormContext';

// My Components
import CustomContactModal from 'components/CustomModal/CustomContactModals/CustomContactModal.js';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';

// Styles
import styles from 'assets/jss/material-kit-react/components/footerStyle.js';
import { makeStyles } from '@material-ui/core/styles';

// Legal
import { privacyPolicy } from 'business_info/legal';
import { cookiePolicy } from 'business_info/legal';
import { termsConditions } from 'business_info/legal';

const useStyles = makeStyles(styles);

const MiccosukeeFooter = () => {
  const classes = useStyles();

  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [mobileOpen, setMobileOpen] = useContext(MobileMenuDrawerContext);
  const [formValues, setFormValues] = useContext(ContactFormContext);

  const openModal = (setState) => {
    setMobileOpen(false);
    setState(true);
  };

  const closeModal = (setState) => {
    setState(false);
  };

  const handleClick = (setState) => {
    setFormValues({
      ...formValues,
      inputValues: {
        ...formValues.inputValues,
        ['select']: 'Media Inquiry',
        ['selectError']: false,
        ['selectTouched']: true,
      },
    });
    openModal(setState);
  };

  return (
    <div>
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
        <span
          onClick={() => handleClick(setShowContactModal)}
          style={{
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '11px',
            marginRight: '12px',
          }}
          role="button"
        >
          MEDIA INQUIRIES
        </span>
        <a
          target="_blank"
          href={privacyPolicy}
          style={{
            color: '#3c4858',
            fontWeight: '500',
            fontSize: '11px',
            marginRight: '12px',
          }}
        >
          PRIVACY POLICY
        </a>
        <a
          target="_blank"
          href={cookiePolicy}
          style={{
            color: '#3c4858',
            fontWeight: '500',
            fontSize: '11px',
            marginRight: '12px',
          }}
        >
          COOKIE POLICY
        </a>
        <a
          target="_blank"
          href={termsConditions}
          style={{ color: '#3c4858', fontWeight: '500', fontSize: '11px' }}
        >
          TERMS &amp; CONDITIONS
        </a>
      </div>
      {/*
      <CustomContactModal
        language={true}
        showModal={showContactModal}
        closeModal={() => closeModal(setShowContactModal)}
        entity={{ name: "media" }}
      />
      */}
    </div>
  );
};

export default MiccosukeeFooter;
//<span style={{ fontWeight: "500", fontSize: "11px" }}>MEDIA INQUIRIES</span>
