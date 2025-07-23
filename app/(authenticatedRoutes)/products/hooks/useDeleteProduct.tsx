"use client";

import { deleteRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// import { useRouter } from "next/navigation";
import { IProduct } from "../lib/interfaces/interface";
import { IGenericResponse } from "../lib/interfaces/response.interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";

/**
 * Custom hook to delete a product
 */

const useDeleteProduct = () => {
    // const router = useRouter();
    // const { setProductDraft } = useAddProductContext();
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IProduct) =>
            deleteRequest<IProduct, IGenericResponse>({
                url: "/product/delete",
                payload,
            }),
        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            console.log(data);

            // Instantly update cache
            queryClient.invalidateQueries({
                queryKey: ["product"],
                exact: false,
            });
            // setProductDraft(data.response);
            // router.replace(`/products/add-product?step=product-variants&product-id=${data.response.id}`);
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error saving product variant");
        },
    });

    return {
        isDeletingProduct: isPending,
        deleteProduct: mutate,
    };
};

export default useDeleteProduct;
