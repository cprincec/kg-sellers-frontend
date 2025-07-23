"use client";

import ProductCategoryForm from "./ProductCategoryForm";
import Loader from "@/app/ui/Loader";
import useGetProductsCategories from "../../../hooks/addProduct/useGetProductsCategories";
import { showErrorToast } from "@/app/lib/utils/utils";
import { useEffect } from "react";

const ProductCategoryFormWrapper = ({ className }: { className?: string }) => {
    const { isFetchingProductsCategories, productsCategories } = useGetProductsCategories();

    useEffect(() => {
        if (!isFetchingProductsCategories && (!productsCategories || !productsCategories.length)) {
            showErrorToast({
                title: "Error fetching categories",
                description: "Please refresh the page",
            });
        }
    }, [isFetchingProductsCategories, productsCategories]);

    if (isFetchingProductsCategories) return <Loader />;
    if (!productsCategories || !productsCategories.length) return null;

    return <ProductCategoryForm categories={productsCategories} className={className} />;
};

export default ProductCategoryFormWrapper;
