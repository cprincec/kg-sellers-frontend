"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PackageIcon } from "@/app/(auth)/ui/register/storeSetup/stepper-icons";
import OrderDetailsBody from "./TransactionDetailsBody";
import { TransactionDetailProps } from "../lib/interface";
import { getTransactionStatusStyle } from "../lib/utils/utils";
import clsx from "clsx";

/*******************************************************
 * When closing a transaction detail modal,
 * remove the order index from the url
 ********************************************************/
const TransactionDetails = ({
    transaction,
    showTransactionDetail,
    setShowTransactionDetail,
}: TransactionDetailProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const { orderId, status } = transaction;

    return (
        <Dialog
            open={showTransactionDetail}
            onOpenChange={() => {
                // remove order index query string from url
                const params = new URLSearchParams(searchParams);
                params.delete("transaction-index");
                router.replace(`${pathname}?${params.toString()}`);

                // Close transaction detail modal
                setShowTransactionDetail(false);
            }}
        >
            <DialogContent
                className="w-[90%] md:w-[500px] max-h-[calc(100vh-50px)] lg:max-h-full lg:items-start outline-none p-0 py-4 lg:py-6 rounded-2xl lg:rounded-none gap-0 lg:right-0 lg:top-0 lg:bottom-0 lg:left-auto lg:translate-x-0 lg:translate-y-0 overflow-y-auto"
                data-testid="otp-dialog"
            >
                <DialogHeader className="w-0 h-0 min-w-0 hidden aria-hidden:">
                    <DialogTitle className="w-0 h-0 min-w-0" />
                    <DialogDescription />
                </DialogHeader>
                <div className="grid gap-3 lg:gap-6 overflow-y-auto">
                    <div className="flex items-center gap-3 px-3 lg:px-5 pb-4 lg:pb-5 border-b border-kaiglo_grey-200">
                        <div className="w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center border border-kaiglo_grey-200 rounded-lg">
                            <PackageIcon className="w-5 lg:w-8 h-5 lg:h-8" strokeColor="#344054" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="flex lg:gap-2 text-sm md:text-base text-kaiglo_grey-700 font-normal">
                                <span>Order ID</span> <span>{orderId}</span>
                            </h2>
                            <p className={clsx("text-center self-start", getTransactionStatusStyle(status))}>
                                {status}
                            </p>
                        </div>
                    </div>
                    <OrderDetailsBody transaction={transaction} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TransactionDetails;
