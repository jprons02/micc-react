import React, { useState } from 'react';

import { golfHours } from 'business_info/hours.js';
import { golfBusinessInfo } from 'business_info/genericInfo.js';

const GolfCovidInfo = (props) => {
  const sectionStyle = { marginTop: '20px' };
  const sectionHeaderStyle = { textDecoration: 'underline' };
  const ulStyle = { marginTop: '0px' };
  const innerUlStyle = { paddingLeft: '20px' };
  const liStyle = { fontSize: '14px' };
  const paddingLeftStyle = { paddingLeft: '24px' };

  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ marginTop: '10px' }}>
        <h3>Miccosukee Golf &amp; Country Club</h3>
        <p>
          {props.language
            ? 'This picturesque and challenging golf course includes 27 holes, par 72, and is considered by many to have the best layout in South Florida. The lighted practice facility and putting green accommodate up to 50 golfers and are open from 7 AM until 8 PM daily.'
            : 'Este campo de golf pintoresco y desafiante incluye 27 hoyos, par 72, y muchos consideran que tiene el mejor diseño en el sur de Florida. Las instalaciones de práctica iluminadas y el green tienen capacidad para 50 golfistas y están abiertos de 7:00 a. m. a 8:00 p. m. todos los días.'}
        </p>
        <div style={sectionStyle}>
          <h4 style={sectionHeaderStyle}>Hours of Operation</h4>
          <ul style={ulStyle}>
            <li style={liStyle}>
              {golfHours[0].days(props.language)}: {golfHours[0].open} –{' '}
              {golfHours[0].close}
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4 style={sectionHeaderStyle}>
            {props.language ? 'Contact' : 'Contacto'}
          </h4>
          {
            <ul>
              <li style={liStyle}>
                6401 Kendale Lakes Drive
                <br />
                Miami, FL 33183
                <br />
                {golfBusinessInfo.phone}
              </li>
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default GolfCovidInfo;
