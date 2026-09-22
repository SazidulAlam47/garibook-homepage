export interface NewsItem {
    id: number;
    title: string;
    subText: string;
    image: string;
    brandLogo: string;
    date: string;
    url: string;
}

export interface NewsCardProps {
    item: NewsItem;
}
