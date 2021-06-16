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
import CustomInput from "components/CustomForms/Contact/ContactInput.js";

// Custom Functions
import { signupFunction } from "services/signupFucntion.js";
import { contactFunction } from "services/contact/contactFunction.js";

// Context
import { ContactFormContext } from "contexts/ContactFormContext.js";
import { interests } from "contexts/SignupFormContext.js";
import { AlertContext, contactAlertId } from "contexts/AlertContext.js";

// Custom functions
import { inputErrorsExistContact } from "services/validateInput.js";
import { contactOptions } from "services/contact/contactOptions.js";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage";
import { getOptions } from "services/contact/contactOptions";

const Contact = (props) => {
  const [formValues, setFormValues] = useContext(ContactFormContext);
  const [alerts, setAlerts] = useContext(AlertContext);
  const [loading, setLoading] = useState(false);

  const resetState = () => {
    setFormValues({
      inputValues: {
        name: "",
        email: "",
        phone: "",
        select: "",
        message: "",
      },
    });
  };

  // Sets snackbar to close on component mount
  useEffect(() => {
    setAlerts({ ...alerts, [contactAlertId]: false });
    resetState();
  }, []);

  const submit = (e) => {
    e.preventDefault();

    setLoading(true);

    // callback function after values have been successfully uploaded
    const uploaded = () => {
      setLoading(false);
      resetState();
      props.closeModal();
      // Set state of the snackbar and pass the id to create a unique snackbar state - this allows for multiple snackbars handled independently
      setAlerts({ ...alerts, [contactAlertId]: true });
    };

    // send allvalues array to backend service function along with callback function.
    contactFunction(formValues.inputValues, uploaded);
  };

  const renderFullForm = () => {
    return (
      <div style={{ paddingTop: "15px" }}>
        <CustomInput
          name="name"
          id="name"
          label={props.language ? "Name" : "Nombre"}
          fullWidth={true}
        />
        <CustomInput
          name="phone"
          id="phone"
          label={props.language ? "Phone" : "Teléfono"}
          fullWidth={true}
        />
        <CustomInput
          name="email"
          id="email"
          label={props.language ? "Email" : "Correo Electrónico"}
          fullWidth={true}
        />
        <CustomInput
          name="select"
          id="select"
          label={
            props.selectLabel
              ? props.selectLabel
              : props.language
              ? "Select option"
              : "Seleccione una opción"
          }
          options={getOptions(props.entity)}
          fullWidth={true}
        />
        <CustomInput
          name="message"
          id="message"
          label={props.language ? "Message" : "Mensaje"}
          fullWidth={true}
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      <form>
        {renderFullForm()}
        <div
          style={{
            position: "relative",
          }}
        >
          <Button
            disabled={
              inputErrorsExistContact(
                formValues.inputValues.nameError,
                formValues.inputValues.emailError,
                formValues.inputValues.phoneError,
                formValues.inputValues.selectError,
                formValues.inputValues.messageError
              ) || loading
            }
            style={{
              margin: "15px 0 0 0",
            }}
            fullWidth
            onClick={submit}
            usetheme="contained"
          >
            {props.language ? "Send Message" : "Envíe Mensaje "}
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
      </form>
    </React.Fragment>
  );
};

export default Contact;
