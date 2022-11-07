import React from 'react';

// Cards
import xmas1a from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas1_Inside.jpg';
import xmas1b from 'assets/media/img/landingPages/holiday/xmas/cards/Christmas1_Outside.jpg';

const XmasCards = () => {
  return (
    <div>
      <div id="1">
        <img
          style={{ width: '150px', margin: '5px' }}
          src={xmas1b}
          width="100%"
        />
        <img
          style={{
            width: '150px',
            margin: '5px',
            border: '1px solid black',
          }}
          src={xmas1a}
          width="100%"
        />
      </div>
    </div>
  );
};

export default XmasCards;
