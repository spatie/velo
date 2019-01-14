import { LatLng } from "../types";
import React, { createContext, Component } from "react";

const CurrentPositionContext = createContext<LatLng | null>(null);

export default CurrentPositionContext;

type State = {
    position: LatLng | null;
}

export class CurrentPositionProvider extends Component<{}, State> {
    watcher: number = 0;

    state: State = {
        position: null
    }

    componentDidMount() {
        if (!navigator.geolocation) {
            return;
        }

        navigator.geolocation.getCurrentPosition(e => {
            this.setState(() => ({
                position: {
                    longitude: e.coords.longitude,
                    latitude: e.coords.latitude,
                }
            }));
        });

        this.watcher = navigator.geolocation.watchPosition(e => {
            this.setState(() => ({
                position: {
                    longitude: e.coords.longitude,
                    latitude: e.coords.latitude,
                }
            }));
        });
    }

    componentWillUnmount() {
        if (!this.watcher) {
            return;
        }

        navigator.geolocation.clearWatch(this.watcher);
    }

    render() {
        return (
            <CurrentPositionContext.Provider value={this.state.position}>
                {this.props.children}
            </CurrentPositionContext.Provider>
        );
    }
}
