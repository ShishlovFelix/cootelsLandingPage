import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
// todo remove ts-ignore
// @ts-ignore
import App from "./components/app/app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
