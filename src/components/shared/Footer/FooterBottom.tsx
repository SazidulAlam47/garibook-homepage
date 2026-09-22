import { Link } from "react-router";
import logo from "../../../assets/Garibook_Logo.svg";
import sslLogo from "../../../assets/ssl.png";
import { footerLegalLinks, footerMetadata } from "../../../constants/footer.constant";

const FooterBottom = () => {
    return (
        <div className="pt-8 pb-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 text-center lg:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <img src={logo} alt="Garibook" className="h-10 w-auto object-contain" />
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        {footerLegalLinks.map((link, idx) => (
                            <span key={link.label} className="flex items-center gap-6">
                                <Link to={link.href} className="hover:text-white transition-colors">
                                    {link.label}
                                </Link>
                                {idx < footerLegalLinks.length - 1 && <span>•</span>}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
                    <span className="text-gray-400">
                        Trade license number: <strong className="text-gray-300">{footerMetadata.tradeLicense}</strong>
                    </span>
                    <span>{footerMetadata.copyright}</span>
                </div>
            </div>

            <div className="mt-4 pt-6 border-t border-gray-900 w-full overflow-hidden flex justify-center">
                <img
                    src={sslLogo}
                    alt="SSL Secure Payment Gateway"
                    className="w-full max-w-4xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
            </div>
        </div>
    );
};

export default FooterBottom;
