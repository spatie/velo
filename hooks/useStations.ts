import { LatLng } from "../types";
import { useEffect, useState } from "react";

type StationFromServer = {
    id: string;
    name: string;
    bikes: string;
    slots: string;
    lat: string;
    lon: string;
};

type Station = {
    id: string;
    name: string;
    bikes: number;
    slots: number;
    position: LatLng;
};

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

function getStations(): Promise<Station[]> {
    return fetch("/api/stations")
        .then(response => response.json())
        .then((stations: StationFromServer[]) => {
            return stations.filter(station => {
                return ["001", "206"].includes(station.id);
            });
        })
        .then(stations => {
            return stations.map(station => ({
                id: station.id,
                name: station.name,
                bikes: parseInt(station.bikes),
                slots: parseInt(station.slots),
                position: {
                    latitude: parseFloat(station.lat),
                    longitude: parseFloat(station.lon),
                },
            }));
        });
}
