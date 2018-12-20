import "./styles/app.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { StationsProvider } from "./context/StationsContext";
import { CurrentPositionProvider } from "./context/CurrentPositionContext";
import { DeviceOrientationProvider } from "./context/DeviceOrientationContext";

ReactDOM.render(
    <StationsProvider>
        <CurrentPositionProvider>
            <DeviceOrientationProvider>
                <App />,
            </DeviceOrientationProvider>
        </CurrentPositionProvider>
    </StationsProvider>,
    document.getElementById("root"),
);
