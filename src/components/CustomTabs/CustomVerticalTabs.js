import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { spacing, children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          p={props.spacing ? props.spacing : 3}
          style={props.customboxstyle ? props.customboxstyle : {}}
        >
          <div style={{ minWidth: "300px", maxWidth: "380px" }}>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    //height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = () => {
    return props.tabContent.map((tab, iteration) => {
      return (
        <Tab key={tab.title} label={tab.title} {...a11yProps(iteration)} />
      );
    });
  };

  const renderTabPanel = () => {
    return props.tabContent.map((tab, iteration) => {
      return (
        <TabPanel
          spacing={props.boxSpacing}
          key={`${tab.title}Panel`}
          value={value}
          index={iteration}
          customboxstyle={props.customboxstyle ? props.customboxstyle : ""}
        >
          {tab.text()}
        </TabPanel>
      );
    });
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {renderTab()}
      </Tabs>
      {renderTabPanel()}
    </div>
  );
}
