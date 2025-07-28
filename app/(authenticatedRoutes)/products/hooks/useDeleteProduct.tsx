"use client";

import { deleteRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../lib/interfaces/interface";
import { IGenericResponse } from "../lib/interfaces/response.interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";

const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: { product: IProduct; message: string }) =>
            deleteRequest<{ product: IProduct; message: string }, IGenericResponse>({
                url: "/product/delete",
                payload,
            }),
        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Update queries
            queryClient.refetchQueries({ queryKey: ["products"], exact: false });
            queryClient.refetchQueries({ queryKey: ["products-stats"] });
            queryClient.invalidateQueries({ queryKey: ["product-raw"] });
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error deleting product");
        },
    });

    return {
        isDeletingProduct: isPending,
        deleteProduct: mutate,
    };
};

export default useDeleteProduct;
