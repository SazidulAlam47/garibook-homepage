import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Container from "../../ui/Container";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                ".hero-left",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.9 }
            ).fromTo(
                ".hero-right",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.9 },
                "-=0.6"
            );

            // Subtle floating loop on the decorative element
            gsap.to(".hero-floating-element", {
                y: -14,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="homepage_hero_wrapper relative pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-28 md:pb-36 bg-gradient-to-b from-[#f4f7fe]/70 via-white to-white overflow-hidden"
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <HeroLeft />
                    <HeroRight />
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
