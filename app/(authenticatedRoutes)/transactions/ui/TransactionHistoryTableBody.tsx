"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SetStateAction } from "react";
import { ITransactionDTO } from "../lib/interface";
import clsx from "clsx";
import { getTransactionStatusStyle } from "../lib/utils/utils";

const TransactionHistoryTableBody = ({
    transactions,
    setShowTransactionDetails,
}: {
    transactions: ITransactionDTO[];
    setShowTransactionDetails: React.Dispatch<SetStateAction<boolean>>;
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    /*****************************************************************************
     * Tracking the transaction detail that is opened improves user experience
     * Because the transaction detail view is a modal, if user was looking at an transaction detail before network outage or failure
     * upon page reload, user will still be presented with same transaction detail
     *****************************************************************************/
    const handleShowTransactionDetails = (index: number) => {
        // Update url with transaction id
        const params = new URLSearchParams(searchParams);
        params.set("transaction-index", index.toString());
        router.replace(`${pathname}?${params.toString()}`);

        // Show detail
        setShowTransactionDetails(true);
    };

    return (
        <TableBody>
            {transactions.map((transaction: ITransactionDTO, index: number) => (
                <TableRow
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleShowTransactionDetails(index)}
                >
                    <TableCell className="p-3 text-base">{index + 1}</TableCell>
                    <TableCell className="p-3 text-sm text-center">{transaction.orderId}</TableCell>
                    <TableCell className="p-3 text-sm text-center">{transaction.quantity}</TableCell>
                    <TableCell className="p-3 text-sm text-center">
                        ₦{parseFloat(transaction.subTotal).toLocaleString()}
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center">{transaction.rate}%</TableCell>
                    <TableCell
                        className={clsx(
                            "p-3 text-sm text-center",
                            parseInt(transaction.commission) < 0 && "text-kaiglo_critical-error"
                        )}
                    >
                        {parseFloat(transaction.commission)
                            ? parseInt(transaction.commission) < 0
                                ? `${transaction.commission[0]}₦${transaction.commission.substring(1)}`
                                : "₦" + transaction.commission
                            : transaction.commission}
                    </TableCell>
                    <TableCell className={"flex justify-center w-auto p-3"}>
                        <span className={clsx("text-center ", getTransactionStatusStyle(transaction.status))}>
                            {transaction.status}
                        </span>
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center">{transaction.date}</TableCell>
                    <TableCell className="p-3 text-sm text-center capitalize">
                        ₦{parseFloat(transaction.payoutAmount).toLocaleString()}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default TransactionHistoryTableBody;
