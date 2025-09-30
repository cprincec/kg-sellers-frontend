"use client";

import { useQuery } from "@tanstack/react-query";
import { IVerifyBankAccountResponse } from "../lib/interface";
import { getVerifyBankAccountEndpoint } from "../lib/endpoints";
import axios from "axios";

/**
 * Custom hook to verify user bank account details
 */

const useVerifyBankAccount = (accountNumber: string, bankCode: string) => {
    const { isFetching, data, error, refetch, isRefetching } = useQuery({
        queryKey: ["bank-account-verification"],
        queryFn: async () => {
            const { data } = await axios.get<IVerifyBankAccountResponse>(
                `${process.env.NEXT_PUBLIC_API_BASE_URL_3}${getVerifyBankAccountEndpoint(
                    accountNumber,
                    // bankCode
                    "001"
                )}`
            );

            console.log(bankCode);
            return data;
        },
        enabled: false,
    });

    return {
        verifyBankAccountResponse: data,
        isFetchingVerifyBankAccountResponse: isFetching,
        errorFetchingVerifyBankAccountResponse: error,
        refetchVerifyBankAccountResponse: refetch,
        isRefetchingVerifyBankAccountResponse: isRefetching,
    };
};

export default useVerifyBankAccount;
