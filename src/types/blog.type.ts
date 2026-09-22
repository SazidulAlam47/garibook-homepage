export interface BlogItem {
    id: number;
    title: string;
    subTitle: string;
    image: string;
    date: string;
    slug: string;
}

export interface BlogCardProps {
    item: BlogItem;
}
