import React from 'react';
import { renderPoiHours } from 'services/functions/renderPoiHours.js';
import { villageHours } from 'business_info/hours.js';
import { villageBusinessInfo } from 'business_info/genericInfo.js';

const VillageCovidInfo = (props) => {
  const sectionStyle = { marginTop: '20px' };
  const sectionHeaderStyle = { textDecoration: 'underline' };
  const ulStyle = { marginTop: '0px' };
  const innerUlStyle = { paddingLeft: '20px' };
  const liStyle = { fontSize: '14px' };
  const paddingLeftStyle = { paddingLeft: '24px' };

  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ marginTop: '10px' }}>
        <h3>Miccosukee Indian Village</h3>
        <p>
          {props.language
            ? 'Adventure into the native habitat of the Miccosukee Tribe and learn about their culture, lifestyle, and history with an interactive museum, alligator demonstrations, and artisan presentations. Visit the gift shop and bring home a piece of indigenous culture with authentic Native American arts and crafts.'
            : 'Aventúrese en el hábitat nativo de la tribu Miccosukee y aprenda sobre su cultura, estilo de vida e historia con un museo interactivo, demostraciones de caimanes y presentaciones artesanales. Visite la tienda de regalos y llévese a casa una parte de la cultura indígena con auténticas artes y artesanías de los nativos americanos.'}
        </p>
        <div style={sectionStyle}>
          <h4 style={sectionHeaderStyle}>
            {props.language ? 'Hours of Operation' : 'Horarios'}
          </h4>
          <ul style={ulStyle}>
            <li style={liStyle}>
              {renderPoiHours(villageHours, props.language, true)}
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
                {villageBusinessInfo.phone}
              </li>
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default VillageCovidInfo;
