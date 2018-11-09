export type Station = {
    id: StationId;
    bikes: string;
    slots: string;
    name: string;
};

export type StationId = "001" | "226";

export type Stations = {
    office: Station | null;
    train: Station | null;
};
