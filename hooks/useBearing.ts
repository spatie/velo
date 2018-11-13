import geolib from "geolib";
import { useMemo } from "react";
import { LatLng } from "../types";

export default function useBearing(from: LatLng, to: LatLng): number {
    return useMemo(
        () => {
            return geolib.getRhumbLineBearing(from, to);
        },
        [from, to],
    );
}
