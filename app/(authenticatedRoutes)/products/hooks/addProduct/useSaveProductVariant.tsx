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

const useSaveProductVariant = () => {
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

            // Instantly update cache
            queryClient.setQueryData(["product-raw"], data);
            setProductDraft(data.response);
            router.replace(`/products/add-product?step=product-variants&product-id=${data.response.id}`);
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
