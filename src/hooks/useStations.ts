import { LatLng } from "../types";
import stations from "../data/stations";
import { useEffect, useState } from "react";

const emptyStations: Station[] = stations.map(station => ({
    id: station.id,
    name: station.name,
    bikes: 0,
    slots: parseInt(station.bikes) + parseInt(station.slots),
    position: {
        latitude: parseFloat(station.lat),
        longitude: parseFloat(station.lon),
    },
    loaded: false,
}));

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
    loaded: boolean;
};

export default function useStations(): Station[] {
    const [stations, setStations] = useState<Station[]>(emptyStations);

    useEffect(() => {
        getStations().then(setStations);

        const interval = setInterval(() => {
            getStations().then(setStations);
        }, 15 * 1000);

        return () => clearInterval(interval);
    }, []);

    return stations;
}

async function getStations(): Promise<Station[]> {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/stations`);
        const stations: StationFromServer[] = await response.json();

        return stations.map(station => ({
            id: station.id,
            name: station.name,
            bikes: parseInt(station.bikes),
            slots: parseInt(station.slots),
            position: {
                latitude: parseFloat(station.lat),
                longitude: parseFloat(station.lon),
            },
            loaded: true,
        }));
    } catch (error) {
        return emptyStations;
    }
}
