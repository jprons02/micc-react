import React from "react";
import { renderPoiHours } from "services/renderPoiHours.js";
import { villageHours } from "business_info/hours.js";

const VillageCovidInfo = (props) => {
  const sectionStyle = { marginTop: "20px" };
  const sectionHeaderStyle = { textDecoration: "underline" };
  const ulStyle = { marginTop: "0px" };
  const innerUlStyle = { paddingLeft: "20px" };
  const liStyle = { fontSize: "14px" };
  const paddingLeftStyle = { paddingLeft: "24px" };

  return (
    <div style={{ marginBottom: "30px" }}>
      <div style={{ marginTop: "10px" }}>
        <h3>Miccosukee Indian Village</h3>
        <p style={paddingLeftStyle}>
          {props.language ? (
            <b>
              {villageHours.days(props.language) === "" ? "CLOSED:" : "OPEN:"}
            </b>
          ) : (
            <b>
              {villageHours.days(props.language) === ""
                ? "CERRADO:"
                : "ABIERTO:"}
            </b>
          )}
        </p>
        <ul style={{ marginTop: "-5px", paddingLeft: "50px" }}>
          <li style={liStyle}>{villageHours.details(props.language)}</li>
        </ul>
        <div style={sectionStyle}>
          <h3 style={{ paddingTop: "20px" }}>Village Gift Shop</h3>
          <div style={sectionStyle}>
            <h4 style={sectionHeaderStyle}>
              {props.language ? "Hours of Operation" : "Horarios"}
            </h4>
            <ul style={ulStyle}>
              <li style={liStyle}>
                {renderPoiHours(villageHours.poi.giftShop, props.language)}
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
                    that does show symptoms will be asked to leave for the
                    safety of all our other guests and employees.
                  </li>
                  <li style={liStyle}>
                    All customers must wear a mask at all times; no face mask,
                    no entry
                  </li>
                  <li style={liStyle}>
                    There will be temperature checks on the door
                  </li>
                  <li style={liStyle}>
                    Customers with temperatures at or above 100˚ will not be
                    allowed in (unless medical documentation is provided in
                    support of high temperature)
                  </li>
                  <li style={liStyle}>
                    You are required to maintain a social distance of at least 6
                    feet
                  </li>
                  <li style={liStyle}>
                    All items tried on will be sanitized before and after use
                  </li>
                  <li style={liStyle}>
                    Hand sanitizer machines have been installed throughout the
                    facility
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
                    casa y practique distanciamiento social. Cualquier cliente
                    que llegue a nuestro local mostrando síntomas será enviado
                    de regreso a su casa para evitar contagios.
                  </li>
                  <li style={liStyle}>
                    En todo momento deberá usar su mascarilla; sin mascarilla,
                    no se permitirá su entrada al establecimiento
                  </li>
                  <li style={liStyle}>
                    Deberá someterse a un control de temperatura en la entrada
                  </li>
                  <li style={liStyle}>
                    No estará permitido el ingreso de las personas cuyo control
                    de temperatura indique temperatura elevada (sobre 100॰, a
                    menos que provea documentación médica al respecto)
                  </li>
                  <li style={liStyle}>
                    Deberá mantener distanciamiento social de al menos 6 pies de
                    distancia
                  </li>
                  <li style={liStyle}>
                    Todos los artículos que se pruebe serán desinfectados antes
                    y después de cada uso
                  </li>
                  <li style={liStyle}>
                    Se han instalado dispensadores de desinfectante de manos en
                    todo el local
                  </li>
                  <li style={liStyle}>
                    Cualquier interacción con los empleados u otros clientes
                    deberá ser mínina (a menos que sean parte de su grupo y
                    hayan llegado en el mismo auto)
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageCovidInfo;

/*
En todo momento deberá usar su mascarilla; sin mascarilla, no se permitirá su entrada al establecimiento
Deberá someterse a un control de temperatura en la entrada
No estará permitido el ingreso de las personas cuyo control de temperatura indique temperatura elevada (sobre 100॰, a menos que provea documentación médica al respecto)
Deberá mantener distanciamiento social de al menos 6 pies de distancia
Todos los artículos que se pruebe serán desinfectados antes y después de cada uso
Se han instalado dispensadores de desinfectante de manos en todo el local
Cualquier interacción con los empleados u otros clientes deberá ser mínina (a menos que sean parte de su grupo y hayan llegado en el mismo auto)
*/
