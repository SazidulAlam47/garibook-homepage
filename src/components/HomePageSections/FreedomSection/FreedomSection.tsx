import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../ui/Container";
import FreedomSingle from "./FreedomSingle";

import freedomBanner from "../../../assets/garibook_freedom.webp";
import { freedomFeatures } from "../../../constants/freedom.constant";

gsap.registerPlugin(ScrollTrigger);

const FreedomSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".freedom-banner-img", {
                opacity: 0,
                scale: 0.98,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            });

            gsap.from(".freedom-single", {
                opacity: 0,
                y: 25,
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".freedom-features-grid",
                    start: "top 90%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black text-white py-14 sm:py-18 lg:py-[70px] overflow-hidden">
            <Container>
                <div className="max-w-2xl mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[54px] font-bold tracking-tight">
                        Freedom in Every Journey
                    </h2>
                </div>

                <div className="freedom-banner-img rounded-3xl overflow-hidden mb-12 sm:mb-16 shadow-2xl border border-white/10">
                    <img
                        src={freedomBanner}
                        alt="Freedom in Every Journey"
                        className="w-full h-auto object-cover max-h-[500px]"
                    />
                </div>

                <div className="freedom-features-grid grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
                    {freedomFeatures.map((item) => (
                        <FreedomSingle
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FreedomSection;
