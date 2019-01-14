import "./styles/app.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { StationsProvider } from "./contexts/StationsContext";
import { CurrentPositionProvider } from "./contexts/CurrentPositionContext";
import { DeviceOrientationProvider } from "./contexts/DeviceOrientationContext";
import { compose } from "./util";

const Provider = compose([
    StationsProvider,
    CurrentPositionProvider,
    DeviceOrientationProvider,
]);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById("root"),
);
