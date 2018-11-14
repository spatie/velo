import { LatLng } from "../types";
import { useEffect, useState } from "react";

export default function useCurrentPosition(): LatLng | null {
    const [currentPosition, setCurrentPosition] = useState<LatLng | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(e => {
                setCurrentPosition({
                    longitude: e.coords.longitude,
                    latitude: e.coords.latitude,
                });
            });

            navigator.geolocation.watchPosition(e => {
                setCurrentPosition({
                    longitude: e.coords.longitude,
                    latitude: e.coords.latitude,
                });
            });
        }
    }, []);

    return currentPosition;
}
