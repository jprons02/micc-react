import React from 'react';
import { Link } from 'react-router-dom';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.js';

import image1 from 'assets/media/img/mrg/accommodations/IMG_9145.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/home.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';
import Accommodations from '../accommodations/accommodations';

const imageObj = [{ src: image1, alt: 'Bedroom' }];

const useStyles = makeStyles(styles);

const AccommodationsSpot = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.accommodationsSpotOuterDiv}>
        <GridContainer>
          <GridItem md={6}>
            <div className={classes.accommodationsSpotImageDiv}>
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
          <GridItem md={6}>
            <div style={{ textAlign: 'left' }}>
              <h2 className={classes.msphereSpotH2}>UNWIND IN LUXURY</h2>
              <p className={classes.accommodationsSpotP}>
                Take in scenic views of the surrounding ecosystem with 302
                elegant guest rooms and suites featuring modern amenities and
                outstanding service.
              </p>
              <Button component={Link} to="/resort/rooms" usetheme="outlined">
                {language ? 'View Rooms' : 'View Rooms'}
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </React.Fragment>
  );
};

export default AccommodationsSpot;
