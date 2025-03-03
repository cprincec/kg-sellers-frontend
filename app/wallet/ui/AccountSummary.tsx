import clsx from "clsx";
import { accountSummaryMock } from "../lib/data";
import { Fragment } from "react";
import Metric from "@/app/dashboard/ui/metrics/Metric";
import Image from "next/image";
import { IconVerticalLine } from "@/public/icons/icons";

const AccountSummary = ({ className }: { className?: string }) => {
    const lastUpdated = "Oct 8, 2024";
    return (
        <article
            className={clsx(
                "grid gap-2 lg:gap-0 py-3 md:py-4 rounded-xl lg:rounded-none lg:bg-white border border-kaiglo_grey-200",
                className
            )}
        >
            <h2 className="flex items-center gap-2 md:gap-3 flex-wrap md:p-[8px_24px_12px_24px] px-2 pb-1 text-base text-kaiglo_grey-800 font-medium border-b border-kaiglo_grey-200">
                ACCOUNT SUMMARY
                <span className="font-normal px-2 py-1 rounded bg-kaiglo_grey-100 text-kaiglo_grey-800 text-sm md:text-base">
                    Last updated {lastUpdated}
                </span>
            </h2>

            <div className="grid lg:flex lg:items-center gap-2 lg:gap-0 px-2 lg:px-4 lg:py-3">
                {accountSummaryMock.map((item, index) => (
                    <Fragment key={item.title}>
                        <Metric
                            title={item.title}
                            body={item.body}
                            actionText={item.actionText}
                            showEmptyState={false}
                            className="flex-1"
                            tip={item.tip || ""}
                            canHideData={item.canHideData || false}
                        />

                        {/* divider */}
                        {index !== accountSummaryMock.length - 1 && (
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
        </article>
    );
};
export default AccountSummary;
