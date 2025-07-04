"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetStoreInfoResponse } from "../../../lib/interfaces/response.interface";

/**
 * Custom hook to fetch all data about a store
 */

const useGetStoreInfo = () => {
    const { isPending, data } = useQuery({
        queryKey: ["store-info"],
        queryFn: () =>
            getRequest<IGetStoreInfoResponse>({
                url: "/onboarding/store-information/get",
            }),

        retry: false,
        throwOnError: true,
        staleTime: 1000 * 60 * 5,
    });

    return {
        storeInfo: data?.response,
        isFetchingStoreInfo: isPending,
    };
};

export default useGetStoreInfo;
