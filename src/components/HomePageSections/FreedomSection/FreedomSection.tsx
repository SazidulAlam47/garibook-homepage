import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../ui/Container";
import FreedomSingle from "./FreedomSingle";

import freedomBanner from "../../../assets/garibook_freedom.webp";
import carIcon from "../../../assets/car.svg";
import driveIcon from "../../../assets/drive.svg";
import priceIcon from "../../../assets/price.svg";

gsap.registerPlugin(ScrollTrigger);

const freedomFeatures = [
    {
        id: "car",
        icon: carIcon,
        title: "Choose the Car",
        description: "Pick what suits your comfort.",
    },
    {
        id: "driver",
        icon: driveIcon,
        title: "Choose the Driver",
        description: "Based on ratings and reviews.",
    },
    {
        id: "fare",
        icon: priceIcon,
        title: "Choose the Fare",
        description: "Select the bid that fits your budget.",
    },
];

const FreedomSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".freedom-banner-img",
                { opacity: 0, scale: 0.96 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.9,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            gsap.fromTo(
                ".freedom-single",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".freedom-features-grid",
                        start: "top 85%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black text-white py-16 sm:py-20 md:py-24 overflow-hidden">
            <Container>
                {/* Header */}
                <div className="max-w-2xl mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        Freedom in Every Journey
                    </h2>
                </div>

                {/* Banner Image */}
                <div className="freedom-banner-img rounded-3xl overflow-hidden mb-12 sm:mb-16 shadow-2xl border border-white/10">
                    <img
                        src={freedomBanner}
                        alt="Freedom in Every Journey"
                        className="w-full h-auto object-cover max-h-[500px]"
                    />
                </div>

                {/* 3 Features */}
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
