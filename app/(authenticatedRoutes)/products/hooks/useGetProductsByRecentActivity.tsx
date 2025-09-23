"use client";

import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/utils/apiCaller";
import { IGetPaginatedProducts } from "../lib/interfaces/response.interface";

/**
 * Custom hook to fetch paginated products by recent activity
 */

const useGetProductsByRecentActivity = () => {
    const { storeInfo } = useGetStoreInfo();
    const searchParams = useSearchParams();
    const page = searchParams.get("page") ?? 1;

    const { isLoading, data, error } = useQuery({
        queryKey: ["products", page],
        queryFn: () =>
            getRequest<IGetPaginatedProducts>({
                url: `/product/store-management/${storeInfo?.id}/${Number(page) - 1}`,
            }),

        enabled: !!storeInfo?.id && !!page,
        throwOnError: true,
    });

    return { products: data, isFetchingProducts: isLoading, errorFetchingProducts: error };
};

export default useGetProductsByRecentActivity;
