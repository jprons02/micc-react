// Font awesome notes...
//https://fontawesome.com/v4/icons/

import React, { useEffect, useState } from 'react';

// My custom component
import StandardCard from 'components/CustomCards/StandardCard.js';
import RoomDetailModal from 'components/CustomModal/CustomRoomDetailModal/CustomRoomDetailModal';

// material-ui core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';

// Icons
import PersonIcon from '@material-ui/icons/Person';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import TvIcon from '@material-ui/icons/Tv';
import WifiIcon from '@material-ui/icons/Wifi';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

// Context
import { useLanguage } from 'contexts/languageContext.js';

// Images
import cardImage1 from 'assets/media/img/mrg/accommodations/rooms/room1.jpeg';
import cardImage2 from 'assets/media/img/mrg/accommodations/rooms/room1.jpeg';
import cardImage3 from 'assets/media/img/mrg/accommodations/rooms/room1.jpeg';
import cardImage4 from 'assets/media/img/mrg/accommodations/rooms/room2.jpg';
import cardImage5 from 'assets/media/img/mrg/accommodations/rooms/room3.jpg';
import cardImage6 from 'assets/media/img/mrg/accommodations/rooms/room4.jpg';

// Styles
import cardStyles from 'assets/jss/material-kit-react/views/mrg/roomCardStyles.js';
import { makeStyles } from '@material-ui/core/styles';

const useCardStyles = makeStyles(cardStyles);

const Rooms = () => {
  const language = useLanguage();

  const cardClasses = useCardStyles();

  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({});

  const roomClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const features = (sleepsNumber) => {
    const style = {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '20px',
    };
    return (
      <GridContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <GridItem sm={12} md={6}>
            <p style={style}>
              <PersonIcon style={{ fontSize: '16px' }} /> &nbsp; Sleeps{' '}
              {sleepsNumber}
            </p>
          </GridItem>
          <GridItem sm={12} md={6}>
            <p style={style}>
              <HotelIcon style={{ fontSize: '16px' }} /> &nbsp; 2 King Beds
            </p>
          </GridItem>
          <GridItem sm={12} md={6}>
            <p style={style}>
              <BathtubIcon style={{ fontSize: '16px' }} /> &nbsp; 1 Bathroom
            </p>
          </GridItem>
          <GridItem sm={12} md={6}>
            <p style={style}>
              <TvIcon style={{ fontSize: '16px' }} /> &nbsp; Cable/Satellite TV
            </p>
          </GridItem>
          <GridItem sm={12} md={6}>
            <p style={style}>
              <WifiIcon style={{ fontSize: '16px' }} /> &nbsp; High-Speed WiFi
            </p>
          </GridItem>
          <GridItem sm={12} md={6}>
            <p style={style}>
              <i className="fa fa-snowflake" aria-hidden="true"></i>
              &nbsp; Air Conditioned
            </p>
          </GridItem>
          <GridItem sm={12} md={6}>
            <p style={style}>
              <i className="fa fa-bullseye" aria-hidden="true"></i>
              &nbsp; Towels/Linens Provided
            </p>
          </GridItem>
          <GridItem sm={12} md={6}>
            <p style={style}>
              <i className="fa fa-shower" aria-hidden="true"></i> &nbsp; Shower
              Over Bath
            </p>
          </GridItem>
          <GridItem sm={12} md={6}>
            <p style={style}>
              <LocalCafeIcon style={{ fontSize: '16px' }} /> &nbsp; Tea/Coffee
              Maker
            </p>
          </GridItem>
        </div>
      </GridContainer>
    );
  };

  const cardContent = [
    {
      id: 1,
      img: {
        src: cardImage1,
        alt: 'executive king Room',
      },
      title: 'EXECUTIVE KING',
      excerpt:
        'When a king bedroom is what you desire, this Executive Level room fits you perfectly.',
      body:
        'When a king bedroom is what you desire, this Executive Level room fits you perfectly. You’ll enjoy the ultramodern bathroom and plush couch. Also includes two night tables and 42″ plasma TV.',
      buttonText: 'Room Details',
      features: () => features(2),
    },
    {
      id: 2,
      img: {
        src: cardImage2,
        alt: 'deluxe jacuzzi suite',
      },
      title: 'DELUXE JACUZZI SUITE',
      excerpt:
        'Offering a refined charm and elegance, the Celebration suite features a Jacuzzi.',
      body:
        'Offering a refined charm and elegance, the Celebration suite features a Jacuzzi, only a few steps from your bed or in a very spacious bathroom. Perfect for unwinding after a day of fun, this suite also includes a king bed, fridge, microwave, robes and more.',
      buttonText: 'Room Details',
      features: () => features(2),
    },
    {
      id: 3,
      img: {
        src: cardImage3,
        alt: 'deluxe one bedroom suite',
      },
      title: 'DELUXE ONE BEDROOM SUITE',
      excerpt:
        'This elegant suite features a king bed and separate living area.',
      body:
        'This elegant suite features a king bed, separate living area with a sleeper sofa, bar area, refrigerator and microwave.',
      buttonText: 'Room Details',
      features: () => features(3),
    },
    {
      id: 4,
      img: {
        src: cardImage4,
        alt: 'deluxe king room',
      },
      title: 'DELUXE KING',
      excerpt:
        'When a king bedroom is what you desire, this Deluxe Level room fits you perfectly.',
      body:
        'When a king bedroom is what you desire, this Deluxe Level room fits you perfectly. You’ll enjoy the ultramodern bathroom as well. Also includes two night tables and 42″ plasma TV.',
      buttonText: 'Room Details',
      features: () => features(2),
    },
    {
      id: 5,
      img: {
        src: cardImage5,
        alt: 'deluxe double queen suite',
      },
      title: 'DELUXE DOUBLE QUEEN SUITE',
      excerpt: 'Two queen beds, an upgraded bathroom, and an armoire.',
      body:
        'With two queen beds, an upgraded bathroom, and an armoire, this room provides soothing relaxation and a restful night’s sleep to prepare you for the fun and excitement the day ahead will bring.',
      buttonText: 'Room Details',
      features: () => features(5),
    },
    {
      id: 6,
      img: {
        src: cardImage6,
        alt: 'deluxe double queen room',
      },
      title: 'DELUXE DOUBLE QUEEN',
      excerpt: 'Two queen beds, an upgraded bathroom, and an armoire.',
      body:
        'With two queen beds, an upgraded bathroom, and an armoire, this room provides soothing relaxation and a restful night’s sleep to prepare you for the fun and excitement the day ahead will bring.',
      buttonText: 'Room Details',
      features: () => features(4),
    },
  ];

  const renderCards = () => {
    return cardContent.map((card) => {
      return (
        <div key={card.id} className={cardClasses.outerCardDiv}>
          <StandardCard
            classes={cardClasses}
            img={card.img}
            title={card.title}
            body={card.excerpt}
            buttonText={card.buttonText}
            buttonVariant="outlined"
            buttonFunction={() => roomClick(card)}
          />
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div style={{ paddingBottom: '30px' }}>{renderCards()}</div>
      <RoomDetailModal
        selectedRoom={selectedRoom}
        closeModal={closeModal}
        showModal={showModal}
      />
    </React.Fragment>
  );
};

export default Rooms;
