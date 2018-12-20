import "./styles/app.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { CurrentPositionProvider } from "./context/CurrentPositionContext";
import { DeviceOrientationProvider } from "./context/DeviceOrientationContext";

ReactDOM.render(
    <CurrentPositionProvider>
        <DeviceOrientationProvider>
            <App />,
        </DeviceOrientationProvider>
    </CurrentPositionProvider>,
    document.getElementById("root"),
);
