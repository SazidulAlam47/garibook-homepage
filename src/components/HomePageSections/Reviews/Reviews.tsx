import { useState, useEffect } from "react";
import Container from "../../ui/Container";
import ReviewsCard from "./ReviewsCard";
import { reviewsList } from "../../../constants/reviews.constant";

const Reviews = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [startIndex, setStartIndex] = useState(0);

    const visibleCount = 3;
    const maxIndex = Math.max(0, reviewsList.length - visibleCount);

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setStartIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    useEffect(() => {
        if (!selectedVideo) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedVideo(null);
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedVideo]);

    return (
        <section className="py-16 sm:py-24 bg-[#f1f6ff] relative overflow-hidden">
            <Container>
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight mb-4">
                            Our Passengers Speak For Us
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                            Our journey was seamless and enjoyable from start to finish. The booking process was straightforward, and the staff were incredibly attentive, ensuring we felt comfortable throughout the trip.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                            aria-label="Previous review slide"
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                                startIndex === 0
                                    ? "border-gray-200 text-gray-300 cursor-not-allowed bg-white/50"
                                    : "border-gray-300 text-gray-700 bg-white hover:border-[#0e52ff] hover:text-[#0e52ff] hover:bg-blue-50 shadow-xs"
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
                            aria-label="Next review slide"
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                                startIndex >= maxIndex
                                    ? "border-gray-200 text-gray-300 cursor-not-allowed bg-white/50"
                                    : "border-gray-300 text-gray-700 bg-white hover:border-[#0e52ff] hover:text-[#0e52ff] hover:bg-blue-50 shadow-xs"
                            }`}
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {reviewsList.slice(startIndex, startIndex + visibleCount).map((item) => (
                        <ReviewsCard
                            key={item.id}
                            item={item}
                            onPlay={(id) => setSelectedVideo(id)}
                        />
                    ))}
                </div>
            </Container>

            {/* Video Modal Popup */}
            {selectedVideo && (
                <div
                    onClick={() => setSelectedVideo(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video"
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedVideo(null)}
                            aria-label="Close video"
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
                        >
                            ✕
                        </button>
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="Garibook Passenger Review"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Reviews;
