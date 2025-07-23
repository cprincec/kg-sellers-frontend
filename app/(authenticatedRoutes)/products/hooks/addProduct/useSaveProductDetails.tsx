"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProductDetailsDTO } from "../../lib/interfaces/interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IProductResponse } from "../../lib/interfaces/response.interface";
import { useAddProductContext } from "../../contexts/addProductContext";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

/**
 * Custom hook to send product details to the Backend.
 */

const useSaveProductDetails = () => {
    const router = useRouter();
    const { setProductDraft } = useAddProductContext();
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: ({ payload, productId }: { payload: IProductDetailsDTO; productId: string }) =>
            postRequest<IProductDetailsDTO, IProductResponse>({
                url: `/product/add-product-info?productID=${productId}`,
                payload,
            }),

        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Instantly update cache
            queryClient.setQueryData(["product-raw"], data);
            setProductDraft(data.response);
            startTransition(() =>
                router.replace(`/products/add-product?step=product-variants&product-id=${data.response.id}`)
            );
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error saving product info");
        },
    });

    return { isSavingProductDetails: isPending, saveProductDetails: mutate };
};

export default useSaveProductDetails;
