"use client";

import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import { IPaymentOptionDTO } from "@/app/(auth)/lib/interfaces/interface";
import { IGetStoreInfoResponse } from "@/app/(auth)/lib/interfaces/response.interface";
import { useModalContext } from "@/app/contexts/modalContext";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { postRequest } from "@/lib/utils/apiCaller";
import { QueryClient, useMutation } from "@tanstack/react-query";

/**
 * Custom hook to save bank details of a store
 */

const useSavePaymentOptions = () => {
    const { setCurrentStep } = useStoreSetupContext();
    const { setModalContent, setShowModal } = useModalContext();
    const queryClient = new QueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IPaymentOptionDTO) =>
            postRequest<IPaymentOptionDTO, IGetStoreInfoResponse>({
                url: ``,
                payload,
            }),

        onSuccess: (data) => {
            if (data.message?.toLowerCase() !== "success" || !data.response) {
                showErrorToast({ title: data.message, description: "Something went wrong" });
                return;
            }

            queryClient.invalidateQueries({ queryKey: ["store-info"] });
            setCurrentStep((prev) => prev + 1);
            setShowModal(false);
            setModalContent(null);
        },
        onError(error) {
            handleError(error, "Error saving store bank details");
        },
    });

    return { isSavingPaymentOptions: isPending, savePaymentOptions: mutate };
};

export default useSavePaymentOptions;
