"use client";

import { useQuery } from "@tanstack/react-query";
import { IGetAllBanksResponse } from "../../../lib/interfaces/response.interface";
import axios from "axios";

/**
 * Custom hook to fetch all available banks
 */

const useGetAllBanks = () => {
    const { isPending, data } = useQuery({
        queryKey: ["all-banks"],
        queryFn: async () => {
            const { data } = await axios.get<IGetAllBanksResponse>(
                "https://kg-buy-sell-api-v2.kaidev.xyz/banks/available"
            );
            return data;
        },

        retry: false,
        throwOnError: true,
        staleTime: 1000 * 60 * 60,
    });

    return {
        banks: data?.response,
        isFetchingBanks: isPending,
    };
};

export default useGetAllBanks;
