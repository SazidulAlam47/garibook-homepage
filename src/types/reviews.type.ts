export interface ReviewItem {
    id: number;
    name: string;
    occupation: string;
    thumbnail: string;
    videoId: string;
    rating?: number;
}

export interface ReviewsCardProps {
    item: ReviewItem;
    onPlay: (videoId: string) => void;
}
