"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation } from "@tanstack/react-query";
import { handleError } from "@/app/lib/utils/utils";
import { IGenericResponse } from "@/app/(authenticatedRoutes)/products/lib/interfaces/response.interface";
import { useStoreSetupContext } from "../../contexts/storeSetupContext";
import { IStoreDetailsDTO } from "../../lib/interfaces/interface";

/**
 * Custom hook to send store details to the Backend.
 */

const useSaveStoreDetails = () => {
    const { setCurrentStep } = useStoreSetupContext();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IStoreDetailsDTO) =>
            postRequest<IStoreDetailsDTO, IGenericResponse>({
                url: `/onboarding/store-information/create`,
                payload,
            }),

        onSuccess: () => {
            setCurrentStep((prev) => prev++);
        },
        onError: (error) => {
            handleError(error, "Error saving store information");
        },
    });

    return { isSavingStoreDetails: isPending, saveStoreDetails: mutate };
};

export default useSaveStoreDetails;
