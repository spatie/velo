import { StationId, Station, Stations } from "../types";

export function getStations(): Promise<Stations> {
    return fetch("/stations")
        .then(response => response.json())
        .then(stations => {
            return {
                train: findStation("226", stations),
                office: findStation("001", stations),
            };
        });
}

function findStation(stationId: StationId, stations: Station[]): Station | null {
    const station = stations.find(station => station.id === stationId);

    if (!station) {
        return null;
    }

    station.name = stationName(station.id);

    return station;
}

function stationName(stationId: StationId): string {
    switch (stationId) {
        case "001":
            return "Centraal station";
        case "226":
            return "Spatie";
    }
}
