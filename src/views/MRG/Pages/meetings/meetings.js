import React from 'react';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import MeetingsBullets from './meetingsBullets';

// Images
import bgImage from 'assets/media/img/mrg/meetings/meetings-page-banner.jpg';
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

const Meetings = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div>
          <h2>Miccosukee Resort & Convention Center</h2>
          <div
            style={{
              paddingBottom: '10px',
              border: 'none',
            }}
          >
            <p>
              From small gatherings to large conferences, the Resort’s second
              floor has over 20,000 square feet of meeting and ballroom space
              featuring eight breakout areas.
            </p>
            <p>
              Located 17 miles west of Miami International Airport, on the edge
              of the scenic Florida Everglades, the Resort offers 302 elegant
              guest rooms and suites for guests to relax after a successful
              event, along with various dining and entertainment options to make
              it a memorable stay.
            </p>
          </div>
          <MeetingsBullets />
        </div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Meetings;
