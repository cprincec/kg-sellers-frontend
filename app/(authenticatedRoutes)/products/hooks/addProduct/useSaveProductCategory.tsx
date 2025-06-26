"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation } from "@tanstack/react-query";
import { IProductCategoryDTO } from "../../lib/interfaces/interface";
import { handleError } from "@/app/lib/utils/utils";
import { startTransition } from "react";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { IGenericResponse } from "../../lib/interfaces/response.interface";

/**
 * Custom hook to send product category to the Backend.
 */

const useSaveProductCategory = () => {
    const { setSearchParams } = useUpdateSearchParams();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IProductCategoryDTO) =>
            postRequest<IProductCategoryDTO, IGenericResponse>({
                url: `/product/add-category?storeId=1`,
                payload,
            }),

        onSuccess: (data, variables) => {
            console.log("data", data);
            console.log("variable", variables);
            startTransition(() => {
                setSearchParams([{ step: "product-details" }]);
            });
        },
        onError: (error) => {
            console.error(error);
            handleError(error, "Error saving product category");
        },
    });

    return { isSavingProductCategory: isPending, saveProductCategory: mutate };
};

export default useSaveProductCategory;
