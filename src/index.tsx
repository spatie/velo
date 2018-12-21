import "./styles/app.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { StationsProvider } from "./contexts/StationsContext";
import { CurrentPositionProvider } from "./contexts/CurrentPositionContext";
import { DeviceOrientationProvider } from "./contexts/DeviceOrientationContext";
import { compose } from "./util";

const ProvisionedApp = compose([
    StationsProvider,
    CurrentPositionProvider,
    DeviceOrientationProvider,
])(App);

ReactDOM.render(
    <ProvisionedApp />,
    document.getElementById("root"),
);
