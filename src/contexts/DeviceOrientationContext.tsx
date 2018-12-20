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

    componentDidMount() {
        const handleDeviceOrientationChange = () => {
            const { webkitCompassHeading, alpha } = (event as unknown) as DeviceOrientationEvent;

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

        window.addEventListener("deviceorientation", handleDeviceOrientationChange);
    }

    render() {
        return (
            <DeviceOrientationContext.Provider value={this.state.deviceOrientation}>
                {this.props.children}
            </DeviceOrientationContext.Provider>
        );
    }
}
