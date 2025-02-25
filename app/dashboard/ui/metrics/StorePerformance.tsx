import clsx from "clsx";
import Metric from "./Metric";
import { Fragment } from "react";
import Image from "next/image";
import { IconVerticalLine } from "@/public/icons/icons";

const StorePerformance = ({ className, showEmptyState }: { className?: string; showEmptyState: boolean }) => {
    const weeklyPerformance = [
        {
            title: "STORE VISITORS",
            body: "240",
            comparism: {
                value: "50%",
                isPositive: false,
                date: "last week",
            },
        },
        {
            title: "ORDERS",
            body: "150",
        },
        {
            title: "PRODUCT SALES",
            body: "₦3,900,000",
        },
        {
            title: "AVG. DAILY PRODUCT SALES",
            body: "30",
        },
    ];

    return (
        <section
            className={clsx(
                "grid gap-2 md:gap-0 py-3 px-2 lg:px-0 rounded-xl lg:bg-white border border-kaiglo_grey-200",
                className && className
            )}
        >
            <h2 className="md:p-[12px_24px_12px_24px] text-base text-kaiglo_grey-800 font-medium md:border-b border-kaiglo_grey-200 uppercase">
                WEEKLY STORE PERFOMANCE
            </h2>

            <div className="grid lg:flex lg:items-center gap-2 lg:gap-0 lg:px-4 lg:py-3">
                {weeklyPerformance.map((item, index) => (
                    <Fragment key={item.title}>
                        <Metric
                            title={item.title || ""}
                            body={item.body || ""}
                            comparism={item.comparism || null}
                            showEmptyState={showEmptyState}
                            className="flex-1"
                        />

                        {/* divider */}
                        {index !== weeklyPerformance.length - 1 && (
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

export default StorePerformance;
