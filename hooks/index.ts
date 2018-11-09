import { getStations } from "../api";
import { useEffect, useState } from "react";
import { Station, Stations } from "../types";

type Route = {
    origin: Station | null;
    destination: Station | null;
    reverse: () => void;
};

type Direction = "train" | "office";

function useStations(): Stations {
    const [stations, setStations] = useState<Stations>({
        office: null,
        train: null,
    });

    useEffect(() => {
        getStations().then(setStations);

        const interval = setInterval(() => {
            getStations().then(setStations);
        }, 15 * 1000);

        return () => clearInterval(interval);
    }, []);

    return stations;
}

export function useRoute(): Route {
    const stations = useStations();

    const isAfternoon = new Date().getHours() > 12;

    const [direction, setDirection] = useState<Direction>(isAfternoon ? "train" : "office");

    function reverse() {
        setDirection(direction === "train" ? "office" : "train");
    }

    const origin = direction === "train" ? stations.office : stations.train;
    const destination = direction === "office" ? stations.office : stations.train;

    return { origin, destination, reverse };
}
