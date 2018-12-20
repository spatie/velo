import { useMemo } from "react";
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

    if (! currentPosition) {
        return <div></div>;
    }

    const bearing = useBearing(currentPosition, destination);
    const distance = useDistance(currentPosition, destination);
    const deviceOrientation = useDeviceOrientation();
    const rotation = bearing - deviceOrientation;

    return useMemo(
        () => (
            <div className="compass">
                <div className="direction" />
                <div className="distance">{distance} M</div>
                <style jsx>{`
                    .compass {
                        --compass-size: 125px;
                        --direction-size: 12px;

                        width: var(--compass-size);
                        height: var(--compass-size);
                        position: relative;
                        border-radius: var(--compass-size);
                        background-color: #222;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .direction {
                        display: block;
                        width: var(--direction-size);
                        height: var(--direction-size);
                        border-radius: var(--direction-size);
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: #555;
                        transform: translate(
                                calc((var(--compass-size) - var(--direction-size)) / 2),
                                0
                            )
                            rotate(${rotation}deg);
                        transform-origin: calc(var(--direction-size) / 2)
                            calc(var(--compass-size) / 2);
                    }
                `}</style>
            </div>
        ),
        [rotation, distance],
    );
}
