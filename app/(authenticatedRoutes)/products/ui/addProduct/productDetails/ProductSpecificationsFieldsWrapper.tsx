"use client";

import useGetSpecifications from "../../../hooks/addProduct/useGetSpecifications";
import Loader from "@/app/ui/Loader";
import ProductSpecificationsFields from "./ProductSpecificationsFields";
import { useEffect } from "react";
import { showErrorToast } from "@/app/lib/utils/utils";
import { useRouter, useSearchParams } from "next/navigation";

const ProductSpecificationsFieldsWrapper = () => {
    const { specifications, isFetchingSpecifications } = useGetSpecifications();
    const router = useRouter();
    const productId = useSearchParams().get("product-id");

    useEffect(() => {
        // This useEffect is typically for when the specification have been fetched
        // and the result is null or empty array.
        // The useEffect in the useGetSpecifications hook if for when there
        // is no valid tag with which to fetch the specifications
        if (
            !isFetchingSpecifications &&
            specifications !== undefined &&
            (!specifications?.specifications || !specifications?.specifications.length)
        ) {
            showErrorToast({
                title: "No Specifications found for selected category",
                description: "Please select another category",
            });

            if (productId)
                router.replace(`/products/add-product?step=product-category&product-id=${productId}`);
            else router.replace("/products/add-product?step=product-category");
        }
    }, [isFetchingSpecifications, specifications]);

    if (isFetchingSpecifications) return <Loader />;
    if (!specifications) return null;

    return <ProductSpecificationsFields specifications={specifications.specifications} />;
};

export default ProductSpecificationsFieldsWrapper;
