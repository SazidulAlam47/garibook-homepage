import Container from "../../ui/Container";
import rightArrow from "../../../assets/right-arrow.png";
import appImg from "../../../assets/app-with-logo.0f885eea.png";

const CallToAction2 = () => {
    return (
        <section className="download-app-wrapper relative pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-18 lg:pb-20 bg-white overflow-visible">
            <Container>
                <div className="bg-[#0e52ff] rounded-3xl p-8 sm:p-12 md:p-14 lg:p-16 relative shadow-2xl text-white">
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
                    </div>

                    <div className="relative z-10 max-w-xl lg:max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] font-bold tracking-tight mb-4">
                            Download <br /> Garibook Mobile App
                        </h2>

                        <p className="text-base sm:text-lg lg:text-[22px] text-white/90 font-normal mb-8 max-w-lg">
                            Download our Customer, Smart Driver and Enterprise App
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

                    <div className="hidden lg:block absolute -top-16 lg:-top-20 right-6 lg:right-12 xl:right-20 z-20 pointer-events-none select-none">
                        <img
                            src={appImg}
                            alt="Garibook Mobile App"
                            className="w-auto h-[460px] lg:h-[520px] xl:h-[560px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)]"
                        />
                    </div>

                    <div className="lg:hidden mt-8 flex justify-center">
                        <img
                            src={appImg}
                            alt="Garibook Mobile App"
                            className="w-auto max-h-[340px] sm:max-h-[400px] object-contain drop-shadow-xl"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CallToAction2;
