interface FreedomSingleProps {
    icon: string;
    title: string;
    description: string;
}

const FreedomSingle = ({ icon, title, description }: FreedomSingleProps) => {
    return (
        <div className="freedom-single flex flex-col items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center p-3 border border-white/10 transition-transform duration-300 hover:scale-110 hover:bg-white/15">
                <img src={icon} alt={title} className="w-full h-full object-contain" />
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
