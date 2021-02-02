import React, { useState, useEffect } from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
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
import CustomModal from "components/CustomModal/CustomModal.js";

// hold state, validate as you type, snackbar, mailchimp api
// redesign to incorporate interest checkboxes somehow.

export default function SignUpForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [desktopModal, setDesktopModal] = React.useState(false);

  const onDesktopSubscribe = (e) => {
    e.preventDefault();
    console.log("clicked");
    setDesktopModal(true);
  };

  const closeDesktopModal = (props) => {
    setDesktopModal(false);
  };

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

  // props.color passed down from website specific footer (mrgFooter.js) > Footer.js > Signup.js
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

  if (props.formView === "desktop") {
    return (
      <div>
        <form style={{ width: "100%" }}>
          <CustomTextField
            id="name"
            label="Name"
            style={{ margin: 8, marginLeft: "0px" }}
            fullWidth
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomTextField
            id="email"
            label="Email"
            style={{ margin: 8, marginLeft: "0px" }}
            fullWidth
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            style={{ height: "53px", fontSize: "14px", fontWeight: "700" }}
            fullWidth
            onClick={onDesktopSubscribe}
            usetheme="true"
          >
            SUBSCRIBE
          </Button>
        </form>
        <CustomModal
          name={name}
          email={email}
          closeModal={closeDesktopModal}
          modal={desktopModal}
          interests={interests}
          entity={props.entity}
        />
      </div>
    );
  } else {
    return <div>MOBILE FORM HERE!</div>;
  }
}
