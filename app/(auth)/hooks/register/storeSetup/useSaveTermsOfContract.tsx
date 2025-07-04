"use client";

import { ITermsAndConditionsDTO } from "@/app/(auth)/lib/interfaces/interface";
import { IGetStoreInfoResponse } from "@/app/(auth)/lib/interfaces/response.interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { postRequest } from "@/lib/utils/apiCaller";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

/**
 * Custom hook to save terms of contract.
 */

const useSaveTermsOfContract = () => {
    const queryClient = new QueryClient();
    const router = useRouter();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: ITermsAndConditionsDTO) =>
            postRequest<ITermsAndConditionsDTO, IGetStoreInfoResponse>({
                url: ``,
                payload,
            }),
        onSuccess: (data) => {
            if (data.message?.toLowerCase() !== "success" || !data.response) {
                showErrorToast({ title: data.message, description: "Something went wrong" });
                return;
            }

            queryClient.invalidateQueries({ queryKey: ["store-info"] });
            router.replace("/dashboard");
        },
        onError(error) {
            handleError(error, "Error saving terms of contract");
        },
    });

    return { isSavingTermsOfContract: isPending, saveTermsOfContract: mutate };
};

export default useSaveTermsOfContract;
