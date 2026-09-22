import { useState, useRef } from "react";
import Container from "../../ui/Container";
import NewsCard, { type NewsItem } from "./NewsCard";

import img1 from "../../../assets/241205180904_liOX1GKSQy.webp";
import logo1 from "../../../assets/241205180904_ZjsiRmDtff.png";

import img2 from "../../../assets/67516d3a81863.jpeg";
import logo2 from "../../../assets/67503526ae3fb.png";

import img3 from "../../../assets/241204165747_E5W7U2wzVE.jpeg";
import logo3 from "../../../assets/241204165747_uTQ3MXgeA9.png";

import img4 from "../../../assets/250129124335_Df1YeHs6Nk.png";
import logo4 from "../../../assets/250129124339_Rc9J0kthqh.png";

import img5 from "../../../assets/250129133021_UtYCwphRT6.png";
import logo5 from "../../../assets/250129133026_67PWO1vFcN.png";

import img6 from "../../../assets/6a5884de4faa5.gif";
import logo6 from "../../../assets/260716131358_3Kac7LVxi3.png";

const newsList: NewsItem[] = [
    {
        id: 1,
        title: "গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা",
        subText:
            "বাংলাদেশে ইন্টারসিটি ভ্রমণ সহজ ও সাশ্রয়ী করার লক্ষ্যে একটি অনন্য উদ্যোগ নিয়ে এসেছে ‘গাড়িবুক’। কোনো কমিশন ছাড়াই ইন্টারসিটি কার রেন্টাল পরিষেবা দেওয়া দেশের প্রথম অ্যাপ।",
        image: img1,
        brandLogo: logo1,
        date: "Dec 05, 2024",
        url: "https://www.prothomalo.com/bangladesh/a3gn6ql2t8",
    },
    {
        id: 2,
        title: 'Digital App to offer "Chander Gari"',
        subText:
            "Digital transport platform Garibook is set to introduce 'Chander Gari' rentals through its mobile app, making travel to remote hilly tracks more accessible.",
        image: img2,
        brandLogo: logo2,
        date: "Dec 04, 2024",
        url: "https://www.dhakatribune.com/business/365516/digital-app-garibook-to-offer-%E2%80%98chander-gari%E2%80%99",
    },
    {
        id: 3,
        title: "বাংলাদেশে প্রথমবার ‘চান্দের গাড়ি’ গাড়িবুক অ্যাপে",
        subText:
            "বাংলাদেশে প্রথমবারের মতো চান্দের গাড়ি ভাড়া করার সুবিধা নিয়ে এলো ডিজিটাল ট্রান্সপোর্ট প্ল্যাটফর্ম ‘গাড়িবুক’। পাহাড়ি এলাকায় সহজে মিলবে পছন্দের গাড়ি।",
        image: img3,
        brandLogo: logo3,
        date: "Dec 04, 2024",
        url: "https://samakal.com/",
    },
    {
        id: 4,
        title: "গাড়িবুক ও সুখীর চুক্তি – স্মার্ট চালক ও পরিবারের জন্য উন্নত স্বাস্থ্যসেবা",
        subText:
            "রাইড শেয়ারিং এবং ইন্টারসিটি কার রেন্টাল প্ল্যাটফর্ম ‘গাড়িবুক’ ডিজিটাল স্বাস্থ্যসেবা প্রদানকারী প্রতিষ্ঠান ‘সুখী’র সঙ্গে একটি সমঝোতা চুক্তি স্বাক্ষর করেছে।",
        image: img4,
        brandLogo: logo4,
        date: "Jan 29, 2025",
        url: "https://www.thedailystar.net/",
    },
    {
        id: 5,
        title: "গাড়িচালক ও তাদের পরিবারের স্বাস্থ্যসেবায় গাড়িবুক-সুখীর চুক্তি স্বাক্ষর",
        subText:
            "স্মার্ট চালকদের সামাজিক সুরক্ষা ও স্বাস্থ্যসেবা নিশ্চিত করতে একযোগে কাজ করার অঙ্গীকার নিয়ে চুক্তি স্বাক্ষরিত হয়েছে।",
        image: img5,
        brandLogo: logo5,
        date: "Jan 29, 2025",
        url: "https://www.bssnews.net/",
    },
    {
        id: 6,
        title: "Replacing ride-hailing commissions with fixed subscriptions",
        subText:
            "Garibook introduces an innovative zero percent commission model for smart drivers across Bangladesh, providing sustainable earnings.",
        image: img6,
        brandLogo: logo6,
        date: "Jul 16, 2026",
        url: "https://www.daily-sun.com/",
    },
];

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
        <section className="py-14 sm:py-20 bg-white">
            <Container>
                {/* Header with Navigation Controls */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
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

                {/* News Carousel / Grid */}
                <div ref={sliderContainerRef} className="overflow-hidden">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${startIndex * 0}%)`, // On desktop we can also slice or slide smoothly
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
