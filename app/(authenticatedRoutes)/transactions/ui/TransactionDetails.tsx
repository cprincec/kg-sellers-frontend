"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PackageIcon } from "@/app/(auth)/ui/register/storeSetup/stepper/stepper-icons";
import OrderDetailsBody from "./TransactionDetailsBody";
import { ITransaction } from "../lib/interface";
import { getTransactionStatusStyle } from "../lib/utils/utils";
import clsx from "clsx";

const TransactionDetails = ({ transaction }: { transaction: ITransaction }) => {
    return (
        <DialogContent
            className="w-[90%] md:w-[500px] lg:max-h-full lg:items-start outline-none p-0 py-4 lg:py-6 rounded-2xl lg:rounded-none gap-0 lg:right-0 lg:top-0 lg:bottom-0 lg:left-auto lg:translate-x-0 lg:translate-y-0 overflow-y-auto"
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
                            <span>Order ID</span> <span>{transaction.orderNumber}</span>
                        </h2>
                        <p
                            className={clsx(
                                "text-center self-start",
                                getTransactionStatusStyle(transaction.status)
                            )}
                        >
                            {transaction.orderStatus}
                        </p>
                    </div>
                </div>
                <OrderDetailsBody transaction={transaction} />
            </div>
        </DialogContent>
    );
};

export default TransactionDetails;
