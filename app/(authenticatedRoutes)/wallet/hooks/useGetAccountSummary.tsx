"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetAccountSummaryResponse } from "../lib/interface";

/**
 * Custom hook to fetch all orders
 */

const useGetAccountSummary = () => {
    const { isLoading, data, error } = useQuery({
        queryKey: ["account-summary"],
        queryFn: () =>
            getRequest<IGetAccountSummaryResponse>({
                url: `/seller-wallets/get-wallet-info`,
            }),
        staleTime: 1000 * 60 * 5,
    });

    return {
        accountSummary: data?.response,
        isFetchingAccountSummary: isLoading,
        errorFetchingAccountSummary: error,
    };
};

export default useGetAccountSummary;
