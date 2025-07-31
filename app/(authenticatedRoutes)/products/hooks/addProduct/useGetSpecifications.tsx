"use client";

import { getRequest } from "@/lib/utils/apiCaller";
import { useQuery } from "@tanstack/react-query";
import { IGetSpecificationsResponse } from "../../lib/interfaces/response.interface";
import useGetProductsCategories from "./useGetProductsCategories";
import { useAddProductContext } from "../../contexts/addProductContext";
import { generateProductCategoryDTO, getLeafSubCategoryFromDTO } from "../../lib/utils/addProduct.utils";
import { useEffect, useState } from "react";
import { showErrorToast } from "@/app/lib/utils/utils";
import { useRouter } from "next/navigation";

/**
 * Custom hook to fetch all specifications based on selected category tag
 */

const useGetSpecifications = () => {
    const { productsCategories } = useGetProductsCategories();
    const { productDraft } = useAddProductContext();
    const [tag, setTag] = useState<string>("");
    const router = useRouter();

    const handleMissingSpecs = () => {
        showErrorToast({
            title: "No Specifications found for selected category",
            description: "Please select another category",
        });
        router.replace(`/products/add-product?step=product-category&product-id=${productDraft?.id}`);
    };

    useEffect(() => {
        if (productDraft && productsCategories) {
            const categoriesObj = generateProductCategoryDTO(productDraft);
            const categoryTag = getLeafSubCategoryFromDTO(categoriesObj, productsCategories)?.tag ?? "";

            if (categoryTag) setTag(categoryTag);
            else handleMissingSpecs();
        }
    }, [productDraft, productsCategories]);

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
