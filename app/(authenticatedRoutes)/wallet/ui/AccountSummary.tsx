"use client";

import { accountSummaryMock } from "../lib/data";
import { Fragment, useEffect } from "react";
import Image from "next/image";
import { IconVerticalLine } from "@/public/icons/icons";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import PayoutThreshold from "./payoutThreshold/PayoutThreshold";
import SelectAccount from "./withdraw/SelectAccount";
import WithdrawalAmount from "./withdraw/WithdrawalAmount";
import OtpModal from "@/app/(auth)/ui/otp/OtpModal";
import WithdrawalSuccessful from "./withdraw/WithdrawalSuccessful";
import Metric from "../../ui/metrics/Metric";
import { useModalContext } from "@/app/contexts/modalContext";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import useGetAccountSummary from "../hooks/useGetAccountSummary";
import { format } from "date-fns";
import { generateAccountSummaryData } from "../lib/utils/utils";
import { AccountSummarySkeleton } from "./skeletons";
import { SectionError } from "@/app/ui/errors";

const AccountSummary = ({ className }: { className?: string }) => {
    const searchParams = useSearchParams();
    const { showModal, setShowModal, setOnClose, setModalContent } = useModalContext();
    const { deleteSearchParams } = useUpdateSearchParams();
    const {
        accountSummary,
        isFetchingAccountSummary,
        errorFetchingAccountSummary,
        refetchAccountSummary,
        isRefetchingAccountSummary,
    } = useGetAccountSummary();

    // show withdrawal steps modals
    const withdrawStep = searchParams.get("withdraw");
    const payoutStep = searchParams.get("set-payout-threshold");

    useEffect(() => {
        let content: React.ReactNode | null = null;
        let clearKeys: string[] = [];

        if (payoutStep === "true") {
            content = <PayoutThreshold />;
            clearKeys = ["set-payout-threshold"];
        } else if (withdrawStep === "selected-bank") {
            content = <SelectAccount />;
            clearKeys = ["withdraw"];
        } else if (withdrawStep === "amount") {
            content = <WithdrawalAmount />;
            clearKeys = ["withdraw"];
        } else if (withdrawStep === "otp") {
            content = (
                <OtpModal email="" phone="" actionText="Confirm" actionLink="/wallet?withdraw=successful" />
            );
            clearKeys = ["withdraw"];
        } else if (withdrawStep === "successful") {
            content = <WithdrawalSuccessful />;
            clearKeys = ["withdraw"];
        }

        if (content) {
            setModalContent(content);
            setOnClose(() => () => deleteSearchParams(clearKeys));
            if (!showModal) setShowModal(true);
        }
    }, [withdrawStep, payoutStep]);

    if (isFetchingAccountSummary || isRefetchingAccountSummary) return <AccountSummarySkeleton />;
    if (errorFetchingAccountSummary)
        return <SectionError title="Error fetching account summary." retryFunction={refetchAccountSummary} />;
    if (!accountSummary) return null;

    const accountSummaryData = generateAccountSummaryData(accountSummary);

    return (
        <article
            className={cn(
                "grid py-0 md:pt-2 lg:py-4 rounded-xl lg:rounded-none lg:bg-white border border-kaiglo_grey-200",
                className
            )}
        >
            <h2 className="flex items-center gap-2 md:gap-3 flex-wrap p-3 md:p-[8px_24px_12px_24px] text-base text-kaiglo_grey-800 font-medium border-b border-kaiglo_grey-200">
                ACCOUNT SUMMARY
                <span className="font-normal px-2 py-1 rounded bg-kaiglo_grey-100 text-kaiglo_grey-800 text-sm md:text-base">
                    Last updated {format(accountSummary.updateDate, "MMM d, yyyy")}
                </span>
            </h2>

            <div className="grid lg:flex lg:items-center lg:px-4 lg:py-3">
                {accountSummaryData.map((item, index) => (
                    <Fragment key={item.title}>
                        <Metric
                            title={item.title}
                            body={item.body}
                            actionText={item.actionText}
                            showEmptyState={false}
                            className={cn(
                                "flex-1 max-lg:border-x-0 max-lg:md:border-y max-lg:rounded-none",
                                index === accountSummaryMock.length - 1 &&
                                    "max-lg:border-y-0 max-lg:rounded-b-xl",
                                index === 0 && "max-lg:border-y-0"
                            )}
                            tip={item.tip || ""}
                            canHideData={item.canHideData || false}
                            IsCurrency={item.isCurrency || false}
                        />

                        {/* divider */}
                        {index !== accountSummaryData.length - 1 && (
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
