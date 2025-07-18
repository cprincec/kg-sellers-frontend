"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import ProductCategoryCrumbs from "../ui/addProduct/productCategory/ProductCategoryCrumbs";
import AddProductStepper from "../ui/addProduct/stepper/AddProductStepper";
import { useAddProductContext } from "../contexts/addProductContext";
import ProductCategoryFormWrapper from "../ui/addProduct/productCategory/ProductCategoryFormWrapper";
import ProductVariantsFormWrapper from "../ui/addProduct/productVariants/ProductVariantsFormWrapper";
import { generateProductCategoryDTO } from "../lib/utils/addProduct.utils";
import ProductDetailsFormWrapper from "../ui/addProduct/productDetails/ProductDetailsFormWrapper";

const AddProduct = () => {
    const searchParams = useSearchParams();
    const [currentStep, setCurrentStep] = useState<string>(searchParams.get("step") || "product-category");
    const steps: Record<string, JSX.Element> = {
        "product-category": <ProductCategoryFormWrapper />,
        "product-details": <ProductDetailsFormWrapper />,
        "product-variants": <ProductVariantsFormWrapper />,
    };

    useEffect(() => {
        setCurrentStep(searchParams.get("step") || "product-category");
    }, [searchParams]);

    const { productDraft } = useAddProductContext();

    const Component = steps[currentStep];

    return (
        <div className="min-h-screen border-l">
            <div>
                <div className="flex max-lg:flex-col gap-3 lg:justify-between lg:items-center p-4 md:px-6 md:py-8 border-b">
                    <h1 className="text-lg md:text-2xl font-medium text-kaiglo_grey-900">Add Products</h1>
                    {currentStep === "product-category" ? (
                        <Button
                            variant={"outline"}
                            className="hidden lg:block p-3 text-base text-kaiglo_success-base border-kaiglo_success-base rounded-[32px]"
                        >
                            Product guidelines
                        </Button>
                    ) : (
                        <ProductCategoryCrumbs
                            categoryObject={generateProductCategoryDTO(productDraft)}
                            className="w-fit"
                        />
                    )}
                </div>

                <div className="grid gap-3 py-3">
                    {/* Stepper starts here */}
                    <div className="flex justify-center items-center px-6 py-2 pb-5 border-b">
                        <AddProductStepper currentStep={currentStep} />
                    </div>
                    {/* Stepper ends here */}

                    {Component}
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
