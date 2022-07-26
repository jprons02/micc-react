import React from 'react';

import { Link } from 'react-router-dom';

// context
import { useLanguage } from 'contexts/languageContext.js';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import Button from 'components/CustomButtons/Button.js';

//import Footer from 'components/CustomFooters/SimpleFooter';
import MrgFooter from 'components/CustomFooters/MrgFooter.js';

// styles
import styles from 'assets/jss/material-kit-react/views/landingPage.js';

// header image
import heroDesktop from 'assets/media/img/landingPages/resortPackages/hero_image_desktop.jpg';
import heroMobile from 'assets/media/img/landingPages/resortPackages/hero_image_mobile.jpg';

// Icons
import { Icon } from '@material-ui/core';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';
import image1 from 'assets/media/img/landingPages/resortPackages/getaway_section-image_mobile.jpg';
import image2 from 'assets/media/img/landingPages/resortPackages/adventure_section-image_mobile.jpg';
import image3 from 'assets/media/img/landingPages/resortPackages/golf_section-image_mobile.jpg';

import image1desktop from 'assets/media/img/landingPages/resortPackages/getaway_section-image_desktop.jpg';
import image2desktop from 'assets/media/img/landingPages/resortPackages/adventure_section-image_desktop.jpg';
import image3desktop from 'assets/media/img/landingPages/resortPackages/golf_section-image_desktop.jpg';

const useStyles = makeStyles(styles);

const ResortPackages = () => {
  const classes = useStyles();

  const language = useLanguage();

  const red = '#fe284f';
  const yellowTitle = '#ffd800';
  const yellow = '#ff9c00';
  const green = '#33ab88';

  const handleClick = () => {
    window.open('tel:+13059252555');
  };

  const renderDesktopView = () => {
    const contentDivStyle = { marginTop: '70px' };
    const imageStyle = { width: '100%', borderRadius: '10px' };
    const buttonStyle = (color) => {
      return {
        backgroundColor: color,
        width: '260px',
        paddingTop: '16px',
        paddingBottom: '16px',
      };
    };

    const header = () => {
      return (
        <div
          style={{
            padding: '90px 0 140px 0',
            backgroundColor: '#373737',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              style={{
                maxWidth: '144px',
                display: 'inline-block',
                marginRight: '20px',
              }}
              src={emblem}
              alt="miccosukee emblem logo"
            />
            <h1
              style={{
                fontSize: '80px',
                fontWeight: '800',
                fontFamily: 'Avenir Next',
                display: 'inline-block',
                lineHeight: '.95',
                color: yellowTitle,
              }}
            >
              <span style={{ letterSpacing: '4px' }}>EXPERIENCE</span>
              <br />
              MICCOSUKEE
            </h1>
          </div>
        </div>
      );
    };

    const horizontalRule = () => {
      return (
        <hr
          style={{
            border: '1px solid rgb(212 212 212)',
            width: '150px',
          }}
        />
      );
    };

    const bottomSpacer = (pixelNumber) => {
      return <div style={{ paddingBottom: `${pixelNumber}px` }}></div>;
    };

    const getaway = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image1desktop} style={imageStyle} />
          <div style={{ margin: '30px 0 20px 0' }}>
            <h2 style={{ color: red, fontWeight: '600', fontSize: '30px' }}>
              GETAWAY PACKAGE
            </h2>
            <p style={detailsCss}>Book 2 nights and get the 3rd night free!</p>
            <p style={detailsCss}>
              Reserve 2 nights in any of our Deluxe Level or standard rate and
              get the 3rd night free!
            </p>
            <p style={detailsCss}>
              Book by 8/31/2022 for stays through 9/15/2022.
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(red)}>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>
              CALL NOW
            </span>
          </Button>
        </div>
      );
    };

    const adventurePackage = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image2desktop} style={imageStyle} />
          <div style={{ marginTop: '30px' }}>
            <h2
              style={{
                color: yellow,
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              ADVENTURE PACKAGE
            </h2>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={detailsCss}>
                Includes a Deluxe Level room with one king bed or two queen beds
                for one night, double occupancy.
              </li>
              <li style={detailsCss}>
                Airboat ride experience through the beautiful Everglades
              </li>
              <li style={detailsCss}>
                Transportation to and from Miccosukee Airboats
              </li>
            </ul>
            <p style={detailsCss}>
              * Valid through 11/30/2022
              <br />
              $168.60
            </p>
            <p style={detailsCss}>
              * Valid 12/01/2022 through 4/30/2023
              <br />
              $262.95
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(yellow)}>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>
              CALL NOW
            </span>
          </Button>
        </div>
      );
    };

    const golfPackage = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image3desktop} style={imageStyle} />
          <div style={{ marginTop: '30px' }}>
            <h2
              style={{
                color: green,
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              GOLF PACKAGE
            </h2>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={detailsCss}>
                Includes a Deluxe Level room with one king bed or two queen beds
                for one night, double occupancy.
              </li>
              <li style={detailsCss}>
                18 holes of golf for two, plus cart rental
              </li>
              <li style={detailsCss}>
                Transportation to and from Miccosukee Golf &amp; Country Club
              </li>
            </ul>
            <p style={detailsCss}>
              * Valid through 11/30/2022
              <br />
              $188.60
            </p>
            <p style={detailsCss}>
              * Valid 12/01/2022 through 4/30/2023
              <br />
              $282.95
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(green)}>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>
              CALL NOW
            </span>
          </Button>
        </div>
      );
    };

    const disclaimer = () => {
      return (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold' }}>
            Please visit the Hotel Front Desk or contact (305) 925-2555 for more
            details.
          </p>
          <p style={{ fontStyle: 'italic' }}>
            Room occupants must be 18 years of age or older. Rates may not be
            combined with any other discount or offer. Management reserves all
            rights.
          </p>
        </div>
      );
    };

    return (
      <div>
        {/*<img style={{ width: '100%' }} src={heroDesktop} />*/}
        {header()}
        <div
          id="desktop"
          className={classes.container}
          style={{ marginBottom: '20px' }}
        >
          <RaisedContainer>
            {getaway()}
            {bottomSpacer(130)}
            {/*horizontalRule()*/}
            {adventurePackage()}
            {bottomSpacer(130)}
            {/*horizontalRule()*/}
            {golfPackage()}
            <div style={{ paddingTop: '60px', paddingBottom: '40px' }}>
              {horizontalRule()}
            </div>
            {disclaimer()}
            {bottomSpacer(60)}
          </RaisedContainer>
        </div>
      </div>
    );
  };

  /*
  const renderMobileView = () => {
    const headerMobile = () => {
      return (
        <div style={{ textAlign: 'center' }}>
          <img
            style={{
              width: '80px',
              paddingTop: '30px',
            }}
            src={emblem}
            alt="miccosukee emblem logo"
          />
          <h1
            style={{
              margin: '50px 0 0 10px',
              fontWeight: '600',
              lineHeight: '1',
            }}
          >
            RESORT
            <br />
            PACKAGES
          </h1>
        </div>
      );
    };

    const horizontalRuleMobile = () => {
      return (
        <hr
          style={{
            border: '1px solid rgb(212 212 212)',
            width: '90%',
            marginTop: '80px',
          }}
        />
      );
    };

    const getawayMobile = () => {
      const detailsCssMobile = {
        fontSize: '18px',
      };
      return (
        <div
          style={{
            marginTop: '70px',
          }}
        >
          <img src={image1} style={{ width: '100%', borderRadius: '10px' }} />
          <div style={{ marginTop: '30px' }}>
            <h2
              style={{ color: '#f4004a', fontWeight: '600', fontSize: '30px' }}
            >
              GETAWAY PACKAGE
            </h2>
            <p style={detailsCssMobile}>
              Book 2 nights and get the 3rd night free!
            </p>
            <p style={detailsCssMobile}>
              Reserve 2 nights in any of our Deluxe Level or standard rate and
              get the 3rd night free!
            </p>
            <p style={detailsCssMobile}>
              Book by 8/31/2022 for stays through 9/15/2022
            </p>
          </div>
        </div>
      );
    };

    const adventurePackageMobile = () => {
      const detailsCssMobile = {
        fontSize: '18px',
      };
      return (
        <div
          style={{
            marginTop: '70px',
          }}
        >
          <img src={image2} style={{ width: '100%', borderRadius: '10px' }} />
          <div style={{ marginTop: '30px' }}>
            <h2
              style={{
                color: 'rgb(255 141 0)',
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              ADVENTURE PACKAGE
            </h2>
            <p style={detailsCssMobile}>
              Includes a Deluxe Level room with one king bed or two queen beds
              for one night, double occupancy.
            </p>
            <p style={detailsCssMobile}>
              Airboat ride experience through the beautiful Everglades
            </p>
            <p style={detailsCssMobile}>
              Transportation to and from Miccosukee Airboats
            </p>
            <p style={detailsCssMobile}>
              * Valid through 11/30/2022
              <br />
              $168.60
            </p>
            <p style={detailsCssMobile}>
              * Valid 12/01/2022 through 4/30/2023
              <br />
              $262.95
            </p>
          </div>
        </div>
      );
    };

    const golfPackageMobile = () => {
      const detailsCssMobile = {
        fontSize: '18px',
      };
      return (
        <div
          style={{
            marginTop: '70px',
          }}
        >
          <img src={image3} style={{ width: '100%', borderRadius: '10px' }} />
          <div style={{ marginTop: '30px' }}>
            <h2
              style={{
                color: 'rgb(0 171 84)',
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              GOLF PACKAGE
            </h2>
            <p style={detailsCssMobile}>
              Includes a Deluxe Level room with one king bed or two queen beds
              for one night, double occupancy.
            </p>
            <p style={detailsCssMobile}>
              18 holes of golf for two, plus cart rental
            </p>
            <p style={detailsCssMobile}>
              Transportation to and from Miccosukee Golf &amp; Country Club
            </p>
            <p style={detailsCssMobile}>
              * Valid through 11/30/2022
              <br />
              $188.60
            </p>
            <p style={detailsCssMobile}>
              * Valid 12/01/2022 through 4/30/2023
              <br />
              $282.95
            </p>
          </div>
        </div>
      );
    };

    return (
      <div id="mobile" className={classes.container}>
        {headerMobile()}
        {getawayMobile()}
        {horizontalRuleMobile()}
        {adventurePackageMobile()}
        {horizontalRuleMobile()}
        {golfPackageMobile()}
      </div>
    );
  };
  */

  const renderMobileView = () => {
    const contentDivStyle = { marginTop: '20px' };
    const imageStyle = { width: '100%', borderRadius: '10px' };
    const buttonStyle = (color) => {
      return {
        backgroundColor: color,
        width: '100%',
      };
    };

    const horizontalRule = () => {
      return (
        <hr
          style={{
            border: '1px solid rgb(212 212 212)',
            width: '100px',
          }}
        />
      );
    };

    const bottomSpacer = (pixelNumber) => {
      return <div style={{ paddingBottom: `${pixelNumber}px` }}></div>;
    };

    const header = () => {
      return (
        <div
          style={{
            padding: '40px 0 60px 0',
            backgroundColor: '#373737',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              style={{
                maxWidth: '64px',
                display: 'inline-block',
                marginRight: '10px',
              }}
              src={emblem}
              alt="miccosukee emblem logo"
            />
            <h1
              style={{
                fontSize: '36px',
                fontWeight: '800',
                fontFamily: 'Avenir Next',
                display: 'inline-block',
                lineHeight: '.95',
                color: yellowTitle,
              }}
            >
              <span style={{ letterSpacing: '2px' }}>EXPERIENCE</span>
              <br />
              MICCOSUKEE
            </h1>
          </div>
        </div>
      );
    };

    const getaway = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image1} style={imageStyle} />
          <div style={{ marginTop: '30px', marginBottom: '20px' }}>
            <h2
              style={{ color: '#f4004a', fontWeight: '600', fontSize: '30px' }}
            >
              GETAWAY PACKAGE
            </h2>
            <p style={detailsCss}>Book 2 nights and get the 3rd night free!</p>
            <p style={detailsCss}>
              Reserve 2 nights in any of our Deluxe Level or standard rate and
              get the 3rd night free!
            </p>
            <p style={detailsCss}>
              Book by 8/31/2022 for stays through 9/15/2022.
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(red)}>
            <span style={{ fontSize: '12px', fontWeight: '600' }}>
              CALL NOW
            </span>
          </Button>
        </div>
      );
    };

    const adventurePackage = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image2} style={imageStyle} />
          <div style={{ marginTop: '30px', marginBottom: '20px' }}>
            <h2
              style={{
                color: 'rgb(255 141 0)',
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              ADVENTURE PACKAGE
            </h2>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={detailsCss}>
                Includes a Deluxe Level room with one king bed or two queen beds
                for one night, double occupancy.
              </li>
              <li style={detailsCss}>
                Airboat ride experience through the beautiful Everglades
              </li>
              <li style={detailsCss}>
                Transportation to and from Miccosukee Airboats
              </li>
            </ul>
            <p style={detailsCss}>
              * Valid through 11/30/2022
              <br />
              $168.60
            </p>
            <p style={detailsCss}>
              * Valid 12/01/2022 through 4/30/2023
              <br />
              $262.95
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(yellow)}>
            <span style={{ fontSize: '12px', fontWeight: '600' }}>
              CALL NOW
            </span>
          </Button>
        </div>
      );
    };

    const golfPackage = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div style={contentDivStyle}>
          <img src={image3} style={imageStyle} />
          <div style={{ marginTop: '30px', marginBottom: '20px' }}>
            <h2
              style={{
                color: 'rgb(0 171 84)',
                fontWeight: '600',
                fontSize: '30px',
              }}
            >
              GOLF PACKAGE
            </h2>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={detailsCss}>
                Includes a Deluxe Level room with one king bed or two queen beds
                for one night, double occupancy.
              </li>
              <li style={detailsCss}>
                18 holes of golf for two, plus cart rental
              </li>
              <li style={detailsCss}>
                Transportation to and from Miccosukee Golf &amp; Country Club
              </li>
            </ul>
            <p style={detailsCss}>
              * Valid through 11/30/2022
              <br />
              $188.60
            </p>
            <p style={detailsCss}>
              * Valid 12/01/2022 through 4/30/2023
              <br />
              $282.95
            </p>
          </div>
          <Button onClick={handleClick} style={buttonStyle(green)}>
            <span style={{ fontSize: '12px', fontWeight: '600' }}>
              CALL NOW
            </span>
          </Button>
        </div>
      );
    };

    const disclaimer = () => {
      return (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold' }}>
            Please visit the Hotel Front Desk or contact (305) 925-2555 for more
            details.
          </p>
          <p style={{ fontStyle: 'italic' }}>
            Room occupants must be 18 years of age or older. Rates may not be
            combined with any other discount or offer. Management reserves all
            rights.
          </p>
        </div>
      );
    };

    return (
      <div>
        {/*<img style={{ width: '100%' }} src={heroMobile} />*/}
        {header()}
        <div
          id="mobile"
          className={classes.container}
          style={{ marginBottom: '20px' }}
        >
          {/*header()*/}
          <RaisedContainer customMargin="-18px">
            {getaway()}
            {bottomSpacer(110)}
            {/*horizontalRule()*/}
            {adventurePackage()}
            {bottomSpacer(110)}
            {/*horizontalRule()*/}
            {golfPackage()}
            <div style={{ paddingTop: '40px', paddingBottom: '24px' }}>
              {horizontalRule()}
            </div>
            {disclaimer()}
            {bottomSpacer(20)}
          </RaisedContainer>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.main}>
      <Hidden mdUp>{renderMobileView()}</Hidden>
      <Hidden smDown>{renderDesktopView()}</Hidden>

      <MrgFooter />
    </div>
  );
};

export default ResortPackages;
