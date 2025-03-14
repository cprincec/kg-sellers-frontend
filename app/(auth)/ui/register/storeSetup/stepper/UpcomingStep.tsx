const UpcomingStep = ({
    label,
    description,
    Icon,
}: {
    label: string;
    description: string;
    Icon: React.ElementType;
}) => {
    return (
        <div className="md:flex md:items-center md:gap-x-3">
            <div className="md:w-12 md:h-12 md:flex md:justify-center md:items-center">
                <Icon
                    strokeColor="#98A2B3"
                    className="w-8 md:w-6 lg:w-5 h-8 md:h-6 lg:h-5 p-1.5 md:p-0 rounded-lg bg-kaiglo_grey-50 md:bg-transparent"
                />
            </div>
            <div className="hidden lg:grid lg:gap-1 lg:items-center">
                <h3 className="text-base font-medium text-kaiglo_grey-400">{label}</h3>
                <p className="text-sm text-kaiglo_grey-400">{description}</p>
            </div>
        </div>
    );
};
export default UpcomingStep;
