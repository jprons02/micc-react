import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import { events } from "assets/event/EventData/eventList.js";
import { Link } from "react-router-dom";
import { urlify } from "services/urlify.js";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Core components
import Button from "components/CustomButtons/Button.js";

// Styles
import styles from "assets/jss/material-kit-react/views/miccosukee/components/customRaisedContainerStyle.js";

const useStyles = makeStyles(styles);

const EventPage = ({ entityMargin }) => {
  const [event, setEvent] = useState({});

  const classes = useStyles();

  let match = useRouteMatch();

  // Fetch event that matches url and set as state
  useEffect(() => {
    const matchedEvent = events.find((event) => {
      const eventUrl = `${urlify(event.title)}${event.startDate
        .split("/")
        .join("")}`;

      return eventUrl === match.params.eventId;
    });

    setEvent(matchedEvent);
  }, []);

  const eventDate =
    event.startDate === event.endDate
      ? event.endDate
      : `${event.startDate} - ${event.endDate}`;

  const renderFullDescription = () => {
    if (event.fullDescription) {
      return event.fullDescription.map((content) => {
        return <p key={content}>{content}</p>;
      });
    } else {
      return "Loading...";
    }
  };

  const renderButtons = () => {
    if (event.buttons) {
      return event.buttons.map((item) => {
        return (
          <Button
            key={item.name}
            style={{ marginRight: "5px" }}
            href={item.href}
            target={item.target}
          >
            {item.name}
          </Button>
        );
      });
    } else {
      return "Loading...";
    }
  };

  return (
    <div
      style={entityMargin ? { marginBottom: "20px" } : { margin: "20px 0px" }}
      className={classNames(classes.main, classes.mainRaised)}
    >
      <div>
        <div className={classes.container} style={{ padding: "15px" }}>
          <h3>{event.title}</h3>
          <p>
            <span style={{ fontWeight: "400" }}>Date: </span>
            {eventDate}
          </p>
          <p>
            <span style={{ fontWeight: "400" }}>Time: </span>
            {`${event.startTime} - ${event.endTime}`}
          </p>
          <div style={{ marginTop: "25px" }}>{renderFullDescription()}</div>
          <div style={{ marginTop: "20px" }}>{renderButtons()}</div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
