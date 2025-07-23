"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";
import { IGenericResponse } from "../../products/lib/interfaces/response.interface";

/**
 * Custom hook to fetch processing sales
 */

const useGetProcessingSales = () => {
    const { storeInfo } = useGetStoreInfo();

    const { isPending, data, error } = useQuery({
        queryKey: ["processing-sales"],
        queryFn: () =>
            getRequest<IGenericResponse>({
                url: `/store/order/processing-sales?storeId=${storeInfo?.id}`,
            }),
        enabled: !!storeInfo?.id,
        throwOnError: true,
    });

    return {
        processingSales: data?.response,
        isFetchingProcessingSales: isPending,
        errorFetchingProcessingSales: error,
    };
};

export default useGetProcessingSales;
