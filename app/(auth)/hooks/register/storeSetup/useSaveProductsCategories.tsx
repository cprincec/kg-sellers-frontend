"use client";

import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import { IProductsCategoriesDTO } from "@/app/(auth)/lib/interfaces/interface";
import { IGetStoreInfoResponse } from "@/app/(auth)/lib/interfaces/response.interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { postRequest } from "@/lib/utils/apiCaller";
import { QueryClient, useMutation } from "@tanstack/react-query";

/**
 * Custom hook to save list of categories of the products a store sells
 */

const useSaveProductsCategories = () => {
    const { setCurrentStep } = useStoreSetupContext();
    const queryClient = new QueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IProductsCategoriesDTO) =>
            postRequest<IProductsCategoriesDTO, IGetStoreInfoResponse>({
                url: `/onboarding/product-information/add`,
                payload,
            }),
        onSuccess: (data) => {
            if (data.message?.toLowerCase() !== "success" || !data.response) {
                showErrorToast({ title: data.message, description: "Something went wrong" });
                return;
            }

            queryClient.invalidateQueries({ queryKey: ["store-info"] });
            setCurrentStep((prev) => prev + 1);
        },
        onError(error) {
            handleError(error, "Error saving store products categories");
        },
    });

    return { isSavingProductsCategories: isPending, saveProductsCategories: mutate };
};

export default useSaveProductsCategories;
