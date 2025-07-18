"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IProductResponse } from "../../lib/interfaces/response.interface";

/**
 * Custom hook to fetch product in draft status
 **/

const useGetRawProduct = (productId: string) => {
    const { isPending, data, refetch, isRefetching } = useQuery({
        queryKey: ["product-raw"],
        queryFn: () =>
            getRequest<IProductResponse>({
                url: `/product/raw-product?productID=${productId}`,
            }),
        enabled: !!productId,
        throwOnError: true,
        staleTime: 1000 * 60 * 10,
    });

    return {
        productRaw: data?.response,
        isFetchingProductRaw: isPending,
        isRefetchingProductRaw: isRefetching,
        refetchProductRaw: refetch,
    };
};

export default useGetRawProduct;
