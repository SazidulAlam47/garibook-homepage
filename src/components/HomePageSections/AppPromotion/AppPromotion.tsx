import Container from "../../ui/Container";
import driverAppImg from "../../../assets/no_commission_app_screen.png";
import rightArrow from "../../../assets/right-arrow.png";

const AppPromotion = () => {
    return (
        <section className="py-14 sm:py-20 bg-white overflow-hidden">
            <Container>
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
                        Be a Smart Driver
                    </h2>
                </div>

                {/* Banner Card */}
                <div className="bg-[#efc30c] rounded-3xl px-8 pt-10 sm:px-12 sm:pt-14 lg:px-16 lg:pt-16 pb-0 relative overflow-hidden shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left text & button */}
                        <div className="pb-10 lg:pb-16 z-10">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#121212] leading-[1.15] tracking-tight mb-8">
                                0% Commission <br /> 100% Freedom
                            </h3>

                            <a
                                href="https://play.google.com/store/search?q=garibook%20smart%20driver&c=apps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="theme-primary-btn group !w-full sm:!w-auto !justify-between"
                            >
                                <span>Download Smart Driver App</span>
                                <img
                                    src={rightArrow}
                                    alt=""
                                    className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>

                        {/* Right image */}
                        <div className="flex justify-center lg:justify-end items-end relative -mb-2 sm:-mb-4">
                            <img
                                src={driverAppImg}
                                alt="Garibook Smart Driver App"
                                className="w-auto h-auto max-h-[380px] sm:max-h-[460px] lg:max-h-[500px] object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AppPromotion;
