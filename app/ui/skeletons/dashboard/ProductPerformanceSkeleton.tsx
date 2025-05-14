import { Skeleton } from "@/components/ui/skeleton";

const ProductPerformanceSkeleton = () => {
    return (
        <div className="relative grid gap-6 rounded-xl border border-kaiglo_grey-200 p-3">
            <div className="flex justify-between items-start">
                {/* Title */}
                <Skeleton className="h-4 w-40 rounded-md" />

                {/* Tabs */}
                <div className="flex gap-4 mb-8 lg:absolute lg:right-1 lg:top-1">
                    <Skeleton className="h-8 w-24 rounded-md" />
                    <Skeleton className="h-8 w-28 rounded-md" />
                </div>
            </div>

            {/* Table skeleton */}
            <div className="grid gap-0.5">
                {/* Header line */}
                <Skeleton className="h-6 w-full rounded" />

                {/* Body*/}
                <Skeleton className="min-h-[290px] w-full rounded-md" />
            </div>
        </div>
    );
};

export default ProductPerformanceSkeleton;
