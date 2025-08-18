"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { RESULTS_PER_PAGE } from "@/lib/consts";
import { useSearchParams } from "next/navigation";
import { IGetAllOrdersResponse } from "../lib/interfaces/response.interface";

/**
 * Custom hook to fetch all orders
 */

const useGetAllOrders = () => {
    const { storeInfo } = useGetStoreInfo();
    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;

    const { isLoading, data, error, isRefetching, refetch } = useQuery({
        queryKey: ["orders"],
        queryFn: () =>
            getRequest<IGetAllOrdersResponse>({
                url: `/store/order/get-orders?page=${page - 1}&size=${RESULTS_PER_PAGE}&storeId=${
                    storeInfo?.id
                }`,
            }),
        enabled: !!storeInfo?.id,
        throwOnError: true,
        staleTime: 1000 * 60 * 5,
    });

    return {
        orders: data,
        isFetchingOrders: isLoading,
        errorFetchingOrders: error,
        isRefetchingOrders: isRefetching,
        refetchOrders: refetch,
    };
};

export default useGetAllOrders;
