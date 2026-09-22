interface CardCardProps {
    icon: string;
    title: string;
    description: string;
    isActive?: boolean;
    onClick?: () => void;
}

const CardCard = ({ icon, title, description, isActive, onClick }: CardCardProps) => {
    return (
        <div
            onClick={onClick}
            className={`service-card h-full flex flex-col justify-start p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${
                isActive
                    ? "bg-white border-[#0e52ff] shadow-[0_12px_32px_rgba(14,82,255,0.12)] ring-1 ring-[#0e52ff]"
                    : "bg-white border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1"
            }`}
        >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center">
                <img
                    src={icon}
                    alt={title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <h5 className="text-xl sm:text-[22px] font-bold text-[#121212] mb-3 leading-snug">
                {title}
            </h5>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default CardCard;
