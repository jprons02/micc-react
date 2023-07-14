import React from 'react';
import { Link } from 'react-router-dom';
import CasinoPromos from './casinoPromos';

// Context
import { useLanguage } from 'contexts/languageContext.js';

// Styling
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/home.js';

const useStyles = makeStyles(styles);

const PromotionsSpot = () => {
  const language = useLanguage();
  const classes = useStyles();

  // Get list of current month promos and pick one that has attribute "feature"

  const renderDesktopCards = () => {
    return <p>desktop cards.</p>;
  };

  const renderMobileCards = () => {
    return <p>mobile cards.</p>;
  };

  return (
    <React.Fragment>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 className={classes.promotionsSpotH1}>Live it Up! Play On.</h1>
        <Link to="/casino/promotions">
          <span className={classes.promotionsSpotLink}>
            VIEW ALL PROMOTIONS
          </span>
        </Link>
      </div>
      <div>
        <Hidden mdUp>
          <CasinoPromos mobile={true} />
        </Hidden>
        <Hidden smDown>
          <CasinoPromos mobile={false} />
        </Hidden>
      </div>
    </React.Fragment>
  );
};

export default PromotionsSpot;
