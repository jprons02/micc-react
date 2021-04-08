import React, { useEffect, useState, useContext } from "react";
import classNames from "classnames";

// material-ui core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

// My Custom Colors
import { errorColor } from "themes/colors.js";

// My Custom Components
import CustomInput from "components/CustomEvents/Virtual/components/CustomTextField";

// Custom Functions
import { virtualEventLoginFunction } from "services/virtualEventLoginFunction.js";

// Context
import { VirtualEventLoginFormContext } from "contexts/VirtualEventLoginFormContext.js";
import { AlertContext, virtualEventLoginId } from "contexts/AlertContext.js";

// Custom functions
import { inputErrorsExistVirtualEvent } from "services/validateInput.js";

export default function LoginForm(props) {
  const [inputValues, setInputValues] = useContext(
    VirtualEventLoginFormContext
  );
  const [alerts, setAlerts] = useContext(AlertContext);
  const [loading, setLoading] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState(false);

  // Sets snackbar to close on component mount
  useEffect(() => {
    setAlerts({
      ...alerts,
      [virtualEventLoginId]: false,
    });
  }, []);

  const resetState = () => {
    setInputValues({
      ...inputValues,
      inputValues: {
        email: "",
      },
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    // callback function after values have been successfully uploaded
    const uploaded = (value) => {
      setLoading(false);

      // If value === true, this means user entered in a valid email and is now logged in.
      if (value) {
        // Set state of the snackbar and pass the id to create a unique snackbar state - this allows for multiple snackbars handled independently
        setAlerts({ ...alerts, [virtualEventLoginId]: true });
        props.closeModal();
        resetState();
      } else {
        setSubmitErrorMessage(true);
      }
      props.setLoginStatus(value);
    };

    // Send input values to backend service function along with callback function.
    virtualEventLoginFunction(inputValues.inputValues.email, uploaded);
  };

  const renderForm = () => {
    return (
      <div style={{ paddingTop: "15px" }}>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "300",
            marginBottom: "10px",
          }}
        >
          Enter in your email:
        </Typography>
        <CustomInput name="email" id="email" label={"Email"} fullWidth={true} />
      </div>
    );
  };

  const renderSubmitErrorMessage = () => {
    return (
      <div style={{ marginTop: "15px" }}>
        <Typography style={{ color: errorColor }}>
          Email is incorrect. Please use the same email used to purchase the
          tickets from Eventbrite.
        </Typography>
      </div>
    );
  };

  return (
    <React.Fragment>
      <form onSubmit={submit}>
        {renderForm()}
        <div
          style={{
            position: "relative",
          }}
        >
          <Button
            type="submit"
            disabled={
              inputErrorsExistVirtualEvent(
                inputValues.inputValues.emailError
              ) || loading
            }
            style={{
              margin: "15px 0 0 0",
            }}
            fullWidth
            usetheme="true"
          >
            Log In
          </Button>
          {loading && (
            <CircularProgress
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-5px",
                marginLeft: "-12px",
              }}
              size={24}
              color="primary"
            />
          )}
          {submitErrorMessage ? renderSubmitErrorMessage() : null}
        </div>
      </form>
    </React.Fragment>
  );
}
