import React from 'react';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import MeetingsBullets from './meetingsBullets';

// Images
import bgImage from 'assets/media/img/mrg/meetings/retreats-page-banner.jpeg';
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

const CorporateRetreats = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div className={classes.leftTextArea}>
          <h2>Corporate Retreats</h2>
          <div
            style={{
              paddingBottom: '10px',
              border: 'none',
            }}
          >
            <p>
              Team building is about creating a culture where more productive
              work can be accomplished. Time away from the office in a laid-back
              atmosphere where new ideas come to life benefits employees in any
              business setting.
            </p>
            <p>
              If you’re planning your next corporate retreat, we have the
              perfect space tailored to your needs. Meeting and breakout rooms,
              outdoor areas, and specialty catering services will provide the
              ideal ambiance for your employees’ ideas to flourish.
            </p>
          </div>
          <MeetingsBullets />
        </div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default CorporateRetreats;
