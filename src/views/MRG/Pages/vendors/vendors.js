import React, { useContext, useEffect } from 'react';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';

// Images
import bgImage from 'assets/media/img/mrg/vendors/vendors-page-banner.jpeg';
import airboatsImage from 'assets/media/img/airboats/Slider_Airboat2.jpeg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/vendors.js';

// Form
import Contact from 'components/CustomForms/Contact/Contact.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';
import { ContactModalContext } from 'contexts/ContactFormModalContext';
import { MobileMenuDrawerContext } from 'contexts/MobileMenuDrawerContext';
import { ContactFormContext } from 'contexts/ContactFormContext';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3, image4, image5];
const airboatsImageObj = [{ src: airboatsImage, alt: 'airboats' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Vendors = () => {
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

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <h2>Vendors</h2>
        <p className={classes.subHeader}>
          Level up your Business! Partner with Miccosukee Casino & Resort as a
          Vendor Today!
        </p>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <div>
                <p>
                  Becoming a Miccosukee Casino & Resort vendor grants you access
                  to a thriving market, extensive support, brand exposure, and a
                  chance to be part of a reputable establishment. It’s an
                  opportunity to grow your business, expand your network, and
                  make a lasting impact in the dynamic world of gaming and
                  entertainment.
                </p>
              </div>
              <div style={{ marginTop: '30px' }}>
                <h6>TYPES OF VENDORS</h6>
                <ul>
                  <li>Food & Beverage</li>
                  <li>Gaming & General Equipment</li>
                  <li>Engineering/Facilities</li>
                  <li>Operating Supplies</li>
                  <li>Retail</li>
                </ul>
              </div>
              <div style={{ marginTop: '30px' }}>
                <h6>VENDOR SELECTION CRITERIA</h6>
                <p>
                  Our vendor selection process follows the criteria established
                  by the American Gaming Association, ensuring that we choose
                  only those who can provide exceptional value across the board.
                </p>
                <ul>
                  <li>Ability to meet specifications & Standards</li>
                  <li>Product and Service Quality</li>
                  <li>Competitive Prices</li>
                  <li>Dependable Delivery</li>
                  <li>Quality control methods and practices</li>
                  <li>Technical abilities and leadership</li>
                  <li>Financial reliability</li>
                  <li>Compatibility with existing products</li>
                  <li>Proven performance and experience</li>
                </ul>
                {/* HIDE BUTTON ON DESKTOP. USE FORM ON DESKTOP */}
                {/*
                  <Button target="_blank" href="/airboats" usetheme="contained">
                  {language ? 'More Information' : 'More Information'}
                </Button>
                */}
              </div>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div>
              <h3 style={{ marginTop: '0px', marginBottom: '-5px' }}>
                Become a Vendor
              </h3>
              <Contact
                noModal={true}
                language={language}
                entity={'mcrVendorForm'}
              />
            </div>
          </GridItem>
        </GridContainer>
        <div style={{ paddingBottom: '40px' }}></div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Vendors;
