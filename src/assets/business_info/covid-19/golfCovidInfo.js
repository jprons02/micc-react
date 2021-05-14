import React, { useState } from "react";

import { golfHours } from "assets/business_info/hours.js";

const GolfCovidInfo = () => {
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
              {golfHours.days}: {golfHours.open} – {golfHours.close}
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4 style={sectionHeaderStyle}>Guidelines</h4>
          <ul style={ulStyle}>
            <li style={liStyle}>
              The Barracuda Golf Course will not be available for play until
              further notice.
            </li>
            <li style={liStyle}>
              You are required to maintain a social distance of at least 6-feet
              between yourself and the next person in front and behind you.
            </li>
            <li style={liStyle}>
              No direct contact is permitted with any golf course personnel.
            </li>
            <li style={liStyle}>
              After conducting your transaction, use an alcohol-based hand
              sanitizer or wash your hands with soap &amp; water for at least
              20-seconds.
            </li>
            <li style={liStyle}>
              Exit the pro-shop through the separate exit to avoid 2-way traffic
              at the entrance door used to enter, and do not touch barrier
              between shop personnel and player.
            </li>
            <li style={liStyle}>
              No handshakes or other forms of touching is permitted before,
              during or after play with any other persons on the golf course.
            </li>
            <li style={liStyle}>
              If you brought your own water bottle or towel do not share either
              with any others on the golf course.
            </li>
            <li style={liStyle}>
              All persons are not permitted to congregate in any areas, and will
              be required to leave the golf course after their play to eliminate
              gatherings.
            </li>
            <li style={liStyle}>
              Management reserves the right at any moment to limit play or
              close-off sections of the golf course, including the short-game
              area or driving range, should players not comply with social
              distancing guidelines described above and/or other recommendations
              noted by the U.S. Centers for Disease Control &amp; Prevention.
            </li>
            <li style={liStyle}>
              Always cover coughing or sneezing with a tissue then throw such in
              the trash and wash your hands, if no tissue is available then
              cough into your elbow.
            </li>
            <li style={liStyle}>Avoid touching your eyes, nose, and mouth.</li>
            <li style={liStyle}>
              If you are feeling ill depart the premises immediately, and if you
              are having difficulty breathing seek medical care.
            </li>
            <li style={liStyle}>
              You will be responsible for bringing your golf equipment to a
              designated area. No clubs or other equipment will be transported
              by golf course staff
            </li>
            <li style={liStyle}>
              Payment will be made at front door following proper social
              distancing guidelines
            </li>
            <li style={liStyle}>
              Bathrooms will have disinfectant wipes for you to wipe down
              everything you touched before exiting
            </li>
            <li style={liStyle}>
              There will be no locker room usage and no bag storage usage
            </li>
            <li style={liStyle}>
              Scorecard, pencil and tees will only be issued to individuals when
              requested from starter, but then discarded after their initial use
            </li>
            <li style={liStyle}>
              Do not touch or remove flagsticks from the cups at all times (any
              putts that hit the cup or noodle will be considered holed)
            </li>
            <li style={liStyle}>
              There will only be one player per cart, no exceptions. 2 players
              per cart will be permitted if they live in the same household.
            </li>
            <li style={liStyle}>
              Walking is allowed while maintaining social distancing
              requirements
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GolfCovidInfo;
