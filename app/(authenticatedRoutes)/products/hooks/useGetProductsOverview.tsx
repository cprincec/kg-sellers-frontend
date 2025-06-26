"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IProductsOverviewResponse } from "../lib/interfaces/response.interface";

/**
 * Custom hook to fetch stats for the products overview page.
 * Uses React Query for data fetching and caching.
 */

const useGetProductsOverview = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ["products-stats"],
        queryFn: () =>
            getRequest<IProductsOverviewResponse>({
                url: "/product/product-overview?storeId=1",
            }),
        throwOnError: true,
    });

    return { productsOverviewData: data?.response, isFetchingProductsOverview: isPending, error };
};

export default useGetProductsOverview;
