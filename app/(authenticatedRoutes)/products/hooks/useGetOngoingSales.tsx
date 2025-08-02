"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetOngoingSalesResponse } from "../lib/interfaces/response.interface";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";

/**
 * Custom hook to fetch stats for the products overview page.
 */

const useGetOngoingSales = () => {
    const { storeInfo } = useGetStoreInfo();

    const { isLoading, error, data } = useQuery({
        queryKey: ["ongoing-sales"],
        queryFn: () =>
            getRequest<IGetOngoingSalesResponse>({
                url: "/sales",
            }),
        enabled: !!storeInfo?.id,
        throwOnError: true,
        staleTime: 1000 * 60 * 20,
    });

    return { ongoingSales: data?.response, isFetchingOngoingSales: isLoading, error };
};

export default useGetOngoingSales;
