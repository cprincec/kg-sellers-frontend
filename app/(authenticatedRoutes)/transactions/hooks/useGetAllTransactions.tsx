"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { RESULTS_PER_PAGE } from "@/lib/consts";
import { useSearchParams } from "next/navigation";
import { IGetAllTransactionsResponse } from "../lib/interface";

/**
 * Custom hook to fetch all transactions
 */

const useGetAllTransactions = () => {
    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;

    const { isLoading, data, error } = useQuery({
        queryKey: ["transactions"],
        queryFn: () =>
            getRequest<IGetAllTransactionsResponse>({
                url: `/seller-wallets/histories?page=${page}&size=${RESULTS_PER_PAGE}`,
            }),
        throwOnError: true,
        staleTime: 1000 * 60 * 5,
    });

    return { transactions: data, isFetchingTransactions: isLoading, errorFetchingTransactions: error };
};

export default useGetAllTransactions;
