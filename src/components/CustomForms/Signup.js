import React, { useState, useEffect } from "react";
import classNames from "classnames";
//import CustomInput from "components/CustomInput/CustomInput.js";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import Button from "components/CustomButtons/Button.js";
import CustomDesktopModal from "components/CustomModal/CustomFooterModals/CustomDesktopModal.js";
import checkboxStyles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";
import { signupFunction } from "services/signupFucntion.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { List, ListItem, Hidden } from "@material-ui/core";

// My Custom Components
import CustomInput from "components/Footer/Components/CustomTextField.js";

// hold state, validate as you type, snackbar, mailchimp api
// redesign to incorporate interest checkboxes somehow.
const useCheckboxStyles = makeStyles(checkboxStyles);

// DefaultCheck gets passed down to CustomModal and then CustomCheckbox.
// We want different items checked on load depending on what website they are on.
const interests = [
  {
    id: "622e531a8a",
    name: "Resort",
    defaultCheck: ["mrg"],
  },
  {
    id: "27274b4401",
    name: "Dining",
    defaultCheck: ["mrg"],
  },
  {
    id: "dbc25da46d",
    name: "Gaming & Bingo",
    defaultCheck: ["mrg"],
  },
  {
    id: "ff47c19f4a",
    name: "Salon & Spa",
    defaultCheck: ["mrg"],
  },
  {
    id: "240666434a",
    name: "Events & Concerts",
    defaultCheck: ["mrg"],
  },
  {
    id: "d2b2e40974",
    name: "Indian Village & Airboats",
    defaultCheck: ["village"],
  },
  {
    id: "d9083b8593",
    name: "Golf & Country Club",
    defaultCheck: ["golf"],
  },
];

export default function SignUpForm(props) {
  //const [name, setName] = React.useState("");
  //const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [desktopModal, setDesktopModal] = React.useState(false);

  const defaultCheck = (arr) => {
    if (arr.find((element) => element === props.entity) !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  //console.log("Signup Form State: ", name, " ", email);

  const [checked, setChecked] = React.useState({
    checked0: defaultCheck(interests[0].defaultCheck),
    checked1: defaultCheck(interests[1].defaultCheck),
    checked2: defaultCheck(interests[2].defaultCheck),
    checked3: defaultCheck(interests[3].defaultCheck),
    checked4: defaultCheck(interests[4].defaultCheck),
    checked5: defaultCheck(interests[5].defaultCheck),
    checked6: defaultCheck(interests[6].defaultCheck),
  });
  const checkboxClasses = useCheckboxStyles();
  const wrapperDiv = classNames(
    checkboxClasses.checkboxAndRadio,
    checkboxClasses.checkboxAndRadioHorizontal
  );
  const closeDesktopModal = (props) => {
    setDesktopModal(false);
    console.log("close modal now!");
  };

  const onDesktopSubscribe = (e) => {
    e.preventDefault();
    setDesktopModal(true);
  };
  const onMobileSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);

    const checkedValuesFunction = () => {
      let checkedValues = [];

      if (checked.checked0 === true) {
        checkedValues.push(interests[0]);
      }
      if (checked.checked1 === true) {
        checkedValues.push(interests[1]);
      }
      if (checked.checked2 === true) {
        checkedValues.push(interests[2]);
      }
      if (checked.checked3 === true) {
        checkedValues.push(interests[3]);
      }
      if (checked.checked4 === true) {
        checkedValues.push(interests[4]);
      }
      if (checked.checked5 === true) {
        checkedValues.push(interests[5]);
      }
      if (checked.checked6 === true) {
        checkedValues.push(interests[6]);
      }
      return checkedValues;
    };

    let allValues = {};
    /*
    const buildValuesObj = () => {
      allValues.formInputValues = { name: name, email: email };
      allValues.formCheckedValues = {};
      checkedValuesFunction().forEach((checkedItem) => {
        allValues.formCheckedValues[checkedItem.id] = true;
      });
    };
    buildValuesObj();

    const uploaded = () => {
      console.log("yooooo i finally understand after 10 years...");
      setLoading(false);
      props.closeMobileModal();
      //then open snackbar.
    };

    signupFunction(allValues, uploaded);
  };
  */

    const handleChange = (event) => {
      setChecked({ ...checked, [event.target.name]: event.target.checked });
    };

    const renderCheckboxes = () => {
      return (
        <div style={{ marginLeft: "10px" }}>
          <div style={{ paddingBottom: "12px" }} className={wrapperDiv}>
            <FormControlLabel
              control={
                <Checkbox
                  name={"checked0"}
                  color="primary"
                  onChange={(event) => handleChange(event)}
                  checked={checked.checked0}
                  checkedIcon={
                    <Check className={checkboxClasses.checkedIcon} />
                  }
                  icon={<Check className={checkboxClasses.uncheckedIcon} />}
                  classes={{
                    checked: checkboxClasses.checked,
                  }}
                  id={interests[0].id}
                />
              }
              classes={{
                label: checkboxClasses.label,
              }}
              label={interests[0].name}
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
                  checkedIcon={
                    <Check className={checkboxClasses.checkedIcon} />
                  }
                  icon={<Check className={checkboxClasses.uncheckedIcon} />}
                  classes={{
                    checked: checkboxClasses.checked,
                  }}
                  id={interests[1].id}
                />
              }
              classes={{
                label: checkboxClasses.label,
              }}
              label={interests[1].name}
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
                  checkedIcon={
                    <Check className={checkboxClasses.checkedIcon} />
                  }
                  icon={<Check className={checkboxClasses.uncheckedIcon} />}
                  classes={{
                    checked: checkboxClasses.checked,
                  }}
                  id={interests[2].id}
                />
              }
              classes={{
                label: checkboxClasses.label,
              }}
              label={interests[2].name}
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
                  checkedIcon={
                    <Check className={checkboxClasses.checkedIcon} />
                  }
                  icon={<Check className={checkboxClasses.uncheckedIcon} />}
                  classes={{
                    checked: checkboxClasses.checked,
                  }}
                  id={interests[3].id}
                />
              }
              classes={{
                label: checkboxClasses.label,
              }}
              label={interests[3].name}
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
                  checkedIcon={
                    <Check className={checkboxClasses.checkedIcon} />
                  }
                  icon={<Check className={checkboxClasses.uncheckedIcon} />}
                  classes={{
                    checked: checkboxClasses.checked,
                  }}
                  id={interests[4].id}
                />
              }
              classes={{
                label: checkboxClasses.label,
              }}
              label={interests[4].name}
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
                  checkedIcon={
                    <Check className={checkboxClasses.checkedIcon} />
                  }
                  icon={<Check className={checkboxClasses.uncheckedIcon} />}
                  classes={{
                    checked: checkboxClasses.checked,
                  }}
                  id={interests[5].id}
                />
              }
              classes={{
                label: checkboxClasses.label,
              }}
              label={interests[5].name}
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
                  checkedIcon={
                    <Check className={checkboxClasses.checkedIcon} />
                  }
                  icon={<Check className={checkboxClasses.uncheckedIcon} />}
                  classes={{
                    checked: checkboxClasses.checked,
                  }}
                  id={interests[6].id}
                />
              }
              classes={{
                label: checkboxClasses.label,
              }}
              label={interests[6].name}
            />
          </div>
        </div>
      );
    };

    if (props.isDesktop) {
      return renderCheckboxes();
    } else {
      return <div>Mobile Test.</div>;
    }
  };
}

/*
Mobile Side
<form style={{ width: "85%", margin: "auto", paddingBottom: "36px" }}>
          <CustomInput
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            color={props.color}
          />
          <CustomInput
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color={props.color}
          />
          <div style={{ paddingTop: "30px" }}>
            <Typography style={{ fontSize: "18px" }} variant="body1">
              Confirm Your Interests:
            </Typography>
          </div>
          {renderCheckboxes()}
          <div style={{ position: "relative" }}>
            <Button
              disabled={loading}
              style={{ marginTop: "15px" }}
              fullWidth
              onClick={onMobileSubscribe}
              usetheme="true"
            >
              SUBSCRIBE
            </Button>
            {loading && (
              <CircularProgress
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-7px",
                  marginLeft: "-12px",
                }}
                size={24}
                color="primary"
              />
            )}
          </div>
        </form>
*/
