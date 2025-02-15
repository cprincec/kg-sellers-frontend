const CustomTooltip = ({ payload, active }: { payload: [{ value: number }]; active: boolean }) => {
    const months = [
        { short: "Jan", long: "January" },
        { short: "Feb", long: "February" },
        { short: "Mar", long: "March" },
        { short: "Apr", long: "April" },
        { short: "May", long: "May" },
        { short: "Jun", long: "June" },
        { short: "Jul", long: "July" },
        { short: "Aug", long: "August" },
        { short: "Sep", long: "September" },
        { short: "Oct", long: "October" },
        { short: "Nov", long: "November" },
        { short: "Dec", long: "December" },
    ];

    const currenMonthAndYear = months[new Date().getMonth()].short + " " + new Date().getFullYear();

    if (active) {
        return (
            <div className="transform-none">
                <div className="relative bg-white rounded-lg p-2 grid gap-1.5">
                    <h3 className="font-medium text-xs text-kaiglo_grey-900">{currenMonthAndYear}</h3>
                    {payload.map((entry, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <span
                                    className={`w-2 h-2 ${
                                        index % 2 === 0 ? "bg-kaiglo_success-700" : "bg-kaiglo_success-200"
                                    } rounded-sm`}
                                ></span>
                                <p className="text-xs text-kaiglo_grey-500">
                                    {index % 2 === 0 ? "This week" : "Last week"}
                                </p>
                            </div>
                            <span className="text-xs font-medium">₦{entry.value}</span>
                        </div>
                    ))}
                </div>

                <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 bg-white rotate-45"></div>
            </div>
        );
    }
};

export default CustomTooltip;
