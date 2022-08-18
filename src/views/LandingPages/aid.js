import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

//my custom components
import LogoSlider from 'components/CustomSlider/logoSlider';

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
import styles from 'assets/jss/material-kit-react/views/landingPage/aid.js';
import headerStyle from 'assets/jss/material-kit-react/views/miccosukee/components/header.js';

// header image
//import heroImageDesktop from 'assets/media/img/landingPages/aid2022/AID_landing-page-header.jpeg';
import heroImageDesktop from 'assets/media/img/landingPages/aid2022/aid_banner_mobile.jpg';
import heroImageMobile from 'assets/media/img/landingPages/aid2022/aid_banner_mobile.jpg';

import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';
import image1 from 'assets/media/img/landingPages/aid2022/AID_PHOTO_A.jpg';
import image2 from 'assets/media/img/landingPages/aid2022/AID_PHOTO_B.jpg';
import image3 from 'assets/media/img/landingPages/aid2022/AID_PHOTO_C.jpg';
import image4 from 'assets/media/img/landingPages/aid2022/AID_PHOTO_D.jpg';

// logos
import logo1 from 'assets/media/img/landingPages/aid2022/logos/Rock Rose.jpeg';
import logo2 from 'assets/media/img/landingPages/aid2022/logos/AGS_logo_international.jpg';
import logo3 from 'assets/media/img/landingPages/aid2022/logos/att_hz_lg_lkp_rgb_pos.jpeg';
import logo4 from 'assets/media/img/landingPages/aid2022/logos/BluberiLogoFullCMYK_2C.jpg';
import logo5 from 'assets/media/img/landingPages/aid2022/logos/EVERI_Logo.jpg';
import logo6 from 'assets/media/img/landingPages/aid2022/logos/Fortunet Logo 2014-07-14(1).jpg';
import logo7 from 'assets/media/img/landingPages/aid2022/logos/HSS 2020 Primary Logo Lockup_plue KBS tag (1)(1).jpg';
import logo8 from 'assets/media/img/landingPages/aid2022/logos/ManTech-Logo-.jpg';
import logo9 from 'assets/media/img/landingPages/aid2022/logos/AFC-AIS.png';
import logo10 from 'assets/media/img/landingPages/aid2022/logos/Aristocrat Gaming Logo.Purple.png';
import logo11 from 'assets/media/img/landingPages/aid2022/logos/Imagine-This-Logo_vector-(1).jpg';
import logo12 from 'assets/media/img/landingPages/aid2022/logos/LOGO_IGT_RGB_4COL-BLUE.jpg';
import logo13 from 'assets/media/img/landingPages/aid2022/logos/TPI_logo_color_black.jpg';
import logo14 from 'assets/media/img/landingPages/aid2022/logos/Wipfli_Logo_Blue_PMS2728C-(1).jpg';

const useStyles = makeStyles(styles);
const useHeaderStyles = makeStyles(headerStyle);

const AID = () => {
  const classes = useStyles();
  const headerClasses = useHeaderStyles();
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

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const primary = '#ff6e31';

  const imageObj = [
    { src: image1, alt: 'alligator wrestle' },
    { src: image2, alt: 'airboat' },
    { src: image3, alt: 'apparel' },
    { src: image4, alt: 'indian activity' },
  ];

  const sponsorLogoImages = [
    /*
    {
      key: 1,
      img: logo1,
      style: { width: '320px', paddingRight: '40px' },
      link: '',
    },
    {
      key: 2,
      img: logo2,
      style: { width: '270px', paddingRight: '20px', marginTop: '50px' },
      link: 'https://google.com',
    },
    */
    {
      key: 3,
      img: logo3,
      style: { width: '170px', marginTop: '35px' },
      link: '',
    },
    {
      key: 4,
      img: logo4,
      style: { height: '80px', paddingRight: '30px', marginTop: '20px' },
      link: '',
    },
    {
      key: 5,
      img: logo5,
      style: { height: '80px', paddingRight: '30px', marginTop: '20px' },
      link: '',
    },
    {
      key: 6,
      img: logo6,
      style: { width: '170px', paddingRight: '30px', marginTop: '40px' },
      link: '',
    },
    {
      key: 7,
      img: logo7,
      style: { width: '180px', paddingRight: '30px', marginTop: '40px' },
      link: '',
    },
    {
      key: 8,
      img: logo8,
      style: { height: '90px', paddingRight: '30px', marginTop: '20px' },
      link: '',
    },
    {
      key: 9,
      img: logo9,
      style: { width: '180px', paddingRight: '30px', marginTop: '40px' },
      link: '',
    },
    {
      key: 10,
      img: logo10,
      style: { width: '180px', paddingRight: '30px', marginTop: '40px' },
      link: '',
    },
    {
      key: 11,
      img: logo11,
      style: { width: '180px', paddingRight: '30px', marginTop: '32px' },
      link: '',
    },
    {
      key: 12,
      img: logo12,
      style: { width: '180px', paddingRight: '30px', marginTop: '40px' },
      link: '',
    },
    {
      key: 13,
      img: logo13,
      style: { width: '180px', paddingRight: '30px', marginTop: '25px' },
      link: '',
    },
    {
      key: 14,
      img: logo14,
      style: { width: '180px', paddingRight: '30px', marginTop: '40px' },
      link: '',
    },
  ];

  const aidContent = [
    {
      image: image1,
      color: primary,
      title: 'American Indian Day',
      body: [
        {
          key: 1,
          p: () => {
            return (
              <p className={classes.contentSectionDetails}>
                {language ? '' : '¡'}
                <span style={{ fontWeight: 'bold' }}>
                  American Indian Day
                </span>{' '}
                {language
                  ? " is back at Miccosukee Resort & Gaming! Discover the Miccosukee Tribe's culture and traditions as we host alligator wrestling shows, airboat rides, grease pole competitions, indigenous craft and food vendors, and more fun for the whole family! Join us and connect with Miami's original locals in the heart of the Florida Everglades."
                  : ' está de regreso en Miccosukee Resort & Gaming! Descubra la cultura y las tradiciones de la Tribu Miccosukee mientras disfruta espectáculos de lucha con caimanes, paseos en hidrodeslizador, competencias de “grease pole”, artesanía indígena, vendedores de comida, ¡y más diversión para toda la familia! Visítenos y conéctese con los habitantes originales de Miami en el corazón de los Everglades de Florida.'}
              </p>
            );
          },
        },
        {
          key: 2,
          p: () => {
            return (
              <div style={{ marginBottom: '25px' }}>
                <p className={classes.contentSectionDetails}>
                  <span style={{ fontWeight: 'bold' }}>
                    {language ? 'Save the Date:' : 'Reserve la Fecha:'}
                  </span>{' '}
                  {language
                    ? ' Saturday, September 24, 2022, from 12 PM - 6 PM at Miccosukee Resort & Gaming'
                    : ' sábado 24 de septiembre de 2022, de 12 PM a 6 PM en Miccosukee Resort & Gaming'}
                </p>
                <Button
                  href="https://www.eventbrite.com/e/miccosukee-celebrates-american-indian-day-registration-389611878617?aff=website"
                  target="_blank"
                  style={{ backgroundColor: primary }}
                  className={classes.contentButton}
                >
                  <span className={classes.contentButtonText}>
                    {language ? 'REGISTER HERE' : 'REGÍSTRESE AQUÍ'}
                  </span>
                </Button>
              </div>
            );
          },
        },
        {
          key: 3,
          p: () => {
            return (
              <div>
                <p className={classes.contentSectionDetails}>
                  <span style={{ fontWeight: 'bold' }}>
                    {language
                      ? 'Experience Miccosukee:'
                      : 'La Experiencia Miccosukee:'}
                  </span>{' '}
                  <br />
                  {language
                    ? ' Golfing, adventure, relaxation? Check out our amazing'
                    : '¿Golf, aventura, relajación? Echa un vistazo a nuestros increíbles'}
                  <a
                    href="https://www.miccosukee.com/resortpackages"
                    target="_blank"
                  >
                    <span
                      style={{
                        color: primary,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                      }}
                    >
                      {language ? ' Resort Packages' : ' Paquetes de Resort'}
                    </span>{' '}
                  </a>
                  {language
                    ? " that cater to whatever you're in the mood for."
                    : ' que se adaptan a lo que sea que le apetezca.'}
                </p>
                {/*<Button
                  href="https://www.miccosukee.com/resortpackages"
                  target="_blank"
                  style={{ backgroundColor: primary }}
                  className={classes.contentButton}
                >
                  <span className={classes.contentButtonText}>
                    {language ? 'RESORT PACKAGES' : 'RESORT PACKAGES'}
                  </span>
                </Button>*/}
              </div>
            );
          },
        },
        {
          key: 4,
          p: () => {
            return (
              <div
                style={
                  {
                    /*marginBottom: '25px'*/
                  }
                }
              >
                <p className={classes.contentSectionDetails}>
                  <span style={{ fontWeight: 'bold' }}>
                    {language ? 'Upcoming Events' : 'Próximos eventos'}
                  </span>
                  <br />
                  {language
                    ? "Don't miss our Indian Arts & ﻿Crafts Festival coming in December 2022!"
                    : '¡No se pierda nuestro Indian Arts & Crafts Festival que se realizará en diciembre de 2022!'}
                </p>
              </div>
            );
          },
        },
        {
          key: 5,
          p: () => {
            return (
              <div>
                <p className={classes.contentSectionDetails}>
                  <span style={{ fontWeight: 'bold' }}>
                    {language ? 'Presented by:' : 'Presentado por:'}
                  </span>{' '}
                  <br />
                </p>
                {
                  <div className={classes.sponsorLogosSection}>
                    <img src={logo1} className={classes.sponsorLogosTop} />
                    <img src={logo2} className={classes.sponsorLogos} />
                  </div>
                }
                {<LogoSlider content={sponsorLogoImages} />}
              </div>
            );
          },
        },
      ],
    },
  ];

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
      <div>
        <Hidden mdUp>
          <img style={{ width: '100%' }} src={heroImageMobile} />
        </Hidden>
        <Hidden smDown>
          <img style={{ width: '100%' }} src={heroImageDesktop} />
        </Hidden>
      </div>
    );
  };

  const imageSlider = () => {
    return (
      <GridContainer style={{ paddingTop: '24px' }}>
        <GridItem md={7} style={{ padding: '2px' }}>
          <div>
            <CustomImageSlider images={imageObj} />
          </div>
        </GridItem>
      </GridContainer>
    );
  };

  const renderContentSection = () => {
    const section = (content) => {
      const details = () => {
        return content.body.map((item) => {
          return <div key={item.key}>{item.p()}</div>;
        });
      };

      return (
        <div>
          <div className={classes.contentTextDiv}>
            <h2
              style={{ color: content.color }}
              className={classes.contentSectionHeader}
            >
              {content.title}
            </h2>
            {/* IF SUBHEADER EXISTS */}
            {content.subHeader ? (
              <p className={classes.contentSectionSubHeader}>
                {content.subHeader}
              </p>
            ) : null}
            {details()}
          </div>
          {imageSlider()}
        </div>
      );
    };

    return aidContent.map((item) => {
      return <div key={item.title}>{section(item)}</div>;
    });
  };

  const renderContent = () => {
    return (
      <div>
        {header()}
        <div className={classes.container} style={{ marginBottom: '20px' }}>
          <RaisedContainer>
            {languageToggler()}
            <div className={classes.contentSection}>
              {renderContentSection()}
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

export default AID;
