import React, { useEffect, useState, useContext } from "react";
import classNames from "classnames";

// material-ui core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Checkbox from "@material-ui/core/Checkbox";

// @material-ui/icons
import Check from "@material-ui/icons/Check";

// Custom Components
import checkboxStyles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

// My Custom Components
import CustomInput from "components/Footer/Components/CustomTextField.js";

// Custom Functions
import { signupFunction } from "services/signupFucntion.js";

// Context
import { SignupFormContext } from "contexts/SignupFormContext.js";
import { interests } from "contexts/SignupFormContext.js";
import { AlertContext, signupAlertId } from "contexts/AlertContext.js";

// validate as you type, snackbar, mailchimp api
const useCheckboxStyles = makeStyles(checkboxStyles);

export default function SignUpForm(props) {
  const [formValues, setFormValues] = useContext(SignupFormContext);
  const [alerts, setAlerts] = useContext(AlertContext);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);

  const checkboxClasses = useCheckboxStyles();
  const wrapperDiv = classNames(
    checkboxClasses.checkboxAndRadio,
    checkboxClasses.checkboxAndRadioHorizontal
  );

  // Sets snackbar to close on component mount
  useEffect(() => {
    setAlerts({ ...alerts, [signupAlertId]: false });
  }, []);

  const handleCheckedChange = (e) => {
    setFormValues({
      ...formValues,
      checkboxValues: {
        ...formValues.checkboxValues,
        [e.target.name]: e.target.checked,
      },
    });
  };

  // Reset input and checkbox values to default
  const resetState = () => {
    console.log("reset state here. input and checkboxes.");
    setFormValues({
      ...formValues,
      inputValues: {
        name: "",
        email: "",
      },
    });
  };

  //On submit, gets checked values, organizes data to send, callback function after data is sent.
  const submit = (e) => {
    e.preventDefault();

    setLoading(true);
    const checkedValuesFunction = () => {
      // map over interest array and push checked values to new array
      let checkedValues = [];
      interests.map((interest) => {
        if (formValues.checkboxValues[interest.name] === true) {
          checkedValues.push(interest);
        }
      });
      return checkedValues;
    };

    // combine checked values and input values into one array and send to service
    let allValues = {};
    const buildValuesObj = () => {
      allValues.formInputValues = {
        name: formValues.inputValues.name,
        email: formValues.inputValues.email,
      };
      allValues.formCheckedValues = {};
      checkedValuesFunction().forEach((checkedItem) => {
        allValues.formCheckedValues[checkedItem.id] = true;
      });
    };
    buildValuesObj();

    // callback function after values have been successfully uploaded
    const uploaded = () => {
      console.log("yooooo i finally understand after 10 years...");
      setLoading(false);
      resetState();
      props.closeModal();
      //then open snackbar.
      //SET THE ALERT OF THE SNACKBAR AND PASS THE ID OF THE SNACKBAR FROM FOOTER
      setAlerts({ ...alerts, [signupAlertId]: true });
    };

    // send allvalues array to backend service function along with callback function.
    signupFunction(allValues, uploaded);
  };

  const renderCheckboxSection = () => {
    const renderCheckboxes = () => {
      return interests.map((interest) => {
        return (
          <div
            key={interest.id}
            style={{
              paddingBottom: "12px",
            }}
            className={wrapperDiv}
          >
            <FormControlLabel
              control={
                <Checkbox
                  name={interest.name}
                  color="primary"
                  onChange={handleCheckedChange}
                  checked={formValues.checkboxValues[interest.name] || false}
                  checkedIcon={
                    <Check className={checkboxClasses.checkedIcon} />
                  }
                  icon={<Check className={checkboxClasses.uncheckedIcon} />}
                  classes={{
                    checked: checkboxClasses.checked,
                  }}
                  id={interest.id}
                />
              }
              classes={{
                label: checkboxClasses.label,
              }}
              label={interest.name}
            />
          </div>
        );
      });
    };
    return <div style={{ marginLeft: "10px" }}>{renderCheckboxes()}</div>;
  };

  const renderFullForm = () => {
    return (
      <div style={{ paddingTop: "15px" }}>
        <CustomInput
          error={nameError}
          name="name"
          id="name"
          label={nameError ? "Error" : "Name"}
          fullWidth={true}
        />
        <CustomInput
          error={false}
          name="email"
          id="email"
          label={false ? "Error" : "Email"}
          fullWidth={true}
        />
        <div
          style={{
            paddingTop: "30px",
          }}
        >
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "300",
            }}
          >
            Confirm Your Interests:
          </Typography>
        </div>
        {renderCheckboxSection()}
      </div>
    );
  };

  return (
    <React.Fragment>
      <form>
        {props.isDesktop ? renderCheckboxSection() : renderFullForm()}
        <div
          style={{
            position: "relative",
          }}
        >
          <Button
            disabled={loading}
            style={{
              margin: "15px 0 0 0",
            }}
            fullWidth
            onClick={submit}
            usetheme="true"
          >
            {props.isDesktop ? "Done" : "Subscribe"}
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
    </React.Fragment>
  );
}
