import type { TogetherCardProps } from "../../../types/together.type";

const TogetherCard = ({ image, title }: TogetherCardProps) => {
    return (
        <div className="together-card group relative rounded-3xl overflow-hidden shadow-lg h-[360px] sm:h-[420px] lg:h-[460px] cursor-pointer">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-0 left-0 p-6 sm:p-8 z-10">
                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {title}
                </h4>
            </div>
        </div>
    );
};

export default TogetherCard;
