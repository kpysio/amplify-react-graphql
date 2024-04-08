import { Amplify } from "aws-amplify";
import config from "./aws-exports";

import { ThemeProvider } from "@mui/material";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
