import React from 'react';

// Cards
import t1a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas1_Outside.jpg';
import t1b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas1_Inside.jpg';

import t2a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas2_Outside.jpg';
import t2b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas2_Inside.jpg';

import t3a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas3_Outside.jpg';
import t3b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas3_Inside.jpg';

import t4a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas4_Outside.jpg';
import t4b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas4_Inside.jpg';

import t5a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas5_Outside.jpg';
import t5b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas5_Inside.jpg';

import t6a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas6_Outside.jpg';
import t6b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas6_Inside.jpg';

import t7a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas7_Outside.jpg';
import t7b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas7_Inside.jpg';

import t8a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas8_Outside.jpg';
import t8b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas8_inside.jpg';

import t9a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas9_Outside.jpg';
import t9b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas9_Inside.jpg';

import t10a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas10_Outside.jpg';
import t10b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas10_Inside.jpg';

import t11a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas11_Outside.jpg';
import t11b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas11_Inside.jpg';

import t12a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas12_Outside.jpg';
import t12b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas12_Inside.jpg';

import t13a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas13_Outside.jpg';
import t13b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas13_Inside.jpg';

import t14a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas14_Outside.jpg';
import t14b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas14_Inside.jpg';

const XmasCards = (props) => {
  const onClick = (data) => {
    props.getDialogContent(data);
    props.openDialog();
  };

  const cardImages = [
    {
      id: '15',
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
      id: '16',
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
      id: '17',
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
      id: '18',
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
      id: '19',
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
      id: '20',
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
      id: '21',
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
      id: '22',
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
      id: '23',
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
      id: '24',
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
      id: '25',
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
      id: '26',
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
      id: '27',
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
      id: '28',
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

export default XmasCards;
