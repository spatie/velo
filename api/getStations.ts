import { Station } from "../types";

export default function getStations(): Promise<Station[]> {
    return fetch("/stations")
        .then(response => response.json())
        .then((stations: any) => {
            return stations.map(station => ({
                ...station,
                bikes: parseInt(station.bikes),
                slots: parseInt(station.slots),
            }));
        });
}
