"use client";

import { patchRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProductCategoryDTO } from "../../lib/interfaces/interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IProductResponse } from "../../lib/interfaces/response.interface";
import { useAddProductContext } from "../../contexts/addProductContext";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

/**
 * Custom hook to edit product category
 */

const useEditProductCategory = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { setProductDraft } = useAddProductContext();

    const { isPending, mutate } = useMutation({
        mutationFn: ({ productId, payload }: { productId: string; payload: IProductCategoryDTO }) => {
            return patchRequest<IProductCategoryDTO, IProductResponse>({
                url: `/product/edit-category/${productId}`,
                payload,
            });
        },
        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // update cache
            queryClient.refetchQueries({ queryKey: ["product-raw"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["product-description"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["products"], exact: false });

            setProductDraft(data.response);
            startTransition(() =>
                router.replace(
                    `/products/add-product?step=product-details&product-id=${data.response.id}&product-action=edit`
                )
            );
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error editing product category");
        },
    });

    return { isEditingProductCategory: isPending, editProductCategory: mutate };
};

export default useEditProductCategory;
