"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation } from "@tanstack/react-query";
import { IProductDetailsDTO } from "../../lib/interfaces/interface";
import { handleError } from "@/app/lib/utils/utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { startTransition } from "react";
import { IGenericResponse } from "../../lib/interfaces/response.interface";

/**
 * Custom hook to send product details to the Backend.
 */

const useSaveProductDetails = () => {
    const { setSearchParams } = useUpdateSearchParams();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IProductDetailsDTO) =>
            postRequest<IProductDetailsDTO, IGenericResponse>({
                url: `/product/add-product-info?productID=0`,
                payload,
            }),

        onSuccess: (data, variables) => {
            console.log("data", data);
            console.log("variable", variables);
            startTransition(() => setSearchParams([{ step: "product-variants" }]));
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error saving product info");
        },
    });

    return { isSavingProductDetails: isPending, saveProductDetails: mutate };
};

export default useSaveProductDetails;
