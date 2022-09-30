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
            ? 'Miccosukee Casino & Resort Reopening Details'
            : 'Miccosukee Casino & Resort Detalles de Reapertura'}
        </h3>
        <video
          style={{ margin: '5px 0 15px 0', width: '100%', maxWidth: '500px' }}
          src={winItAll}
          controls={true}
          controlsList="nodownload"
        />
        <p>
          {props.language
            ? 'At this time, all employees returning to work have tested negative for COVID-19 and have all been trained on how to properly prevent the spread of it. Due to the outbreak of the COVID-19 pandemic, Miccosukee Casino & Resort asks any employee or patron who is exhibiting symptoms to please remain at home for the safety of all other employees and guests. Miccosukee Casino & Resort is very proud to be able to serve its South Florida community once again.'
            : 'Hemos realizado controles a todos nuestros empleados y todos han dado negativo al COVID-19. Además los hemos capacitado sobre cómo prevenir su contagio. Debido a la pandemia provocada por el brote de COVID-19, Miccosukee Casino & Resort le pide a todos los empleados y clientes que tengan síntomas que por favor permanezcan en sus casas por la seguridad de todos. Miccosukee Casino & Resort se enorgullece de volver a colaborar con la comunidad del sur de la Florida.'}
        </p>
        <p>
          {props.language
            ? 'In addition to existing health and hygiene practices, we will be regularly disinfecting all areas with Electrostatic Sprayers.'
            : 'Además de las prácticas de higiene y salud actuales, estaremos desinfectando regularmente todas las áreas con rociadores electroestáticos.'}
        </p>
        <p>
          {props.language
            ? 'We thank you for your continued patience as we take these additional measures to ensure a safe environment for everyone.'
            : 'Agradecemos su paciencia mientras tomamos estas medidas adicionales para garantizar un ambiente seguro para todos.'}
        </p>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, hours: !mrg.hours })}
          style={sectionHeaderStyle}
        >
          {props.language ? 'Hours of Operation' : 'Horarios'}
        </h4>
        <Collapse in={mrg.hours}>
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
              {/*
              <ul style={innerUlStyle}>
                <li style={liStyle}>
                  {mrgHours.hours.details(props.language)}
                </li>
              </ul>
              */}
            </ul>
          }
          {/*
          <ul style={ulStyle}>
            <li style={liStyle}>
              {mrgHours.weekday.days(props.language)}: {mrgHours.weekday.open} –{' '}
              {mrgHours.weekday.close}
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                {mrgHours.weekday.details(props.language)}
              </li>
            </ul>
          </ul>
          <ul style={ulStyle}>
            <li style={liStyle}>
              {mrgHours.weekend.days(props.language)}: {mrgHours.weekend.open} –{' '}
              {mrgHours.weekend.close}
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                {mrgHours.weekend.details(props.language)}
              </li>
            </ul>
          </ul>
          */}
        </Collapse>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, entryDetails: !mrg.entryDetails })}
          style={sectionHeaderStyle}
        >
          {props.language ? 'Entry Details' : 'Normas de Acceso'}
        </h4>
        <Collapse in={mrg.entryDetails}>
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
        </Collapse>
      </div>

      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, gaming: !mrg.gaming })}
          style={sectionHeaderStyle}
        >
          {props.language ? 'Casino' : 'Casino'}
        </h4>
        <Collapse in={mrg.gaming}>
          {renderGaming()}
          {/*
          <p style={paddingLeftStyle}>
            <b>
              {props.language
                ? "Miccosukee One Program Covid-19 Impact FAQs:"
                : "Miccosukee One Program Impacto del COVID-19 Preguntas Frecuentes:"}
            </b>
          </p>
          <ul style={{ marginTop: "0px", paddingLeft: "50px" }}>
            <li style={liStyle}>
              {props.language
                ? "Will I lose my card status due to the COVID-19 closure?"
                : "¿Podría perder el nivel de mi tarjeta debido al cierre por COVID-19?"}
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                {props.language
                  ? "Miccosukee Casino & Resort will not downgrade any accounts from the impacted January – June 2020 term. All Miccosukee One players will automatically retain their current card tier through December 31, 2020 unless an eligible upgrade is earned."
                  : "Miccosukee Casino & Resort no rebajará ninguna cuenta debido al impacto del COVID -19 ocurrido entre enero y junio de 2020. Todos los jugadores de Miccosukee One mantendrán su nivel actual hasta el 31 de diciembre del 2020 salvo que hayan ganado un ascenso."}
              </li>
            </ul>
            <li style={liStyle}>
              {props.language
                ? "Will I receive credit for the points I have earned towards being upgraded?"
                : "¿Recibiré crédito por los puntos que ahorre para ascender?"}
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                {props.language
                  ? "We know you’ve played hard to reach the next tier. Since circumstances beyond our control have resulted in less available play time for you, we are lowering the required point threshold for this impacted January – June 2020 term based on the quantity of days that our doors were closed to you. All tier point earnings will accrue until 11:59 PM on June 30, 2020."
                  : "Sabemos que te has esforzado mucho para ascender de nivel. Por ello, debido a las públicas circunstancias de fuerza mayor que provocaron que haya menos tiempo disponible para jugar, realizamos una reducción en el límite de puntos requeridos para el plazo de enero a junio del 2020. Esto implica que, basándonos en la totalidad de los días que estuvimos cerrados todos los puntos ahorrados se acumularán hasta las 11:59 PM del 30 de junio."}
              </li>
            </ul>
            <li style={liStyle}>
              {props.language
                ? "What if my birthday passed while you were closed?"
                : "¿Qué pasa si mi cumpleaños paso mientras estaban cerrados?"}
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                {props.language
                  ? "We are so saddened that we were unable to celebrate with you! If you had an existing account and could not visit us on your birthday due to the resort being closed, please visit the Player’s Club before June 30, 2020 to claim a $25 Quarantine Consolation voucher."
                  : "¡Estamos muy tristes de que no pudimos festejar con usted! Si tenían una cuenta existente y no pudo visitarnos en su cumpleaños por el cierre del hotel, por favor visite el Player’s Club antes del 30 de junio del 2020 para reclamar un cupón de Quarantine Consolation de $25."}
              </li>
            </ul>
            <li style={liStyle}>
              {props.language
                ? "What if my birthday voucher expires before I can use it?"
                : "¿Qué pasa si mi cupón de cumpleaños expira antes de que lo pueda usar?"}
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                {props.language
                  ? "All meal vouchers issued on or after March 17 will be valid until 11:59 PM on December 30, 2020."
                  : "Todos los cupones de comida emitidos en o después del 17 de marzo serán válidos hasta las 11:59 PM del 30 de diciembre de 2020."}
              </li>
            </ul>
            <li style={liStyle}>
              {props.language
                ? "Will I be able to retrieve the Player’s Club points that expired during the closure period?"
                : "¿Voy a poder recuperar los puntos del Player’s Club que expiraron durante el periodo de cierre?"}
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                {props.language
                  ? "If your Miccosukee One account has been dormant for a full calendar year and you experienced a point expiration during the dates that we were closed, please visit the Player’s Club by 11:59 PM on July 16, 2020 for a refund of the expired points."
                  : "Si su cuenta Miccosukee One ha estado inactiva por un año calendario completo y sus puntos expiraron durante los días que estuvimos cerrados, por favor visite el Player’s Club antes de las 11:59 PM el 16 de julio del 2020 para un reembolso de los puntos expirados."}
              </li>
            </ul>
            <li style={liStyle}>
              {props.language
                ? "What happened to drawing entries earned before Miccosukee closed?"
                : "¿Qué pasó con las entradas ahorradas antes que el Miccosukee cerrara?"}
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                {props.language
                  ? "All drawings were cancelled at the discretion of management and thus any accrued entries were discarded."
                  : "Todos los sorteos fueron cancelados a la discreción de la administración y todas las entradas acumuladas fueron descartadas."}
              </li>
            </ul>
          </ul>
          */}
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
    </div>
  );
};

export default MrgCovidInfo;
