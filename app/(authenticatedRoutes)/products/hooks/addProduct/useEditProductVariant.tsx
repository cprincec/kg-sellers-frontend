"use client";

import { patchRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IEditProductVariant } from "../../lib/interfaces/interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IProductResponse } from "../../lib/interfaces/response.interface";
import { useAddProductContext } from "../../contexts/addProductContext";
import { useRouter } from "next/navigation";

/**
 * Custom hook to edit a product variant
 */

// The productAction parameter indicates if user is editing a variant of a new product
// or editing a variant of an existing product
const useEditProductVariant = (productAction: string) => {
    const router = useRouter();
    const { setProductDraft } = useAddProductContext();
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IEditProductVariant) =>
            patchRequest<IEditProductVariant, IProductResponse>({
                url: "/product/edit-product-variant",
                payload,
            }),
        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            const redirectUrl =
                productAction === "edit"
                    ? `/products/add-product?step=product-variants&product-id=${data.response.id}&product-action=edit`
                    : `/products/add-product?step=product-variants&product-id=${data.response.id}`;

            // Instantly update cache
            queryClient.refetchQueries({ queryKey: ["product-raw"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["product-description"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["products"], exact: false });

            setProductDraft(data.response);
            router.replace(redirectUrl);
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
