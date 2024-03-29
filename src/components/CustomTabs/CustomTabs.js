import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/components/customTabsStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  const {
    headerColor,
    plainTabs,
    tabs,
    title,
    rtlActive,
    variant,
    cardBodyStyle,
    customprimarycolor,
  } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive,
  });

  // needed to change header color of card with tabs dynamically.
  const renderCustomCard = () => {
    if (customprimarycolor) {
      return (
        <Card plain={plainTabs}>
          <CardHeader customprimarycolor={customprimarycolor} plain={plainTabs}>
            {title !== undefined ? (
              <div className={cardTitle}>{title}</div>
            ) : null}
            <Tabs
              orientation={props.orientation ? props.orientation : "horizontal"}
              value={value}
              variant={variant}
              onChange={handleChange}
              classes={{
                root: classes.tabsRoot,
                indicator: classes.displayNone,
              }}
            >
              {tabs.map((prop, key) => {
                var icon = {};
                if (prop.tabIcon) {
                  icon = {
                    icon:
                      typeof prop.tabIcon === "string" ? (
                        <Icon>{prop.tabIcon}</Icon>
                      ) : (
                        <prop.tabIcon />
                      ),
                  };
                }
                return (
                  <Tab
                    classes={{
                      root: classes.tabRootButton,
                      label: classes.tabLabel,
                      selected: classes.tabSelected,
                      wrapper: classes.tabWrapper,
                    }}
                    key={key}
                    label={prop.tabName}
                    {...icon}
                  />
                );
              })}
            </Tabs>
          </CardHeader>
          <CardBody customStyle={cardBodyStyle}>
            {tabs.map((prop, key) => {
              if (key === value) {
                return <div key={key}>{prop.tabContent}</div>;
              }
              return null;
            })}
          </CardBody>
        </Card>
      );
    }
  };

  const renderMaterialKitCard = () => {
    return (
      <Card plain={plainTabs}>
        <CardHeader color={headerColor} plain={plainTabs}>
          {title !== undefined ? (
            <div className={cardTitle}>{title}</div>
          ) : null}
          <Tabs
            orientation={props.orientation ? props.orientation : "horizontal"}
            value={value}
            variant={variant}
            onChange={handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.displayNone,
            }}
          >
            {tabs.map((prop, key) => {
              var icon = {};
              if (prop.tabIcon) {
                icon = {
                  icon:
                    typeof prop.tabIcon === "string" ? (
                      <Icon>{prop.tabIcon}</Icon>
                    ) : (
                      <prop.tabIcon />
                    ),
                };
              }
              return (
                <Tab
                  classes={{
                    root: classes.tabRootButton,
                    label: classes.tabLabel,
                    selected: classes.tabSelected,
                    wrapper: classes.tabWrapper,
                  }}
                  key={key}
                  label={prop.tabName}
                  {...icon}
                />
              );
            })}
          </Tabs>
        </CardHeader>
        <CardBody customStyle={cardBodyStyle}>
          {tabs.map((prop, key) => {
            if (key === value) {
              return <div key={key}>{prop.tabContent}</div>;
            }
            return null;
          })}
        </CardBody>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {customprimarycolor ? renderCustomCard() : renderMaterialKitCard()}
    </React.Fragment>
  );
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
};

/*
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/components/customTabsStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  const {
    headerColor,
    plainTabs,
    tabs,
    title,
    rtlActive,
    variant,
    cardBodyStyle,
  } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive,
  });

  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          orientation={props.orientation ? props.orientation : "horizontal"}
          value={value}
          variant={variant}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
          }}
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon:
                  typeof prop.tabIcon === "string" ? (
                    <Icon>{prop.tabIcon}</Icon>
                  ) : (
                    <prop.tabIcon />
                  ),
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  label: classes.tabLabel,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody customStyle={cardBodyStyle}>
        {tabs.map((prop, key) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
};
*/
