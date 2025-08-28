"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { IStorePerformance } from "../lib/interface";

/**
 * Custom hook to fetch weekly store performance for dashboard
 */

const useGetStorePerformance = () => {
    const { storeInfo } = useGetStoreInfo();

    const { isLoading, data, error, isRefetching, refetch } = useQuery({
        queryKey: ["store-performance"],
        queryFn: () =>
            getRequest<IStorePerformance>({
                url: `/vendor/dashboard/store-product-performance?storeId=${storeInfo?.id}`,
            }),
        enabled: !!storeInfo?.id,
    });

    return {
        storePerformance: data,
        isFetchingStorePerformance: isLoading,
        errorFetchingStorePerformance: error,
        isRefetchingStorePerformance: isRefetching,
        refetchStorePerformance: refetch,
    };
};

export default useGetStorePerformance;
