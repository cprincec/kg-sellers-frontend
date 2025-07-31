"use client";

import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { useSearchParams } from "next/navigation";
import { getRequest } from "@/lib/utils/apiCaller";
import { IGetPaginatedProducts } from "../lib/interfaces/response.interface";
import { RESULTS_PER_PAGE } from "@/lib/consts";

/**
 * Custom hook to fetch products by search term
 */
const useGetProductsBySearchTerm = () => {
    const { storeInfo } = useGetStoreInfo();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searching-for")?.trim();

    const { isLoading, data, error } = useQuery({
        queryKey: ["products", searchTerm],
        queryFn: () =>
            getRequest<IGetPaginatedProducts>({
                url: `product/search-overview?page=0&searchTerm=${searchTerm}&size=${RESULTS_PER_PAGE}&storeId=${storeInfo?.id}`,
            }),
        enabled: !!searchTerm && !!storeInfo?.id,
        throwOnError: true,
    });

    return {
        productsBySearchTerm: data,
        isFetchingProductsBySearchTerm: isLoading,
        errorFetchingProductsBySearchTerm: error,
    };
};

export default useGetProductsBySearchTerm;
