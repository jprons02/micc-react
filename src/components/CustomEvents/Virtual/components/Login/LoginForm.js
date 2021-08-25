import React, { useEffect, useState, useContext } from "react";

import { standardLinkColor } from "themes/colors.js";

// material-ui core components
import Button from "components/CustomButtons/Button.js";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiButton from "@material-ui/core/Button";

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
    setSubmitErrorMessage(false);
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    // callback function after values have been successfully uploaded
    const uploaded = (value) => {
      setLoading(false);
      resetState();

      // If value === true, this means user entered in a valid email and is now logged in.
      if (value === "purchased") {
        // Set state of the snackbar and pass the id to create a unique snackbar state - this allows for multiple snackbars handled independently
        setAlerts({ ...alerts, [virtualEventLoginId]: true });
        props.closeModal();
        setSubmitErrorMessage(false);
        props.setLoginStatus("purchased");
      } else if (value === "free") {
        // Set state of the snackbar and pass the id to create a unique snackbar state - this allows for multiple snackbars handled independently
        setAlerts({ ...alerts, [virtualEventLoginId]: true });
        props.closeModal();
        setSubmitErrorMessage(false);
        props.setLoginStatus("free");
      } else {
        setSubmitErrorMessage(true);
      }
    };

    // Send input values to backend service function along with callback function.
    virtualEventLoginFunction(
      props.eventbriteID,
      inputValues.inputValues.email,
      uploaded
    );
  };

  const renderForm = () => {
    return (
      <div style={{ paddingTop: "15px" }}>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: "300",
          }}
        >
          Please login with your Eventbrite registered email:
        </Typography>
        <CustomInput name="email" id="email" label={"Email"} fullWidth={true} />
      </div>
    );
  };

  const renderSubmitErrorMessage = () => {
    return (
      <div style={{ marginTop: "15px" }}>
        <Typography style={{ color: errorColor }}>
          Email is incorrect. Please use the same email used to register on
          Eventbrite.
        </Typography>
      </div>
    );
  };

  return (
    <React.Fragment>
      <form onSubmit={submit}>
        {renderForm()}
        <div>
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
              usetheme="contained"
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
          </div>

          {submitErrorMessage ? renderSubmitErrorMessage() : ""}
        </div>
      </form>
    </React.Fragment>
  );
}
