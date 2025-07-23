"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IProductsOverviewResponse } from "../lib/interfaces/response.interface";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";

/**
 * Custom hook to fetch stats for the products overview page.
 */

const useGetProductsOverview = () => {
    const { storeInfo } = useGetStoreInfo();

    const { isPending, error, data } = useQuery({
        queryKey: ["products-stats"],
        queryFn: () =>
            getRequest<IProductsOverviewResponse>({
                url: `/product/product-overview?storeId=${storeInfo?.id}`,
            }),
        enabled: !!storeInfo?.id,
        throwOnError: true,
    });

    return { productsOverviewData: data?.response, isFetchingProductsOverview: isPending, error };
};

export default useGetProductsOverview;
