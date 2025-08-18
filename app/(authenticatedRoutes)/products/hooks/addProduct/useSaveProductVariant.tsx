"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProductVariantDTO } from "../../lib/interfaces/interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IProductResponse } from "../../lib/interfaces/response.interface";
import { useRouter } from "next/navigation";

/**
 * Custom hook to save a product variant.
 */

// The productAction parameter indicates if user is adding a variant to a new product
// or adding a variant to an existing product
const useSaveProductVariant = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { isPending, mutate, isSuccess } = useMutation({
        mutationFn: ({ payload }: { payload: IProductVariantDTO; redirectUrl: string }) =>
            postRequest<IProductVariantDTO, IProductResponse>({
                url: "/product/add-product-variant",
                payload,
            }),
        onSuccess: (data, variables) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // update cache
            queryClient.setQueryData(["product-raw", data.response.id], data);
            queryClient.invalidateQueries({ queryKey: ["products"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["products-stats"] });

            router.replace(variables.redirectUrl);
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error saving product variant");
        },
    });

    return {
        isSavingProductVariant: isPending,
        saveProductVariant: mutate,
        successSavingProductVariant: isSuccess,
    };
};

export default useSaveProductVariant;
