import { Link } from "react-router";
import type { BlogCardProps } from "../../../types/blog.type";

const BlogCard = ({ item }: BlogCardProps) => {
    return (
        <Link
            to={`/blogs/${item.slug}`}
            className="group flex flex-col h-full bg-white transition-all duration-300"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 rounded-2xl">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                    <span className="text-xs font-semibold text-slate-400 block mb-2">
                        {item.date}
                    </span>
                    <h5 className="text-lg sm:text-xl font-bold text-[#121212] group-hover:text-[#0e52ff] line-clamp-2 leading-snug mb-3 transition-colors">
                        {item.title}
                    </h5>
                    <p className="text-sm text-slate-500 font-normal line-clamp-2 leading-relaxed">
                        {item.subTitle}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
