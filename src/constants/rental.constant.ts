import type { CarOption } from "../types/rental.type";

import sedanPremiumImg from "../assets/1car_configuration1790064590387752.png";
import sedanImg from "../assets/1car_configuration1790064556396506.png";
import noahImg from "../assets/1car_configuration1790064571661334.png";
import hiaceImg from "../assets/1car_configuration1790064527400306.png";
import proboxImg from "../assets/probox.png";
import chanderGariImg from "../assets/chander_gari.png";

export const availableCars: CarOption[] = [
    { id: 1, name: "Sedan Premium", seat: "4 Seats", image: sedanPremiumImg },
    { id: 2, name: "Sedan", seat: "4 Seats", image: sedanImg },
    { id: 3, name: "Noah", seat: "7 Seats", image: noahImg },
    { id: 4, name: "HiAce", seat: "11 Seats", image: hiaceImg },
    { id: 5, name: "Sedan Economy", seat: "4 Seats", image: proboxImg },
    { id: 6, name: "Chander Gari", seat: "8 Seats", image: chanderGariImg },
];

export const airportList: string[] = [
    "Hazrat Shahjalal International Airport, Dhaka",
    "Shah Amanat International Airport, Chattogram",
    "Osmani International Airport, Sylhet",
    "Saidpur Airport, Nilphamari",
    "Cox's Bazar Airport, Cox's Bazar",
    "Jessore Airport, Jashore",
    "Barisal Airport, Barishal",
];

export const popularCities: string[] = [
    "Gulshan, Dhaka",
    "Dhanmondi, Dhaka",
    "Uttara, Dhaka",
    "Chattogram City",
    "Sylhet Sadar",
    "Cox's Bazar",
    "Gazipur",
    "Cumilla",
];
