"use client";

import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import Loader from "@/app/ui/Loader";
import ProductsCategoriesForm from "./ProductsCategoriesForm";

const ProductsCategoriesFormWrapper = () => {
    const { onboardingData } = useStoreSetupContext();

    if (!onboardingData?.productsCategories) return <Loader />;

    return <ProductsCategoriesForm defaultValues={onboardingData.productsCategories} />;
};

export default ProductsCategoriesFormWrapper;
