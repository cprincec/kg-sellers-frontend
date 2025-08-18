"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IStoreDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";

/**
 * Custom hook to fetch the default values for store details form on settings page
 */

const useGetStoreDetails = () => {
    const { isPending, data, error, refetch, isRefetching } = useQuery({
        queryKey: ["store-details-default"],
        queryFn: () =>
            getRequest<IStoreDetailsDTO>({
                url: "/store-setting/store-detail",
            }),
        staleTime: 1000 * 60 * 60,
    });

    return {
        storeDetails: data,
        isFetchingStoreDetails: isPending,
        errorFetchingStoreDetail: error,
        refetchStoreDetails: refetch,
        isRefetchingStoreDetails: isRefetching,
    };
};

export default useGetStoreDetails;
