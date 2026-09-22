import type { TogetherCardItem } from "../types/together.type";
import airportImg from "../assets/Airport Rental_Webp.webp";
import familyImg from "../assets/family_trips.webp";
import tourImg from "../assets/Group Tour_Webp.webp";

export const togetherCards: TogetherCardItem[] = [
    { id: "airport", title: "Airport Rentals", image: airportImg },
    { id: "family", title: "Family Trips", image: familyImg },
    { id: "tours", title: "Long Tours", image: tourImg },
];
