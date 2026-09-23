import type { FreedomSingleProps } from "../../../types/freedom.type";

const FreedomSingle = ({ icon, title, description }: FreedomSingleProps) => {
    return (
        <div className="freedom-single flex flex-col items-start">
            <div className="h-12 mb-4 flex items-center justify-start">
                <img src={icon} alt={title} className="h-10 sm:h-12 w-auto object-contain" />
            </div>

            <div className="text-left">
                <h5 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    {title}
                </h5>
                <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FreedomSingle;
