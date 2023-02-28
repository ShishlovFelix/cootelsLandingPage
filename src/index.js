import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navBar/navBar";
import Nature from "./components/nature/nature";
import Cozy from "./components/cozy/cozy";
import Cabin from "./components/cabin/cabin";
import Many from "./components/many/many";
import How from "./components/how/how";
import Hear from "./components/hear/hear";
import Footer from "./components/footer/footer";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <NavBar />
    <Nature />
    <Cozy />
    <Cabin />
    <Many />
    <How />
    <Hear />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
