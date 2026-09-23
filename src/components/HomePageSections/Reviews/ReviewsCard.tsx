import type { ReviewsCardProps } from "../../../types/reviews.type";

const ReviewsCard = ({ item, onPlay }: ReviewsCardProps) => {
    return (
        <button
            type="button"
            onClick={() => onPlay(item.videoId)}
            aria-label={`Watch testimonial video of ${item.name}, ${item.occupation}`}
            className="w-full text-left group cursor-pointer flex flex-col h-full rounded-3xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0e52ff]"
        >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 w-full">
                <img
                    src={item.thumbnail}
                    alt={`${item.name} video review`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#f82b2bc7] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                        <svg
                            className="w-6 h-6 fill-current translate-x-0.5"
                            viewBox="0 0 384 512"
                        >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="pt-5 pb-2 text-left flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#121212] mb-1 group-hover:text-[#0e52ff] transition-colors">
                        {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold">
                        {item.occupation}
                    </p>
                </div>
            </div>
        </button>
    );
};

export default ReviewsCard;
