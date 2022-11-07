import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import Close from '@material-ui/icons/Close';

// style
import styles from 'assets/jss/material-kit-react/popupModalStyle.js';

const useStyles = makeStyles(styles);

const CustomSimpleDialog = (props) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      transitionDuration={{ enter: 600, exit: 200 }}
      open={props.isOpen}
      keepMounted
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <div style={{ position: 'relative' }}>
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={() => props.closeDialog(false)}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        <img src={props.dialogContent} width="100%" />
      </div>
    </Dialog>
  );
};

export default CustomSimpleDialog;
