"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { ISalesPerformance } from "../lib/interface";

/**
 * Custom hook to fetch sales performance chart data for dashboard
 */

const useGetSalesPerformance = () => {
    const { storeInfo } = useGetStoreInfo();

    const { isLoading, data, error, refetch, isRefetching } = useQuery({
        queryKey: ["sales-performance"],
        queryFn: () =>
            getRequest<ISalesPerformance>({
                url: `/vendor/dashboard/store-sales-performance?storeId=${storeInfo?.id}`,
            }),
        enabled: !!storeInfo?.id,
    });

    return {
        salesPerformance: data,
        isFetchingSalesPerformance: isLoading,
        errorFetchingSalesPerformance: error,
        isRefetchingSalesPerformance: isRefetching,
        refetchSalesPerformance: refetch,
    };
};

export default useGetSalesPerformance;
