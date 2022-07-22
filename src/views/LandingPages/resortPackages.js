import React from 'react';

import { Link } from 'react-router-dom';

// context
import { useLanguage } from 'contexts/languageContext.js';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';

//import Footer from 'components/CustomFooters/SimpleFooter';
import MrgFooter from 'components/CustomFooters/MrgFooter.js';

// styles
import styles from 'assets/jss/material-kit-react/views/landingPage.js';

// header image
import hero from 'assets/media/img/landingPages/tomahawk_webV3.jpeg';

// Icons
import { Icon } from '@material-ui/core';

// Images
import emblem from 'assets/media/img/miccosukee/MiccosukeeEmblem_Color.svg';
import image1 from 'assets/media/img/mrg/amenities/club-egret/club_egret_01.jpg';
import image2 from 'assets/media/img/mrg/amenities/club-egret/club_egret_01.jpg';
import image3 from 'assets/media/img/mrg/amenities/club-egret/club_egret_01.jpg';

const useStyles = makeStyles(styles);

const ResortPackages = () => {
  const classes = useStyles();

  const language = useLanguage();

  const renderDesktopView = () => {
    const header = () => {
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
            }}
          >
            RESORT PACKAGES
          </h1>
        </div>
      );
    };

    const horizontalRule = () => {
      return (
        <hr
          style={{
            border: '1px solid rgb(212 212 212)',
            width: '50%',
            marginTop: '120px',
          }}
        />
      );
    };

    const getaway = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div
          style={{
            marginTop: '70px',
          }}
        >
          <img
            src={image1}
            style={{ maxWidth: '600px', borderRadius: '10px' }}
          />
          <div style={{ marginTop: '30px' }}>
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
              Book by 8/31/2022 for stays through 9/15/2022
            </p>
          </div>
        </div>
      );
    };

    const adventurePackage = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div
          style={{
            marginTop: '70px',
          }}
        >
          <img
            src={image2}
            style={{ maxWidth: '600px', borderRadius: '10px' }}
          />
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
            <p style={detailsCss}>
              Includes a Deluxe Level room with one king bed or two queen beds
              for one night, double occupancy.
            </p>
            <p style={detailsCss}>
              Airboat ride experience through the beautiful Everglades
            </p>
            <p style={detailsCss}>
              Transportation to and from Miccosukee Airboats
            </p>
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
        </div>
      );
    };

    const golfPackage = () => {
      const detailsCss = {
        fontSize: '18px',
      };
      return (
        <div
          style={{
            marginTop: '70px',
          }}
        >
          <img
            src={image3}
            style={{ maxWidth: '600px', borderRadius: '10px' }}
          />
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
            <p style={detailsCss}>
              Includes a Deluxe Level room with one king bed or two queen beds
              for one night, double occupancy.
            </p>
            <p style={detailsCss}>18 holes of golf for two, plus cart rental</p>
            <p style={detailsCss}>
              Transportation to and from Miccosukee Golf &amp; Country Club
            </p>
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
        </div>
      );
    };

    return (
      <div
        id="mobile"
        className={classes.container}
        style={{ paddingBottom: '80px' }}
      >
        {header()}
        <RaisedContainer customMargin="-18px">
          {getaway()}
          {horizontalRule()}
          {adventurePackage()}
          {horizontalRule()}
          {golfPackage()}
        </RaisedContainer>
      </div>
    );
  };

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
      <div
        id="mobile"
        className={classes.container}
        style={{ paddingBottom: '80px' }}
      >
        {headerMobile()}
        {getawayMobile()}
        {horizontalRuleMobile()}
        {adventurePackageMobile()}
        {horizontalRuleMobile()}
        {golfPackageMobile()}
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
