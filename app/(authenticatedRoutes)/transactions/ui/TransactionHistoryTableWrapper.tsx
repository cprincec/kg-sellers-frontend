"use client";

import { NoResultsIcon } from "../../dashboard/ui/icons";
import TransactionHistoryTable from "./TransactionHistoryTable";
import { useSearchParams } from "next/navigation";
import useGetAllTransactions from "../hooks/useGetAllTransactions";
import Loader from "@/app/ui/Loader";

const TransactionHistoryTableWrapper = () => {
    const searchParams = useSearchParams();
    const { transactions, isFetchingTransactions } = useGetAllTransactions();

    const searchingFor = searchParams.get("searching-for");
    // const sortBy = searchParams.get("sort-by");
    // const sortRange = searchParams.get("sort-range");

    // Set custom message for transaction history results
    let noResultsMessage = "You have no transactions";
    if (searchingFor) noResultsMessage = `No results for ${searchingFor}`;

    // filter transactions by search string
    // if (searchingFor) {
    //     transactions = transactions.filter((transaction) =>
    //         transaction.orderId.toLowerCase().includes(searchingFor.toLowerCase())
    //     );
    // }

    // sort by transactions
    // if (sortBy && sortRange) {
    //     // sort by amount
    //     if (sortBy.toLowerCase() === "amount") {
    //         if (sortRange.toLowerCase() === "low-to-high") {
    //             transactions.sort((a, b) => parseFloat(a.payoutAmount) - parseFloat(b.payoutAmount));
    //         } else if (sortRange.toLowerCase() === "high-to-low") {
    //             transactions.sort((a, b) => parseFloat(b.payoutAmount) - parseFloat(a.payoutAmount));
    //         }
    //     }

    //     // Sort by quantity
    //     if (sortBy.toLowerCase() === "quantity") {
    //         if (sortRange.toLowerCase() === "low-to-high") {
    //             transactions.sort((a, b) => a.quantity - b.quantity);
    //         } else if (sortRange.toLowerCase() === "high-to-low") {
    //             transactions.sort((a, b) => b.quantity - a.quantity);
    //         }
    //     }
    // }

    if (isFetchingTransactions) return <Loader />;

    return transactions?.content.length ? (
        <TransactionHistoryTable
            totalPages={transactions.totalPages}
            pageSize={transactions.size}
            transactions={transactions.content}
        />
    ) : (
        <NoResultsIcon title={noResultsMessage} />
    );
};
export default TransactionHistoryTableWrapper;
