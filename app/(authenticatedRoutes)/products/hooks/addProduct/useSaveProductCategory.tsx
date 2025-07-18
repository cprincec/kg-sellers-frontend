"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProductCategoryDTO } from "../../lib/interfaces/interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IProductResponse } from "../../lib/interfaces/response.interface";
import { useAddProductContext } from "../../contexts/addProductContext";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

/**
 * Custom hook to send product category to the Backend.
 */

const useSaveProductCategory = () => {
    const router = useRouter();
    const { storeId, setProductDraft } = useAddProductContext();
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IProductCategoryDTO) => {
            if (!storeId) throw new Error("No store Id");

            return postRequest<IProductCategoryDTO, IProductResponse>({
                url: `/product/add-category?storeId=${storeId}`,
                payload,
            });
        },
        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Instantly update cache
            queryClient.setQueryData(["product-raw"], data);
            setProductDraft(data.response);
            startTransition(() =>
                router.replace(`/products/add-product?step=product-details&product-id=${data.response.id}`)
            );
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error saving product category");
        },
    });

    return { isSavingProductCategory: isPending, saveProductCategory: mutate };
};

export default useSaveProductCategory;
