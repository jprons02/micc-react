import React from 'react';

// Cards
import t1a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving1_Outside.jpg';
import t1b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving1_Inside.jpg';

import t2a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving2_Outside.jpg';
import t2b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving2_Inside.jpg';

import t3a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving3_Outside.jpg';
import t3b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving3_Inside.jpg';

import t4a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving4_Outisde.jpg';
import t4b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving4_Inside.jpg';

import t5a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving5_Outside.jpg';
import t5b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving5_Inside.jpg';

import t6a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving6_Outside.jpg';
import t6b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving6_Inside.jpg';

import t7a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving7_Outside.jpg';
import t7b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving7_Inside.jpg';

import t8a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving8_Outside.jpg';
import t8b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving8_Inside.jpg';

import t9a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving9_Outside.jpg';
import t9b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving9_Inside.jpg';

import t10a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving10_Outside.jpg';
import t10b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving10_Inside.jpg';

import t11a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving11_Outside.jpg';
import t11b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving11_Inside.jpg';

import t12a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving12_Outside.jpg';
import t12b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving12_Inside.jpg';

import t13a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving13_Outside.jpg';
import t13b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving13_Inside.jpg';

import t14a from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving14_Outside.jpg';
import t14b from 'assets/media/img/landingPages/holiday/thanksgiving/cards/Thanksgiving14_Inside.jpg';

const ThanksgivingCards = (props) => {
  const onClick = (data) => {
    props.getDialogContent(data);
    props.openDialog();
  };

  const cardImages = [
    {
      id: '1',
      landscape: false,
      cover: {
        caption: 'Cover',
        src: t1a,
      },
      inside: {
        caption: 'Inside',
        src: t1b,
      },
    },
    {
      id: '2',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t2a,
      },
      inside: {
        caption: 'Inside',
        src: t2b,
      },
    },
    {
      id: '3',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t3a,
      },
      inside: {
        caption: 'Inside',
        src: t3b,
      },
    },
    {
      id: '4',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t4a,
      },
      inside: {
        caption: 'Inside',
        src: t4b,
      },
    },
    {
      id: '5',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t5a,
      },
      inside: {
        caption: 'Inside',
        src: t5b,
      },
    },
    {
      id: '6',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t6a,
      },
      inside: {
        caption: 'Inside',
        src: t6b,
      },
    },
    {
      id: '7',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t7a,
      },
      inside: {
        caption: 'Inside',
        src: t7b,
      },
    },
    {
      id: '8',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t8a,
      },
      inside: {
        caption: 'Inside',
        src: t8b,
      },
    },
    {
      id: '9',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t9a,
      },
      inside: {
        caption: 'Inside',
        src: t9b,
      },
    },
    {
      id: '10',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t10a,
      },
      inside: {
        caption: 'Inside',
        src: t10b,
      },
    },
    {
      id: '11',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t11a,
      },
      inside: {
        caption: 'Inside',
        src: t11b,
      },
    },
    {
      id: '12',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t12a,
      },
      inside: {
        caption: 'Inside',
        src: t12b,
      },
    },
    {
      id: '13',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t13a,
      },
      inside: {
        caption: 'Inside',
        src: t13b,
      },
    },
    {
      id: '14',
      landscape: true,
      cover: {
        caption: 'Cover',
        src: t14a,
      },
      inside: {
        caption: 'Inside',
        src: t14b,
      },
    },
  ];

  const renderCards = () => {
    return cardImages.map((card) => {
      return (
        <div
          key={card.id}
          id={card.id}
          className={props.classes.cardSectionStyle}
        >
          <p className={props.classes.numberStyle}>{`${card.id})`}</p>
          <div className={props.classes.cardImageSectionStyle}>
            <figure
              className={
                card.landscape
                  ? props.classes.cardStyleLandscape
                  : props.classes.cardStylePortrait
              }
            >
              <img
                onClick={() => onClick(card.cover.src)}
                className={props.classes.imageStyle}
                src={card.cover.src}
              />
              <figcaption className={props.classes.captionStyle}>
                {card.cover.caption}
              </figcaption>
            </figure>
            <figure
              className={
                card.landscape
                  ? props.classes.cardStyleLandscape
                  : props.classes.cardStylePortrait
              }
            >
              <img
                onClick={() => onClick(card.inside.src)}
                className={props.classes.imageStyle}
                src={card.inside.src}
              />
              <figcaption className={props.classes.captionStyle}>
                {card.inside.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      );
    });
  };

  return renderCards();
};

export default ThanksgivingCards;
