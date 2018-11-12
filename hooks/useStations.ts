import getStations from "../api/getStations";
import { useEffect, useState } from "react";
import { Station } from "../types";

export default function useStations(): Station[] {
    const [stations, setStations] = useState<Station[]>([]);

    useEffect(() => {
        getStations().then(setStations);

        const interval = setInterval(() => {
            getStations().then(setStations);
        }, 15 * 1000);

        return () => clearInterval(interval);
    }, []);

    return stations;
}
