import { Link } from "react-router";
import Container from "../../ui/Container";
import BlogCard, { type BlogItem } from "./BlogCard";

import blog1 from "../../../assets/6aabc714e2a79.webp";
import blog2 from "../../../assets/260920175045_g3UDrxr4bz.webp";
import blog3 from "../../../assets/260920175752_kbpbDIIOGX.webp";

const blogList: BlogItem[] = [
    {
        id: 1,
        title: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা",
        subTitle:
            "দৈনন্দিন যাতায়াত থেকে শুরু করে জরুরি ভ্রমণ—কীভাবে ডিজিটাল রাইড শেয়ারিং শহরবাসীর জীবন সহজ করেছে।",
        image: blog1,
        date: "Sep 15, 2026",
        slug: "রাইড-শেয়ারিংয়ে-বদলে-যাচ্ছে-বাংলাদেশের-শহুরে-পরিবহন-ব্যবস্থা",
    },
    {
        id: 2,
        title: "সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
        subTitle:
            "চা বাগান, রাতারগুল, জাফলং ও বিছনাকান্দির রূপ উপভোগের সেরা ভ্রমণ গাইড ও পরিবহন সুবিধা।",
        image: blog2,
        date: "Sep 20, 2026",
        slug: "সিলেটের-দর্শনীয়-স্থান-সমূহ-খাবার-ও-থাকার-ব্যবস্থা",
    },
    {
        id: 3,
        title: "নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
        subTitle:
            "পাহাড়পুর বৌদ্ধ বিহার ও কুশুম্বা মসজিদসহ নওগাঁর প্রত্নতাত্ত্বিক দর্শনীয় স্থানের পূর্ণাঙ্গ তালিকা।",
        image: blog3,
        date: "Sep 20, 2026",
        slug: "নওগাঁর-দর্শনীয়-স্থান-সমূহ-খাবার-ও-থাকার-ব্যবস্থা",
    },
];

const Blog = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <Container>
                {/* Header with Link to All Blogs */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight mb-3">
                            Beyond Destinations
                        </h2>
                        <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
                            Discover travel hacks, guides, and inspirations for your next intercity trip with Garibook.
                        </p>
                    </div>

                    <div>
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#121212] hover:text-[#0e52ff] transition-colors"
                        >
                            <span>Show All Blogs</span>
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* 3 Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {blogList.map((item) => (
                        <BlogCard key={item.id} item={item} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Blog;
