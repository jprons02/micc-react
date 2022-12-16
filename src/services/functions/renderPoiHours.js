import React from 'react';

export const renderPoiHours = (hours, language, noH6) => {
  // Use all custom strings for hours, days, etc.
  if (hours.days) {
    if (hours.details() === 'CUSTOM') {
      return (
        <React.Fragment>
          <h6 style={{ color: 'red' }}>{hours.days(language)}</h6>
        </React.Fragment>
      );
    }
  }
  // If the function exists then continue, else, map through array
  else if (hours.days) {
    if (hours.days() === '') {
      return (
        <React.Fragment>
          <h6 style={{ color: 'red' }}>
            {language ? 'CLOSED' : 'CERRADO'}
            {hours.details() ? ': ' : ''}
            <span style={{ fontWeight: '400', textTransform: 'none' }}>
              {hours.details(language) ? `${hours.details(language)}` : ''}
            </span>
          </h6>
        </React.Fragment>
      );
    } else if (!noH6) {
      // noH6 means I do not want it in an h6 tag, <h6>.
      // Used in village hours case since village hours is not an array
      return (
        <React.Fragment>
          <h6 key={hours.days(language)}>
            {hours.days(language)}, {hours.open} – {hours.close} <br />
          </h6>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {hours.days(language)}, {hours.open} – {hours.close} <br />
        </React.Fragment>
      );
    }
  } else {
    return (
      <React.Fragment>
        {hours.map((item) => {
          if (item.daysClosed) {
            //return null;
            return (
              <h6 style={{ color: 'red' }} key={item.daysClosed(language)}>
                {language
                  ? `Closed${item.daysClosed(language) === '' ? '' : ': '}`
                  : `Cerrado${item.daysClosed(language) === '' ? '' : ': '}`}
                {item.daysClosed(language)}
              </h6>
            );
          }
          //null was needed to use the isRunning schedule function.
          else if (item.days(language) === null) {
            return null;
          } else if (item.days(language) === '') {
            return (
              <h6 style={{ color: 'red' }} key={item.days(language)}>
                {language ? 'CLOSED' : 'CERRADO'}
                {item.details(language) ? ': ' : ''}
                <span style={{ fontWeight: '400', textTransform: 'none' }}>
                  {item.details(language) ? `${item.details(language)}` : ''}
                </span>
              </h6>
            );
          } else if (item.open === item.close) {
            return (
              <h6 key={item.days(language)}>
                {item.days(language)}
                {language ? ', 24 Hours' : ', 24 Horas'} <br />
              </h6>
            );
          } else {
            return (
              <h6 key={item.days(language)}>
                {item.days(language)}, {item.open} – {item.close} <br />
              </h6>
            );
          }
        })}
      </React.Fragment>
    );
  }
};

export const renderPoiHoursSimple = (hours, language, liStyle) => {
  return (
    <React.Fragment>
      {hours.map((item) => {
        // if its a day that is open
        if (item.days) {
          if (item.open === item.close) {
            return (
              <li key={item.days(language)} style={liStyle}>
                {item.days(language)}
                {language ? ', 24 Hours' : ', 24 Horas'} <br />
              </li>
            );
          } else {
            return (
              <li key={item.days(language)} style={liStyle}>
                {item.days(language)}, {item.open} - {item.close} <br />
              </li>
            );
          }
          // days that are closed
        } else {
          return (
            <li key={item.daysClosed(language)} style={liStyle}>
              {language ? 'Closed: ' : 'Cerrado: '}
              {item.daysClosed(language)}
            </li>
          );
        }
      })}
    </React.Fragment>
  );
};
