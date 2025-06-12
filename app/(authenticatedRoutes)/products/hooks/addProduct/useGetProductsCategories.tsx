"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetAllProductsCategoriesResponse } from "../../lib/interface";

/**
 * Custom hook to fetch product categories from the API.
 * Uses React Query for data fetching and caching.
 */

const useGetProductsCategories = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ["products-categories"],
        queryFn: () =>
            getRequest<IGetAllProductsCategoriesResponse>({
                url: "/product-category/all",
            }),
        throwOnError: () => {
            return true;
        },
    });

    return { data: data?.response, isPending, error };
};

export default useGetProductsCategories;
