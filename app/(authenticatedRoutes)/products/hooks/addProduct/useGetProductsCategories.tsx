"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetAllProductsCategoriesResponse } from "../../lib/interfaces/interface";

/**
 * Custom hook to fetch all product categories
 */

const useGetProductsCategories = () => {
    const { isPending, data } = useQuery({
        queryKey: ["products-categories"],
        queryFn: () =>
            getRequest<IGetAllProductsCategoriesResponse>({
                url: "/product-category/all?isLegacy=false",
            }),
        throwOnError: true,
        staleTime: 1000 * 60 * 60 * 2,
    });

    return { productsCategories: data?.response, isFetchingProductsCategories: isPending };
};

export default useGetProductsCategories;
