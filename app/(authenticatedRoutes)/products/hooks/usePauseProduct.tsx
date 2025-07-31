"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IGenericResponse } from "../lib/interfaces/response.interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";

const usePauseProduct = () => {
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (productId: string) =>
            postRequest<{ handler: string; notes: string }, IGenericResponse>({
                url: `/product/pause/${productId}?isPaused=true`,
                payload: { handler: "", notes: "" },
            }),
        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Update queries
            queryClient.refetchQueries({ queryKey: ["products"], exact: false });
            queryClient.refetchQueries({ queryKey: ["products-stats"] });
            queryClient.invalidateQueries({ queryKey: ["product-raw"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["product-description"], exact: false });
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error pausing product");
        },
    });

    return {
        isPausingProduct: isPending,
        pauseProduct: mutate,
    };
};

export default usePauseProduct;
