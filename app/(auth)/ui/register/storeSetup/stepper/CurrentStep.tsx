const CurrentStep = ({
    label,
    description,
    Icon,
}: {
    label: string;
    description: string;
    Icon: React.ElementType;
}) => {
    return (
        <div className="md:flex md:justify-start md:gap-x-3">
            <div className="md:w-12 md:h-12 rounded-lg border-2 border-kaiglo_success-base bg-kaiglo_success-50 flex items-center justify-center">
                <Icon strokeColor="#008000" className="p-1.5 md:p-0 w-9 md:w-6 lg:w-5 h-9 md:h-6 lg:h-5" />
            </div>
            <div className="hidden lg:grid lg:gap-1 lg:items-center ">
                <h3 className="text-base font-medium text-kaiglo_success-800">{label}</h3>
                <p className="text-sm text-kaiglo_success-800">{description}</p>
            </div>
        </div>
    );
};
export default CurrentStep;
