"use client";

import { NoResultsIcon } from "../../../dashboard/ui/icons";
import WalletHistoryTable from "./WalletHistoryTable";
import useGetWalletData from "../../hooks/useGetWalletData";
import TableSkeleton from "@/app/ui/skeletons/TableSkeleton";
import { TableError } from "@/app/ui/errors";

/******************************************************************************
 * This component fetches wallet history
 * Filters the history data as needed and renders the wallet history table
 ******************************************************************************/
const WalletHistoryTableWrapper = () => {
    const {
        walletData,
        isFetchingWalletData,
        errorFetchingWalletData,
        refetchWalletData,
        isRefetchingWalletData,
    } = useGetWalletData();

    // Data is yet to start fetching
    // const isUndefined = walletData === undefined;
    if (isFetchingWalletData || isRefetchingWalletData) return <TableSkeleton />;

    if (errorFetchingWalletData || walletData === null)
        return (
            <TableError title="There was an error fetching wallet data." retryFunction={refetchWalletData} />
        );

    return walletData?.content.length ? (
        <WalletHistoryTable
            walletHistory={walletData.content}
            totalPages={walletData.totalPages}
            pageSize={walletData.pageable.pageSize}
        />
    ) : (
        <NoResultsIcon title={"No wallet data"} />
    );
};

export default WalletHistoryTableWrapper;
