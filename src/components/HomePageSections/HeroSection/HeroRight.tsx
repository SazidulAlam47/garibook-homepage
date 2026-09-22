import rightArrow from "../../../assets/right-arrow.png";
import heroImg from "../../../assets/hero.png";

const HeroRight = () => {
    return (
        <div className="hero-right flex flex-col justify-between items-start lg:items-end gap-6 relative">
            <div className="max-w-md w-full text-left lg:text-right flex flex-col items-start lg:items-end">
                <p className="text-xl sm:text-2xl text-[#8e8e8e] font-medium leading-relaxed mb-6">
                    Choose your city, pick your car and enjoy the journey with Garibook’s best drivers.
                </p>

                <a
                    href="https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-warning-btn group !w-full sm:!w-auto !justify-between"
                >
                    <span className="font-semibold text-lg text-black">Download App</span>
                    <img
                        src={rightArrow}
                        alt=""
                        className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                    />
                </a>
            </div>

            <div className="hero-floating-element hidden md:block absolute -bottom-16 right-0 lg:-right-8 w-24 h-24 lg:w-32 lg:h-32 opacity-75 pointer-events-none select-none">
                <img
                    src={heroImg}
                    alt=""
                    className="w-full h-full object-contain filter drop-shadow-lg"
                />
            </div>
        </div>
    );
};

export default HeroRight;
