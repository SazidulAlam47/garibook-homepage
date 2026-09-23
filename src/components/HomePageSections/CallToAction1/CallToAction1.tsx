import Container from "../../ui/Container";
import rightArrow from "../../../assets/right-arrow.png";

import exploreImg from "../../../assets/explore.jpeg";
import freedomImg from "../../../assets/freedom.jpg";
import safeTravelImg from "../../../assets/safe_travel.svg";
import preferredCarImg from "../../../assets/prefarred_car.jpg";
import smoothImg from "../../../assets/smooth.jpg";

const CallToAction1 = () => {
    return (
        <section className="booking-arrival-wrapper bg-black text-white py-10 sm:py-12 lg:py-12 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[50px] font-bold tracking-tight text-white">
                            From Booking to Arrival{" "}
                            <br className="hidden sm:inline" />
                            It’s All in Your Hands
                        </h2>
                    </div>

                    <div>
                        <a
                            href="https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="theme-primary-btn group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg"
                        >
                            <span className="font-semibold text-lg text-white">
                                Download App
                            </span>
                            <img
                                src={rightArrow}
                                alt=""
                                className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-4 sm:gap-5">
                    {/* Row 1: 2/3 (Explore) + 1/3 (Freedom) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
                        <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group h-[220px] sm:h-[280px] lg:h-[350px] bg-[#111]">
                            <img
                                src={exploreImg}
                                alt="Explore"
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                            />
                        </div>

                        <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group h-[220px] sm:h-[280px] lg:h-[350px] bg-white">
                            <img
                                src={freedomImg}
                                alt="Freedom"
                                className="w-full h-full object-cover object-top sm:object-center transition-transform duration-500 group-hover:scale-103"
                            />
                        </div>
                    </div>

                    {/* Row 2: 1/3 (Safe Travel) + 1/3 (Preferred Car) + 1/3 (Smooth) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#121212] flex items-center justify-center p-5 group h-[170px] sm:h-[220px] lg:h-[260px]">
                            <img
                                src={safeTravelImg}
                                alt="Safe Travel"
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 group h-[170px] sm:h-[220px] lg:h-[260px] bg-white">
                            <img
                                src={preferredCarImg}
                                alt="Preferred Car"
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                            />
                        </div>

                        <div className="sm:col-span-2 md:col-span-1 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group h-[170px] sm:h-[220px] lg:h-[260px] bg-[#ffe400]">
                            <img
                                src={smoothImg}
                                alt="Smooth Travel"
                                className="w-full h-full object-cover object-top sm:object-center transition-transform duration-500 group-hover:scale-103"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CallToAction1;
