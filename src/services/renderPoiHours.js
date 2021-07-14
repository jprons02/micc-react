import React from "react";

export const renderPoiHours = (hours, language) => {
  // If the function exists then continue, else, map through array
  if (hours.days) {
    if (hours.days() === "") {
      return (
        <React.Fragment>
          <h6>
            {language ? "CLOSED" : "CERRADO"}
            {hours.details() ? ": " : ""}
            <span style={{ fontWeight: "400", textTransform: "none" }}>
              {hours.details(language) ? `${hours.details(language)}` : ""}
            </span>
          </h6>
        </React.Fragment>
      );
    }
  } else {
    return (
      <React.Fragment>
        <h6>
          {hours.map((item) => {
            if (item.days(language) === "") {
              return (
                <React.Fragment key={item.days(language)}>
                  {language ? (
                    <span style={{ color: "red" }}>CLOSED</span>
                  ) : (
                    "CERRADO"
                  )}
                  {item.details(language) ? ": " : ""}
                  <span style={{ fontWeight: "400", textTransform: "none" }}>
                    {item.details(language) ? `${item.details(language)}` : ""}
                  </span>
                </React.Fragment>
              );
            } else if (item.open === item.close) {
              return (
                <React.Fragment key={item.days(language)}>
                  {item.days(language)}
                  {language ? ", 24 Hours" : ", 24 Horas"} <br />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={item.days(language)}>
                  {item.days(language)}, {item.open} – {item.close} <br />
                </React.Fragment>
              );
            }
          })}
        </h6>
      </React.Fragment>
    );
  }
};

/*
export const renderPoiHours = (hours, language) => {
  if (hours.days() === "") {
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
*/
