"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { IProductSummary } from "../lib/interface";

/**
 * Custom hook to fetch product summary for dashboard
 */

const useGetProductSummary = () => {
    const { storeInfo } = useGetStoreInfo();

    const { isLoading, data, error, refetch, isRefetching } = useQuery({
        queryKey: ["product-summary"],
        queryFn: () =>
            getRequest<IProductSummary>({
                url: `/vendor/dashboard/store-product-summary?storeId=${storeInfo?.id}`,
            }),
        enabled: !!storeInfo?.id,
    });

    return {
        productSummary: data,
        isFetchingProductSummary: isLoading,
        errorFetchingProductSummary: error,
        isRefetchingProductSummary: isRefetching,
        refetchProductSummary: refetch,
    };
};

export default useGetProductSummary;
