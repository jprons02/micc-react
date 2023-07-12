import React from 'react';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import MeetingsBullets from './meetingsBullets';

// Images
import bgImage from 'assets/media/img/mrg/meetings/weddings-page-banner.jpeg';
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

const Weddings = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div className={classes.leftTextArea}>
          <h2>Weddings</h2>
          <div
            style={{
              paddingBottom: '10px',
              border: 'none',
            }}
          >
            <p>
              Celebrate the best day of your life at our elegant ballrooms on
              the Resort’s second floor. The perfect setting, impeccable
              service, and exquisite catering your guests will remember are just
              part of the amenities we bring to the table to make yours an
              unforgettable event.
            </p>
          </div>
          <MeetingsBullets />
        </div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Weddings;
