export interface NavLinkItem {
    label: string;
    href: string;
}

export interface HeaderLeftProps {
    onLinkClick?: () => void;
}

export interface HeaderRightProps {
    onToggleMobileMenu?: () => void;
    isMobileMenuOpen?: boolean;
}
