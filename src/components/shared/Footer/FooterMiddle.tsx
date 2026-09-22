import rightArrow from "../../../assets/right-arrow.png";
import { footerPartners, footerMetadata } from "../../../constants/footer.constant";

const FooterMiddle = () => {
    return (
        <div className="py-12 sm:py-16 border-b border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: App Download */}
                <div className="lg:col-span-5">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-6">
                        Download Our <br />
                        Garibook Mobile App
                    </h2>

                    <a
                        href={footerMetadata.appDownloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-primary-btn group !w-full sm:!w-auto !justify-between"
                    >
                        <span>Download App</span>
                        <img
                            src={rightArrow}
                            alt=""
                            className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </div>

                {/* Right: Product By & Powered By */}
                <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-8 sm:gap-12">
                    {footerPartners.map((partner) => (
                        <div key={partner.title}>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                {partner.title}
                            </h3>
                            <div className="flex items-center gap-4">
                                <img
                                    src={partner.logo}
                                    alt={partner.companyName}
                                    className="h-14 sm:h-16 w-auto object-contain"
                                />
                                <div>
                                    <h4 className="text-white font-bold text-base">
                                        {partner.companyName}
                                    </h4>
                                    <a
                                        href={partner.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs sm:text-sm font-bold text-[#efc30c] hover:underline inline-flex items-center gap-1 mt-1"
                                    >
                                        Visit Website →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterMiddle;
