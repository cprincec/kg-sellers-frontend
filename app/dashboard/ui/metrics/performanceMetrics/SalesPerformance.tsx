import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import barChart from "@/public/images/dashboard/Basic Bar Chart.svg";
import { NoResultsIcon } from "../../icons";

const SalesPerformance = ({ showEmptyState }: { showEmptyState: boolean }) => {
    const isPositive = false;
    const date = "yesterday";
    const percentage = "1.3%";
    const amount = "₦309,000";

    return (
        <div className="grid gap-6 rounded-xl border border-kaiglo_grey-200 p-3">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-sm text-kaiglo_grey-800 capitalize">Sales Performance</h3>
                    {!showEmptyState ? (
                        <div className="grid gap-0.5">
                            <p className="text-2xl text-kaiglo_grey-900 font-medium">{amount}</p>

                            <p className="flex items-center gap-1 text-sm text-kaiglo_grey-700 font-medium">
                                {isPositive ? (
                                    <span className="flex items-center gap-0.5 text-kaiglo_success-light">
                                        <ArrowUp className="w-4 h-4" /> {percentage}
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-0.5 text-kaiglo_critical-error">
                                        <ArrowDown className="w-4 h-4" /> {percentage}
                                    </span>
                                )}
                                <span>from {date}</span>
                            </p>
                        </div>
                    ) : (
                        <strong className="text-3xl text-kaiglo_grey-900">--</strong>
                    )}
                </div>

                {/* View Report Button */}
                {!showEmptyState && (
                    <Button type="button" className="">
                        View report
                    </Button>
                )}
            </div>

            {/* Bar Chart */}
            {!showEmptyState ? (
                <div className="overflow-x-auto">
                    <Image src={barChart} alt="bar chart" />
                </div>
            ) : (
                <NoResultsIcon
                    className="grid items-center justify-center -mt-8 py-6"
                    title="No results Yet"
                    description="Data will begin populating as soon as you commence making sales"
                />
            )}
        </div>
    );
};
export default SalesPerformance;
