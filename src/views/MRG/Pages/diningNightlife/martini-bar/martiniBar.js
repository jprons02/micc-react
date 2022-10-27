import React, { useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';

// Images
import bgImage from 'assets/media/img/mrg/dining/dining_header.jpg';
import image1 from 'assets/media/img/mrg/dining/martini-bar/MartiniBar_01.jpeg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1];
const imageObj = [{ src: image1, alt: 'Martini bar' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const MartiniBar = () => {
  const language = useLanguage();
  const classes = useStyles();

  const history = useHistory();
  useEffect(() => {
    history.push('/mcr');
  }, []);

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Martini Bar</h2>
              {renderPoiHours(mrgHours.poi.martiniBar, language)}
              <p>
                {language
                  ? 'Classic cocktails in a tropical setting. Chic and comfortable, the Martini Bar is the perfect place to unwind and enjoy a drink, small plates and live entertainment throughout the week.'
                  : 'Cócteles clásicos en un ambiente tropical. Chic y cómodo, el Martini Bar es el lugar perfecto para relajarse durante la semana y disfrutar de un trago, tapas, y entretenimiento en vivo.'}
              </p>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default MartiniBar;
