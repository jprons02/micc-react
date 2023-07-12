import React, { useContext } from 'react';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import Rooms from 'views/MRG/Pages/accommodations/rooms.js';

// Images
//import bgImage from 'assets/media/img/mrg/MRG_Header1.jpg';
import bgImage from 'assets/media/img/mrg/accommodations/accommodations_header.jpg';
import image1 from 'assets/media/img/mrg/accommodations/IMG_9145.jpg';
import image2 from 'assets/media/img/mrg/accommodations/IMG_5796.jpg';
import image3 from 'assets/media/img/mrg/accommodations/IMG_9241.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// Context
import { BookRoomContext } from 'contexts/BookRoomContext.js';
import { useLanguage } from 'contexts/languageContext.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';
import { isRunning } from 'services/functions/scheduleThis';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3];
const imageObj = [
  { src: image1, alt: 'Bedroom 1' },
  { src: image2, alt: 'Bedroom 2' },
  { src: image3, alt: 'Bedroom 3' },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Accommodations = () => {
  const language = useLanguage();
  const classes = useStyles();

  const [showBookRoomModal, setShowBookRoomModal] = useContext(BookRoomContext);

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div style={{ paddingBottom: '20px' }}>
          <h2>{language ? 'Accommodations' : 'Habitaciones'}</h2>
          <p>
            Standing at the edge of the magnificent Florida Everglades, the
            Resort boasts rooms designed with comfort as the number one priority
            and amazing views of the surrounding ecosystem. In addition to
            specific room amenities, all of our rooms conveniently feature
            Wi-Fi, premium cable programming, pay-per-view, in-room safe,
            flat-screen TVs, and a lot more.
          </p>

          <p>
            Executive and Deluxe-level rooms are available with upgraded
            amenities and services.
          </p>
          {/*
            <Button
              onClick={() => setShowBookRoomModal(true)}
              usetheme="contained"
            >
              {language ? 'Book A Room' : 'Reservar una Habitación'}
            </Button>
            */}
        </div>
        <Rooms />
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Accommodations;
