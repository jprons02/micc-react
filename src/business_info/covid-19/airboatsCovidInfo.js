import React from "react";

import { airboatsHours } from "business_info/hours.js";

const AirboatsCovidInfo = (props) => {
  const sectionStyle = { marginTop: "20px" };
  const sectionHeaderStyle = { textDecoration: "underline" };
  const ulStyle = { marginTop: "0px" };
  const innerUlStyle = { paddingLeft: "20px" };
  const liStyle = { fontSize: "14px" };
  const paddingLeftStyle = { paddingLeft: "24px" };

  return (
    <div style={{ marginBottom: "30px" }}>
      <div style={{ marginTop: "10px" }}>
        <h3>Miccosukee Airboats</h3>
        <div style={sectionStyle}>
          <h4 style={sectionHeaderStyle}>
            {props.language ? "Hours of Operation" : "Horarios"}
          </h4>
          <ul style={ulStyle}>
            <li style={liStyle}>
              {airboatsHours.days(props.language)}: {airboatsHours.open} –{" "}
              {airboatsHours.close}
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4 style={sectionHeaderStyle}>
            {props.language ? "Guidelines" : "Reglas de Seguridad"}
          </h4>
          <ul style={ulStyle}>
            {props.language ? (
              <React.Fragment>
                <li style={liStyle}>
                  If you are feeling under the weather, we do ask that you
                  please stay home and practice social distancing. Any guest
                  that does show symptoms will be asked to leave for the safety
                  of all our other guests and employees.
                </li>
                <li style={liStyle}>
                  All customers must wear a mask at all times; no face mask, no
                  entry
                </li>
                <li style={liStyle}>
                  You are required to maintain a social distance of at least 6
                  feet
                </li>
                <li style={liStyle}>
                  All interactions with employees and other customers (unless
                  within your “pack”) must be minimal
                </li>
                <li style={liStyle}>
                  Your “pack” is considered anyone in the same car
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li style={liStyle}>
                  Si usted se siente enfermo, le pedimos que permanezca en su
                  casa y practique distanciamiento social. Cualquier cliente que
                  llegue a nuestro local mostrando síntomas será enviado de
                  regreso a su casa para evitar contagios.
                </li>
                <li style={liStyle}>
                  En todo momento deberá usar su mascarilla; sin mascarilla, no
                  se permitirá su entrada al establecimiento
                </li>
                <li style={liStyle}>
                  Deberá mantener distanciamiento social de al menos 6 pies de
                  distancia
                </li>
                <li style={liStyle}>
                  Cualquier interacción con los empleados u otros clientes
                  deberá ser mínina (a menos que sean parte de su grupo y hayan
                  llegado en el mismo auto)
                </li>
              </React.Fragment>
            )}
          </ul>
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
