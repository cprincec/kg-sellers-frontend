import clsx from "clsx";
import Metric from "./Metric";
import { IconVerticalLine } from "@/public/icons/icons";
import Image from "next/image";
import { Fragment } from "react";

const SalesSummary = ({ className, showEmptyState }: { className?: string; showEmptyState: boolean }) => {
    const salesSummaryMock = [
        {
            title: "COMPLETED SALES",
            body: "₦200,000",
            tip: "Processing sales are orders that have been placed by a user",
            comparism: {
                value: "1.3%",
                isPositive: true,
                date: "last week",
            },
        },

        {
            title: "PROCESSING SALES",
            body: "₦100,000",
            tip: "Processing sales are orders that have been placed by a user",
        },
    ];

    return (
        <section
            className={clsx(
                "grid gap-2 md:gap-0 py-3 md:py-4 px-2 lg:px-0 rounded-xl lg:bg-white border border-kaiglo_grey-200",
                className && className
            )}
        >
            <h2 className="md:p-[8px_24px_12px_24px] text-base text-kaiglo_grey-800 font-medium border-b border-kaiglo_grey-200">
                SALES SUMMARY
            </h2>

            <div className="grid lg:flex lg:items-center gap-2 lg:gap-0 lg:px-4 lg:py-3">
                {salesSummaryMock.map((item, index) => (
                    <Fragment key={item.title}>
                        <Metric
                            title={item.title || ""}
                            body={item.body || ""}
                            comparism={item.comparism || null}
                            showEmptyState={showEmptyState}
                            className="flex-1"
                        />

                        {/* divider */}
                        {index !== salesSummaryMock.length - 1 && (
                            <div className="hidden lg:block">
                                <Image
                                    src={IconVerticalLine}
                                    alt="divider"
                                    width={1}
                                    height={10}
                                    className="bg-kaiglo_grey-200 w-[2px] h-[64px]"
                                />
                            </div>
                        )}
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

export default SalesSummary;
