import React, { useState } from 'react';

import { mrgHours } from 'business_info/hours.js';
import { mrgStatus } from 'business_info/status.js';
import { mrgBusinessInfo } from 'business_info/genericInfo.js';

import Collapse from '@material-ui/core/Collapse';

import { renderPoiHoursSimple } from 'services/functions/renderPoiHours';

const MrgCovidInfo = (props) => {
  const sectionStyle = { marginTop: '20px' };
  const sectionHeaderStyle = {
    textDecoration: 'underline' /*cursor: 'pointer'*/,
  };
  const ulStyle = { marginTop: '0px' };
  const innerUlStyle = { paddingLeft: '20px' };
  const liStyle = { fontSize: '14px' };
  const paddingLeftStyle = { paddingLeft: '24px' };

  const [mrg, setMrg] = useState({
    hours: false,
    entryDetails: false,
    gaming: false,
    dining: false,
    accommodations: false,
    amenities: false,
    events: false,
  });

  // poi acronym: points of interest
  // check if everything is open or closed
  const isAllOpenClosed = (poi) => {
    let isOpen = 0;
    let totalList = [];
    poi.map((item, index) => {
      if (item.isOpen) {
        isOpen++;
      }
      totalList.push(index);
    });
    if (isOpen === 0) {
      return 'all closed';
    }
    if (isOpen === totalList.length) {
      return 'all open';
    }
    return null;
  };

  const renderAccommodations = () => {
    return (
      <React.Fragment>
        <p style={paddingLeftStyle}>
          <b>
            {mrgStatus.accommodations.isOpen
              ? props.language
                ? 'OPEN:'
                : 'ABIERTO:'
              : props.language
              ? 'CLOSED:'
              : 'CERRADO'}
          </b>
        </p>
        <ul style={{ marginTop: '-5px', paddingLeft: '50px' }}>
          <li style={liStyle}>
            {mrgStatus.accommodations.details(props.language)}
          </li>
        </ul>
      </React.Fragment>
    );
  };

  // Points of interest that are open or closed within Gaming
  const renderGaming = () => {
    const renderOpenGaming = () => {
      return mrgStatus.gaming.map((item) => {
        if (item.isOpen) {
          return (
            <React.Fragment key={item.name(props.language)}>
              <li style={liStyle}>{item.name(props.language)}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details(props.language).map((detailItem) => (
                    <li key={detailItem} style={liStyle}>
                      {detailItem}
                    </li>
                  ))}
                </ul>
              ) : null}
            </React.Fragment>
          );
        }
      });
    };
    const renderClosedGaming = () => {
      return mrgStatus.gaming.map((item) => {
        if (!item.isOpen) {
          return (
            <React.Fragment key={item.name(props.language)}>
              <li style={liStyle}>{item.name(props.language)}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details(props.language).map((detailItem) => (
                    <li key={detailItem} style={liStyle}>
                      {detailItem}
                    </li>
                  ))}
                </ul>
              ) : null}
            </React.Fragment>
          );
        }
      });
    };

    return (
      <React.Fragment>
        {isAllOpenClosed(mrgStatus.gaming) === 'all closed' ? (
          ''
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>{props.language ? 'OPEN:' : 'ABIERTO:'}</b>
            </p>
            <ul style={{ marginTop: '-5px', paddingLeft: '50px' }}>
              {renderOpenGaming()}
            </ul>
          </React.Fragment>
        )}

        {isAllOpenClosed(mrgStatus.gaming) === 'all open' ? (
          ''
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>{props.language ? 'CLOSED:' : 'CERRADO'}</b>
            </p>
            <ul style={{ marginTop: '-5px', paddingLeft: '50px' }}>
              {renderClosedGaming()}
            </ul>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  // Points of interest that are open or closed within Dining
  const renderDining = () => {
    const renderOpenDining = () => {
      return mrgStatus.dining.map((item) => {
        if (item.isOpen) {
          return (
            <React.Fragment key={item.name(props.language)}>
              <li style={liStyle}>{item.name(props.language)}</li>
              {/* IF GIFT SHOP */}
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details(props.language).map((detailItem) => (
                    <li key={detailItem} style={liStyle}>
                      {detailItem}
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.hours ? (
                <ul style={innerUlStyle}>
                  {renderPoiHoursSimple(item.hours, props.language, liStyle)}
                </ul>
              ) : null}
            </React.Fragment>
          );
        }
      });
    };
    const renderClosedDining = () => {
      return mrgStatus.dining.map((item) => {
        if (!item.isOpen) {
          return (
            <React.Fragment key={item.name(props.language)}>
              <li style={liStyle}>{item.name(props.language)}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details(props.language).map((detailItem) => (
                    <li key={detailItem} style={liStyle}>
                      {detailItem}
                    </li>
                  ))}
                </ul>
              ) : null}
            </React.Fragment>
          );
        }
      });
    };
    return (
      <React.Fragment>
        {isAllOpenClosed(mrgStatus.dining) === 'all closed' ? (
          ''
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>{props.language ? 'OPEN:' : 'ABIERTO'}</b>
            </p>
            <ul style={{ marginTop: '-5px', paddingLeft: '50px' }}>
              {renderOpenDining()}
            </ul>
          </React.Fragment>
        )}
        {isAllOpenClosed(mrgStatus.dining) === 'all open' ? (
          ''
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>{props.language ? 'CLOSED:' : 'CERRADO'}</b>
            </p>
            <ul style={{ marginTop: '-5px', paddingLeft: '50px' }}>
              {renderClosedDining()}
            </ul>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  const renderAmenities = () => {
    const renderOpenAmenities = () => {
      return mrgStatus.amenities.map((item) => {
        if (item.isOpen) {
          return (
            <React.Fragment key={item.name(props.language)}>
              <li style={liStyle}>{item.name(props.language)}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details(props.language).map((detailItem) => (
                    <li key={detailItem} style={liStyle}>
                      {detailItem}
                    </li>
                  ))}
                </ul>
              ) : null}
            </React.Fragment>
          );
        }
      });
    };
    const renderClosedAmenities = () => {
      return mrgStatus.amenities.map((item) => {
        if (!item.isOpen) {
          return (
            <React.Fragment key={item.name(props.language)}>
              <li style={liStyle}>{item.name(props.language)}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details(props.language).map((detailItem) => (
                    <li key={detailItem} style={liStyle}>
                      {detailItem}
                    </li>
                  ))}
                </ul>
              ) : null}
            </React.Fragment>
          );
        }
      });
    };

    return (
      <React.Fragment>
        {isAllOpenClosed(mrgStatus.amenities) === 'all closed' ? (
          ''
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>{props.language ? 'OPEN:' : 'ABIERTO'}</b>
            </p>
            <ul style={{ marginTop: '-5px', paddingLeft: '50px' }}>
              {renderOpenAmenities()}
            </ul>
          </React.Fragment>
        )}
        {isAllOpenClosed(mrgStatus.amenities) === 'all open' ? (
          ''
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>{props.language ? 'CLOSED:' : 'CERRADO'}</b>
            </p>
            <ul style={{ marginTop: '-5px', paddingLeft: '50px' }}>
              {renderClosedAmenities()}
            </ul>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ marginTop: '10px' }}>
        <h3>
          {props.language
            ? 'Miccosukee Casino & Resort'
            : 'Miccosukee Casino & Resort'}
        </h3>
        {/*<video
          style={{ margin: '5px 0 15px 0', width: '100%', maxWidth: '500px' }}
          src={winItAll}
          controls={true}
          controlsList="nodownload"
          />*/}
        <p>
          Miccosukee Casino & Resort is your ultimate destination for gaming,
          entertainment, and leisure in the heart of the Florida Everglades.
        </p>
        <p>
          Located 17 miles west of Miami International Airport, on the edge of
          this scenic wetland ecosystem, the Resort offers 302 elegant guest
          rooms and suites designed with comfort and luxury in mind.
        </p>
        <p>
          Featured amenities include a high-stakes Bingo Hall, a 20-table Poker
          Room, over 1,800 slot machines, 24-hour dining options, and live
          entertainment.
        </p>
        <p>
          Our Resort’s second floor offers over 20,000 square feet of space,
          ideal for corporate events, private parties, and wedding ceremonies.
          Banquet and catering services can accommodate up to 1,200 guests.
        </p>
        <p>
          It’s time to live it up and play on at the all-new Miccosukee Casino &
          Resort!
        </p>
      </div>
      <div style={sectionStyle}>
        <h4 style={sectionHeaderStyle}>
          {props.language ? 'Hours of Operation' : 'Horarios'}
        </h4>
        {
          <ul style={ulStyle}>
            <li style={liStyle}>
              {props.language ? 'Monday - Sunday' : 'lunes — domingo'}
              {', '}
              {mrgHours.hours.open === mrgHours.hours.close
                ? props.language
                  ? '24 hours'
                  : '24 horas'
                : `${mrgHours.hours.open} - ${mrgHours.hours.close}`}
            </li>
          </ul>
        }
      </div>
      <div style={sectionStyle}>
        <h4 style={sectionHeaderStyle}>
          {props.language ? 'Contact' : 'Contacto'}
        </h4>
        {
          <ul>
            <li style={liStyle}>
              500 SW 177th Ave
              <br />
              Miami, FL 33194
              <br />
              {mrgBusinessInfo.phone}
            </li>
          </ul>
        }
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, entryDetails: !mrg.entryDetails })}
          style={sectionHeaderStyle}
        >
          {props.language ? 'Entry Details' : 'Normas de Acceso'}
        </h4>
        <ul style={ulStyle}>
          <li style={liStyle}>
            {props.language
              ? 'All guests must have a government-issued photo ID.'
              : 'Todos los clientes deben tener un documento de identidad con fotografía emitido por el gobierno.'}
          </li>
          <li style={liStyle}>
            {props.language
              ? 'Masks are optional for vaccinated patrons. Masks are mandatory for unvaccinated patrons.'
              : 'El uso de mascarillas es opcional para los clientes vacunados. El uso de mascarillas es obligatorio para los clientes no vacunados.'}
          </li>
          <li style={liStyle}>
            {props.language
              ? 'We remain a non-smoking facility.'
              : 'Está prohibido fumar adentro del edificio.'}
          </li>
          <ul style={innerUlStyle}>
            <li style={liStyle}>
              {props.language
                ? 'There will be designated smoking areas outside.'
                : 'Se han designado zonas externas exclusivamente para fumadores.'}
            </li>
          </ul>
          <li style={liStyle}>
            {props.language
              ? 'Eighteen-wheelers can park in the Raccoon Parking Lot but must register first with the Hotel Security Dispatch and are required to rent a hotel room.'
              : 'Los camiones de dieciocho ruedas deben parquearse en el Estacionamiento Raccoon, pero antes deben registrarse con el Despacho de Seguridad del hotel y alquilar un cuarto de hotel.'}
          </li>
          <li style={liStyle}>
            {props.language
              ? 'RVs are allowed on property.'
              : 'Los RVs (casas rodantes) están permitidos en nuestro establecimiento.'}
          </li>
          <ul style={innerUlStyle}>
            <li style={liStyle}>
              {props.language
                ? 'RVs are allowed to park in the Raccoon Parking Lot but must register first with the Hotel Security Dispatch.'
                : 'Los RVs deben parquearse en el Estacionamiento Raccoon pero antes deben registrarse con el Despacho de Seguridad del hotel.'}
            </li>
            <li style={liStyle}>
              {props.language
                ? 'There will be a charge of $25.00 + tax per night for overnight RV parking.'
                : 'Habrá un cargo de $25.00 + impuestos por noche para el estacionamiento nocturno de RVs.'}
            </li>
            <li style={liStyle}>
              {props.language
                ? 'Everyone in the RV must be 18 years of age and over in order to enter the property.'
                : 'Todos en el RV deben tener 18 años o más para poder ingresar a la propiedad.'}
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default MrgCovidInfo;
