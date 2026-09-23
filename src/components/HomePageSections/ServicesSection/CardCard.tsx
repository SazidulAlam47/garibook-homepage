import type { CardCardProps } from "../../../types/services.type";

const CardCard = ({ icon, title, description }: CardCardProps) => {
    return (
        <div className="service-card group h-full flex flex-col justify-start p-6 sm:p-7 rounded-2xl bg-white border border-[#edf2f7] hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="w-20 h-16 mb-5 flex items-center justify-start overflow-visible">
                <img
                    src={icon}
                    alt={title}
                    className="w-16 sm:w-20 h-12 sm:h-14 object-contain transition-transform duration-300 ease-out group-hover:translate-x-3.5"
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
