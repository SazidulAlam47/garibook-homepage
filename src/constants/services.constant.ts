import type { ServiceCardItem } from "../types/services.type";
import intercityIcon from "../assets/intercity_car_rental.svg";
import rideshareIcon from "../assets/rideshare.svg";
import airportRentalIcon from "../assets/airport_rental.svg";
import hourlyRentalIcon from "../assets/hourly_rental.svg";

export const ridesServices: ServiceCardItem[] = [
    {
        id: "intercity",
        title: "Intercity Car Rental",
        description: "Travel between cities with comfort and confidence.",
        icon: intercityIcon,
    },
    {
        id: "rideshare",
        title: "Ride share",
        description: "Go anywhere in the city, quickly and easily.",
        icon: rideshareIcon,
    },
    {
        id: "airport",
        title: "Airport Rental",
        description:
            "Whether you’re flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
        icon: airportRentalIcon,
    },
    {
        id: "hourly",
        title: "Hourly Rental",
        description: "Rent a car by the hour, tailored to your needs.",
        icon: hourlyRentalIcon,
    },
];
