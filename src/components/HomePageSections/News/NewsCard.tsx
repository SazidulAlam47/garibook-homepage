import type { NewsCardProps } from "../../../types/news.type";

const NewsCard = ({ item }: NewsCardProps) => {
    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
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
                    <h3 className="text-lg sm:text-xl font-bold text-[#121212] group-hover:text-[#0e52ff] line-clamp-2 leading-snug mb-3 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-normal line-clamp-3 leading-relaxed mb-6">
                        {item.subText}
                    </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <img
                        src={item.brandLogo}
                        alt="Media brand"
                        className="h-6 sm:h-7 w-auto object-contain max-w-[120px]"
                    />
                    <span className="text-xs font-bold text-[#0e52ff] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read More →
                    </span>
                </div>
            </div>
        </a>
    );
};

export default NewsCard;
