"use client";

import Loader from "@/app/ui/Loader";
import useGetVariantFields from "../../../hooks/addProduct/useGetVariantFields";
import ProductVariantsForm from "./ProductVariantsForm";
import useGetProductMeta from "../../../hooks/addProduct/useGetProductMeta";

const ProductVariantsFormWrapper = ({ className }: { className?: string }) => {
    const { variantFields, isFetchingVariantFields } = useGetVariantFields();
    const { productMetaData, isFetchingProductMetaData } = useGetProductMeta();

    if (isFetchingProductMetaData || isFetchingVariantFields) return <Loader />;
    if (!variantFields || !productMetaData) return null;

    return <ProductVariantsForm fields={variantFields} productMeta={productMetaData} className={className} />;
};

export default ProductVariantsFormWrapper;
