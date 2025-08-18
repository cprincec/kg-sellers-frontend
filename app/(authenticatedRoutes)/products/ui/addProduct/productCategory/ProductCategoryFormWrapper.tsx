"use client";

import ProductCategoryForm from "./ProductCategoryForm";
import Loader from "@/app/ui/Loader";
import useGetProductsCategories from "../../../hooks/addProduct/useGetProductsCategories";
import { showErrorToast } from "@/app/lib/utils/utils";
import { useEffect } from "react";
import useGetRawProduct from "../../../hooks/addProduct/useGetRawProduct";
import { useSearchParams } from "next/navigation";
import { generateProductCategoryDTO } from "../../../lib/utils/addProduct.utils";
import { productCategoryFormDefaultValues } from "../../../lib/defaults";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";

const ProductCategoryFormWrapper = ({ className }: { className?: string }) => {
    const searchParams = useSearchParams();
    const productId = searchParams.get("product-id")?.trim() ?? "";
    const productAction = searchParams.get("product-action")?.trim() ?? "";
    const { productRaw, isFetchingProductRaw } = useGetRawProduct(productId);
    const { isFetchingProductsCategories, productsCategories } = useGetProductsCategories();
    const { isFetchingStoreInfo, storeInfo } = useGetStoreInfo();

    useEffect(() => {
        if (!isFetchingProductsCategories && (!productsCategories || !productsCategories.length)) {
            showErrorToast({
                title: "Error fetching categories",
                description: "Please refresh the page",
            });
        }
    }, [isFetchingProductsCategories, productsCategories]);

    if (isFetchingProductsCategories || isFetchingProductRaw || isFetchingStoreInfo) return <Loader />;
    if (!storeInfo) return <p>Store not found. Please complete store setup to create a product</p>;

    const defaultValues =
        productId && productRaw
            ? generateProductCategoryDTO(productRaw)
            : { ...productCategoryFormDefaultValues };

    return (
        <ProductCategoryForm
            isFetchingProductRaw={isFetchingProductRaw}
            storeId={storeInfo.id}
            productId={productId}
            productAction={productAction}
            defaultValues={defaultValues}
            product={productRaw}
            categories={productsCategories ?? []}
            className={className}
        />
    );
};

export default ProductCategoryFormWrapper;
