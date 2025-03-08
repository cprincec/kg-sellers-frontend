"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PayoutDetailsProps } from "../../lib/interface";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IconPrint } from "@/public/icons/icons";
import { getPayoutStatusStyle } from "../../lib/utils/utils";
// import { getTransactionStatusStyle } from "../lib/utils/utils";

/*******************************************************
 * When closing a transaction detail modal,
 * remove the order index from the url
 ********************************************************/
const PayoutDetails = ({ payout, showPayoutDetail, setShowPayoutDetail }: PayoutDetailsProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const { reference, amount, channel, bank, name, accountNumber, date, status, purpose } = payout;

    return (
        <div className="bg-red-400">
            <Dialog
                open={showPayoutDetail}
                onOpenChange={() => {
                    // remove order index query string from url
                    const params = new URLSearchParams(searchParams);
                    params.delete("payout-index");
                    router.replace(`${pathname}?${params.toString()}`);

                    // Close transaction detail modal
                    setShowPayoutDetail(false);
                }}
            >
                <DialogContent
                    className="block w-[90%] md:w-[500px] max-h-[calc(100vh-50px)] lg:max-h-full lg:items-start outline-none px-6 py-6 rounded-2xl lg:rounded-none lg:right-0 lg:top-0 lg:bottom-0 lg:left-auto lg:translate-x-0 lg:translate-y-0 overflow-y-auto"
                    data-testid="payout-detail-dialog"
                >
                    <DialogHeader className="mb-6">
                        <DialogTitle className="text-left">Payment Details</DialogTitle>
                        <DialogDescription />
                    </DialogHeader>
                    <div className="grid gap-4 lg:gap-6 mb-6 overflow-y-auto">
                        <div className="flex justify-between items-center text-sm md:text-base text-kaiglo_grey-base">
                            <span className="">Amount</span>
                            <span className="font-bold text-kaiglo_grey-900">
                                ₦{parseFloat(amount).toLocaleString()}
                            </span>
                        </div>

                        <div className="flex justify-between items-center text-sm md:text-base text-kaiglo_grey-base">
                            <span className="">Channel</span>
                            <span className="flex gap-2 font-bold text-kaiglo_grey-900">
                                {channel}
                                <span className="font-medium text-xs px-2 py-1 rounded-full border border-kaiglo_grey-placeholder">
                                    Paystack
                                </span>
                            </span>
                        </div>

                        <div className="flex justify-between items-center text-sm md:text-base text-kaiglo_grey-base">
                            <span className="">Bank</span>
                            <span className="font-bold text-kaiglo_grey-900 capitalize">{bank}</span>
                        </div>

                        <div className="flex justify-between items-center text-sm md:text-base text-kaiglo_grey-base">
                            <span className="">Name</span>
                            <span className="font-bold text-kaiglo_grey-900 capitalize">{name}</span>
                        </div>

                        <div className="flex justify-between items-center text-sm md:text-base text-kaiglo_grey-base">
                            <span className="">Account Number</span>
                            <span className="font-bold text-kaiglo_grey-900 capitalize">{accountNumber}</span>
                        </div>

                        <div className="flex justify-between items-center text-sm md:text-base text-kaiglo_grey-base">
                            <span className="">Date</span>
                            <span className="font-bold text-kaiglo_grey-900 capitalize">{date}</span>
                        </div>

                        <div className="flex justify-between items-center text-sm md:text-base text-kaiglo_grey-base">
                            <span className="">Status</span>
                            <span className={getPayoutStatusStyle(status)}>{status}</span>
                        </div>

                        <div className="flex justify-between items-center text-sm md:text-base text-kaiglo_grey-base">
                            <span className="">Reference</span>
                            <span className="font-bold text-kaiglo_grey-900 capitalize">
                                PS_Android_{reference}
                            </span>
                        </div>

                        <div className="flex justify-between items-center text-sm md:text-base text-kaiglo_grey-base">
                            <span className="">Purpose</span>
                            <span className="font-bold text-kaiglo_grey-900 capitalize">{purpose}</span>
                        </div>
                    </div>

                    <Button
                        variant={"outline"}
                        className="flex gap-1 px-2 py-1 m-auto text-sm text-kaiglo_grey-900 rounded-lg"
                    >
                        <Image src={IconPrint} alt="print icon" width={20} height={20} />
                        Print PDF
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default PayoutDetails;
