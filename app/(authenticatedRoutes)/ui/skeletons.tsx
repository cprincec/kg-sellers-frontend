import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils/utils";

export const SalesSummarySkeleton = () => {
    return (
        <div className={cn("grid gap-2 border rounded-xl")}>
            <h2 className="md:p-[8px_24px_12px_24px] px-2 pb-0 text-base text-kaiglo_grey-800 font-medium border-b border-kaiglo_grey-200">
                SALES SUMMARY
            </h2>
            <div className="grid lg:flex lg:items-center gap-2 lg:p-3 lg:pt-1">
                {[...Array(2)].map((_, index) => (
                    <Skeleton key={index} className="min-h-[120px] w-full" />
                ))}
            </div>
        </div>
    );
};
