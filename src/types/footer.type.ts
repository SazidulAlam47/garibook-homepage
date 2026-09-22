export interface FooterLinkItem {
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface FooterContactItem {
    type: "email" | "address" | "phone";
    content: string;
    href?: string;
}

export interface FooterPartnerItem {
    title: string;
    companyName: string;
    logo: string;
    websiteUrl: string;
}
