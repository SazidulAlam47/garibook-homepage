import Container from "../../ui/Container";
import rightArrow from "../../../assets/right-arrow.png";

const CallToAction2 = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <Container>
                <div className="bg-[#0e52ff] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl text-white">
                    <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight mb-4">
                            Download <br /> Garibook Mobile App
                        </h2>

                        <p className="text-base sm:text-xl text-blue-100 font-medium mb-8">
                            Download our Customer, Smart Driver and Enterprise App
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
                </div>
            </Container>
        </section>
    );
};

export default CallToAction2;
