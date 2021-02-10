/*eslint-disable*/
import React, { useState } from "react";

// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// CSS
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

// My Custom Components
import FooterExpansionPanel from "components/CustomExpansionPanel/FooterExpansionPanel.js";
import FooterMockExpansionPanel from "components/CustomExpansionPanel/FooterMockExpansionPanel.js";
import CustomFooterModal from "components/CustomModal/CustomFooterModals/CustomFooterModal.js";

const useStyles = makeStyles(styles);

const MobileFooter = (props) => {
  const classes = useStyles();

  const renderListItems = () => {
    return props.footerMenuItems.map((section) => {
      if (section.action === true) {
        return (
          <ListItem key={section.headerMobile} style={{ padding: "0px" }}>
            <FooterMockExpansionPanel
              header={section.headerMobile}
              handleClick={props.handleMobileSubscribeClick}
            />
          </ListItem>
        );
      } else {
        return (
          <ListItem key={section.header} style={{ padding: "0px" }}>
            <FooterExpansionPanel
              header={section.header}
              subMenu={section.subMenu}
            />
          </ListItem>
        );
      }
    });
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <List className={classes.list}>{renderListItems()}</List>
      <CustomFooterModal
        isDesktop={false}
        modal={props.modal}
        closeModal={props.closeModal}
        entity={props.entity}
      />
    </div>
  );
};

export default MobileFooter;
