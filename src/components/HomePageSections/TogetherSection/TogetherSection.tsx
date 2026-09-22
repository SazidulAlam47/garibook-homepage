import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../ui/Container";
import TogetherCard from "./TogetherCard";

import { togetherCards } from "../../../constants/together.constant";

gsap.registerPlugin(ScrollTrigger);

const TogetherSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".together-card",
                { opacity: 0, y: 35 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-14 sm:py-20 bg-white">
            <Container>
                {/* Header */}
                <div className="max-w-2xl mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight">
                        More Than Miles — <br className="hidden sm:inline" />
                        We Bring People Together
                    </h2>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {togetherCards.map((card) => (
                        <TogetherCard
                            key={card.id}
                            title={card.title}
                            image={card.image}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TogetherSection;
