import React, { useState } from "react";

import { golfHours } from "business_info/hours.js";

const GolfCovidInfo = (props) => {
  const sectionStyle = { marginTop: "20px" };
  const sectionHeaderStyle = { textDecoration: "underline" };
  const ulStyle = { marginTop: "0px" };
  const innerUlStyle = { paddingLeft: "20px" };
  const liStyle = { fontSize: "14px" };
  const paddingLeftStyle = { paddingLeft: "24px" };

  return (
    <div style={{ marginBottom: "30px" }}>
      <div style={{ marginTop: "10px" }}>
        <h3>Miccosukee Golf &amp; Country Club</h3>
        <div style={sectionStyle}>
          <h4 style={sectionHeaderStyle}>Hours of Operation</h4>
          <ul style={ulStyle}>
            <li style={liStyle}>
              {golfHours[0].days(props.language)}: {golfHours[0].open} –{" "}
              {golfHours[0].close}
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
                  An executive order was signed and now two golfers can ride in
                  the same cart.{" "}
                </li>
                <li style={liStyle}>
                  If you prefer to ride by yourself, that option will remain
                  open. You'll have to pay an additional $20.00 cart fee.{" "}
                </li>
                <li style={liStyle}>
                  All other COVID-19 rules are still in effect.
                </li>
                <li style={liStyle}>
                  Scorecards and pencils will not be in the carts and will only
                  be provided by the starter upon request.
                </li>
                <li style={liStyle}>
                  Driving range hitting areas will be spaced a minimum of 6 feet
                  apart.
                </li>
                <li style={liStyle}>
                  If you have been vaccinated, you will not be required to wear
                  a mask in the building.
                </li>
                <li style={liStyle}>
                  If you have not been vaccinated, you must wear a face
                  covering.
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li style={liStyle}>
                  Se firmó una orden ejecutiva y ahora dos golfistas pueden
                  viajar en el mismo carrito.
                </li>
                <li style={liStyle}>
                  Si prefiere viajar solo, esa opción permanecerá abierta.
                  Tendrá que pagar una tarifa de carrito adicional de $20.00.
                </li>
                <li style={liStyle}>
                  Todas las demás reglas de COVID-19 aún están vigentes.
                </li>
                <li style={liStyle}>
                  Las tarjetas de puntuación y los lápices no estarán en los
                  carritos y solo los proporcionará el starter a pedido.
                </li>
                <li style={liStyle}>
                  Las áreas de manejo del campo de prácticas estarán separadas
                  por un mínimo de 6 pies.
                </li>
                <li style={liStyle}>
                  Si se ha vacunado, no se le pedirá que use una mascarilla en
                  el edificio.
                </li>
                <li style={liStyle}>
                  Si no ha sido vacunado, debe cubrirse la cara con una
                  mascarilla.
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GolfCovidInfo;
