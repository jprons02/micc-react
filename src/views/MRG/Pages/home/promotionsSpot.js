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

  const d = new Date();
  const month = d.getMonth();

  const getMonth = (month) => {
    switch (month) {
      case 0:
        return language ? 'january' : 'enero';
      case 1:
        return language ? 'february' : 'febrero';
      case 2:
        return language ? 'march' : 'marzo';
      case 3:
        return language ? 'april' : 'abril';
      case 4:
        return language ? 'may' : 'mayo';
      case 5:
        return language ? 'june' : 'junio';
      case 6:
        return language ? 'july' : 'julio';
      case 7:
        return language ? 'august' : 'agosto';
      case 8:
        return language ? 'september' : 'septiembre';
      case 9:
        return language ? 'october' : 'octubre';
      case 10:
        return language ? 'november' : 'noviembre';
      case 11:
        return language ? 'december' : 'diciembre';
      default:
        return '';
    }
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
          <CasinoPromos month={getMonth()} mobile={true} />
        </Hidden>
        <Hidden smDown>
          <CasinoPromos month={getMonth()} mobile={false} />
        </Hidden>
      </div>
    </React.Fragment>
  );
};

export default PromotionsSpot;
