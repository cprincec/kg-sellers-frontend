"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetPaginatedProducts } from "../lib/interfaces/response.interface";
import { RESULTS_PER_PAGE } from "@/lib/consts";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { useSearchParams } from "next/navigation";

/**
 * Custom hook to fetch paginated products by recent activity
 */

const useGetProductsByRecentActivity = () => {
    const { storeInfo } = useGetStoreInfo();
    const searchParams = useSearchParams();
    const page = searchParams.get("page") ?? 1;

    const { isPending, data, error } = useQuery({
        queryKey: ["products", page],
        queryFn: () =>
            getRequest<IGetPaginatedProducts>({
                url: `/product/product-most-recent?page=${page}&size=${RESULTS_PER_PAGE}&storeId=${storeInfo?.id}`,
            }),
        enabled: !!storeInfo?.id,
        throwOnError: true,
    });

    return { products: data, isFetchingProducts: isPending, ErrorFetchingProducts: error };
};

export default useGetProductsByRecentActivity;
