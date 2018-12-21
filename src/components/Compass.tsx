import React, { useContext, useMemo } from "react";
import { LatLng } from "../types";
import useBearing from "../hooks/useBearing";
import useDistance from "../hooks/useDistance";
import useCurrentPosition from "../hooks/useCurrentPosition";
import useDeviceOrientation from "../hooks/useDeviceOrientation";

type Props = {
    destination: LatLng;
};

export default function Compass({ destination }: Props) {
    const currentPosition = useCurrentPosition();

    if (!currentPosition) {
        return <div />;
    }

    const bearing = useBearing(currentPosition, destination);
    const distance = useDistance(currentPosition, destination);
    const deviceOrientation = useDeviceOrientation();
    const rotation = bearing - deviceOrientation;

    return useMemo(
        () => (
            <div className="compass">
                <div
                    className="compass-direction"
                    style={{
                        transform: `
                        translate(calc((var(--compass-size) - var(--direction-size)) / 2), 0)
                        rotate(${rotation}deg)
                    `,
                    }}
                />
                <div className="compass-distance">{distance} M</div>
            </div>
        ),
        [rotation, distance],
    );
}
