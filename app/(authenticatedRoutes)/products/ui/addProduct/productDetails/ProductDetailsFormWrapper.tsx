"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { productDetailsFormDefaultValues } from "../../../lib/defaults";
import ProductDetailsForm from "./ProductDetailsForm";
import useGetRawProduct from "../../../hooks/addProduct/useGetRawProduct";
import useGetProductDescription from "../../../hooks/addProduct/useGetProductDescription";
import { useEffect } from "react";
import Loader from "@/app/ui/Loader";
import { generateProductDetailsDTO } from "../../../lib/utils/addProduct.utils";
import { showErrorToast } from "@/app/lib/utils/utils";

const ProductDetailsFormWrapper = ({ className }: { className?: string }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get("product-id") ?? "";

    const { productRaw, isFetchingProductRaw } = useGetRawProduct(productId);
    const { productDescription, isFetchingProductDescription } = useGetProductDescription(productId);

    useEffect(() => {
        if (!productId) {
            showErrorToast({ title: "Invalid product id" });
            router.replace("/products");
        }
    }, [productRaw, productDescription]);

    if (isFetchingProductDescription || isFetchingProductRaw) return <Loader />;

    // Product description can be an empty string sometime (eg. duplicated product)
    // hence, the prevention of using "!productDescription" to check for productDescription
    const defaultValues =
        productRaw && productDescription !== null && productDescription !== undefined
            ? generateProductDetailsDTO(productRaw, productDescription)
            : productDetailsFormDefaultValues;
    return <ProductDetailsForm productId={productId} defaultValues={defaultValues} className={className} />;
};
export default ProductDetailsFormWrapper;
