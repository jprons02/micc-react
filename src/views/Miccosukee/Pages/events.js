import React, { useState, useEffect } from "react";
import { Link, withRouter, useRouteMatch } from "react-router-dom";

import { eventbriteIDs } from "assets/event/EventData/eventbriteIDs";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

// Styles
import styles from "assets/jss/material-kit-react/views/miccosukee/components/customRaisedContainerStyle.js";
import { events } from "assets/event/EventData/eventList.js";

// Custom Components
import Badge from "components/Badge/Badge.js";

// @material-ui/icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// Core components
import Button from "components/CustomButtons/Button.js";

// Custom Functions
import { setEstTime } from "services/setEstTime.js";
import { urlify } from "services/urlify.js";

// Colors
import { standardLinkColor, errorColor } from "themes/colors.js";

// Context
import { useLanguage } from "contexts/languageContext";

// Services
import { prerenderService } from "services/prerenderService.js";

const useStyles = makeStyles(styles);

const Events = ({ history, badgeColor, entityMargin }) => {
  const language = useLanguage();
  const classes = useStyles();

  const [category, setCategory] = useState("All");
  const [defaultUpcommingText, setDefaultUpcommingText] = useState(false);

  let match = useRouteMatch();

  useEffect(() => {
    // Set the default category depending on url.
    // ex) if url === mrg/events, category default is "Resort & Gaming"
    switch (history.location.pathname) {
      case "/mrg/events":
        setCategory("Resort & Gaming");
        break;
      case "/golf/events":
        setCategory("Golf & Country Club");
        break;
    }
  }, []);

  // When category changes, insert default upcomming text if needed.
  useEffect(() => {
    const renderUpcommingDefault = () => {
      if (document.getElementById("upcomming")) {
        if (!document.getElementById("upcomming").innerText) {
          setDefaultUpcommingText(true);
        } else {
          setDefaultUpcommingText(false);
        }
      }
    };
    renderUpcommingDefault();
  }, [category]);

  // Eventbrite - create widget for each id
  useEffect(() => {
    events.map((event) => {
      if (event.buttons) {
        var exampleCallbackEvents = function () {
          console.log("Order complete!");
        };

        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: event.buttons[0].eventbrite.eventId,
          modal: true,
          modalTriggerElementId: `${event.buttons[0].eventbrite.modalTriggerElementId}events`,
          iframeContainerId: `eventbrite-widget-container-${event.buttons[0].eventbrite.eventId}`,
          //onOrderComplete: exampleCallbackEvents,
        });
      }
    });
  });

  const handleBadgeClick = (category) => {
    setCategory(category);
  };

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

    if (currentDateObj <= eventDateObj) {
      return true;
    } else {
      return false;
    }
  };

  const renderBadges = () => {
    const selectedStyle = {
      backgroundColor: badgeColor ? badgeColor : errorColor,
      color: "white",
      cursor: "pointer",
      margin: "2px",
    };
    const defaultStyle = {
      backgroundColor: "transparent",
      color: badgeColor ? badgeColor : errorColor,
      cursor: "pointer",
      margin: "2px",
    };

    return (
      <div style={{ marginTop: "20px" }}>
        <Badge
          styleProp={category === "All" ? selectedStyle : defaultStyle}
          color="info"
          onClick={() => handleBadgeClick("All")}
        >
          {language ? "ALL EVENTS" : "TODOS LOS EVENTOS"}
        </Badge>
        {events.map((event) => {
          if (event.category) {
            return (
              <Badge
                key={event.title}
                margin="2px"
                styleProp={
                  event.category === category ? selectedStyle : defaultStyle
                }
                color="danger"
                onClick={() => handleBadgeClick(event.category)}
              >
                {event.category}
              </Badge>
            );
          }
        })}
      </div>
    );
  };

  const renderTitle = (title, startDate, type, link) => {
    const url = `${match.path}/${urlify(title)}${startDate
      .split("/")
      .join("")}`;

    if (type === "standard") {
      return (
        <a onClick={() => handleClick(url)}>
          <h4
            style={{
              fontWeight: "400",
              cursor: "pointer",
              color: standardLinkColor.color,
            }}
          >
            {title}
          </h4>
        </a>
      );
    }

    if (type === "virtual") {
      return (
        <Link
          style={{ fontWeight: "400", color: standardLinkColor.color }}
          to={link}
        >
          {title}
        </Link>
      );
    }
  };

  const renderEvents = () => {
    //if not category... dont render.
    const isCategory = (event) => {
      if (category === "All" || event.category === category) {
        return true;
      } else {
        return false;
      }
    };

    const renderUpcommingEvents = () => {
      return events.map((event) => {
        if (isCategory(event)) {
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
                {event.buttons ? (
                  <Button
                    color="success"
                    id={`${event.buttons[0].eventbrite.modalTriggerElementId}events`}
                    type="button"
                    dataautomation="ticket-modal-btn"
                    datatrackinglabel="Tickets"
                    className={classes.button}
                    variant="contained"
                  >
                    REGISTER HERE
                  </Button>
                ) : null}
              </div>
            );
          }
        }
      });
    };

    const renderPastEvents = () => {
      return events.map((event) => {
        if (isCategory(event)) {
          if (!isUpcomming(event)) {
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
        }
      });
    };

    return (
      <React.Fragment>
        <h3 style={{ marginBottom: "20px" }}>
          {language
            ? category + " Upcoming Events"
            : category + " Próximos Eventos"}
        </h3>
        <div id="upcomming">{renderUpcommingEvents()}</div>
        {defaultUpcommingText ? (
          <p>
            {language
              ? "No upcoming events at this time"
              : "No hay eventos programados por el momento."}
          </p>
        ) : (
          ""
        )}
        <Divider />
        <h3 style={{ marginBottom: "20px" }}>
          {language ? "Past Events" : "Eventos Pasados"}
        </h3>
        <div id="past">{renderPastEvents()}</div>
      </React.Fragment>
    );
  };

  return (
    <div
      style={entityMargin ? { marginBottom: "20px" } : { margin: "20px 0px" }}
      className={classNames(classes.main, classes.mainRaised)}
    >
      <div>
        <div className={classes.container} style={{ padding: "15px" }}>
          {renderBadges()}
          <div>{renderEvents()}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Events);
