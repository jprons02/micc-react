import React from 'react';

import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';

import Footer from 'components/CustomFooters/SimpleFooter';

// styles
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// header image
import hero from 'assets/media/img/landingPages/tomahawk/tomahawk_webV3.jpeg';

// Icons
import { Icon } from '@material-ui/core';

const useStyles = makeStyles(styles);

const Tomahawk = () => {
  const classes = useStyles();

  const renderDesktopView = () => {
    return (
      <div>
        <h2 style={{ fontWeight: '400' }}>
          THE DADDY OF ALL STEAKS FOR THE BEST DAD
        </h2>
        <h4>
          Nothing says “Happy Father’s Day” like a big, juicy steak! Treat dad
          to a succulent Tomahawk special at Café Hammock.
        </h4>
        <p style={{ marginBottom: '0px' }}>
          Father’s Day Steak Special Sunday, June 19:
        </p>
        <ul style={{ marginTop: '0px', fontSize: '14px' }}>
          <li>Tomahawk Rib Steak 34oz - $75 pp</li>
          <li>Tomahawk Pork Chop 16oz - $40 pp</li>
        </ul>
        <p style={{ fontWeight: 600 }}>
          Special includes: loaded baked potato, green beans, and a glass of
          house wine or beer.
        </p>
        <p
          style={{
            fontSize: '25px',
            fontStyle: 'italic',
            paddingTop: '5px',
          }}
        >
          Happy Father's Day!
        </p>
      </div>
    );
  };

  const renderMobileView = () => {
    return (
      <div style={{ padding: '10px 0px' }}>
        <h2 style={{ marginTop: '0px', fontWeight: '400', fontSize: '24px' }}>
          THE DADDY OF ALL STEAKS FOR THE BEST DAD
        </h2>
        <h4 style={{ marginTop: '20px' }}>
          Nothing says “Happy Father’s Day” like a big, juicy steak! Treat dad
          to a succulent Tomahawk special at Café Hammock.
        </h4>
        <div style={{ margin: '25px 0px 0px 0px' }}>
          <p style={{ marginBottom: '0px' }}>
            Father’s Day Steak Special Sunday, June 19:
          </p>
          <ul
            style={{ marginTop: '0px', marginBottom: '5px', fontSize: '14px' }}
          >
            <li>Tomahawk Rib Steak 34oz - $75 pp</li>
            <li>Tomahawk Pork Chop 16oz - $40 pp</li>
          </ul>
          <p style={{ fontWeight: 400, fontSize: '12px', fontStyle: 'italic' }}>
            Special includes: loaded baked potato, green beans, and a glass of
            house wine or beer.
          </p>
        </div>
        <p
          style={{
            fontSize: '16px',
            fontStyle: 'italic',
            paddingTop: '5px',
          }}
        >
          Happy Father's Day!
        </p>
      </div>
    );
  };

  return (
    <React.Fragment>
      <img style={{ width: '100%' }} src={hero} />
      <RaisedContainer customMargin="-18px">
        <Hidden mdUp>{renderMobileView()}</Hidden>
        <Hidden smDown>{renderDesktopView()}</Hidden>
      </RaisedContainer>
      <Footer />
    </React.Fragment>
  );
};

export default Tomahawk;
