import React from 'react';
import { Link } from 'react-router-dom';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

// context
import { useLanguage, useLanguageUpdate } from 'contexts/languageContext.js';

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
import heroImageDesktop from 'assets/media/img/landingPages/aid2022/AID_landing-page-header_with_guide.jpg';
import heroImageMobile from 'assets/media/img/landingPages/aid2022/AID_landing-page-header_test.jpg';

import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';
import image1 from 'assets/media/img/landingPages/aid2022/AID_PHOTO_A.jpg';
import image2 from 'assets/media/img/landingPages/aid2022/AID_PHOTO_B.jpg';
import image3 from 'assets/media/img/landingPages/aid2022/AID_PHOTO_C.jpg';
import image4 from 'assets/media/img/landingPages/aid2022/AID_PHOTO_D.jpg';

const useStyles = makeStyles(styles);
const useHeaderStyles = makeStyles(headerStyle);

const AID = () => {
  const classes = useStyles();
  const headerClasses = useHeaderStyles();

  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const primary = '#ff6e31';

  const imageObj = [
    { src: image1, alt: 'alligator wrestle' },
    { src: image2, alt: 'airboat' },
    { src: image3, alt: 'apparel' },
    { src: image4, alt: 'indian activity' },
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
              <p className={classes.contentSectionDetails}>
                <span style={{ fontWeight: 'bold' }}>
                  {language ? 'Save the Date:' : 'Reserve la Fecha:'}
                </span>{' '}
                {language
                  ? ' Saturday, September 24, 2022, from 12 PM - 6 PM at Miccosukee Resort & Gaming'
                  : ' sábado 24 de septiembre de 2022, de 12 PM a 6 PM en Miccosukee Resort & Gaming'}
              </p>
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
    const languageToggler = () => {};
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
          <Button
            href="https://www.eventbrite.com/e/miccosukee-celebrates-american-indian-day-registration-389611878617?aff=website"
            target="_blank"
            style={{ backgroundColor: content.color }}
            className={classes.contentButton}
          >
            <span className={classes.contentButtonText}>
              {language ? 'REGISTER HERE' : 'REGÍSTRESE AQUÍ'}
            </span>
          </Button>
          {imageSlider()}
        </div>
      );
    };

    return aidContent.map((item, index) => {
      //change padding dependent on what section this is
      const divStyle = () => {
        if (index === 0) {
          return classes.contentSectionTop;
        } else if (index === aidContent.length - 1) {
          return classes.contentSectionBottom;
        } else {
          return classes.contentSectionMiddle;
        }
      };
      return (
        <div key={item.title} className={divStyle()}>
          {section(item)}
        </div>
      );
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
    </div>
  );
};

export default AID;
