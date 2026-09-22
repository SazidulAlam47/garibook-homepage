import { useState, useEffect } from "react";
import { Link } from "react-router";
import Container from "../../ui/Container";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { navLinks } from "../../../constants/header.constant";
import logoVector from "../../../assets/logo-vector.png";
import logo from "../../../assets/gaibook-logo.svg";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
                    : "bg-white border-b border-slate-100/60 py-4"
            }`}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <HeaderLeft onLinkClick={closeMenu} />
                    <HeaderRight
                        isMobileMenuOpen={isMobileMenuOpen}
                        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
                    />
                </div>
            </Container>

            {/* Mobile Drawer Backdrop */}
            {isMobileMenuOpen && (
                <div
                    onClick={closeMenu}
                    className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
                    aria-hidden="true"
                />
            )}

            {/* Mobile Offcanvas Drawer */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header in Drawer */}
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                    <img src={logo} alt="Garibook" className="h-8 w-auto object-contain" />
                    <button
                        type="button"
                        onClick={closeMenu}
                        aria-label="Close menu"
                        className="p-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation in Drawer */}
                <div className="px-5 py-6 flex flex-col gap-4 overflow-y-auto flex-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            onClick={closeMenu}
                            className="text-base font-medium text-[#212121] hover:text-[#0e52ff] py-1 border-b border-gray-50 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="pt-4 mt-2">
                        <Link
                            to="/login"
                            onClick={closeMenu}
                            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0e52ff] text-white font-semibold text-center hover:bg-blue-700 transition-colors capitalize shadow-sm"
                        >
                            login
                        </Link>
                    </div>
                </div>

                {/* Bottom decorative logo vector */}
                <div className="p-4 flex justify-center opacity-60 pointer-events-none">
                    <img src={logoVector} alt="" className="w-28 h-auto object-contain" />
                </div>
            </div>
        </header>
    );
};

export default Header;
