"use client";

import Loader from "@/app/ui/Loader";
import useGetVariantFields from "../../../hooks/addProduct/useGetVariantFields";
import ProductVariantsForm from "./ProductVariantsForm";
import useGetProductMeta from "../../../hooks/addProduct/useGetProductMeta";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { showErrorToast } from "@/app/lib/utils/utils";
import useGetRawProduct from "../../../hooks/addProduct/useGetRawProduct";
import { generateProductVariantFormDefaults } from "../../../lib/utils/addProduct.utils";
import { productVariantsFormDefaultValues } from "../../../lib/defaults";

const ProductVariantsFormWrapper = ({ className }: { className?: string }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get("product-id") ?? "";
    const variantId = searchParams.get("variant-id");
    const productAction = searchParams.get("product-action") ?? "";
    const variantAction = searchParams.get("variant-action") ?? "";

    useEffect(() => {
        if (!productId) {
            showErrorToast({ title: "Invalid product id" });
            router.replace("/products");
        }
    }, [productId, router]);

    const { productRaw, isFetchingProductRaw } = useGetRawProduct(productId);
    const { variantFields, isFetchingVariantFields } = useGetVariantFields();
    const { productMetaData, isFetchingProductMetaData } = useGetProductMeta();

    if (isFetchingProductMetaData || isFetchingVariantFields || isFetchingProductRaw) return <Loader />;
    if (!productMetaData || !productRaw) return null;
    if (!variantFields)
        return <p>No variant fields for the selected category. Please selected another category</p>;

    const defaultValues = variantId
        ? generateProductVariantFormDefaults(productRaw, variantId)
        : productVariantsFormDefaultValues;

    return (
        <ProductVariantsForm
            product={productRaw}
            productId={productId}
            productAction={productAction}
            variantAction={variantAction}
            variantId={variantId}
            defaultValues={defaultValues}
            fields={variantFields}
            productMeta={productMetaData}
            className={className}
        />
    );
};

export default ProductVariantsFormWrapper;
