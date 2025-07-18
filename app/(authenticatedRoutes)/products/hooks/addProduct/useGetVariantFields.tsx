"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetVariantFieldsResponse } from "../../lib/interfaces/response.interface";
import { useEffect, useState } from "react";
import { useAddProductContext } from "../../contexts/addProductContext";
import useGetProductsCategories from "./useGetProductsCategories";
import { generateProductCategoryDTO, getLeafSubCategoryFromDTO } from "../../lib/utils/addProduct.utils";
import { useRouter } from "next/navigation";
import { showErrorToast } from "@/app/lib/utils/utils";

/**
 * Custom hook to fetch all form fields for a product's variant based on selected category input tag
 */
const useGetVariantFields = () => {
    const { productDraft } = useAddProductContext();
    const { productsCategories } = useGetProductsCategories();
    const router = useRouter();
    const [inputTag, setInputTag] = useState<string>("");

    useEffect(() => {
        if (productDraft && productsCategories) {
            const categoriesObj = generateProductCategoryDTO(productDraft);
            const categoryInputTag =
                getLeafSubCategoryFromDTO(categoriesObj, productsCategories)?.inputTag ?? "";

            if (categoryInputTag) setInputTag(categoryInputTag);
            else {
                showErrorToast({
                    title: "No variant fields found for the selected product category",
                    description: "Please select another category",
                });
                router.replace(`/products/add-product?step=product-category&product-id=${productDraft?.id}`);
            }
        }
    }, [productDraft, productsCategories]);

    const { isPending, data } = useQuery({
        queryKey: ["variantFields", inputTag],
        queryFn: () =>
            getRequest<IGetVariantFieldsResponse>({
                url: `/detail-option/${inputTag}`,
            }),
        enabled: !!inputTag,
        throwOnError: true,
        staleTime: 1000 * 60 * 60,
    });

    return {
        variantFields: data?.options ?? [],
        isFetchingVariantFields: isPending,
    };
};

export default useGetVariantFields;
