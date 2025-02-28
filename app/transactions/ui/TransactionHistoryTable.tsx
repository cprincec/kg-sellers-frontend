import { ITransactionDTO } from "../lib/interface";
import { Table } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import TransactionHistoryTableHeader from "./TransactionHistoryTableHeader";
import TransactionHistoryTableBody from "./TransactionHistoryTableBody";
import TransactionDetails from "./TransactionDetails";

const TransactionHistoryTable = ({ transactions }: { transactions: ITransactionDTO[] }) => {
    const searchParams = useSearchParams();

    /*************************************************************************
     * If user was viewing an transaction detail modal before page reload
     * this will retrieve the transaction which the user was viewing prior to reload
     * and display that transaction
     ************************************************************************/
    const transactionIndex = parseInt(searchParams.get("transaction-index") || "-1");
    const isValidIndex = transactionIndex >= 0 && transactionIndex < transactions.length;

    const [showTransactionDetails, setShowTransactionDetails] = useState<boolean>(isValidIndex);

    return (
        <div className="overflow-auto">
            <Table className="w-[950px] lg:w-full">
                <TransactionHistoryTableHeader />
                <TransactionHistoryTableBody
                    transactions={transactions}
                    setShowTransactionDetails={setShowTransactionDetails}
                />
            </Table>

            {showTransactionDetails && isValidIndex && (
                <TransactionDetails
                    showTransactionDetail
                    setShowTransactionDetail={setShowTransactionDetails}
                    transaction={transactions[transactionIndex]}
                />
            )}
        </div>
    );
};
export default TransactionHistoryTable;
