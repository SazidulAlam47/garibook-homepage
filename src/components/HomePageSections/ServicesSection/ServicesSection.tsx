import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../../ui/Container";
import CardCard from "./CardCard";

import businessImg from "../../../assets/busines.jpeg";
import clubImg from "../../../assets/garibook_club.jpg";
import vmsImg from "../../../assets/Frame_1000001473.png";
import rightArrow from "../../../assets/right-arrow.png";

import type { ServiceTab } from "../../../types/services.type";
import { ridesServices } from "../../../constants/services.constant";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState<ServiceTab>("rides");
    const [activeRideCard, setActiveRideCard] = useState<string>("intercity");
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (activeTab === "rides") {
                gsap.fromTo(
                    ".service-card",
                    { opacity: 0, y: 25 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, [activeTab]);

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white">
            <Container>
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
                        Our Services
                    </h2>
                </div>

                {/* Service Tabs */}
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap border-b border-gray-100 pb-4 mb-8 sm:mb-12">
                    <button
                        type="button"
                        onClick={() => setActiveTab("rides")}
                        className={`px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                            activeTab === "rides"
                                ? "bg-[#0e52ff] text-white shadow-md shadow-blue-500/20"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                    >
                        Rides
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("business")}
                        className={`px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                            activeTab === "business"
                                ? "bg-[#0e52ff] text-white shadow-md shadow-blue-500/20"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                    >
                        Garibook Business
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("club")}
                        className={`px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                            activeTab === "club"
                                ? "bg-[#0e52ff] text-white shadow-md shadow-blue-500/20"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                    >
                        Garibook Club
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("vms")}
                        className={`px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                            activeTab === "vms"
                                ? "bg-[#0e52ff] text-white shadow-md shadow-blue-500/20"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                    >
                        VMS
                    </button>
                </div>

                {/* Tab Contents */}
                {activeTab === "rides" && (
                    <div>
                        <div className="mb-6 sm:mb-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#121212] leading-tight">
                                Every Ride <br /> One Platform
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {ridesServices.map((service) => (
                                <CardCard
                                    key={service.id}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    isActive={activeRideCard === service.id}
                                    onClick={() => setActiveRideCard(service.id)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "business" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#121212] leading-tight mb-4">
                                Modern Car Rentals <br /> for Business
                            </h3>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                                Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS.
                            </p>
                            <Link to="/business" className="theme-primary-btn group !inline-flex">
                                <span>Learn More</span>
                                <img
                                    src={rightArrow}
                                    alt=""
                                    className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                            <img
                                src={businessImg}
                                alt="Garibook Business"
                                className="w-full h-auto object-cover max-h-[420px]"
                            />
                        </div>
                    </div>
                )}

                {activeTab === "club" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#121212] leading-tight mb-4">
                                Turn Your Car into Earnings with Garibook Club
                            </h3>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                                Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.
                            </p>
                            <Link to="/club" className="theme-primary-btn group !inline-flex">
                                <span>Learn More</span>
                                <img
                                    src={rightArrow}
                                    alt=""
                                    className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                            <img
                                src={clubImg}
                                alt="Garibook Club"
                                className="w-full h-auto object-cover max-h-[420px]"
                            />
                        </div>
                    </div>
                )}

                {activeTab === "vms" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#121212] leading-tight mb-4">
                                Vehicle Management System - VMS
                            </h3>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                                Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.
                            </p>
                            <Link to="/vehicle-management-system" className="theme-primary-btn group !inline-flex">
                                <span>Learn More</span>
                                <img
                                    src={rightArrow}
                                    alt=""
                                    className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                            <img
                                src={vmsImg}
                                alt="Vehicle Management System"
                                className="w-full h-auto object-cover max-h-[420px]"
                            />
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default ServicesSection;
