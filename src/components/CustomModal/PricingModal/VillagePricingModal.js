import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

// core components
import style from "assets/jss/material-kit-react/pricingModalStyle.js";

// business info
import { villagePricing } from "business_info/admission.js";

const useStyles = makeStyles(style);

const PricingModal = (props) => {
  const classes = useStyles();

  const renderPricingTable = () => {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody style={{ backgroundColor: "#f7f7f7" }}>
            {villagePricing.map((row) => (
              <TableRow key={row.price}>
                <TableCell component="th" scope="row">
                  {row.title}{" "}
                  <span style={{ fontWeight: "300" }}>({row.detail})</span>
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
        style={{ width: "100%" }}
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
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: "0px",
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <div className={classes.priceSection}>
          <Typography paragraph className={classes.pricingTitle} component="h3">
            Miccosukee Village Admission
          </Typography>
          <p className={classes.detail}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div
            style={{
              padding: "20px 0px 30px 0",
              width: "450px",
              maxWidth: "100%",
            }}
          >
            {renderPricingTable()}
          </div>
          <Typography variant="body2" className={classes.disclaimer}>
            *Tickets must be purchased at Village front office
            <br />
            *No pets, no weapons
          </Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;

/*
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
        style={{ width: "100%" }}
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
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: "0px",
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <div className={classes.priceSection}>
          <Typography paragraph className={classes.pricingTitle} component="h3">
            Miccosukee Village Admission
          </Typography>
          <p className={classes.detail}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div style={{ padding: "15px 0", marginLeft: "15px" }}>
            <p className={classes.price}>Adult Admission (13+): $15.00</p>
            <p className={classes.price}>
              Child Admission (6&mdash;12): $15.00
            </p>
            <p className={classes.price}>
              Child Admission (5 &amp; under): Free
            </p>
          </div>
          <Typography variant="body2" className={classes.disclaimer}>
            *Tickets must be purchased at Village front office
            <br />
            *No pets, no weapons
          </Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
*/
