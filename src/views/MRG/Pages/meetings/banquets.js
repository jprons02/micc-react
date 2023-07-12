import React from 'react';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import MeetingsBullets from './meetingsBullets';

// Images
import bgImage from 'assets/media/img/mrg/meetings/banquets-page-banner.jpeg';
import image1 from 'assets/media/img/mrg/poker/Poker_Logo.jpeg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

const imageObj = [{ src: image1, alt: 'Poker cards' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Banquets = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div className={classes.leftTextArea}>
          <h2>Banquets</h2>
          <div
            style={{
              paddingBottom: '10px',
              border: 'none',
            }}
          >
            <p>
              Miccosukee Casino & Resort’s banquet and catering specialists are
              committed to providing clients with an exceptional food and
              service experience that surpasses expectations, accommodating up
              to 1,200 guests. Sit back and enjoy the festivities with your
              family and friends; we’ll take care of the rest.
            </p>
          </div>
          <MeetingsBullets />
        </div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Banquets;
