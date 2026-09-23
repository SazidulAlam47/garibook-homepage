import rightArrow from "../../../assets/right-arrow.png";

const HeroRight = () => {
    return (
        <div className="hero-right flex flex-col items-start justify-center">
            <p className="hero-r-text-mute text-lg sm:text-xl lg:text-[26px] xl:text-[28px] lg:leading-[34px] xl:leading-[36px] text-[#9d9d9d] font-medium leading-relaxed mb-6 max-w-xl">
                Choose your city, pick your car and enjoy the journey with Garibook’s best drivers.
            </p>

            <a
                href="https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-warning-btn group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg"
            >
                <span className="font-semibold text-lg text-[#121212]">Download App</span>
                <img
                    src={rightArrow}
                    alt=""
                    className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                />
            </a>
        </div>
    );
};

export default HeroRight;
