import type { ReviewItem } from "../types/reviews.type";

import thumb1 from "../assets/hqdefault.jpg";
import thumb2 from "../assets/hqdefault(1).jpg";
import thumb3 from "../assets/hqdefault(2).jpg";

export const reviewsList: ReviewItem[] = [
    {
        id: 1,
        name: "Atif Haider",
        occupation: "Banker",
        thumbnail: thumb1,
        videoId: "JsBwaJ_VIcA",
        rating: 5,
    },
    {
        id: 2,
        name: "Mohammad Habibur Rahman",
        occupation: "Banker",
        thumbnail: thumb2,
        videoId: "CsxeEof1T3M",
        rating: 5,
    },
    {
        id: 3,
        name: "Sadia Afrin",
        occupation: "Service Holder",
        thumbnail: thumb3,
        videoId: "8ma9XEGhi5s",
        rating: 5,
    },
];
