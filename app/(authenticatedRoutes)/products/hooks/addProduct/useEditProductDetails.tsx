"use client";

import { patchRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProductDetailsDTO } from "../../lib/interfaces/interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IProductResponse } from "../../lib/interfaces/response.interface";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

/**
 * Custom hook to edit product details
 */

const useEditProductDetails = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: ({ payload, productId }: { payload: IProductDetailsDTO; productId: string }) =>
            patchRequest<IProductDetailsDTO, IProductResponse>({
                url: `/product/edit-product-info/${productId}`,
                payload,
            }),

        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Instantly update cache
            queryClient.setQueryData(["product-raw", data.response.id], data);
            queryClient.refetchQueries({ queryKey: ["product-description"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["products"], exact: false });

            startTransition(() =>
                router.replace(
                    `/products/add-product?step=product-variants&product-id=${data.response.id}&product-action=edit`
                )
            );
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error editing product info");
        },
    });

    return { isEditingProductDetails: isPending, editProductDetails: mutate };
};

export default useEditProductDetails;
