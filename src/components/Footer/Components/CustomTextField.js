import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const CustomInput = (props) => {
  const CustomTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: props.color[500],
      },
      "& .MuiFilledInput-underline:after": {
        borderBottomColor: props.color[500],
      },
      "& .MuiFilledInput-root": {
        backgroundColor: "white",
      },
    },
  })(TextField);

  return (
    <CustomTextField
      onChange={(e) => props.onInputChange(e, props.id)}
      id={props.id}
      label={props.label}
      value={props.value}
      style={{ margin: 8, marginLeft: "0px" }}
      fullWidth
      variant="filled"
    />
  );
};

export default CustomInput;
