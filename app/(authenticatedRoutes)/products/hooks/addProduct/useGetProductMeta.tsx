"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetProductMetaResponse } from "../../lib/interfaces/response.interface";

/**
 * Custom hook to fetch all products meta data
 */

const useGetProductMeta = () => {
    const { isLoading, data } = useQuery({
        queryKey: ["product-meta"],
        queryFn: () =>
            getRequest<IGetProductMetaResponse>({
                url: "/product-meta/fetch",
            }),
        throwOnError: true,
        staleTime: 1000 * 60 * 120,
    });

    return { productMetaData: data?.response, isFetchingProductMetaData: isLoading };
};

export default useGetProductMeta;
