import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
const useStyles = makeStyles(styles);

export default function FooterMockExpansionPanel(props) {
  const classes = useStyles();

  return (
    <MuiExpansionPanel
      style={{ width: "100%" }}
      className={classes.expansionPanel}
      onClick={props.buttonClick}
      expanded={false}
      square={true}
    >
      <MuiExpansionPanelSummary
        expandIcon={
          <Icon className={classes.expansionPanelHeaderIcon}>
            chevron_right
          </Icon>
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.expansionPanelHeader}>
          {props.header}
        </Typography>
      </MuiExpansionPanelSummary>
    </MuiExpansionPanel>
  );
}
