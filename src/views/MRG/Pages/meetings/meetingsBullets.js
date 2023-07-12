import React, { useContext } from 'react';

// material-ui core components
import Button from 'components/CustomButtons/Button.js';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext';
import { MobileMenuDrawerContext } from 'contexts/MobileMenuDrawerContext';
import { ContactFormContext } from 'contexts/ContactFormContext';

const useStyles = makeStyles(styles);

const MeetingsBullets = () => {
  const language = useLanguage();
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

  const handleClick = (setState) => {
    setFormValues({
      ...formValues,
      inputValues: {
        ...formValues.inputValues,
        ['select']: 'Banquet/Catering',
        ['selectError']: false,
        ['selectTouched']: true,
      },
    });
    openModal(setState);
  };

  const renderDirectorAndMessage = () => {
    return (
      <div style={{ paddingBottom: '50px' }}>
        <p>
          <span style={{ fontWeight: '500', textTransform: 'uppercase' }}>
            Director of Sales & Catering
          </span>
          <br />
          Gricel Galarza
          <br />
          305-925-2561
          <br />
          <a href="mailto:Sales&Catering@miccosukee.com">
            Sales&Catering@miccosukee.com
          </a>
        </p>
        <Button
          usetheme="contained"
          onClick={() => handleClick(setShowContactModal)}
        >
          Send Message
        </Button>
      </div>
    );
  };

  const renderSpacesAndAmenities = () => {
    return (
      <React.Fragment>
        <p style={{ fontWeight: '500', textTransform: 'uppercase' }}>
          {language ? 'SPACES & AMENITIES' : 'SPACES & AMENITIES'}
        </p>
        <ul>
          <li>
            {language
              ? 'Our flexible meeting space provides ample room for all your needs. Full open ballrooms can accommodate extensive general sessions, including banquet and catering services for up to 1,200 guests.'
              : 'Our flexible meeting space provides ample room for all your needs. Full open ballrooms can accommodate extensive general sessions, including banquet and catering services for up to 1,200 guests.'}
          </li>
          <li>
            {language
              ? 'The second floor features the reception lobby and lounge adjacent to the ballrooms and the foyer. Dimensions are available for each area.'
              : 'The second floor features the reception lobby and lounge adjacent to the ballrooms and the foyer. Dimensions are available for each area.'}
          </li>
          <li>
            {language
              ? 'High-capacity internet connectivity and hard-wired services are available in the meeting rooms, ballrooms, and foyer.'
              : 'High-capacity internet connectivity and hard-wired services are available in the meeting rooms, ballrooms, and foyer.'}
          </li>
          <li>
            {language
              ? 'Segmented Wi-Fi network is available in all conference spaces specific to your event.'
              : 'Segmented Wi-Fi network is available in all conference spaces specific to your event.'}
          </li>
          <li>
            {language
              ? 'Outdoor space is also available.'
              : 'Outdoor space is also available.'}
          </li>
        </ul>
      </React.Fragment>
    );
  };

  const renderFoodAndBeverage = () => {
    return (
      <React.Fragment>
        <p style={{ fontWeight: '500', textTransform: 'uppercase' }}>
          {language ? 'FOOD & BEVERAGE' : 'FOOD & BEVERAGE'}
        </p>
        <ul>
          <li>
            {language
              ? 'Banquet and catering services can accommodate up to 1,200 guests.'
              : 'Banquet and catering services can accommodate up to 1,200 guests.'}
          </li>
        </ul>
      </React.Fragment>
    );
  };

  const renderElevators = () => {
    return (
      <React.Fragment>
        <p style={{ fontWeight: '500', textTransform: 'uppercase' }}>
          {language ? 'ELEVATORS' : 'ELEVATORS'}
        </p>
        <ul>
          <li>
            {language
              ? 'A service elevator with direct access to the second-floor ballrooms is available.'
              : 'A service elevator with direct access to the second-floor ballrooms is available.'}
          </li>
        </ul>
      </React.Fragment>
    );
  };

  const renderAmenities = () => {
    return (
      <React.Fragment>
        <p style={{ fontWeight: '500', textTransform: 'uppercase' }}>
          {language ? 'Amenities' : 'Amenities'}
        </p>
        <ul>
          <li>
            {language
              ? 'Indoor Pool / Outdoor Patio'
              : 'Indoor Pool / Outdoor Patio'}
          </li>
          <li>{language ? 'Fitness Center' : 'Fitness Center'}</li>
          <li>
            {language ? '24-hour Dining Options' : '24-hour Dining Options'}
          </li>
          <li>
            {language ? 'High Stakes Bingo Hall' : 'High Stakes Bingo Hall'}
          </li>
          <li>{language ? 'Poker Room' : 'Poker Room'}</li>
          <li>
            {language
              ? 'Over 1,800 Slot Machines on our Casino Floor'
              : 'Over 1,800 Slot Machines on our Casino Floor'}
          </li>
          <li>
            {language
              ? 'All resort guest rooms conveniently feature Wi-Fi, premium cable programming, pay-per-view, in-room safe, flat-screen TVs, and more.'
              : 'All resort guest rooms conveniently feature Wi-Fi, premium cable programming, pay-per-view, in-room safe, flat-screen TVs, and more.'}
          </li>
        </ul>
      </React.Fragment>
    );
  };

  const renderAttractions = () => {
    return (
      <React.Fragment>
        <p style={{ fontWeight: '500', textTransform: 'uppercase' }}>
          {language ? 'Attractions' : 'Attractions'}
        </p>
        <ul>
          <li>
            {language
              ? 'The Everglades Experience includes the Miccosukee Indian Village and Airboat rides.'
              : 'The Everglades Experience includes the Miccosukee Indian Village and Airboat rides.'}
          </li>
          <li>
            {language
              ? 'Group and Business outings are available at the Miccosukee Golf & Country Club.'
              : 'Group and Business outings are available at the Miccosukee Golf & Country Club.'}
          </li>
          <li>
            {language
              ? 'Nearby attractions include Shark Valley, the Dolphin Mall, and more.'
              : 'Nearby attractions include Shark Valley, the Dolphin Mall, and more.'}
          </li>
        </ul>
      </React.Fragment>
    );
  };

  const renderDigitalSignage = () => {
    return (
      <React.Fragment>
        <p style={{ fontWeight: '500', textTransform: 'uppercase' }}>
          {language ? 'DIGITAL SIGNAGE' : 'DIGITAL SIGNAGE'}
        </p>
        <ul>
          <li>
            {language
              ? 'Available to customers in key places throughout our facility'
              : 'Available to customers in key places throughout our facility'}
          </li>
        </ul>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div>{renderDirectorAndMessage()}</div>
      <div>{renderSpacesAndAmenities()}</div>
      <div style={{ marginTop: '20px' }}>{renderFoodAndBeverage()}</div>
      <div style={{ marginTop: '20px' }}>{renderElevators()}</div>
      <div style={{ marginTop: '20px' }}>{renderAmenities()}</div>
      <div style={{ marginTop: '20px' }}>{renderAttractions()}</div>
      <div style={{ marginTop: '20px', paddingBottom: '20px' }}>
        {renderDigitalSignage()}
      </div>
    </React.Fragment>
  );
};

export default MeetingsBullets;
