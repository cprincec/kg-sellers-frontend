import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils/utils";

const SalesPerformanceSkeleton = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "relative h-full grid gap-6 rounded-xl border border-kaiglo_grey-200 p-3",
                className
            )}
        >
            <div className="flex justify-between items-start">
                <div className="grid gap-y-1">
                    <Skeleton className="h-4 w-32 bg-gray-200" /> {/* "Sales Performance" title */}
                    <div className="grid gap-1">
                        <Skeleton className="h-10 w-28 bg-gray-200" /> {/* Amount */}
                        <div className="flex items-center gap-1">
                            <Skeleton className="h-4 w-20 bg-gray-200" /> {/* Percentage */}
                            <Skeleton className="h-4 w-16 bg-gray-200" /> {/* Date */}
                        </div>
                    </div>
                </div>
                <div className="grid gap-6 justify-items-end">
                    <Skeleton className="h-10 w-32 rounded-md bg-gray-200" />
                    {/* View Report Button */}
                    <Skeleton className="h-4 w-36 rounded-md bg-gray-200" /> {/* View Report Button */}
                </div>
            </div>

            {/* Chart Skeleton */}
            <div className="">
                <Skeleton className="w-full min-h-[300px] bg-gray-200" />
            </div>
        </div>
    );
};

export default SalesPerformanceSkeleton;
