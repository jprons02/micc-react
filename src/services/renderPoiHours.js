import React from "react";

export const renderPoiHours = (hours) => {
  if (hours.days === "") {
    return (
      <React.Fragment>
        <h6>
          CLOSED{hours.details ? ": " : ""}
          <span style={{ fontWeight: "400", textTransform: "none" }}>
            {hours.details ? `${hours.details}` : ""}
          </span>
        </h6>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h6>
          {hours.map((item) => {
            if (item.days === "") {
              return (
                <React.Fragment key={item.days}>
                  CLOSED{item.details ? ": " : ""}
                  <span style={{ fontWeight: "400", textTransform: "none" }}>
                    {item.details ? `${item.details}` : ""}
                  </span>
                </React.Fragment>
              );
            } else if (item.open === item.close) {
              return (
                <React.Fragment key={item.days}>
                  {item.days}, 24 Hours <br />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={item.days}>
                  {item.days}, {item.open} – {item.close} <br />
                </React.Fragment>
              );
            }
          })}
        </h6>
      </React.Fragment>
    );
  }
};
