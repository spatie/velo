import { useEffect, useState } from "react";

type DeviceOrientationEvent = {
    alpha: number;
    webkitCompassHeading: number;
};

export default function useDeviceOrientation(): number {
    const [deviceOrientation, setDeviceOrientation] = useState(0);

    useEffect(() => {
        const handleDeviceOrientationChange = () => {
            const { webkitCompassHeading, alpha } = (event as unknown) as DeviceOrientationEvent;

            if (webkitCompassHeading) {
                setDeviceOrientation(webkitCompassHeading);
            } else if (alpha) {
                setDeviceOrientation(alpha);
            }
        };

        window.addEventListener("deviceorientation", handleDeviceOrientationChange);

        return () => {
            window.removeEventListener("deviceorientation", handleDeviceOrientationChange);
        };
    }, []);

    return deviceOrientation;
}
