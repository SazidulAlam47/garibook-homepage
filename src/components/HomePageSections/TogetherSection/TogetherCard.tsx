import type { TogetherCardProps } from "../../../types/together.type";

const TogetherCard = ({ image, title }: TogetherCardProps) => {
    return (
        <div className="together-card group relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3] sm:aspect-[3/3] md:aspect-[4/5] lg:aspect-[3/4] cursor-pointer">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30 group-hover:from-black/70 transition-colors duration-300" />

            {/* Title Overlay */}
            <div className="absolute top-0 left-0 right-0 p-6 sm:p-8 z-10">
                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                    {title}
                </h4>
            </div>
        </div>
    );
};

export default TogetherCard;
