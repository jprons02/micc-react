import React, { useState } from 'react';

import { mrgHours } from 'business_info/hours.js';
import { mrgStatus } from 'business_info/status.js';

import Collapse from '@material-ui/core/Collapse';

//import mrgCovidVideo from "assets/media/video/GAMING-SAFE_MRG.mp4";
import winItAll from 'assets/media/video/mrg_win_it_all.mp4';
import { renderPoiHoursSimple } from 'services/functions/renderPoiHours';

const MrgCovidInfo = (props) => {
  const sectionStyle = { marginTop: '20px' };
  const sectionHeaderStyle = { textDecoration: 'underline', cursor: 'pointer' };
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
          {props.language
            ? 'Located in the heart of the Everglades — home to South Florida’s original gaming and all-around entertainment emporium.'
            : 'Localizado en el corazón de los Everglades, somos el emporio de entretenimiento y juegos de azar más original del Sur de la Florida.'}
        </p>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, hours: !mrg.hours })}
          style={sectionHeaderStyle}
        >
          {props.language ? 'Hours of Operation' : 'Horarios'}
        </h4>
        {
          <ul style={ulStyle}>
            <li style={liStyle}>
              {mrgHours.hours.days(props.language)}
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
        <h4
          onClick={() => setMrg({ ...mrg, entryDetails: !mrg.entryDetails })}
          style={sectionHeaderStyle}
        >
          {props.language ? 'Entry Details' : 'Normas de Acceso'}
        </h4>
        <ul style={ulStyle}>
          <li style={liStyle}>
            {props.language
              ? 'We are operating at full capacity.'
              : 'Estamos operando a máxima capacidad.'}
          </li>
          <li style={liStyle}>
            {props.language
              ? 'Temperature screenings are no longer required when entering the building.'
              : 'No se requiere controles de temperatura para entrar al edificio.'}
          </li>
          <li style={liStyle}>
            {props.language
              ? 'All guests must have a government-issued photo ID.'
              : 'Todos los clientes deben tener un documento de identidad con fotografía emitido por el gobierno.'}
          </li>
          <li style={liStyle}>
            {props.language
              ? 'Must be 18 or older.'
              : 'Debe ser mayor de 18 años.'}
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
              ? 'There have been disinfecting wipe dispensers installed all around the facility.'
              : 'Se han instalado dispensadores de toallas desinfectantes alrededor de toda la edificio.'}
          </li>
          <ul style={innerUlStyle}>
            <li style={liStyle}>
              {props.language
                ? 'Guests must wipe down each machine after use.'
                : 'Todas las máquinas deberán ser desinfectadas con una toalla al finalizar su uso.'}
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
                : 'Todos en el RV deben tener 18 años o más para poder entrar al establecimiento.'}
            </li>
          </ul>
        </ul>
      </div>
      {/*
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, gaming: !mrg.gaming })}
          style={sectionHeaderStyle}
        >
          {props.language ? 'Casino' : 'Casino'}
        </h4>
        <Collapse in={mrg.gaming}>
          {renderGaming()}
          <span
            style={{
              fontSize: '10px',
              fontStyle: 'italic',
              lineHeight: '10px',
            }}
          >
            {props.language
              ? 'Once disqualification is declared, it is final. Offers are subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Casino & Resort may not be enrolled or participate in the Miccosukee One program without written documentation that such status has been rescinded.'
              : 'Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Casino & Resort no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles.'}
          </span>
        </Collapse>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, dining: !mrg.dining })}
          style={sectionHeaderStyle}
        >
          {props.language ? 'Dining & Nightlife' : 'Restaurantes & Bares'}
        </h4>
        <Collapse in={mrg.dining}>{renderDining()}</Collapse>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() =>
            setMrg({ ...mrg, accommodations: !mrg.accommodations })
          }
          style={sectionHeaderStyle}
        >
          {props.language ? 'Accommodations' : 'Alojamiento'}
        </h4>
        <Collapse in={mrg.accommodations}>{renderAccommodations()}</Collapse>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, amenities: !mrg.amenities })}
          style={sectionHeaderStyle}
        >
          {props.language ? 'Amenities' : 'Comodidades'}
        </h4>
        <Collapse in={mrg.amenities}>{renderAmenities()}</Collapse>
      </div>
      */}
    </div>
  );
};

export default MrgCovidInfo;
