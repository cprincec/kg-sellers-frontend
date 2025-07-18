"use client";

import useGetSpecifications from "../../../hooks/addProduct/useGetSpecifications";
import Loader from "@/app/ui/Loader";
import ProductSpecificationsFields from "./ProductSpecificationsFields";
import { useEffect } from "react";
import { showErrorToast } from "@/app/lib/utils/utils";
import { useRouter } from "next/navigation";
import { useAddProductContext } from "../../../contexts/addProductContext";

const ProductSpecificationsFieldsWrapper = () => {
    const { specifications, isFetchingSpecifications } = useGetSpecifications();
    const { productDraft } = useAddProductContext();
    const router = useRouter();

    useEffect(() => {
        if (
            !isFetchingSpecifications &&
            (!specifications?.specifications || !specifications?.specifications.length)
        ) {
            showErrorToast({
                title: "No Specifications found for selected category",
                description: "Please select another category",
            });

            if (productDraft)
                router.replace(`/products/add-product?step=product-category&product-id=${productDraft.id}`);
            else router.replace("/products/add-product?step=product-category");
        }
    }, [isFetchingSpecifications, specifications]);

    if (isFetchingSpecifications) return <Loader />;
    if (!specifications) return null;
    
    return <ProductSpecificationsFields specifications={specifications.specifications} />;
};

export default ProductSpecificationsFieldsWrapper;
