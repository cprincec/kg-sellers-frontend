"use client";

import { patchRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProductVariantDTO } from "../../lib/interfaces/interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IProductResponse } from "../../lib/interfaces/response.interface";
import { useAddProductContext } from "../../contexts/addProductContext";
import { useRouter } from "next/navigation";

/**
 * Custom hook to edit a product variant
 */

const useEditProductVariant = () => {
    const router = useRouter();
    const { setProductDraft } = useAddProductContext();
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IProductVariantDTO) =>
            patchRequest<IProductVariantDTO, IProductResponse>({
                url: "/product/add-product-variant",
                payload,
            }),

        //  const { data } = await axios.get<IGetAllBanksResponse>(
        //     `${process.env.NEXT_PUBLIC_API_BASE_URL_2}/banks/available`
        // );

        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Instantly update cache
            queryClient.setQueryData(["product-raw"], data);
            setProductDraft(data.response);
            router.replace(
                `/products/add-product?step=product-variants&product-id=${data.response.id}&product-action=edit`
            );
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
