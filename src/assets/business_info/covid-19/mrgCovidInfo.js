import React, { useState } from "react";

import { mrgHours } from "assets/business_info/hours.js";
import { mrgStatus } from "assets/business_info/status.js";

import Collapse from "@material-ui/core/Collapse";

import mrgCovidVideo from "assets/video/GAMING-SAFE_MRG.mp4";

const MrgCovidInfo = () => {
  const sectionStyle = { marginTop: "20px" };
  const sectionHeaderStyle = { textDecoration: "underline", cursor: "pointer" };
  const ulStyle = { marginTop: "0px" };
  const innerUlStyle = { paddingLeft: "20px" };
  const liStyle = { fontSize: "14px" };
  const paddingLeftStyle = { paddingLeft: "24px" };

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
      return "all closed";
    }
    if (isOpen === totalList.length) {
      return "all open";
    }
    return null;
  };

  const renderAccommodations = () => {
    return (
      <React.Fragment>
        <p style={paddingLeftStyle}>
          <b>{mrgStatus.accommodations.isOpen ? "OPEN:" : "CLOSED:"}</b>
        </p>
        <ul style={{ marginTop: "-5px", paddingLeft: "50px" }}>
          <li style={liStyle}>{mrgStatus.accommodations.details}</li>
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
            <React.Fragment key={item.name}>
              <li style={liStyle}>{item.name}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details.map((detailItem) => (
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
            <React.Fragment key={item.name}>
              <li style={liStyle}>{item.name}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details.map((detailItem) => (
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
        {isAllOpenClosed(mrgStatus.gaming) === "all closed" ? (
          ""
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>OPEN:</b>
            </p>
            <ul style={{ marginTop: "-5px", paddingLeft: "50px" }}>
              {renderOpenGaming()}
            </ul>
          </React.Fragment>
        )}

        {isAllOpenClosed(mrgStatus.gaming) === "all open" ? (
          ""
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>CLOSED:</b>
            </p>
            <ul style={{ marginTop: "-5px", paddingLeft: "50px" }}>
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
            <React.Fragment key={item.name}>
              <li style={liStyle}>{item.name}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details.map((detailItem) => (
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
    const renderClosedDining = () => {
      return mrgStatus.dining.map((item) => {
        if (!item.isOpen) {
          return (
            <React.Fragment key={item.name}>
              <li style={liStyle}>{item.name}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details.map((detailItem) => (
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
        {isAllOpenClosed(mrgStatus.dining) === "all closed" ? (
          ""
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>OPEN:</b>
            </p>
            <ul style={{ marginTop: "-5px", paddingLeft: "50px" }}>
              {renderOpenDining()}
            </ul>
          </React.Fragment>
        )}
        {isAllOpenClosed(mrgStatus.dining) === "all open" ? (
          ""
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>CLOSED:</b>
            </p>
            <ul style={{ marginTop: "-5px", paddingLeft: "50px" }}>
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
            <React.Fragment key={item.name}>
              <li style={liStyle}>{item.name}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details.map((detailItem) => (
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
            <React.Fragment key={item.name}>
              <li style={liStyle}>{item.name}</li>
              {item.details ? (
                <ul style={innerUlStyle}>
                  {item.details.map((detailItem) => (
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
        {isAllOpenClosed(mrgStatus.amenities) === "all closed" ? (
          ""
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>OPEN:</b>
            </p>
            <ul style={{ marginTop: "-5px", paddingLeft: "50px" }}>
              {renderOpenAmenities()}
            </ul>
          </React.Fragment>
        )}
        {isAllOpenClosed(mrgStatus.amenities) === "all open" ? (
          ""
        ) : (
          <React.Fragment>
            <p style={paddingLeftStyle}>
              <b>CLOSED:</b>
            </p>
            <ul style={{ marginTop: "-5px", paddingLeft: "50px" }}>
              {renderClosedAmenities()}
            </ul>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <div style={{ marginTop: "10px" }}>
        <h3>Miccosukee Resort &amp; Gaming Reopening Details</h3>
        <video
          style={{ margin: "5px 0 15px 0", width: "100%", maxWidth: "500px" }}
          src={mrgCovidVideo}
          controls={true}
          controlsList="nodownload"
        />
        <p>
          Miccosukee Resort and Gaming is now increasing the capacity from 1,100
          to 1,200 patrons (1,500 Thursday – Saturday). We are excited that more
          of south Florida will be able to come and enjoy our gaming floor while
          remaining safe. All of our guidelines will remain in effect.
        </p>
        <p>
          At this time, all employees returning to work have tested negative for
          COVID-19 and have all been trained on how to properly prevent the
          spread of it. Due to the outbreak of the COVID-19 pandemic, Miccosukee
          Resort &amp; Gaming asks any employee or patron who is exhibiting
          symptoms to please remain at home for the safety of all other
          employees and guests. Miccosukee Resort &amp; Gaming is very proud to
          be able to serve its South Florida community once again.
        </p>
        <p>
          In addition to existing health and hygiene practices, we will be
          regularly disinfecting all areas with Electrostatic Sprayers.
        </p>
        <p>
          We thank you for your continued patience as we take these additional
          measures to ensure a safe environment for everyone.
        </p>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, hours: !mrg.hours })}
          style={sectionHeaderStyle}
        >
          Hours of Operation
        </h4>
        <Collapse in={mrg.hours}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              {mrgHours.weekday.days}: {mrgHours.weekday.open} –{" "}
              {mrgHours.weekday.close}
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>{mrgHours.weekday.details}</li>
            </ul>
          </ul>
          <ul style={ulStyle}>
            <li style={liStyle}>
              {mrgHours.weekend.days}: {mrgHours.weekend.open} –{" "}
              {mrgHours.weekend.close}
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>{mrgHours.weekend.details}</li>
            </ul>
          </ul>
        </Collapse>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, entryDetails: !mrg.entryDetails })}
          style={sectionHeaderStyle}
        >
          Entry Details
        </h4>
        <Collapse in={mrg.entryDetails}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              1,200 total capacity (1,500 Thursday – Saturday)
            </li>
            <li style={liStyle}>
              All guests must have have a government issued photo ID
            </li>
            <li style={liStyle}>
              There will be one designated entrance and one designated exit
            </li>
            <li style={liStyle}>Must be 21 or older</li>
            <li style={liStyle}>Must be subject to a temperature test</li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                If temperature test is too high, guests will not be permitted
                entry
              </li>
            </ul>
            <li style={liStyle}>Must wear a mask at all times</li>
            <li style={liStyle}>Must not smoke inside</li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                There will be designated smoking areas outside
              </li>
            </ul>
            <li style={liStyle}>
              There have been disinfecting wipe dispensers installed all around
              the facility
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                Guests must wipe down each machine after use
              </li>
            </ul>
            <li style={liStyle}>
              No RV’s, eighteen-wheeler rigs or vehicles 10ft or higher are
              allowed on property
            </li>
          </ul>
        </Collapse>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, gaming: !mrg.gaming })}
          style={sectionHeaderStyle}
        >
          Gaming
        </h4>
        <Collapse in={mrg.gaming}>
          {renderGaming()}
          <p style={paddingLeftStyle}>
            <b>Miccosukee One Program Covid-19 Impact FAQs:</b>
          </p>
          <ul style={{ marginTop: "0px", paddingLeft: "50px" }}>
            <li style={liStyle}>
              Will I lose my card status due to the COVID-19 closure?
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                Miccosukee Resort &amp; Gaming will not downgrade any accounts
                from the impacted January – June 2020 term. All Miccosukee One
                players will automatically retain their current card tier
                through December 31, 2020 unless an eligible upgrade is earned.
              </li>
            </ul>
            <li style={liStyle}>
              Will I receive credit for the points I have earned towards being
              upgraded?
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                We know you’ve played hard to reach the next tier. Since
                circumstances beyond our control have resulted in less available
                play time for you, we are lowering the required point threshold
                for this impacted January – June 2020 term based on the quantity
                of days that our doors were closed to you. All tier point
                earnings will accrue until 11:59 PM on June 30, 2020.
              </li>
            </ul>
            <li style={liStyle}>
              What if my birthday passed while you were closed?
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                We are so saddened that we were unable to celebrate with you! If
                you had an existing account and could not visit us on your
                birthday due to the resort being closed, please visit the
                Player’s Club before June 30, 2020 to claim a $25 Quarantine
                Consolation voucher.
              </li>
            </ul>
            <li style={liStyle}>
              What if my birthday voucher expires before I can use it?
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                All meal vouchers issued on or after March 17 will be valid
                until 11:59 PM on December 30, 2020.
              </li>
            </ul>
            <li style={liStyle}>
              Will I be able to retrieve the Player’s Club points that expired
              during the closure period?
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                If your Miccosukee One account has been dormant for a full
                calendar year and you experienced a point expiration during the
                dates that we were closed, please visit the Player’s Club by
                11:59 PM on July 16, 2020 for a refund of the expired points.
              </li>
            </ul>
            <li style={liStyle}>
              What happened to drawing entries earned before Miccosukee closed?
            </li>
            <ul style={innerUlStyle}>
              <li style={liStyle}>
                All drawings were cancelled at the discretion of management and
                thus any accrued entries were discarded.
              </li>
            </ul>
          </ul>
          <span
            style={{
              fontSize: "10px",
              fontStyle: "italic",
              lineHeight: "10px",
            }}
          >
            Once disqualification is declared, it is final. Offers are subject
            to change or cancellation, without notice, at the discretion of
            management. See a Player’s Club Attendant for details. Any
            individual that has self-excluded or been trespassed by Miccosukee
            Resort &amp; Gaming may not be enrolled or participate in the
            Miccosukee One program without written documentation that such
            status has been rescinded.
          </span>
        </Collapse>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, dining: !mrg.dining })}
          style={sectionHeaderStyle}
        >
          Dining &amp; Nightlife
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
          Accommodations
        </h4>
        <Collapse in={mrg.accommodations}>{renderAccommodations()}</Collapse>
      </div>
      <div style={sectionStyle}>
        <h4
          onClick={() => setMrg({ ...mrg, amenities: !mrg.amenities })}
          style={sectionHeaderStyle}
        >
          Amenities
        </h4>
        <Collapse in={mrg.amenities}>{renderAmenities()}</Collapse>
      </div>
    </div>
  );
};

export default MrgCovidInfo;
