import { Link } from "react-router";
import logo from "../../../assets/gaibook-logo.svg";

interface HeaderLeftProps {
    onLinkClick?: () => void;
}

const navLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Earn With Garibook", href: "/earn-with-garibook" },
    { label: "Garibook Business", href: "/business" },
    { label: "Garibook Club", href: "/club" },
    { label: "Campaign", href: "/campaign" },
    { label: "Blogs", href: "/blogs" },
];

const HeaderLeft = ({ onLinkClick }: HeaderLeftProps) => {
    return (
        <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center flex-shrink-0" onClick={onLinkClick}>
                <img
                    src={logo}
                    alt="Garibook"
                    className="h-10 sm:h-12 w-auto object-contain"
                />
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        to={link.href}
                        className="text-[15px] font-medium text-[#212121] hover:text-[#0e52ff] transition-colors duration-200"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default HeaderLeft;
