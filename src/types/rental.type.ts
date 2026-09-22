export interface CarOption {
    id: number;
    name: string;
    seat: string;
    image: string;
}

export type RentalTabType = "car" | "airport";
export type TripType = "oneWay" | "roundWay" | "hourly";
export type AirportDirectionType = "fromAirport" | "fromHome";
