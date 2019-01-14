import React, { createContext, Component } from "react";

const DeviceOrientationContext = createContext<number>(0);

export default DeviceOrientationContext;

type DeviceOrientationEvent = {
    alpha: number;
    webkitCompassHeading: number;
};

type State = {
    deviceOrientation: number;
}

export class DeviceOrientationProvider extends Component<{}, State> {
    state: State = {
        deviceOrientation: 0
    }

    handleDeviceOrientationChange = (event: any) => {
        const { webkitCompassHeading, alpha } = event as DeviceOrientationEvent;

        if (webkitCompassHeading) {
            this.setState(() => ({
                deviceOrientation: webkitCompassHeading
            }));
        } else if (alpha) {
            this.setState(() => ({
                deviceOrientation: alpha
            }));
        }
    };

    componentDidMount() {
        window.addEventListener("deviceorientation", this.handleDeviceOrientationChange);
    }

    componentWillUnmount() {
        window.removeEventListener("deviceorientation", this.handleDeviceOrientationChange);
    }

    render() {
        return (
            <DeviceOrientationContext.Provider value={this.state.deviceOrientation}>
                {this.props.children}
            </DeviceOrientationContext.Provider>
        );
    }
}
