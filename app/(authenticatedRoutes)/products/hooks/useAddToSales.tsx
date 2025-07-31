"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IGenericResponse } from "../lib/interfaces/response.interface";
import { handleError, showErrorToast } from "@/app/lib/utils/utils";
import { IAddToSalesDTO } from "../lib/interfaces/interface";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

type AddToSalesArgs = {
    productId: string;
    kaigloSale: string;
    payload: IAddToSalesDTO[];
};

const useAddToSales = () => {
    const queryClient = useQueryClient();
    const { deleteSearchParams } = useUpdateSearchParams();

    const { isPending, mutate } = useMutation({
        mutationFn: ({ productId, kaigloSale, payload }: AddToSalesArgs) =>
            postRequest<{ item: IAddToSalesDTO[] }, IGenericResponse>({
                url: `/product/sales/add/${productId}/${kaigloSale}`,
                payload: { item: payload },
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

            deleteSearchParams(["product-action", "product-id"]);
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error adding product to sales");
        },
    });

    return {
        isAddingToSales: isPending,
        addToSales: mutate,
    };
};

export default useAddToSales;
