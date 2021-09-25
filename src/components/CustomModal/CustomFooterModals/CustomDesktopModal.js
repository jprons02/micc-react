import React, { useState, useEffect } from "react";
import classNames from "classnames";
// material-ui components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
import CustomCheckBox from "components/CustomCheckbox/CustomCheckbox.js";

import modalStyle from "assets/jss/material-kit-react/modalStyle.js";
import checkboxStyles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import { signupFunction } from "services/functions/signupFucntion.js";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(modalStyle);
const useCheckboxStyles = makeStyles(checkboxStyles);

export default function Modal(props) {
  const classes = useStyles();
  //take control away from CustomChecked component. need to also record what is checked to send to api.
  // ****problem is there is only one state to checkmark...****
  // should make state for array to hold string id of whatever is checkmarked.
  const defaultCheck = (arr) => {
    if (arr.find((element) => element === props.entity) !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const [checked, setChecked] = React.useState({
    checked0: defaultCheck(props.interests[0].defaultCheck),
    checked1: defaultCheck(props.interests[1].defaultCheck),
    checked2: defaultCheck(props.interests[2].defaultCheck),
    checked3: defaultCheck(props.interests[3].defaultCheck),
    checked4: defaultCheck(props.interests[4].defaultCheck),
    checked5: defaultCheck(props.interests[5].defaultCheck),
    checked6: defaultCheck(props.interests[6].defaultCheck),
  });
  const [loading, setLoading] = React.useState(false);

  const checkboxClasses = useCheckboxStyles();
  const wrapperDiv = classNames(
    checkboxClasses.checkboxAndRadio,
    checkboxClasses.checkboxAndRadioHorizontal
  );

  // This works, gets interest object.
  const checkedValuesFunction = () => {
    let checkedValues = [];

    if (checked.checked0 === true) {
      checkedValues.push(props.interests[0]);
    }
    if (checked.checked1 === true) {
      checkedValues.push(props.interests[1]);
    }
    if (checked.checked2 === true) {
      checkedValues.push(props.interests[2]);
    }
    if (checked.checked3 === true) {
      checkedValues.push(props.interests[3]);
    }
    if (checked.checked4 === true) {
      checkedValues.push(props.interests[4]);
    }
    if (checked.checked5 === true) {
      checkedValues.push(props.interests[5]);
    }
    if (checked.checked6 === true) {
      checkedValues.push(props.interests[6]);
    }
    return checkedValues;
  };

  const onSubmit = () => {
    setLoading(true);
    let allValues = {};

    const buildValuesObj = () => {
      allValues.formInputValues = { name: props.name, email: props.email };
      allValues.formCheckedValues = {};
      checkedValuesFunction().forEach((checkedItem) => {
        allValues.formCheckedValues[checkedItem.id] = true;
      });
    };
    buildValuesObj();

    const uploaded = () => {
      setLoading(false);
      props.closeModal();
      //then open snackbar.
    };

    signupFunction(allValues, uploaded);
  };
  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const renderCheckboxes = () => {
    return (
      <div>
        <div style={{ paddingBottom: "12px" }} className={wrapperDiv}>
          <FormControlLabel
            control={
              <Checkbox
                name={"checked0"}
                color="primary"
                onChange={(event) => handleChange(event)}
                checked={checked.checked0}
                checkedIcon={<Check className={checkboxClasses.checkedIcon} />}
                icon={<Check className={checkboxClasses.uncheckedIcon} />}
                classes={{
                  checked: checkboxClasses.checked,
                }}
                id={props.interests[0].id}
              />
            }
            classes={{
              label: checkboxClasses.label,
            }}
            label={props.interests[0].name}
          />
        </div>
        <div style={{ paddingBottom: "12px" }} className={wrapperDiv}>
          <FormControlLabel
            control={
              <Checkbox
                name={"checked1"}
                color="primary"
                onChange={(event) => handleChange(event)}
                checked={checked.checked1}
                checkedIcon={<Check className={checkboxClasses.checkedIcon} />}
                icon={<Check className={checkboxClasses.uncheckedIcon} />}
                classes={{
                  checked: checkboxClasses.checked,
                }}
                id={props.interests[1].id}
              />
            }
            classes={{
              label: checkboxClasses.label,
            }}
            label={props.interests[1].name}
          />
        </div>
        <div style={{ paddingBottom: "12px" }} className={wrapperDiv}>
          <FormControlLabel
            control={
              <Checkbox
                name={"checked2"}
                color="primary"
                onChange={(event) => handleChange(event)}
                checked={checked.checked2}
                checkedIcon={<Check className={checkboxClasses.checkedIcon} />}
                icon={<Check className={checkboxClasses.uncheckedIcon} />}
                classes={{
                  checked: checkboxClasses.checked,
                }}
                id={props.interests[2].id}
              />
            }
            classes={{
              label: checkboxClasses.label,
            }}
            label={props.interests[2].name}
          />
        </div>
        <div style={{ paddingBottom: "12px" }} className={wrapperDiv}>
          <FormControlLabel
            control={
              <Checkbox
                name={"checked3"}
                color="primary"
                onChange={(event) => handleChange(event)}
                checked={checked.checked3}
                checkedIcon={<Check className={checkboxClasses.checkedIcon} />}
                icon={<Check className={checkboxClasses.uncheckedIcon} />}
                classes={{
                  checked: checkboxClasses.checked,
                }}
                id={props.interests[3].id}
              />
            }
            classes={{
              label: checkboxClasses.label,
            }}
            label={props.interests[3].name}
          />
        </div>
        <div style={{ paddingBottom: "12px" }} className={wrapperDiv}>
          <FormControlLabel
            control={
              <Checkbox
                name={"checked4"}
                color="primary"
                onChange={(event) => handleChange(event)}
                checked={checked.checked4}
                checkedIcon={<Check className={checkboxClasses.checkedIcon} />}
                icon={<Check className={checkboxClasses.uncheckedIcon} />}
                classes={{
                  checked: checkboxClasses.checked,
                }}
                id={props.interests[4].id}
              />
            }
            classes={{
              label: checkboxClasses.label,
            }}
            label={props.interests[4].name}
          />
        </div>
        <div style={{ paddingBottom: "12px" }} className={wrapperDiv}>
          <FormControlLabel
            control={
              <Checkbox
                name={"checked5"}
                color="primary"
                onChange={(event) => handleChange(event)}
                checked={checked.checked5}
                checkedIcon={<Check className={checkboxClasses.checkedIcon} />}
                icon={<Check className={checkboxClasses.uncheckedIcon} />}
                classes={{
                  checked: checkboxClasses.checked,
                }}
                id={props.interests[5].id}
              />
            }
            classes={{
              label: checkboxClasses.label,
            }}
            label={props.interests[5].name}
          />
        </div>
        <div style={{ paddingBottom: "12px" }} className={wrapperDiv}>
          <FormControlLabel
            control={
              <Checkbox
                name={"checked6"}
                color="primary"
                onChange={(event) => handleChange(event)}
                checked={checked.checked6}
                checkedIcon={<Check className={checkboxClasses.checkedIcon} />}
                icon={<Check className={checkboxClasses.uncheckedIcon} />}
                classes={{
                  checked: checkboxClasses.checked,
                }}
                id={props.interests[6].id}
              />
            }
            classes={{
              label: checkboxClasses.label,
            }}
            label={props.interests[6].name}
          />
        </div>
      </div>
    );
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      open={props.modal}
      keepMounted
      onClose={() => props.closeModal()}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
      >
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={() => props.closeModal()}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        <h3 className={classes.modalTitle}>Confirm your interests:</h3>
      </DialogTitle>
      <DialogContent id="modal-slide-description" className={classes.modalBody}>
        <div
          style={{
            marginTop: "-24px",
            paddingTop: "0",
            paddingLeft: "15px",
          }}
        >
          {renderCheckboxes()}
        </div>
        <div style={{ position: "relative" }}>
          <Button
            onClick={onSubmit}
            style={{
              width: "100%",
            }}
            usetheme="contained"
          >
            DONE
          </Button>
          {loading && (
            <CircularProgress
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
              size={24}
              color="primary"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
