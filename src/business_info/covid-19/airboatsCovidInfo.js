import React from 'react';

import { airboatsHours } from 'business_info/hours.js';
import { airboatsBusinessInfo } from 'business_info/genericInfo.js';

const AirboatsCovidInfo = (props) => {
  const sectionStyle = { marginTop: '20px' };
  const sectionHeaderStyle = { textDecoration: 'underline' };
  const ulStyle = { marginTop: '0px' };
  const innerUlStyle = { paddingLeft: '20px' };
  const liStyle = { fontSize: '14px' };
  const paddingLeftStyle = { paddingLeft: '24px' };

  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ marginTop: '10px' }}>
        <h3>Miccosukee Airboats</h3>
        <p>
          {props.language
            ? 'Take a ride on the wild side to discover the Everglades, the homeland of the Miccosukee Tribe. Journey into the “River of Grass” in an exhilarating tour that takes you to an authentic, hammock-style camp surrounded by the beauty of untouched nature.'
            : 'Dé un paseo por el lado salvaje para descubrir los Everglades, la patria de la tribu Miccosukee. Viaje al "Río de hierba" en un emocionante recorrido que lo lleva a un auténtico campamento estilo hamaca rodeado por la belleza de la naturaleza virgen.'}
        </p>
        <div style={sectionStyle}>
          <h4 style={sectionHeaderStyle}>
            {props.language ? 'Hours of Operation' : 'Horarios'}
          </h4>
          <ul style={ulStyle}>
            <li style={liStyle}>
              {airboatsHours[0].days(props.language)}: {airboatsHours[0].open} –{' '}
              {airboatsHours[0].close}
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
                Mile Marker 36, US-41
                <br />
                Miami, FL 33194
                <br />
                {airboatsBusinessInfo.phone}
              </li>
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default AirboatsCovidInfo;

/*
En todo momento deberá usar su mascarilla; sin mascarilla, no se permitirá su entrada al establecimiento
Deberá mantener distanciamiento social de al menos 6 pies de distancia
Cualquier interacción con los empleados u otros clientes deberá ser mínina (a menos que sean parte de su grupo y hayan llegado en el mismo auto)
*/
