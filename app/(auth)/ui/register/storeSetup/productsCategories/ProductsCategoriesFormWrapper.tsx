"use client";

import Loader from "@/app/ui/Loader";
import ProductsCategoriesForm from "./ProductsCategoriesForm";
import useGetStoreInfo from "@/app/(auth)/hooks/register/storeSetup/useGetStoreInfo";

const ProductsCategoriesFormWrapper = () => {
    const { storeInfo, isFetchingStoreInfo } = useGetStoreInfo();

    if (isFetchingStoreInfo) return <Loader />;

    const defaultValues =
        storeInfo && storeInfo.categories?.length ? { category: storeInfo.categories } : { category: [] };
    return <ProductsCategoriesForm defaultValues={defaultValues} />;
};

export default ProductsCategoriesFormWrapper;
