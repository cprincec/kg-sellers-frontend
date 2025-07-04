"use client";

import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import Loader from "@/app/ui/Loader";
import ProductsCategoriesForm from "./ProductsCategoriesForm";

const ProductsCategoriesFormWrapper = () => {
    const { onboardingData } = useStoreSetupContext();

    if (!onboardingData?.productsCategories) return <Loader />;

    const categories = onboardingData.productsCategories.category;
    let defaultValues = onboardingData.productsCategories;

    // The backend currently return duplicate categories
    // So, filter it before displaying as options to user
    if (categories.length) {
        defaultValues = { category: [...new Set(categories.map((c) => c.toLowerCase()))] };
    }

    return <ProductsCategoriesForm defaultValues={defaultValues} />;
};

export default ProductsCategoriesFormWrapper;
