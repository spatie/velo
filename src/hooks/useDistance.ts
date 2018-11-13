import geolib from "geolib";
import { useMemo } from "react";
import { LatLng } from "../types";

export default function useDistance(from: LatLng, to: LatLng): number {
    return useMemo(
        () => {
            return geolib.getDistance(from, to);
        },
        [from, to],
    );
}
