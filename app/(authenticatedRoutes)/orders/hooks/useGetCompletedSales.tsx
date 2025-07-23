"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { ICompletedSales } from "../lib/interfaces/interface";

/**
 * Custom hook to fetch completed sales
 */

const useGetCompletedSales = () => {
    const { storeInfo } = useGetStoreInfo();

    const { isPending, data, error } = useQuery({
        queryKey: ["completed-sales"],
        queryFn: () =>
            getRequest<ICompletedSales>({
                url: `/store/order/completed-sales?storeId=${storeInfo?.id}`,
            }),
        enabled: !!storeInfo?.id,
        throwOnError: true,
    });

    return { completedSales: data, isFetchingCompletedSales: isPending, errorFetchingCompletedSales: error };
};

export default useGetCompletedSales;
