import React from 'react';
import { Link } from 'react-router-dom';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.js';

import msphereImage from 'assets/media/img/mrg/home/M-Sphere-Promo-Image.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/home.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const imageObj = [{ src: msphereImage, alt: 'M Sphere Promotion' }];

const useStyles = makeStyles(styles);

const MsphereSpot = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.msphereSpotOuterDiv}>
        <GridContainer>
          <GridItem md={6}>
            <div className={classes.msphereSpotContentDiv}>
              <h2 className={classes.msphereSpotH2}>COLLECT YOUR REWARDS!</h2>
              <p className={classes.msphereSpotP}>
                Start receiving your rewards today! Earn points as you play with
                our M Sphere Rewards card.
              </p>
              <Button component={Link} to="/msphere" usetheme="outlined">
                {language ? 'More Information' : 'More Information'}
              </Button>
            </div>
          </GridItem>
          <GridItem md={6}>
            <div className={classes.msphereSpotImageDiv}>
              <img
                style={{
                  width: '100%',
                  boxShadow:
                    '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
                }}
                alt={imageObj[0].alt}
                src={imageObj[0].src}
              ></img>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </React.Fragment>
  );
};

export default MsphereSpot;
