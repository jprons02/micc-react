import React, { useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

// Context
import { SignupFormContext } from "contexts/SignupFormContext.js";

// Custom functions
import { validateInput } from "services/functions/validateInput.js";

const CustomTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "white",
    },
  },
})(TextField);

const CustomInput = (props) => {
  const [formValues, setFormValues] = useContext(SignupFormContext);

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
    />
  );
};

export default CustomInput;
