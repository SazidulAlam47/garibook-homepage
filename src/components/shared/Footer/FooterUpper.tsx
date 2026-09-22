import { Link } from "react-router";

const FooterUpper = () => {
    return (
        <div className="py-12 sm:py-16 border-b border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Column 1: Garibook */}
                <div className="lg:col-span-3">
                    <h6 className="text-white font-bold text-lg mb-5 capitalize tracking-wide">
                        garibook
                    </h6>
                    <ul className="flex flex-col gap-3 text-sm text-gray-400">
                        <li>
                            <Link to="/about-us" className="hover:text-white transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/passenger-speak" className="hover:text-white transition-colors">
                                Customer Reviews
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link to="/newsrooms" className="hover:text-white transition-colors">
                                Newsroom
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://map.garibook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                Garibook Map
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 2: Services */}
                <div className="lg:col-span-3">
                    <h6 className="text-white font-bold text-lg mb-5 capitalize tracking-wide">
                        Services
                    </h6>
                    <ul className="flex flex-col gap-3 text-sm text-gray-400">
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">
                                Intercity Rental
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">
                                Airport Pick and Drop
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">
                                Hourly Rental
                            </Link>
                        </li>
                        <li>
                            <Link to="/vehicle-management-system" className="hover:text-white transition-colors">
                                Vehicle Management System (VMS)
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Become Our Partner */}
                <div className="lg:col-span-3">
                    <h6 className="text-white font-bold text-lg mb-5 capitalize tracking-wide">
                        Become Our Partner
                    </h6>
                    <ul className="flex flex-col gap-3 text-sm text-gray-400">
                        <li>
                            <Link to="/earn-with-garibook" className="hover:text-white transition-colors">
                                Become a Smart Driver
                            </Link>
                        </li>
                        <li>
                            <Link to="/club" className="hover:text-white transition-colors">
                                Become a member of Garibook Club
                            </Link>
                        </li>
                        <li>
                            <Link to="/business" className="hover:text-white transition-colors">
                                Garibook Business for Corporate Travel
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Contacts */}
                <div className="lg:col-span-3">
                    <h6 className="text-white font-bold text-lg mb-5 capitalize tracking-wide">
                        Contacts
                    </h6>
                    <ul className="flex flex-col gap-3 text-sm text-gray-400">
                        <li>
                            <a href="mailto:support@garibook.com" className="hover:text-white transition-colors">
                                support@garibook.com
                            </a>
                        </li>
                        <li className="leading-relaxed">
                            Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144, Gulshan, Dhaka-1212
                        </li>
                        <li>
                            <a href="tel:09678112233" className="hover:text-white font-semibold transition-colors">
                                +88 09 678 11 22 33
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterUpper;
