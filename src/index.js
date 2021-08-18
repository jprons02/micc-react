import React from "react";
import ReactDOM from "react-dom";
import { AlertProvider } from "contexts/AlertContext.js";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import "./fonts/Phosphate/phosphate-solid-02-webfont.ttf";

// my pages
import App from "./App.js";

ReactDOM.render(
  <AlertProvider>
    <App />
  </AlertProvider>,
  document.getElementById("root")
);
