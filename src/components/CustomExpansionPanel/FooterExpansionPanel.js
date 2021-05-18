import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { List, ListItem, Hidden } from "@material-ui/core";

//testing
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
const useStyles = makeStyles(styles);

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();

  const renderSubMenuItems = () => {
    if (!props.subMenu) {
      return <ListItem>Item not available.</ListItem>;
    } else {
      return props.subMenu.map((item) => {
        const submenuHelper = () => {
          // if link is external, send user to another tab
          if (item.externalLink) {
            return (
              <a href={item.linkTo} target="_blank">
                <Typography className={classes.expansionPanelDetailText}>
                  {item.linkText}
                </Typography>
              </a>
            );
          }
          // if link is internal, send user to link
          if (item.linkTo) {
            return (
              <Link to={item.linkTo}>
                <Typography
                  onClick={item.clickFunction ? item.clickFunction : null}
                  className={classes.expansionPanelDetailText}
                >
                  {item.linkText}
                </Typography>
              </Link>
            );
            // if no linkto, then it is a click function. example) contact modal.
          } else {
            return (
              <Typography
                onClick={item.clickFunction ? item.clickFunction : null}
                className={classes.expansionPanelDetailText}
                style={{ cursor: "pointer" }}
              >
                {item.linkText}
              </Typography>
            );
          }
        };

        return <ListItem key={item.linkText}>{submenuHelper()}</ListItem>;
      });
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <MuiExpansionPanel className={classes.expansionPanel} square={true}>
        <MuiExpansionPanelSummary
          expandIcon={
            <ExpandMoreIcon className={classes.expansionPanelHeaderIcon} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.expansionPanelHeader}>
            {props.header}
          </Typography>
        </MuiExpansionPanelSummary>
        <MuiExpansionPanelDetails className={classes.expansionPanelDetail}>
          <List style={{ padding: "0px", marginTop: "-8px" }}>
            {renderSubMenuItems()}
          </List>
        </MuiExpansionPanelDetails>
      </MuiExpansionPanel>
    </div>
  );

  /*
  return (
    <div className={classes.root}>
      <ExpansionPanel square={true}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.header}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List style={{ padding: "0px", marginTop: "-8px" }}>
            {renderSubMenuItems()}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
  */
}
