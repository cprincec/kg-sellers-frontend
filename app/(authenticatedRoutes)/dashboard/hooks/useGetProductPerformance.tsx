"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { IWeeklyProductPerformance } from "../lib/interface";

/**
 * Custom hook to fetch weekly product performance for dashboard
 */

const useGetProductPerformance = () => {
    const { storeInfo } = useGetStoreInfo();

    const { isLoading, data, error, isRefetching, refetch } = useQuery({
        queryKey: ["product-performance"],
        queryFn: () =>
            getRequest<IWeeklyProductPerformance>({
                url: `/vendor/dashboard/store-weekly-product-performance?storeId=${storeInfo?.id}`,
            }),
        enabled: !!storeInfo?.id,
    });

    return {
        productPerformance: data,
        isFetchingProductPerformance: isLoading,
        errorFetchingProductPerformance: error,
        isRefetchingProductPerformance: isRefetching,
        refetchProductPerformance: refetch,
    };
};

export default useGetProductPerformance;
