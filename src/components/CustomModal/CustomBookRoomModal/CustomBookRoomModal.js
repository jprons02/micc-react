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
import modalStyle from 'assets/jss/material-kit-react/virtualLoginModal.js';
// @material-ui/icons
import Typography from '@material-ui/core/Typography';

// My custom components
import BookRoomForm from 'components/CustomForms/BookRoom/BookRoom.js';

// Context
import { useLanguage } from 'contexts/languageContext';

const useStyles = makeStyles(modalStyle);

const BookRoomModal = (props) => {
  const language = useLanguage();
  const classes = useStyles();

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
        <div style={{ margin: '10px 0' }}>
          <Typography variant="h5" component="h2">
            {language ? 'Book A Room' : 'Reservar Una Habitación'}{' '}
          </Typography>
          <p>
            {language ? 'Having Trouble? Call ' : '¿Necesita ayuda? Llame al '}
            305-925-2555
          </p>
        </div>
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: '0px',
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <BookRoomForm />
      </DialogContent>
    </Dialog>
  );
};

export default BookRoomModal;
