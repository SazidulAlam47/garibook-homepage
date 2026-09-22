import type {
    FooterLinkItem,
    FooterContactItem,
    FooterPartnerItem,
} from "../types/footer.type";
import nrbLogo from "../assets/nrb_no_background.svg";
import link3Logo from "../assets/link3-two.png";

export const garibookLinks: FooterLinkItem[] = [
    { label: "About Us", href: "/about-us" },
    { label: "Customer Reviews", href: "/passenger-speak" },
    { label: "Career", href: "/" },
    { label: "Newsroom", href: "/newsrooms" },
    { label: "Garibook Map", href: "https://map.garibook.com/", isExternal: true },
];

export const servicesLinks: FooterLinkItem[] = [
    { label: "Intercity Rental", href: "/" },
    { label: "Airport Pick and Drop", href: "/" },
    { label: "Hourly Rental", href: "/" },
    { label: "Vehicle Management System (VMS)", href: "/vehicle-management-system" },
];

export const partnerLinks: FooterLinkItem[] = [
    { label: "Become a Smart Driver", href: "/earn-with-garibook" },
    { label: "Become a member of Garibook Club", href: "/club" },
    { label: "Garibook Business for Corporate Travel", href: "/business" },
];

export const contactDetails: FooterContactItem[] = [
    {
        type: "email",
        content: "support@garibook.com",
        href: "mailto:support@garibook.com",
    },
    {
        type: "address",
        content: "Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144, Gulshan, Dhaka-1212",
    },
    {
        type: "phone",
        content: "+88 09 678 11 22 33",
        href: "tel:09678112233",
    },
];

export const footerPartners: FooterPartnerItem[] = [
    {
        title: "A Product By",
        companyName: "NRB Solution Ltd.",
        logo: nrbLogo,
        websiteUrl: "https://nrb-solutions.net/",
    },
    {
        title: "Powered By",
        companyName: "Link 3 Technologies",
        logo: link3Logo,
        websiteUrl: "https://link3.net/",
    },
];

export const footerLegalLinks: FooterLinkItem[] = [
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
];

export const footerMetadata = {
    tradeLicense: "TRAD/DNCC/013806/2024",
    copyright: "© 2026 Garibook.com",
    appDownloadUrl:
        "https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page",
};
