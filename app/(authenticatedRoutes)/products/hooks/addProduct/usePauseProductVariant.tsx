"use client";

import { patchRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IProductResponse } from "../../lib/interfaces/response.interface";
import { IEditProductVariant } from "../../lib/interfaces/interface";

const usePauseProductVariant = () => {
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IEditProductVariant) =>
            patchRequest<IEditProductVariant, IProductResponse>({
                url: `product/pause-product-variant`,
                payload,
            }),
        onSuccess: (data) => {
            if (!data.response) {
                showErrorToast({ title: "Oh something went wrong" });
                return;
            }

            // Update cache
            queryClient.setQueryData(["product-raw", data.response.id], data);
            queryClient.invalidateQueries({ queryKey: ["products"], exact: false });
            queryClient.invalidateQueries({ queryKey: ["products-stats"] });
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error pausing product variant");
        },
    });

    return {
        isPausingProductVariant: isPending,
        pauseProductVariant: mutate,
    };
};

export default usePauseProductVariant;
