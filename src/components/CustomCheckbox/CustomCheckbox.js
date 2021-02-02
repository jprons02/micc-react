import React from "react";
import classNames from "classnames";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

import { signupFunction } from "services/signupFucntion.js";

const useStyles = makeStyles(styles);

export default function CheckboxRadioSwitch(props) {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();
  const wrapperDiv = classNames(
    classes.checkboxAndRadio,
    classes.checkboxAndRadioHorizontal
  );

  // default the checkmarks here...
  React.useEffect(() => {
    setChecked(props.defaultCheck);
  }, []);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
    signupFunction(props.keyProp);
  };

  return (
    <div style={{ paddingBottom: "12px" }} className={wrapperDiv}>
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            onChange={(event) => handleCheck(event)}
            checked={checked}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
            }}
          />
        }
        classes={{
          label: classes.label,
        }}
        label={props.label}
      />
    </div>
  );
}
