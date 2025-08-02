"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetProductDescriptionResponse } from "../../lib/interfaces/response.interface";

/**
 * Custom hook to fetch product description
 **/

const useGetProductDescription = (productId: string) => {
    const { isLoading, data } = useQuery({
        queryKey: ["product-description", productId],
        queryFn: () =>
            getRequest<IGetProductDescriptionResponse>({
                url: `/product/product-description?productId=${productId}`,
            }),
        enabled: !!productId,
        throwOnError: true,
    });

    return { productDescription: data?.response, isFetchingProductDescription: isLoading };
};

export default useGetProductDescription;
