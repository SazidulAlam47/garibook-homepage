export interface ReviewItem {
    id: number;
    name: string;
    occupation: string;
    thumbnail: string;
    videoId: string;
}

interface ReviewsCardProps {
    item: ReviewItem;
    onPlay: (videoId: string) => void;
}

const ReviewsCard = ({ item, onPlay }: ReviewsCardProps) => {
    return (
        <div
            onClick={() => onPlay(item.videoId)}
            className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            {/* Video Thumbnail with Play Button */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900">
                <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0e52ff] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                        <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 384 512">
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Author info */}
            <div className="pt-5 pb-2 text-left">
                <h4 className="text-lg sm:text-xl font-bold text-[#121212] mb-1 group-hover:text-[#0e52ff] transition-colors">
                    {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold">
                    {item.occupation}
                </p>
            </div>
        </div>
    );
};

export default ReviewsCard;
