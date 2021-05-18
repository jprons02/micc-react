import React, { useState, useEffect } from "react";
import { Link, withRouter, useRouteMatch } from "react-router-dom";

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

// Custom Functions
import { setEstTime } from "services/setEstTime.js";
import { urlify } from "services/urlify.js";

// Covid content
import MrgCovidInfo from "assets/business_info/covid-19/mrgCovidInfo.js";
import GolfCovidInfo from "assets/business_info/covid-19/golfCovidInfo.js";
import AirboatsCovidInfo from "assets/business_info/covid-19/airboatsCovidInfo.js";
import VillageCovidInfo from "assets/business_info/covid-19/villageCovidInfo.js";

// Colors
import { standardLinkColor, errorColor } from "themes/colors.js";

const businessContent = [
  {
    category: "Resort & Gaming",
    component: <MrgCovidInfo />,
  },
  {
    category: "Golf",
    component: <GolfCovidInfo />,
  },
  {
    category: "Village",
    component: <VillageCovidInfo />,
  },
  {
    category: "Airboats",
    component: <AirboatsCovidInfo />,
  },
];

const useStyles = makeStyles(styles);

const InfoPage = ({ history, badgeColor, entityMargin }) => {
  const classes = useStyles();

  const [category, setCategory] = useState("all");

  let match = useRouteMatch();

  useEffect(() => {
    // Set the default category depending on url.
    // ex) if url === mrg/events, category default is "Resort & Gaming"
    switch (history.location.pathname) {
      case "/mrg/covid-19":
        setCategory("Resort & Gaming");
        break;
      case "/golf/covid-19":
        setCategory("Golf");
        break;
      case "/village/covid-19":
        setCategory("Village");
        break;
      case "/airboats/covid-19":
        setCategory("Airboats");
        break;
    }
  }, []);

  const renderContentBody = () => {
    return businessContent.map((business) => {
      const isCategory = (business) => {
        if (business.category === category) {
          return true;
        } else {
          return false;
        }
      };

      if (isCategory(business)) {
        return <div key={business.category}>{business.component}</div>;
      }
    });
  };

  const handleBadgeClick = (category) => {
    setCategory(category);
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
        {businessContent.map((business) => {
          return (
            <Badge
              key={business.category}
              margin="2px"
              styleProp={
                business.category === category ? selectedStyle : defaultStyle
              }
              color="danger"
              onClick={() => handleBadgeClick(business.category)}
            >
              {business.category}
            </Badge>
          );
        })}
      </div>
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
          <div>{renderContentBody()}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(InfoPage);

/*
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
*/
