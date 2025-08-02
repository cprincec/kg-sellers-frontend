"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ITransaction } from "../lib/interface";
import clsx from "clsx";
import { getTransactionStatusStyle } from "../lib/utils/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { format } from "date-fns";

const TransactionHistoryTableBody = ({ transactions }: { transactions: ITransaction[] }) => {
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <TableBody>
            {transactions.map((transaction, index) => (
                <TableRow
                    key={index}
                    className="cursor-pointer"
                    onClick={() => setSearchParams([{ "transaction-id": transaction.reference }])}
                >
                    <TableCell className="p-3 text-base">{index + 1}</TableCell>
                    <TableCell className="p-3 text-sm text-center">{transaction.orderNumber}</TableCell>
                    <TableCell className="p-3 text-sm text-center">
                        {transaction.orderItem.quantity}
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center">
                        ₦{transaction.amount.toLocaleString()}
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center">
                        {transaction.commissionPercentage}%
                    </TableCell>
                    <TableCell
                        className={clsx(
                            "p-3 text-sm text-center",
                            parseInt(transaction.commissionAmount) < 0 && "text-kaiglo_critical-error"
                        )}
                    >
                        {transaction.commissionAmount
                            ? parseInt(transaction.commissionAmount) < 0
                                ? `${
                                      transaction.commissionAmount[0]
                                  }₦${transaction.commissionAmount.substring(1)}`
                                : "₦" + transaction.commissionAmount
                            : transaction.commissionAmount}
                    </TableCell>
                    <TableCell className={"flex justify-center w-auto p-3"}>
                        <span className={clsx("text-center ", getTransactionStatusStyle(transaction.status))}>
                            {transaction.status}
                        </span>
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center">
                        {format(transaction.createdDate, "dd MM yyyy")}
                    </TableCell>
                    <TableCell className="p-3 text-sm text-center capitalize">
                        ₦{transaction.subTotal.toLocaleString()}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default TransactionHistoryTableBody;
