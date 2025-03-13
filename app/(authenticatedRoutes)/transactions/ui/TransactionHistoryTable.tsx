import { ITransactionDTO } from "../lib/interface";
import { Table } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import TransactionHistoryTableHeader from "./TransactionHistoryTableHeader";
import TransactionHistoryTableBody from "./TransactionHistoryTableBody";
import TransactionDetails from "./TransactionDetails";
import PaginationComponent from "@/components/shared/Pagination";
import { RESULTS_PER_PAGE } from "@/lib/consts";

const TransactionHistoryTable = ({ transactions }: { transactions: ITransactionDTO[] }) => {
    const searchParams = useSearchParams();

    // Get page number from Url
    const pageParam = searchParams.get("page");
    const page = pageParam !== null ? parseInt(pageParam) : 1;

    /*************************************************************************
     * If user was viewing an transaction detail modal before page reload
     * this will retrieve the transaction which the user was viewing prior to reload
     * and display that transaction
     ************************************************************************/
    const transactionIndex = parseInt(searchParams.get("transaction-index") || "-1");
    const isValidIndex = transactionIndex >= 0 && transactionIndex < transactions.length;

    const [showTransactionDetails, setShowTransactionDetails] = useState<boolean>(isValidIndex);

    const start = (page - 1) * RESULTS_PER_PAGE;
    const end = start + RESULTS_PER_PAGE;
    const paginatedTransactions = transactions.slice(start, end);
    return (
        <div className="overflow-auto">
            <Table className="w-[950px] lg:w-full border">
                <TransactionHistoryTableHeader />
                <TransactionHistoryTableBody
                    transactions={paginatedTransactions}
                    setShowTransactionDetails={setShowTransactionDetails}
                />
            </Table>

            <PaginationComponent dataLength={transactions.length} />

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
