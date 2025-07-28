"use client";

import { deleteRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IEditProductVariant } from "../../lib/interfaces/interface";
import { IGenericResponse } from "../../lib/interfaces/response.interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";

const useDeleteProductVariant = () => {
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IEditProductVariant) =>
            deleteRequest<IEditProductVariant, IGenericResponse>({
                url: "/product/delete-product-variant",
                payload,
            }),
        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Update queries
            // queryClient.refetchQueries({ queryKey: ["products"], exact: false });
            // queryClient.setQueryData(["product-raw"], data.response);
            queryClient.refetchQueries({ queryKey: ["product-raw"] });
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error deleting product variant");
        },
    });

    return {
        isDeletingProductVariant: isPending,
        deleteProductVariant: mutate,
    };
};

export default useDeleteProductVariant;
