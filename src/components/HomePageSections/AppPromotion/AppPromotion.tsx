import Container from "../../ui/Container";
import driverAppImg from "../../../assets/no_commission_app_screen.png";
import rightArrow from "../../../assets/right-arrow.png";
import { SMART_DRIVER_APP_URL } from "../../../constants/appPromotion.constant";

const AppPromotion = () => {
    return (
        <section className="no-commission-wrapper bg-white overflow-hidden">
            <Container>
                <div className="mb-6 sm:mb-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[54px] font-bold text-[#121212] tracking-tight">
                        Be a Smart Driver
                    </h2>
                </div>

                <div className="bg-[#efc30c] rounded-3xl px-8 sm:px-12 lg:px-16 pb-0 relative overflow-hidden shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="pb-10 lg:pb-16 z-10 flex flex-col items-start justify-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] font-bold text-[#0e52ff] tracking-tight mb-8">
                                0% Commission <br /> 100% Freedom
                            </h3>

                            <a
                                href={SMART_DRIVER_APP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="theme-primary-btn group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg lg:pt-2"
                            >
                                <div>
                                    <p className="font-semibold text-lg text-white">
                                        Download Smart
                                    </p>
                                    <p className="font-semibold text-lg text-white">
                                        Driver App
                                    </p>
                                </div>
                                <img
                                    src={rightArrow}
                                    alt=""
                                    className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>

                        <div className="flex justify-center lg:justify-end items-end relative -mb-1">
                            <img
                                src={driverAppImg}
                                alt="Garibook Smart Driver App"
                                className="w-auto h-auto max-h-[380px] sm:max-h-[460px] lg:max-h-[520px] object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AppPromotion;
