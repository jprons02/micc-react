import React from "react";

import { airboatsHours } from "assets/business_info/hours.js";

const AirboatsCovidInfo = () => {
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
          <h4 style={sectionHeaderStyle}>Hours of Operation</h4>
          <ul style={ulStyle}>
            <li style={liStyle}>
              {airboatsHours.days}: {airboatsHours.open} – {airboatsHours.close}
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4 style={sectionHeaderStyle}>Guidelines</h4>
          <ul style={ulStyle}>
            <li style={liStyle}>
              If you are feeling under the weather, we do ask that you please
              stay home and practice social distancing. Any guest that does show
              symptoms will be asked to leave for the safety of all our other
              guests and employees.
            </li>
            <li style={liStyle}>
              All customers must wear a mask at all times; no face mask, no
              entry
            </li>
            <li style={liStyle}>
              You are required to maintain a social distance of at least 6 feet
            </li>
            <li style={liStyle}>
              All interactions with employees and other customers (unless within
              your “pack”) must be minimal
            </li>
            <li style={liStyle}>
              Your “pack” is considered anyone in the same car
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AirboatsCovidInfo;
