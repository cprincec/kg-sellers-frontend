"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { useStoreSetupContext } from "../../../contexts/storeSetupContext";
import { IStoreDetailsDTO } from "../../../lib/interfaces/interface";
import { IGetStoreInfoResponse } from "../../../lib/interfaces/response.interface";

/**
 * Custom hook to send store details to the Backend
 */

const useSaveStoreDetails = () => {
    const { setCurrentStep, setOnboardingData } = useStoreSetupContext();
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IStoreDetailsDTO) => {
            return postRequest<IStoreDetailsDTO, IGetStoreInfoResponse>({
                url: `/onboarding/store-information/create`,
                payload,
            });
        },
        onSuccess: (data, variables) => {
            if (data.message?.toLowerCase() !== "success" || !data.response) {
                showErrorToast({ title: data.message, description: "Something went wrong" });
                return;
            }

            queryClient.invalidateQueries({ queryKey: ["store-info"] });
            setOnboardingData((prev) => ({ ...prev, storeDetails: variables }));
            setCurrentStep((prev) => prev + 1);
        },
        onError(error) {
            handleError(error, "Error saving store details");
        },
    });

    return { isSavingStoreDetails: isPending, saveStoreDetails: mutate };
};

export default useSaveStoreDetails;
