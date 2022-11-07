import React from 'react';

// Cards
import xmas1a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas1_Inside.jpg';
import xmas1b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas1_Outside.jpg';

const ThanksgivingCards = (props) => {
  const onClick = (data) => {
    props.getDialogContent(data);
    props.openDialog();
  };

  const cardImages = [
    {
      id: '1',
      cover: {
        caption: 'Cover',
        src: xmas1b,
      },
      inside: {
        caption: 'Inside',
        src: xmas1a,
      },
    },
  ];

  const renderCards = () => {
    return cardImages.map((card) => {
      return (
        <div key={card.id} id={card.id}>
          <p className={props.classes.numberStyle}>{`${card.id})`}</p>
          <figure className={props.classes.cardStyle}>
            <img
              onClick={() => onClick(card.cover.src)}
              className={props.classes.imageStyle}
              src={card.cover.src}
            />
            <figcaption className={props.classes.captionStyle}>
              {card.cover.caption}
            </figcaption>
          </figure>
          <figure className={props.classes.cardStyle}>
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
      );
    });
  };

  return renderCards();
};

export default ThanksgivingCards;
