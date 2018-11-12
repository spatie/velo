export type Station = {
    id: string;
    bikes: number;
    slots: number;
    name: string;
};

export type Stations = {
    office: Station | null;
    train: Station | null;
};
