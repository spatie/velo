import { useEffect, useState } from "react";

type StationFromServer = {
    id: string;
    bikes: string;
    slots: string;
    name: string;
};

type Station = {
    id: string;
    bikes: number;
    slots: number;
    name: string;
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
    return fetch("/stations")
        .then(response => response.json())
        .then((stations: StationFromServer[]) => {
            return stations.filter(station => {
                return ["001", "226"].includes(station.id);
            });
        })
        .then(stations => {
            return stations.map(station => ({
                ...station,
                bikes: parseInt(station.bikes),
                slots: parseInt(station.slots),
            }));
        });
}
