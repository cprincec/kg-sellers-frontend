"use client";

import { patchRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IEditProductVariant } from "../../lib/interfaces/interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IProductResponse } from "../../lib/interfaces/response.interface";
import { useRouter } from "next/navigation";

/**
 * Custom hook to edit a product variant
 */

// The productAction parameter indicates if user is editing a variant of a new product
// or editing a variant of an existing product
const useEditProductVariant = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: ({ payload }: { payload: IEditProductVariant; redirectUrl: string }) =>
            patchRequest<IEditProductVariant, IProductResponse>({
                url: "/product/edit-product-variant",
                payload,
            }),
        onSuccess: (data, variables) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Instantly update cache
            queryClient.setQueryData(["product-raw", data.response.id], data);
            queryClient.invalidateQueries({ queryKey: ["products"], exact: false });

            router.replace(variables.redirectUrl);
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error editing product variant");
        },
    });

    return {
        isEditingProductVariant: isPending,
        editProductVariant: mutate,
    };
};

export default useEditProductVariant;
