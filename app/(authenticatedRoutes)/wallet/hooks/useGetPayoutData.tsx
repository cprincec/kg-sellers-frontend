"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetPayoutDataResponse } from "../lib/interface";
import { RESULTS_PER_PAGE } from "@/lib/consts";
import { useSearchParams } from "next/navigation";

/**
 * Custom hook to fetch payout table data
 */

const useGetPayoutData = () => {
    const page = useSearchParams().get("page")?.trim() ?? 0;

    const { isLoading, data, error, refetch, isRefetching } = useQuery({
        queryKey: ["payout-data"],
        queryFn: () =>
            postRequest<null, IGetPayoutDataResponse>({
                url: `/payouts/histories?page=${Number(page)}&size=${RESULTS_PER_PAGE}`,
            }),
        staleTime: 1000 * 60 * 5,
    });

    return {
        payoutData: data,
        isFetchingPayoutData: isLoading,
        errorFetchingPayoutData: error,
        refetchPayoutData: refetch,
        isRefetchingPayoutData: isRefetching,
    };
};

export default useGetPayoutData;
