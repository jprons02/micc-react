import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogActions from "@material-ui/core/DialogActions";
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import Close from '@material-ui/icons/Close';
// core components
import modalStyle from 'assets/jss/material-kit-react/roomDetailsModal.js';
// @material-ui/icons
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.js';

// My custom components
import BookRoomForm from 'components/CustomForms/BookRoom/BookRoom.js';

// Context
import { useLanguage } from 'contexts/languageContext';

const useStyles = makeStyles(modalStyle);

const RoomDetailModal = (props) => {
  const language = useLanguage();
  const classes = useStyles();

  const imageSrc = props.selectedRoom.img ? props.selectedRoom.img.src : null;
  const imageAlt = props.selectedRoom.img ? props.selectedRoom.img.alt : null;

  const renderButton = () => {
    return (
      <Button
        target="_blank"
        href="https://direct-book.com/properties/miccosukeeresortgamingdirect?locale=en&checkInDate=2023-07-13&checkOutDate=2023-07-14&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&trackPage=no"
        usetheme="contained"
      >
        Check Rates
      </Button>
    );
  };

  return (
    <Dialog
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
      <div className={classes.contentSection}>
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
          <div style={{ margin: '10px 0 20px 0' }}>
            <Typography variant="h4" component="h1" className={classes.title}>
              {props.selectedRoom.title}
            </Typography>
          </div>
        </DialogTitle>
        <DialogContent
          style={{
            paddingTop: '0px',
          }}
          id="modal-slide-description"
          className={classes.modalBody}
        >
          <img alt={imageAlt} src={imageSrc} className={classes.imageStyle} />
          <div style={{ marginTop: '40px' }}>
            <h3 className={classes.subTitle}>Features</h3>
            {props.selectedRoom.features ? props.selectedRoom.features() : null}
          </div>
          <div style={{ marginTop: '30px' }}>
            <h3 className={classes.subTitle}>Details</h3>
            <p>{props.selectedRoom.body}</p>
            <div style={{ paddingBottom: '20px' }}>{renderButton()}</div>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default RoomDetailModal;
