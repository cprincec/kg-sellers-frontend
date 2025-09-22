"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IGenericResponse } from "../lib/interfaces/response.interface";
import { handleError, showErrorToast, showSuccessToast } from "@/app/lib/utils/utils";

const useToggleProductStatus = () => {
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: ({ productId, isPaused }: { productId: string; isPaused: boolean }) =>
            postRequest<{ handler: string; notes: string }, IGenericResponse>({
                url: `/product/pause/${productId}?isPaused=${isPaused}`,
                payload: { handler: "", notes: "" },
            }),
        onSuccess: (data, variables) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            showSuccessToast({
                title: `Product ${variables.isPaused === true ? "paused" : "activated"} successfully`,
            });

            // Update queries
            queryClient.refetchQueries({ queryKey: ["products"], exact: false });
            queryClient.refetchQueries({ queryKey: ["products-stats"] });
            queryClient.invalidateQueries({ queryKey: ["product-raw"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["product-description"], exact: false });
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error toggling product status");
        },
    });

    return {
        isTogglingProductStatus: isPending,
        toggleProductStatus: mutate,
    };
};

export default useToggleProductStatus;
