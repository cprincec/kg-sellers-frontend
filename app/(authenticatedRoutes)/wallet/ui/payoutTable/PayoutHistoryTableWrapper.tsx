"use client";

import { NoResultsIcon } from "../../../dashboard/ui/icons";
import PayoutHistoryTable from "./PayoutHistoryTable";
import { TableError } from "@/app/ui/errors";
import TableSkeleton from "@/app/ui/skeletons/TableSkeleton";
import useGetPayoutData from "../../hooks/useGetPayoutData";

/******************************************************************************
 * This component fetches payout history
 * Filters the history data as needed and renders payout history table
 ******************************************************************************/
const PayoutHistoryTableWrapper = () => {
    const {
        payoutData,
        isFetchingPayoutData,
        errorFetchingPayoutData,
        refetchPayoutData,
        isRefetchingPayoutData,
    } = useGetPayoutData();

    if (isFetchingPayoutData || isRefetchingPayoutData) return <TableSkeleton />;

    if (errorFetchingPayoutData || payoutData === null)
        return (
            <TableError title="There was an error fetching payout data." retryFunction={refetchPayoutData} />
        );

    return payoutData?.content.length ? (
        <PayoutHistoryTable
            payoutHistory={payoutData.content}
            totalPages={payoutData.totalPages}
            pageSize={payoutData.pageable.pageSize}
        />
    ) : (
        <NoResultsIcon title={"No payout data"} />
    );
};

export default PayoutHistoryTableWrapper;
