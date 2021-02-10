import React, { useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

// Context
import { SignupFormContext } from "contexts/SignupFormContext.js";

// Custom functions
import { validateInput } from "services/validateInput.js";

const CustomTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "white",
    },
  },
})(TextField);

const CustomInput = (props) => {
  const [formValues, setFormValues] = useContext(SignupFormContext);

  // Run validate function when inputValues state change
  useEffect(() => {
    console.log(props.name);

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
  }, [formValues.inputValues]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      inputValues: {
        ...formValues.inputValues,
        [props.name]: e.target.value,
      },
    });
  };

  return (
    <CustomTextField
      error={props.error || false}
      onChange={handleChange}
      name={props.name}
      id={props.id}
      label={props.label}
      value={formValues.inputValues[props.name]}
      style={props.style}
      fullWidth={props.fullWidth || false}
      variant="filled"
    />
  );
};

export default CustomInput;

/*
    <CustomTextField
      onChange={(e) => props.onInputChange(e, props.id)}
      id={props.id}
      label={props.label}
      value={props.value}
      style={{ margin: 8, marginLeft: "0px" }}
      fullWidth
      variant="filled"
    />
*/
