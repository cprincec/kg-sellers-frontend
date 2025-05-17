"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PayoutDetailsProps } from "../../lib/interface";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IconPrint } from "@/public/icons/icons";
import { getPayoutStatusStyle } from "../../lib/utils/utils";
import { cn } from "@/lib/utils";

/*******************************************************
 * When closing a transaction detail modal,
 * remove the order index from the url
 ********************************************************/
const PayoutDetails = ({ payout }: PayoutDetailsProps) => {
    const { reference, amount, channel, bank, name, accountNumber, date, status, purpose } = payout;

    return (
        <DialogContent
            className={cn(
                "block w-[90%] md:w-[500px] max-h-[calc(100vh-50px)] lg:max-h-full lg:h-full lg:w-full lg:items-start outline-none px-6 py-6 rounded-2xl lg:rounded-none md:left-1/3 lg:right-[20%] lg:left-auto overflow-y-auto",
                "md:data-[state=open]:animate-slide-in-right-md lg:data-[state=open]:animate-slide-in-right-lg md:data-[state=closed]:animate-slide-out-right-md lg:data-[state=closed]:animate-slide-out-right-lg"
            )}
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
                    <span className="font-bold text-kaiglo_grey-900 capitalize">PS_Android_{reference}</span>
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
        // </Dialog>
    );
};

export default PayoutDetails;
