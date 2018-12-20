import "./styles/app.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { StationsProvider } from "./contexts/StationsContext";
import { CurrentPositionProvider } from "./contexts/CurrentPositionContext";
import { DeviceOrientationProvider } from "./contexts/DeviceOrientationContext";

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
