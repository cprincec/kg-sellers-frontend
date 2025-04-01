import { accountSummaryMock } from "../lib/data";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { IconVerticalLine } from "@/public/icons/icons";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import PayoutThreshold from "./payoutThreshold/PayoutThreshold";
import SelectAccount from "./withdraw/SelectAccount";
import WithdrawalAmount from "./withdraw/WithdrawalAmount";
import OtpModal from "@/app/(auth)/ui/otp/OtpModal";
import WithdrawalSuccessful from "./withdraw/WithdrawalSuccessful";
import Metric from "../../ui/metrics/Metric";

const AccountSummary = ({ className }: { className?: string }) => {
    const lastUpdated = "Oct 8, 2024";
    const searchParams = useSearchParams();
    const [showPayoutThreshold, setShowPayoutThreshold] = useState<boolean>(false);
    const [ShowSelectedAccount, setShowSelectedAccount] = useState<boolean>(false);
    const [ShowWithdrawalAmount, setShowWithdrawalAmount] = useState<boolean>(false);
    const [ShowOtp, setShowOtp] = useState<boolean>(false);
    const [ShowSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

    // show withdrawal steps modals
    useEffect(() => {
        setShowPayoutThreshold(searchParams.get("set-payout-threshold") === "true");
        setShowSelectedAccount(searchParams.get("withdraw") === "selected-bank");
        setShowWithdrawalAmount(searchParams.get("withdraw") === "amount");
        setShowOtp(searchParams.get("withdraw") === "otp");
        setShowSuccessMessage(searchParams.get("withdraw") === "successful");
    }, [searchParams]);

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
                    Last updated {lastUpdated}
                </span>
            </h2>

            <div className="grid lg:flex lg:items-center lg:px-4 lg:py-3">
                {accountSummaryMock.map((item, index) => (
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

            {/* Payout threshold modal starts*/}
            {showPayoutThreshold && (
                <PayoutThreshold
                    showPayoutThreshold={showPayoutThreshold}
                    setShowPayoutThreshold={setShowPayoutThreshold}
                />
            )}
            {/* Payout threshold modal starts*/}

            {ShowSelectedAccount && <SelectAccount />}
            {ShowWithdrawalAmount && <WithdrawalAmount />}
            {ShowOtp && (
                <OtpModal
                    showOtpModal={ShowOtp}
                    setShowOtpModal={setShowOtp}
                    email=""
                    phone=""
                    actionText="Confirm"
                    actionLink="/wallet?withdraw=successful"
                />
            )}
            {ShowSuccessMessage && <WithdrawalSuccessful />}
        </article>
    );
};
export default AccountSummary;
