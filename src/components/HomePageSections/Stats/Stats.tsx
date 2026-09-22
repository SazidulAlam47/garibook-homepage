import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../ui/Container";

gsap.registerPlugin(ScrollTrigger);

import { statsData } from "../../../constants/stats.constant";

const Stats = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const targets = { v0: 0, v1: 0, v2: 0, v3: 0 };

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 80%",
                once: true,
                onEnter: () => {
                    gsap.fromTo(
                        ".stat-item",
                        { opacity: 0, y: 30, scale: 0.9 },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "back.out(1.5)",
                        }
                    );

                    gsap.to(targets, {
                        v0: statsData[0].targetValue,
                        v1: statsData[1].targetValue,
                        v2: statsData[2].targetValue,
                        v3: statsData[3].targetValue,
                        duration: 2.2,
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="pb-12 sm:pb-16 lg:pb-20">
            <Container>
                <div className="bg-[#0e52ff] rounded-3xl p-8 sm:p-10 md:p-14 text-white shadow-xl shadow-blue-600/15 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
                        <div className="max-w-xl">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight tracking-tight">
                                From Everyday Rides to <br className="hidden sm:inline" /> Meaningful Journeys
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                            {statsData.map((stat, idx) => (
                                <div key={stat.label} className="stat-item flex flex-col items-start lg:items-end">
                                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#efc30c] tracking-tight mb-1">
                                        {counts[idx].toLocaleString()}
                                        {stat.hasPlus && "+"}
                                    </h4>
                                    <span className="text-xs sm:text-sm text-blue-100 font-medium">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Stats;
