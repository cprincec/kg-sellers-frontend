"use client";

import { NoResultsIcon } from "../../../dashboard/ui/icons";
import PayoutHistoryTable from "./PayoutHistoryTable";
import { useSearchParams } from "next/navigation";
import { payoutList } from "../../lib/data";
import { RESULTS_PER_PAGE } from "@/lib/consts";

/******************************************************************************
 * This component fetches payout history
 * Filters the history data as needed and renders payout history table
 ******************************************************************************/
const PayoutHistoryTableWrapper = () => {
    const searchParams = useSearchParams();
    // Get page number from Url
    const pageParam = searchParams.get("page");
    const page = pageParam !== null ? parseInt(pageParam) : 1;

    const payoutHistory = payoutList || [];
    let paginatedPayoutHistory;

    if (payoutHistory.length <= RESULTS_PER_PAGE) {
        paginatedPayoutHistory = payoutHistory;
    } else {
        // Select 10 wallet history data
        const start = (page - 1) * RESULTS_PER_PAGE;
        const end = start + RESULTS_PER_PAGE;
        paginatedPayoutHistory = payoutHistory.slice(start, end);
    }

    return payoutHistory?.length ? (
        <PayoutHistoryTable payoutHistory={paginatedPayoutHistory} />
    ) : (
        <NoResultsIcon title={"No results"} />
    );
};
export default PayoutHistoryTableWrapper;
