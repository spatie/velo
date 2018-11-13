import { useEffect, useState } from "react";

type DeviceOrientationEvent = {
    alpha: number;
    webkitCompassHeading: number;
};

export default function useCompass(): number {
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        window.addEventListener("deviceorientation", e => {
            const { webkitCompassHeading, alpha } = (e as unknown) as DeviceOrientationEvent;

            if (webkitCompassHeading) {
                setDirection(webkitCompassHeading);
            } else if (alpha) {
                setDirection(alpha);
            }
        });
    }, []);

    return direction;
}
