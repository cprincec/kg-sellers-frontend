"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetVariantFieldsResponse } from "../../lib/interfaces/response.interface";
import { useEffect, useState } from "react";
import useGetProductsCategories from "./useGetProductsCategories";
import { generateProductCategoryDTO, getLeafSubCategoryFromDTO } from "../../lib/utils/addProduct.utils";
import { useRouter, useSearchParams } from "next/navigation";
import { showErrorToast } from "@/app/lib/utils/utils";
import useGetRawProduct from "./useGetRawProduct";

/**
 * Custom hook to fetch all form fields for a product's variant based on selected category input tag
 */
const useGetVariantFields = () => {
    const router = useRouter();
    const productId = useSearchParams().get("product-id");
    const { productRaw } = useGetRawProduct(productId ?? "");
    const { productsCategories } = useGetProductsCategories();
    const [inputTag, setInputTag] = useState<string>("");

    useEffect(() => {
        if (productRaw && productsCategories) {
            const categoriesObj = generateProductCategoryDTO(productRaw);
            const categoryInputTag =
                getLeafSubCategoryFromDTO(categoriesObj, productsCategories)?.inputTag ?? "";

            if (categoryInputTag) setInputTag(categoryInputTag);
            else {
                showErrorToast({
                    title: "No variant fields found for the selected product category",
                    description: "Please select another category",
                });
                router.replace(`/products/add-product?step=product-category&product-id=${productRaw.id}`);
            }
        }
    }, [productRaw, productsCategories]);

    const { isLoading, data } = useQuery({
        queryKey: ["variantFields", inputTag],
        queryFn: () =>
            getRequest<IGetVariantFieldsResponse>({
                url: `/detail-option/${inputTag}`,
            }),
        enabled: !!inputTag && !!productId,
        throwOnError: true,
        staleTime: 1000 * 60 * 60,
    });

    return {
        variantFields: data?.options ?? [],
        isFetchingVariantFields: isLoading,
    };
};

export default useGetVariantFields;
