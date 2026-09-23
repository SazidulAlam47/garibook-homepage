import { useState, useRef } from "react";
import Container from "../../ui/Container";
import NewsCard from "./NewsCard";
import { newsList } from "../../../constants/news.constant";

const News = () => {
    const [startIndex, setStartIndex] = useState(0);
    const sliderContainerRef = useRef<HTMLDivElement>(null);

    const visibleCount = 3;
    const maxIndex = Math.max(0, newsList.length - visibleCount);

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    return (
        <section className="passenger-speak-wrapper relative py-14 sm:py-18 lg:py-[70px] bg-white">
            <Container>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[54px] font-bold text-[#121212] tracking-tight">
                            We Featured by Top news Platforms
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                            aria-label="Previous news slide"
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                                startIndex === 0
                                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                    : "border-gray-300 text-gray-700 hover:border-[#0e52ff] hover:text-[#0e52ff] hover:bg-blue-50"
                            }`}
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={startIndex >= maxIndex}
                            aria-label="Next news slide"
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                                startIndex >= maxIndex
                                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                    : "border-gray-300 text-gray-700 hover:border-[#0e52ff] hover:text-[#0e52ff] hover:bg-blue-50"
                            }`}
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div ref={sliderContainerRef} className="overflow-hidden">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${startIndex * 0}%)`,
                        }}
                    >
                        {newsList.slice(startIndex, startIndex + visibleCount).map((item) => (
                            <div key={item.id} className="h-full">
                                <NewsCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default News;
