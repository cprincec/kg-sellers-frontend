"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { RESULTS_PER_PAGE } from "@/lib/consts";
import { useSearchParams } from "next/navigation";
import { IGetAllOrdersResponse } from "../lib/interfaces/response.interface";
import { orderTabs } from "../lib/data";

/**
 * Custom hook to fetch all orders by order status
 */
const useGetOrdersByStatus = () => {
    const { storeInfo } = useGetStoreInfo();
    const searchParams = useSearchParams();
    const rawStatus = searchParams.get("tab");
    const status = rawStatus?.toUpperCase();
    const page = Number(searchParams.get("page")) || 1;

    const isValidStatus = !!status && status.toLowerCase() !== "all" && orderTabs.includes(status);

    const { isLoading, data, error } = useQuery({
        queryKey: ["orders", status, page],
        queryFn: () =>
            getRequest<IGetAllOrdersResponse>({
                url: `/store/order/get-orders-via-status?orderStatus=${status}&page=${
                    page - 1
                }&size=${RESULTS_PER_PAGE}&storeId=${storeInfo?.id}`,
            }),
        enabled: isValidStatus && !!storeInfo?.id,
        throwOnError: true,
    });

    return {
        ordersByStatus: data,
        isFetchingOrdersByStatus: isLoading,
        errorFetchingOrdersByStatus: error,
    };
};

export default useGetOrdersByStatus;
