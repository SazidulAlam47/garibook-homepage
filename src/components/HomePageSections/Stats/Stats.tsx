import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../ui/Container";

gsap.registerPlugin(ScrollTrigger);

import skylineImg from "../../../assets/frame_1.312c65e3.png";
import sedanGif from "../../../assets/Sedan_GiF.9efd9ae4.gif";
import { statsData } from "../../../constants/stats.constant";

const Stats = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const carRef = useRef<HTMLDivElement>(null);
    const [counts, setCounts] = useState<number[]>([
        statsData[0].targetValue,
        statsData[1].targetValue,
        statsData[2].targetValue,
        statsData[3].targetValue,
    ]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const targets = {
                v0: 0,
                v1: 0,
                v2: 0,
                v3: 0,
            };

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    gsap.fromTo(
                        ".stat-item",
                        { opacity: 0, y: 25 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            stagger: 0.12,
                            ease: "power2.out",
                        }
                    );

                    gsap.to(targets, {
                        v0: statsData[0].targetValue,
                        v1: statsData[1].targetValue,
                        v2: statsData[2].targetValue,
                        v3: statsData[3].targetValue,
                        duration: 2.0,
                        ease: "power2.out",
                        onUpdate: () => {
                            setCounts([
                                Math.round(targets.v0),
                                Math.round(targets.v1),
                                Math.round(targets.v2),
                                Math.round(targets.v3),
                            ]);
                        },
                    });
                },
            });

            if (carRef.current) {
                gsap.fromTo(
                    carRef.current,
                    { x: "-200px" },
                    {
                        x: () => `${window.innerWidth + 200}px`,
                        duration: 14,
                        repeat: -1,
                        ease: "none",
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="happy-client-wrapper relative w-full bg-gradient-to-r from-[#0038c4] to-[#0e52ff] text-white -mt-28 sm:-mt-36 lg:-mt-[150px] pt-36 sm:pt-44 lg:pt-[190px] pb-24 sm:pb-28 lg:pb-[140px] overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
                    <div className="max-w-xl">
                        <h2 className="title-hcw text-2xl sm:text-3xl md:text-4xl lg:text-[46px] lg:leading-[54px] font-bold leading-tight tracking-tight text-white">
                            From Everyday Rides to <br className="hidden sm:inline" /> Meaningful Journeys
                        </h2>
                    </div>

                    <div className="happy-client-count-wrap flex-1 flex justify-start lg:justify-end">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 w-full lg:w-auto">
                            {statsData.map((stat, idx) => (
                                <div key={stat.label} className="stat-item flex flex-col items-start lg:items-end">
                                    <h4 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#efc30c] tracking-tight mb-1">
                                        {counts[idx].toLocaleString()}
                                        {stat.hasPlus && "+"}
                                    </h4>
                                    <span className="text-sm sm:text-base text-white/90 font-medium">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            {/* Skyline background anchored to bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0">
                <img
                    src={skylineImg}
                    alt=""
                    className="w-full h-14 sm:h-18 md:h-22 lg:h-24 object-cover object-bottom opacity-30 select-none"
                />
            </div>

            {/* Driving white sedan */}
            <div
                ref={carRef}
                className="absolute bottom-1 sm:bottom-2 lg:bottom-2.5 left-0 z-10 pointer-events-none select-none will-change-transform"
            >
                <img
                    src={sedanGif}
                    alt="Driving Sedan"
                    className="w-24 sm:w-32 md:w-40 lg:w-44 h-auto object-contain"
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20 pointer-events-none z-10" />
        </section>
    );
};

export default Stats;
