import { cn } from "@/lib/utils/utils";
import { Fragment } from "react";

export const AccountSummarySkeleton = () => {
    return (
        <article
            className={cn(
                "grid py-0 md:pt-2 lg:py-4 rounded-xl lg:rounded-none lg:bg-white border border-kaiglo_grey-200"
            )}
        >
            {/* Heading Skeleton */}
            <h2 className="flex items-center gap-2 md:gap-3 flex-wrap p-3 md:p-[8px_24px_12px_24px] text-base text-kaiglo_grey-800 font-medium border-b border-kaiglo_grey-200">
                <div className="h-5 w-32 bg-kaiglo_grey-100 animate-pulse rounded"></div>
                <span className="h-5 w-28 bg-kaiglo_grey-100 animate-pulse rounded"></span>
            </h2>

            {/* Metrics Skeleton */}
            <div className="grid lg:flex lg:items-center lg:px-4 lg:py-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <Fragment key={index}>
                        <div
                            className={cn(
                                "flex-1 p-4 space-y-2",
                                index === 3 - 1 && "max-lg:border-y-0 max-lg:rounded-b-xl",
                                index === 0 && "max-lg:border-y-0"
                            )}
                        >
                            {/* Title */}
                            <div className="h-4 w-20 bg-kaiglo_grey-100 animate-pulse rounded"></div>
                            {/* Body */}
                            <div className="h-6 w-32 bg-kaiglo_grey-100 animate-pulse rounded"></div>
                            {/* Action */}
                            <div className="h-4 w-16 bg-kaiglo_grey-100 animate-pulse rounded"></div>
                        </div>

                        {/* Divider */}
                        {index !== 3 - 1 && (
                            <div className="hidden lg:block">
                                <div className="bg-kaiglo_grey-200 w-[2px] h-[64px]"></div>
                            </div>
                        )}
                    </Fragment>
                ))}
            </div>
        </article>
    );
};

export const SelectAccountSkeleton = () => {
    return (
        <div className="grid gap-8 rounded-lg bg-white w-full">
            <div className="h-36 grid gap-2 p-4 bg-gray-200 rounded-md animate-pulse shadow-none mt-0">
                <div className="p-0">
                    <div className="w-44 h-3 bg-gray-300 rounded-md"></div>
                </div>
                <div className="flex flex-col items-start justify-between gap-3 p-0">
                    <div className="w-full flex justify-between gap-2 text-sm">
                        <div className="flex flex-col gap-2">
                            <div className="w-44 h-3 bg-gray-300 rounded-md"></div>
                            <div className="w-44 h-3 bg-gray-300 rounded-md"></div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    </div>

                    <div className="w-44 h-10 bg-gray-300 font-medium text-sm self-start px-2 py-1 rounded-md"></div>
                </div>
            </div>
            <div className="w-full h-10 bg-gray-200 rounded-md font-medium text-base animate-pulse"></div>
            <div className="flex justify-between">
                <div className="w-24 h-9 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="w-24 h-9 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
        </div>
    );
};
