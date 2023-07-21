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

//DELUXE DOUBLE QUEEN
import double_queen_image1 from 'assets/media/img/mrg/accommodations/room-types/1_deluxe double queen/1_Deluxe_DQ_Room.jpg';
import double_queen_image2 from 'assets/media/img/mrg/accommodations/room-types/1_deluxe double queen/2_Deluxe_DQ_Bathroom.jpg';
//import double_queen_image3 from 'assets/media/img/mrg/accommodations/room-types/1_deluxe double queen/3_PXL_Deluxe_Room_King_and_Double_Queen__Shower_1.jpg';

//EXECUTIVE DOUBLE QUEEN
import executive_double_queen_image1 from 'assets/media/img/mrg/accommodations/room-types/2_executive double queen/1_20190926_Miccosukee_Hotel-Rooms_936B_5563.jpg';
import executive_double_queen_image2 from 'assets/media/img/mrg/accommodations/room-types/2_executive double queen/2_20190926_Miccosukee_Hotel-Rooms_936_5555.jpg';
import executive_double_queen_image3 from 'assets/media/img/mrg/accommodations/room-types/2_executive double queen/3_20190926_Miccosukee_Hotel-Rooms_928_BATHROOM_5536.jpg';

//DELUXE DOUBLE QUEEN SUITE
import deluxe_double_queen_image1 from 'assets/media/img/mrg/accommodations/room-types/3_deluxe double queen suite/1_Screenshot_2022-02-11_023105.jpg';
import deluxe_double_queen_image2 from 'assets/media/img/mrg/accommodations/room-types/3_deluxe double queen suite/2_Deluxe_DQ_Suite-_Living_Room_Area.jpg';
import deluxe_double_queen_image3 from 'assets/media/img/mrg/accommodations/room-types/3_deluxe double queen suite/3_Screenshot_2022-02-11_022845.jpg';
import deluxe_double_queen_image4 from 'assets/media/img/mrg/accommodations/room-types/3_deluxe double queen suite/4_Deluxe_DQ_Bathroom.jpg';
//import deluxe_double_queen_image5 from 'assets/media/img/mrg/accommodations/room-types/3_deluxe double queen suite/5_PXL_Deluxe_Room_King_and_Double_Queen__Shower_1.jpg';

//EXECUTIVE DOUBLE QUEEN SUITE
import executive_double_queen_suite_image1 from 'assets/media/img/mrg/accommodations/room-types/4_executive double queen suite/1_Room_931_Bed_4169.jpg';
import executive_double_queen_suite_image2 from 'assets/media/img/mrg/accommodations/room-types/4_executive double queen suite/2_Room_931_Living_4183.jpg';

//DELUXE KING
import deluxe_king_image1 from 'assets/media/img/mrg/accommodations/room-types/5_deluxe king/1_Deluxe_KB_Room-_Bedroom.jpg';
import deluxe_king_image2 from 'assets/media/img/mrg/accommodations/room-types/5_deluxe king/2_Deluxe_DQ_Bathroom.jpg';
//import deluxe_king_image3 from 'assets/media/img/mrg/accommodations/room-types/5_deluxe king/3_PXL_Deluxe_Room_King_and_Double_Queen__Shower_1.jpg';

//EXECUTIVE KING
import executive_king_image1 from 'assets/media/img/mrg/accommodations/room-types/6_executive king/1_20190926_Miccosukee_Hotel-Rooms_928B_5526.jpg';
import executive_king_image2 from 'assets/media/img/mrg/accommodations/room-types/6_executive king/2_20190926_Miccosukee_Hotel-Rooms_928_BATHROOM_5536.jpg';

//DELUXE ONE BEDROOM SUITE
import deluxe_one_bedroom_suite_image1 from 'assets/media/img/mrg/accommodations/room-types/7_deluxe one bedroom suite/1_Deluxe_Suite__KB_-_Bedroom.jpg';
import deluxe_one_bedroom_suite_image2 from 'assets/media/img/mrg/accommodations/room-types/7_deluxe one bedroom suite/2_Deluxe_Suite_KB_-_Livingroom.jpg';
import deluxe_one_bedroom_suite_image3 from 'assets/media/img/mrg/accommodations/room-types/7_deluxe one bedroom suite/3_Screenshot_2022-02-11_022902.jpg';
import deluxe_one_bedroom_suite_image4 from 'assets/media/img/mrg/accommodations/room-types/7_deluxe one bedroom suite/4_Deluxe_DQ_Bathroom.jpg';
//import deluxe_one_bedroom_suite_image5 from 'assets/media/img/mrg/accommodations/room-types/7_deluxe one bedroom suite/5_PXL_Deluxe_Room_King_and_Double_Queen__Shower_1.jpg';

//EXECUTIVE ONE BEDROOM SUITE
import executive_one_bedroom_suite_image1 from 'assets/media/img/mrg/accommodations/room-types/8_executive one bedroom suite/1_20190926_Miccosukee_Hotel-Rooms_820_5579.jpg';
import executive_one_bedroom_suite_image2 from 'assets/media/img/mrg/accommodations/room-types/8_executive one bedroom suite/2_20190926_Miccosukee_Hotel-Rooms_820B_5591-Edit.jpg';
import executive_one_bedroom_suite_image3 from 'assets/media/img/mrg/accommodations/room-types/8_executive one bedroom suite/3_20190926_Miccosukee_Hotel-Rooms_820_5570.jpg';

//DELUXE JACUZZI SUITE
import jacuzzi_suite_image1 from 'assets/media/img/mrg/accommodations/room-types/9_deluxe jacuzzi suite/1_Deluxe_Jacuzzi_Suite_Room.jpg';
import jacuzzi_suite_image2 from 'assets/media/img/mrg/accommodations/room-types/9_deluxe jacuzzi suite/2_Deluxe_Jacuzzi_Suite_-_Jacuzzi_area.jpg';

//EXECUTIVE JACUZZI SUITE
import executive_jacuzzi_suite_image1 from 'assets/media/img/mrg/accommodations/room-types/10_executive jacuzzi suite/1_20190926_Miccosukee_Hotel-Rooms_826_5601-Edit.jpg';
import executive_jacuzzi_suite_image2 from 'assets/media/img/mrg/accommodations/room-types/10_executive jacuzzi suite/2_20190926_Miccosukee_Hotel-Rooms_826_Bathroom_5611.jpg';

//PRESIDENTIAL SUITE
import presedential_suite_image1 from 'assets/media/img/mrg/accommodations/room-types/11_presidential suite/1_Executive_DQ_Room-_Bedroom_1.jpg';
import presedential_suite_image2 from 'assets/media/img/mrg/accommodations/room-types/11_presidential suite/2_Presidential_Suite_Bedroom_-_Copy.jpg';
import presedential_suite_image3 from 'assets/media/img/mrg/accommodations/room-types/11_presidential suite/3_Presidential_Suite_Living_Room_-_Copy.jpg';
import presedential_suite_image4 from 'assets/media/img/mrg/accommodations/room-types/11_presidential suite/4_Presidential_Suite_Jacuzzi.jpg';

// Styles
import cardStyles from 'assets/jss/material-kit-react/views/mrg/roomCardStyles.js';
import { makeStyles } from '@material-ui/core/styles';

const useCardStyles = makeStyles(cardStyles);

const Rooms = () => {
  const language = useLanguage();

  const cardClasses = useCardStyles();

  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({
    id: 1,
    imageObj: [{ src: double_queen_image1, alt: 'room detail 1' }],
    title: 'DELUXE DOUBLE QUEEN',
    excerpt: 'With two queen beds, an upgraded bathroom and armoire.',
    body: `With two queen beds, an upgraded bathroom and armoire, this room provides soothing relaxation and a restful night's sleep to prepare you for the fun and excitement the day ahead will bring.`,
    buttonText: 'Room Details',
    features: () => features(4, [{ string: '1 King Bed' }], 1),
  });

  const roomClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const features = (sleepsNumber, bedRooms, bathroomNumber) => {
    const style = {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '20px',
    };

    const renderBedString = (rooms) => {
      const renderRoomString = (number) => {
        if (rooms.length > 1) {
          return `Room ${number + 1}: `;
        } else {
          return '';
        }
      };
      return rooms.map((room, index) => {
        return (
          <GridItem key={room.string} sm={12} md={6}>
            <p style={style}>
              <HotelIcon style={{ fontSize: '16px' }} /> &nbsp;{' '}
              {renderRoomString(index)}
              {room.string}
            </p>
          </GridItem>
        );
      });
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
          {renderBedString(bedRooms)}
          <GridItem sm={12} md={6}>
            <p style={style}>
              <BathtubIcon style={{ fontSize: '16px' }} /> &nbsp;{' '}
              {bathroomNumber} Bathroom{bathroomNumber > 1 ? 's' : ''}
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
      imageObj: [
        { src: double_queen_image1, alt: '2 queen beds' },
        { src: double_queen_image2, alt: 'bathroom' },
        //{ src: double_queen_image3, alt: '' },
      ],
      title: 'DELUXE DOUBLE QUEEN',
      excerpt: 'With two queen beds, an upgraded bathroom and armoire.',
      body: `With two queen beds, an upgraded bathroom and armoire, this room provides soothing relaxation and a restful night's sleep to prepare you for the fun and excitement the day ahead will bring.`,
      buttonText: 'Room Details',
      features: () => features(4, [{ string: '2 Queen Beds' }], 1),
    },
    {
      id: 2,
      imageObj: [
        { src: executive_double_queen_image1, alt: '2 queen beds room' },
        { src: executive_double_queen_image2, alt: '2 queen beds room' },
        { src: executive_double_queen_image3, alt: 'bathroom' },
      ],
      title: 'EXECUTIVE DOUBLE QUEEN',
      excerpt: 'Two queen beds and an upgraded bathroom.',
      body: `With two queen beds, an upgraded bathroom, armoire and bar this room provides soothing relaxation and a restful night's sleep to prepare you for the fun and excitement the day ahead will bring.`,
      buttonText: 'Room Details',
      features: () => features(4, [{ string: '2 Queen Beds' }], 1),
    },
    {
      id: 3,
      imageObj: [
        { src: deluxe_double_queen_image1, alt: '2 queen beds' },
        { src: deluxe_double_queen_image2, alt: 'living room' },
        { src: deluxe_double_queen_image3, alt: '2 queen beds' },
        { src: deluxe_double_queen_image4, alt: 'bathroom' },
        //{ src: deluxe_double_queen_image5, alt: '' },
      ],
      title: 'DELUXE DOUBLE QUEEN SUITE',
      excerpt: 'Two queen beds, nighstand, and armoire and more.',
      body: `In addition to the two queen beds, nighstand, and armoire, you'll have two tables, four chairs, and your own bar to toast the night away.`,
      buttonText: 'Room Details',
      features: () => features(4, [{ string: '2 Queen Beds' }], 1),
    },
    {
      id: 4,
      imageObj: [
        { src: executive_double_queen_suite_image1, alt: '2 queen beds' },
        { src: executive_double_queen_suite_image2, alt: 'living room' },
      ],
      title: 'EXECUTIVE DOUBLE QUEEN SUITE',
      excerpt:
        'This opulent suite features a separate living area and generous bedroom.',
      body: `This opulent suite features a separate living area and generous bedroom complete with two queen beds, sleeper sofa, desk and coffee table, lounge and activity chairs, a refrigerator and microwave and more.`,
      buttonText: 'Room Details',
      features: () =>
        features(5, [{ string: '2 Queen Beds and 1 Sofa bed' }], 1),
    },
    {
      id: 5,
      imageObj: [
        { src: deluxe_king_image1, alt: '1 king bed' },
        { src: deluxe_king_image2, alt: 'bathroom' },
        //{ src: deluxe_king_image3, alt: '' },
      ],
      title: 'DELUXE KING',
      excerpt:
        'When a king bedroom is what you desire, this Deluxe Level room fits you perfectly.',
      body: `When a king bedroom is what you desire, this Deluxe Level room fits you perfectly. You'll enjoy the ultramodern bathroom as well. Also includes two night tables and 42" plasma TV.`,
      buttonText: 'Room Details',
      features: () => features(2, [{ string: '1 King Bed' }], 1),
    },
    {
      id: 6,
      imageObj: [
        { src: executive_king_image1, alt: '1 king bed' },
        { src: executive_king_image2, alt: 'bathroom' },
      ],
      title: 'EXECUTIVE KING',
      excerpt:
        'When a king bedroom is what you desire, this Executive Level room fits you perfectly.',
      body: `When a king bedroom is what you desire, this Executive Level room fits you perfectly. You'll enjoy the ultramodern bathroom and plush couch. Also includes two night tables and 42" plasma TV.`,
      buttonText: 'Room Details',
      features: () => features(2, [{ string: '1 King Bed' }], 1),
    },
    {
      id: 7,
      imageObj: [
        { src: deluxe_one_bedroom_suite_image1, alt: '1 king bed' },
        { src: deluxe_one_bedroom_suite_image2, alt: 'living room' },
        { src: deluxe_one_bedroom_suite_image3, alt: 'living room' },
        { src: deluxe_one_bedroom_suite_image4, alt: 'bathroom' },
        //{ src: deluxe_one_bedroom_suite_image5, alt: '' },
      ],
      title: 'DELUXE ONE BEDROOM SUITE',
      excerpt:
        'This elegant suite features a king bed and separate living area.',
      body:
        'This elegant suite features a king bed, separate living area with a sleeper sofa, bar area, refrigerator and microwave.',
      buttonText: 'Room Details',
      features: () => features(3, [{ string: '1 King Bed and 1 Sofa bed' }], 1),
    },
    {
      id: 8,
      imageObj: [
        { src: executive_one_bedroom_suite_image1, alt: '1 king bed' },
        { src: executive_one_bedroom_suite_image2, alt: 'living room' },
        { src: executive_one_bedroom_suite_image3, alt: 'living room' },
      ],
      title: 'EXECUTIVE ONE BEDROOM SUITE',
      excerpt: `Here, you'll have a separate living area, wet bar with stools, king bed, sleeper sofa.`,
      body: `Here, you'll have a separate living area, wet bar with stools, king bed, sleeper sofa, majestic armoire, plenty relaxing chairs as well as a refrigerator and a microwave.`,
      buttonText: 'Room Details',
      features: () => features(3, [{ string: '1 King Bed and 1 Sofa bed' }], 1),
    },
    {
      id: 9,
      imageObj: [
        { src: jacuzzi_suite_image1, alt: '1 king bed' },
        { src: jacuzzi_suite_image2, alt: 'jacuzzi' },
      ],
      title: 'DELUXE JACUZZI SUITE',
      excerpt:
        'Offering a refined charm and elegance, the Celebration suite features a Jacuzzi.',
      body: `Offering a refined charm and elegance, the Celebration suite features a Jacuzzi, only a few steps from your bed or in a very spacious bathroom. Perfect for unwinding after a day of fun, this suite also includes a king bed, fridge, microwave, robes and more.`,
      buttonText: 'Room Details',
      features: () => features(2, [{ string: '1 King Bed' }], 1),
    },
    {
      id: 10,
      imageObj: [
        { src: executive_jacuzzi_suite_image1, alt: '1 king bed' },
        { src: executive_jacuzzi_suite_image2, alt: 'bathroom with jacuzzi' },
      ],
      title: 'EXECUTIVE JACUZZI SUITE',
      excerpt:
        'Guests staying in this room will have their own king bed, spacious bathroom with Jacuzzi.',
      body: `Guests staying in this room will have their own king bed, spacious bathroom with Jacuzzi, large glass enclosed shower, activity and console tables with chairs, generous armoire, a makeup table and more.`,
      buttonText: 'Room Details',
      features: () => features(2, [{ string: '1 King Bed' }], 1),
    },
    {
      id: 11,
      imageObj: [
        { src: presedential_suite_image1, alt: 'room 1 with 2 queen beds' },
        { src: presedential_suite_image2, alt: 'room 2 with 1 king bed' },
        { src: presedential_suite_image3, alt: 'living room' },
        { src: presedential_suite_image4, alt: 'bathroom' },
      ],
      title: 'PRESIDENTIAL SUITE',
      excerpt: 'NEED INFO',
      body: `NEED INFO`,
      buttonText: 'Room Details',
      features: () =>
        features(6, [{ string: '1 King Bed' }, { string: '2 Queen beds' }], 3),
    },
  ];

  const renderCards = () => {
    return cardContent.map((card) => {
      return (
        <div key={card.id} className={cardClasses.outerCardDiv}>
          <StandardCard
            classes={cardClasses}
            img={card.imageObj[0]}
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
