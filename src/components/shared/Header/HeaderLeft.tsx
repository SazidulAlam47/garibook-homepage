import { Link } from "react-router";
import logo from "../../../assets/gaibook-logo.svg";
import { navLinks } from "../../../constants/header.constant";
import type { HeaderLeftProps } from "../../../types/header.type";

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
