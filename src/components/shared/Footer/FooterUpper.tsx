import { Link } from "react-router";
import {
    garibookLinks,
    servicesLinks,
    partnerLinks,
    contactDetails,
} from "../../../constants/footer.constant";

const FooterUpper = () => {
    return (
        <div className="py-12 sm:py-16 border-b border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
                <div className="lg:col-span-3">
                    <h6 className="text-white font-bold text-lg mb-5 capitalize tracking-wide">
                        garibook
                    </h6>
                    <ul className="flex flex-col gap-3 text-sm text-gray-400">
                        {garibookLinks.map((link) => (
                            <li key={link.label}>
                                {link.isExternal ? (
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link to={link.href} className="hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h6 className="text-white font-bold text-lg mb-5 capitalize tracking-wide">
                        Services
                    </h6>
                    <ul className="flex flex-col gap-3 text-sm text-gray-400">
                        {servicesLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.href} className="hover:text-white transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h6 className="text-white font-bold text-lg mb-5 capitalize tracking-wide">
                        Become Our Partner
                    </h6>
                    <ul className="flex flex-col gap-3 text-sm text-gray-400">
                        {partnerLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.href} className="hover:text-white transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <h6 className="text-white font-bold text-lg mb-5 capitalize tracking-wide">
                        Contacts
                    </h6>
                    <ul className="flex flex-col gap-3 text-sm text-gray-400">
                        {contactDetails.map((contact, idx) => (
                            <li key={idx} className={contact.type === "address" ? "leading-relaxed" : ""}>
                                {contact.href ? (
                                    <a
                                        href={contact.href}
                                        className={`hover:text-white transition-colors ${
                                            contact.type === "phone" ? "font-semibold" : ""
                                        }`}
                                    >
                                        {contact.content}
                                    </a>
                                ) : (
                                    contact.content
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterUpper;
