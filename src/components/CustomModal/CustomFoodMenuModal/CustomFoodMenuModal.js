import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import Close from '@material-ui/icons/Close';

// core components
import style from 'assets/jss/material-kit-react/foodMenuModalStyle.js';

// custom components
import CustomFoodMenu from 'components/CustomFoodMenu/CustomFoodMenu.js';

const useStyles = makeStyles(style);

const CustomFoodMenuModal = (props) => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      open={props.showModal}
      keepMounted
      onClose={props.closeModal}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
        style={{ width: '100%' }}
      >
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.closeModal}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        <h3 style={{ marginBottom: '20px' }}>{props.title}</h3>
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: '0px',
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <CustomFoodMenu
          menu={props.menu}
          title={props.title ? props.title : null}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CustomFoodMenuModal;
