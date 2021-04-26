import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
// Styles
import styles from "assets/jss/material-kit-react/views/miccosukee/components/customRaisedContainerStyle.js";
import { events } from "assets/event/EventData/eventList.js";

// Custom Functions
import { setEstTime } from "services/setEstTime.js";
import { urlify } from "services/urlify.js";

const useStyles = makeStyles(styles);

const Events = ({ history }) => {
  const classes = useStyles();

  const handleClick = (url) => {
    history.push(url);
  };

  const d = setEstTime();
  const currentDateObj = new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const isUpcomming = (event) => {
    const split = event.endDate.split("/");
    const month = parseInt(split[0] - 1);
    const day = parseInt(split[1]);
    const year = parseInt(split[2]);

    const eventDateObj = new Date(year, month, day);

    console.log("current date: ", currentDateObj);
    console.log("event date: ", eventDateObj);

    if (currentDateObj <= eventDateObj) {
      return true;
    } else {
      return false;
    }
  };

  const renderTitle = (title, startDate, type, link) => {
    const url = `/events/${urlify(title)}${startDate.split("/").join("")}`;

    if (type === "standard") {
      return (
        <a onClick={() => handleClick(url)}>
          <h4 style={{ cursor: "pointer" }}>{title}</h4>
        </a>
      );
    }

    if (type === "virtual") {
      return <Link to={link}>{title}</Link>;
    }
  };

  const renderEvents = () => {
    return (
      <React.Fragment>
        <h3 style={{ marginBottom: "20px" }}>Upcomming Events</h3>
        {events.map((event) => {
          if (isUpcomming(event)) {
            return (
              <div style={{ marginBottom: "22px" }} key={event.title}>
                {renderTitle(
                  event.title,
                  event.startDate,
                  event.type,
                  event.link
                )}
                <h6>{`${event.startDate} - ${event.endDate}`}</h6>
                <h6>{`Admission: ${event.admission}`}</h6>
                <p>{event.excerpt}</p>
              </div>
            );
          }
        })}
        <Divider />
        <h3 style={{ marginBottom: "20px" }}>Past Events</h3>
        {events.map((event) => {
          const url = `/events/${urlify(event.title)}${event.startDate
            .split("/")
            .join("")}`;
          if (!isUpcomming(event)) {
            return (
              <div style={{ marginBottom: "22px" }} key={url}>
                {renderTitle(
                  event.title,
                  event.startDate,
                  event.type,
                  event.link
                )}
                <h6>{`${event.startDate} - ${event.endDate}`}</h6>
                <h6>{`Admission: ${event.admission}`}</h6>
                <p>{event.excerpt}</p>
              </div>
            );
          }
        })}
      </React.Fragment>
    );
  };

  return (
    <div
      style={{ marginTop: "20px", marginBottom: "20px" }}
      className={classNames(classes.main, classes.mainRaised)}
    >
      <div>
        <div className={classes.container} style={{ padding: "15px" }}>
          {renderEvents()}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Events);
