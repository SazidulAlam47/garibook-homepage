import type { FreedomFeatureItem } from "../types/freedom.type";
import carIcon from "../assets/car.svg";
import driveIcon from "../assets/drive.svg";
import priceIcon from "../assets/price.svg";

export const freedomFeatures: FreedomFeatureItem[] = [
    {
        id: "car",
        icon: carIcon,
        title: "Choose the Car",
        description: "Pick what suits your comfort.",
    },
    {
        id: "driver",
        icon: driveIcon,
        title: "Choose the Driver",
        description: "Based on ratings and reviews.",
    },
    {
        id: "fare",
        icon: priceIcon,
        title: "Choose the Fare",
        description: "Select the bid that fits your budget.",
    },
];
