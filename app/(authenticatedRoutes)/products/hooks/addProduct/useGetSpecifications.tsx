"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetSpecificationsResponse } from "../../lib/interfaces/response.interface";
import useGetProductsCategories from "./useGetProductsCategories";
import { generateProductCategoryDTO, getLeafSubCategoryFromDTO } from "../../lib/utils/addProduct.utils";
import { useEffect, useState } from "react";
import { showErrorToast } from "@/app/lib/utils/utils";
import { useRouter, useSearchParams } from "next/navigation";
import useGetRawProduct from "./useGetRawProduct";

/**
 * Custom hook to fetch all specifications based on selected category tag
 */

const useGetSpecifications = () => {
    const productId = useSearchParams().get("product-id");
    const { productsCategories } = useGetProductsCategories();
    const { productRaw } = useGetRawProduct(productId ?? "");
    const [tag, setTag] = useState<string>("");
    const router = useRouter();

    const handleMissingSpecs = () => {
        showErrorToast({
            title: "No Specifications found for selected category",
            description: "Please select another category",
        });

        if (productId) router.replace(`/products/add-product?step=product-category&product-id=${productId}`);
        else router.replace(`/products/add-product?step=product-category`);
    };

    useEffect(() => {
        if (productRaw && productsCategories) {
            const categoriesObj = generateProductCategoryDTO(productRaw);
            const categoryTag = getLeafSubCategoryFromDTO(categoriesObj, productsCategories)?.tag ?? "";

            if (categoryTag) setTag(categoryTag);
            else handleMissingSpecs();
        }
    }, [productRaw, productsCategories]);

    const { isLoading, data } = useQuery({
        queryKey: ["specifications", tag],
        queryFn: () =>
            getRequest<IGetSpecificationsResponse>({
                url: `/specification/${tag}`,
            }),
        enabled: !!tag,
        throwOnError: true,
        staleTime: 1000 * 60 * 10,
    });

    return { specifications: data?.response, isFetchingSpecifications: isLoading };
};

export default useGetSpecifications;
