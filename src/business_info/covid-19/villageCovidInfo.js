import React from "react";
import { renderPoiHours } from "services/renderPoiHours.js";
import { villageHours } from "business_info/hours.js";

const VillageCovidInfo = () => {
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
          <b>{villageHours.days === "" ? "CLOSED:" : "OPEN:"}</b>
        </p>
        <ul style={{ marginTop: "-5px", paddingLeft: "50px" }}>
          <li style={liStyle}>{villageHours.details}</li>
        </ul>
        <div style={sectionStyle}>
          <h3 style={{ paddingTop: "20px" }}>Village Gift Shop</h3>
          <div style={sectionStyle}>
            <h4 style={sectionHeaderStyle}>Hours of Operation</h4>
            <ul style={ulStyle}>
              <li style={liStyle}>
                {renderPoiHours(villageHours.poi.giftShop)}
              </li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h4 style={sectionHeaderStyle}>Guidelines</h4>
            <ul style={ulStyle}>
              <li style={liStyle}>
                If you are feeling under the weather, we do ask that you please
                stay home and practice social distancing. Any guest that does
                show symptoms will be asked to leave for the safety of all our
                other guests and employees.
              </li>
              <li style={liStyle}>
                All customers must wear a mask at all times; no face mask, no
                entry
              </li>
              <li style={liStyle}>
                There will be temperature checks on the door
              </li>
              <li style={liStyle}>
                Customers with temperatures at or above 100˚ will not be allowed
                in (unless medical documentation is provided in support of high
                temperature)
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageCovidInfo;

/*
{villageHours.poi.giftShop.days}:{" "}
{villageHours.poi.giftShop.open} –{" "}
{villageHours.poi.giftShop.close}
*/
