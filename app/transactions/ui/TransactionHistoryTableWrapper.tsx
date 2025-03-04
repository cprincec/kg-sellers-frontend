"use client";

import { NoResultsIcon } from "../../dashboard/ui/icons";
import TransactionHistoryTable from "./TransactionHistoryTable";
import { useSearchParams } from "next/navigation";
import { transactionsList } from "../lib/data";

/******************************************************************************
 * This component fetches transactions
 * Filters the transactions for search results
 * Sorts the transactions as needed
 * Renders the transactions history table with list of  filterd or/and sorted transactions
 ******************************************************************************/
const TransactionHistoryTableWrapper = () => {
    const searchParams = useSearchParams();
    let transactions = transactionsList;

    const searchingFor = searchParams.get("searching-for");
    const sortBy = searchParams.get("sort-by");
    const sortRange = searchParams.get("sort-range");

    // Set custom message for transaction history results
    let noResultsMessage = "No results yet";
    if (searchingFor) noResultsMessage = `No results for ${searchingFor}`;

    // filter transactions by search string
    if (searchingFor) {
        transactions = transactions.filter((transaction) =>
            transaction.orderId.toLowerCase().includes(searchingFor.toLowerCase())
        );
    }

    // sort by transactions
    if (sortBy && sortRange) {
        // sort by amount
        if (sortBy.toLowerCase() === "amount") {
            if (sortRange.toLowerCase() === "low-to-high") {
                transactions.sort((a, b) => parseFloat(a.payoutAmount) - parseFloat(b.payoutAmount));
            } else if (sortRange.toLowerCase() === "high-to-low") {
                transactions.sort((a, b) => parseFloat(b.payoutAmount) - parseFloat(a.payoutAmount));
            }
        }

        // Sort by quantity
        if (sortBy.toLowerCase() === "quantity") {
            if (sortRange.toLowerCase() === "low-to-high") {
                transactions.sort((a, b) => a.quantity - b.quantity);
            } else if (sortRange.toLowerCase() === "high-to-low") {
                transactions.sort((a, b) => b.quantity - a.quantity);
            }
        }
    }

    return transactions.length ? (
        <TransactionHistoryTable transactions={transactions} />
    ) : (
        <NoResultsIcon title={noResultsMessage} />
    );
};
export default TransactionHistoryTableWrapper;
