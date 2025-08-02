"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProductVariantDTO } from "../../lib/interfaces/interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IProductResponse } from "../../lib/interfaces/response.interface";
import { useAddProductContext } from "../../contexts/addProductContext";
import { useRouter } from "next/navigation";

/**
 * Custom hook to save a product variant.
 */

// The productAction parameter indicates if user is adding a variant to a new product
// or adding a variant to an existing product
const useSaveProductVariant = (productAction: string) => {
    const router = useRouter();
    const { setProductDraft } = useAddProductContext();
    const queryClient = useQueryClient();

    const { isPending, mutate, isSuccess } = useMutation({
        mutationFn: (payload: IProductVariantDTO) =>
            postRequest<IProductVariantDTO, IProductResponse>({
                url: "/product/add-product-variant",
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

            // update cache
            queryClient.refetchQueries({ queryKey: ["product-raw"], exact: false });
            queryClient.refetchQueries({ queryKey: ["product-description"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["products"], exact: false });

            setProductDraft(data.response);
            router.replace(redirectUrl);
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
