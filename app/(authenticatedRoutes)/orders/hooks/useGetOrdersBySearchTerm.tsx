"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { RESULTS_PER_PAGE } from "@/lib/consts";
import { useSearchParams } from "next/navigation";
import { IGetAllOrdersResponse } from "../lib/interfaces/response.interface";

/**
 * Custom hook to fetch all orders by order search term
 */
const useGetOrdersBySearchTerm = () => {
    const { storeInfo } = useGetStoreInfo();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searching-for")?.trim();
    const page = Number(searchParams.get("page")) || 1;

    const { isLoading, data, error } = useQuery({
        queryKey: ["orders", searchTerm, page],
        queryFn: () =>
            getRequest<IGetAllOrdersResponse>({
                url: `/store/order/search-product-&-sku?page=${
                    page - 1
                }&searchTerm=${searchTerm}&size=${RESULTS_PER_PAGE}&storeId=${storeInfo?.id}`,
            }),
        enabled: !!searchTerm && !!storeInfo?.id,
        throwOnError: true,
    });

    return {
        ordersBySearchTerm: data,
        isFetchingOrdersBySearchTerm: isLoading,
        errorFetchingOrdersBySearchTerm: error,
    };
};

export default useGetOrdersBySearchTerm;
