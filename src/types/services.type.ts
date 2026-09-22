export type ServiceTab = "rides" | "business" | "club" | "vms";

export interface ServiceCardItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface CardCardProps {
    icon: string;
    title: string;
    description: string;
    isActive?: boolean;
    onClick?: () => void;
}
