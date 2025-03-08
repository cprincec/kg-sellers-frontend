"use client";

import { NoResultsIcon } from "../../../dashboard/ui/icons";
import WalletHistoryTable from "./WalletHistoryTable";
import { useSearchParams } from "next/navigation";
import { walletList } from "../../lib/data";
import { RESULTS_PER_PAGE } from "@/lib/consts";

/******************************************************************************
 * This component fetches wallet history
 * Filters the history data as needed and renders the wallet history table
 ******************************************************************************/
const WalletHistoryTableWrapper = () => {
    const searchParams = useSearchParams();
    // const tab = searchParams.get("tab");

    // Get page number from Url
    const pageParam = searchParams.get("page");
    const page = pageParam !== null ? parseInt(pageParam) : 1;
    const walletHistory = walletList ?? [];

    let paginatedWalletHistory;

    if (walletHistory.length <= RESULTS_PER_PAGE) {
        paginatedWalletHistory = walletHistory;
    } else {
        // Select 10 wallet history data
        const start = (page - 1) * RESULTS_PER_PAGE;
        const end = start + RESULTS_PER_PAGE;
        paginatedWalletHistory = walletHistory.slice(start, end);
    }

    return walletHistory?.length ? (
        <WalletHistoryTable walletHistory={paginatedWalletHistory} />
    ) : (
        <NoResultsIcon title={"No results"} />
    );
};
export default WalletHistoryTableWrapper;
