import Container from "../../ui/Container";
import rightArrow from "../../../assets/right-arrow.png";

import exploreImg from "../../../assets/explore.jpeg";
import freedomImg from "../../../assets/freedom.jpg";
import safeTravelImg from "../../../assets/safe_travel.svg";
import preferredCarImg from "../../../assets/prefarred_car.jpg";
import smoothImg from "../../../assets/smooth.jpg";

const CallToAction1 = () => {
    return (
        <section className="bg-black text-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                            From Booking to Arrival <br className="hidden sm:inline" />
                            It’s All in Your Hands
                        </h2>
                    </div>

                    <div>
                        <a
                            href="https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="theme-primary-btn group !inline-flex !justify-between"
                        >
                            <span>Download App</span>
                            <img
                                src={rightArrow}
                                alt=""
                                className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-xl border border-white/10 group">
                        <img
                            src={exploreImg}
                            alt="Explore"
                            className="w-full h-full object-cover min-h-[280px] sm:min-h-[380px] transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10 group aspect-[4/3] sm:aspect-auto">
                        <img
                            src={freedomImg}
                            alt="Freedom"
                            className="w-full h-full object-cover min-h-[160px] sm:min-h-[180px] transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-slate-900 flex items-center justify-center p-6 group aspect-[4/3] sm:aspect-auto">
                        <img
                            src={safeTravelImg}
                            alt="Safe Travel"
                            className="max-h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10 group aspect-[4/3] sm:aspect-auto">
                        <img
                            src={preferredCarImg}
                            alt="Preferred Car"
                            className="w-full h-full object-cover min-h-[160px] sm:min-h-[180px] transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10 group aspect-[4/3] sm:aspect-auto">
                        <img
                            src={smoothImg}
                            alt="Smooth Travel"
                            className="w-full h-full object-cover min-h-[160px] sm:min-h-[180px] transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CallToAction1;
