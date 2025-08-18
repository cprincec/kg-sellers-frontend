"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetWalletDataResponse } from "../lib/interface";
import { RESULTS_PER_PAGE } from "@/lib/consts";
import { useSearchParams } from "next/navigation";

/**
 * Custom hook to fetch wallet table data
 */

const useGetWalletData = () => {
    const page = useSearchParams().get("page")?.trim() ?? 1;

    const { isLoading, data, error, refetch, isRefetching } = useQuery({
        queryKey: ["wallet-data"],
        queryFn: () =>
            getRequest<IGetWalletDataResponse>({
                url: `/seller-wallets/wallet?page=${Number(page) - 1}&size=${RESULTS_PER_PAGE}`,
            }),
        staleTime: 1000 * 60 * 5,
    });

    return {
        walletData: data,
        isFetchingWalletData: isLoading,
        errorFetchingWalletData: error,
        refetchWalletData: refetch,
        isRefetchingWalletData: isRefetching,
    };
};

export default useGetWalletData;
