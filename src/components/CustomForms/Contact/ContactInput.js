import React, { useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

// Context
import { ContactFormContext } from "contexts/ContactFormContext.js";

// Custom functions
import { validateInput } from "services/validateInput.js";
//import { array } from "prop-types";

const CustomTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "white",
    },
  },
})(TextField);

const CustomInput = (props) => {
  const [formValues, setFormValues] = useContext(ContactFormContext);

  const renderSelectOptions = () => {
    if (props.options) {
      return props.options.map((option) => {
        return (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        );
      });
    }
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      inputValues: {
        ...formValues.inputValues,
        [props.name]: e.target.value,
        [`${props.name}Touched`]: true,
      },
    });
  };

  /*
Line 76:6:   React Hook useEffect has missing dependencies: 'formValues', 'props.name', and 'setFormValues'. 
Either include them or remove the dependency array  react-hooks/exhaustive-deps
  */

  // Only update error state when user inputs something.
  useEffect(() => {
    if (formValues.inputValues[`${props.name}Touched`]) {
      // Empty string OK for onchange function.. will handle empty string erors on submit buttons.
      if (
        validateInput(props.name, formValues.inputValues[props.name]) !== null
      ) {
        setFormValues({
          ...formValues,
          inputValues: {
            ...formValues.inputValues,
            [`${props.name}Error`]: validateInput(
              props.name,
              formValues.inputValues[props.name]
            ),
          },
        });
      }
      // If user enters in characters but then clears/deletes it, reset error state
      else {
        setFormValues({
          ...formValues,
          inputValues: {
            ...formValues.inputValues,
            [`${props.name}Error`]: false,
          },
        });
      }
    }
  }, [formValues.inputValues[props.name]]);

  // If the error state is false or undefined, then there is no error.
  const showError = () => {
    // if the value is false or doesnt exist
    if (
      formValues.inputValues[`${props.name}Error`] === false ||
      formValues.inputValues[`${props.name}Error`] === undefined
    ) {
      return {
        showError: false,
        errorMessage: "test",
      };
    } else {
      return {
        showError: true,
        errorMessage: formValues.inputValues[`${props.name}Error`],
      };
    }
  };

  return (
    <CustomTextField
      error={showError().showError}
      onChange={handleChange}
      name={props.name}
      id={props.id}
      label={showError().showError ? showError().errorMessage : props.label}
      value={formValues.inputValues[props.name]}
      style={props.style}
      fullWidth={props.fullWidth || false}
      variant="filled"
      multiline={props.id === "message" ? true : false}
      rowsMax={props.id === "message" ? 5 : 1}
      select={props.id === "select" ? true : false}
    >
      {props.id === "select" ? renderSelectOptions() : null}
    </CustomTextField>
  );
};

export default CustomInput;
