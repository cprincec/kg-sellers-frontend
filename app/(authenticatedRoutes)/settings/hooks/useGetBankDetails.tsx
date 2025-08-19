"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IBankDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";

/**
 * Custom hook to fetch the default values for payment option form on settings page
 */

const useGetStoreBankDetails = () => {
    const { isPending, data, error, refetch, isRefetching } = useQuery({
        queryKey: ["store-bank-details"],
        queryFn: () =>
            getRequest<IBankDetailsDTO>({
                url: "/store-setting/bank-detail",
            }),
        staleTime: 1000 * 60 * 60,
    });

    return {
        storeBankDetails: data,
        isFetchingStoreBankDetails: isPending,
        errorFetchingStoreBankDetail: error,
        refetchStoreBankDetails: refetch,
        isRefetchingStoreBankDetails: isRefetching,
    };
};

export default useGetStoreBankDetails;
