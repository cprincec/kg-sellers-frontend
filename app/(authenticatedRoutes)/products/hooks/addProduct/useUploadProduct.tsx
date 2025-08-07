"use client";

import { patchRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError, showErrorToast, showSuccessToast } from "@/app/lib/utils/utils";
import { IGenericResponse } from "../../lib/interfaces/response.interface";
import { useRouter } from "next/navigation";

/**
 * Custom hook to save a product variant.
 */

const useUploadProduct = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    const { isPending, mutate } = useMutation({
        mutationFn: (productId: string) =>
            patchRequest<null, IGenericResponse>({
                url: `/product/upload-product?productID=${productId}`,
            }),

        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Instantly update cache
            queryClient.invalidateQueries({ queryKey: ["product-raw"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["product-description"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["products"], exact: false });

            router.replace("/products");
            showSuccessToast({
                title: "Your product upload was successful and being reviewed",
            });
        },

        onError: (error) => {
            console.error(error);
            handleError(error, "Error uploading product");
        },
    });

    return {
        isUploadingProduct: isPending,
        uploadProduct: mutate,
    };
};

export default useUploadProduct;
