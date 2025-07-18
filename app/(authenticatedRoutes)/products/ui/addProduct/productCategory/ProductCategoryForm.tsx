"use client";

import { FormProvider, useForm } from "react-hook-form";
import { cn } from "@/lib/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import ProductCategoryFormFields from "./ProductCategoryFormFields";
import { IProductCategory, IProductCategoryDTO } from "../../../lib/interfaces/interface";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import { productCategorySchema } from "../../../lib/schemas";
import { useRouter } from "next/navigation";
import useSaveProductCategory from "../../../hooks/addProduct/useSaveProductCategory";
import { useEffect } from "react";
import { generateProductCategoryDTO } from "../../../lib/utils/addProduct.utils";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const ProductCategoryForm = ({
    categories,
    className,
}: {
    categories: IProductCategory[];
    className?: string;
}) => {
    const { productDraft } = useAddProductContext();
    const { isSavingProductCategory, saveProductCategory } = useSaveProductCategory();
    const router = useRouter();
    const { setSearchParams } = useUpdateSearchParams();

    const formMethods = useForm<IProductCategoryDTO>({
        defaultValues: { category: "" },
        resolver: yupResolver(productCategorySchema),
    });

    useEffect(() => {
        if (productDraft) formMethods.reset(generateProductCategoryDTO(productDraft));
    }, [productDraft, formMethods]);

    const onSubmit = (values: IProductCategoryDTO) => {
        // Only save category if user selected new value
        const categoryObj = generateProductCategoryDTO(productDraft);
        const isEqual = JSON.stringify(values) === JSON.stringify(categoryObj);

        if (!isEqual) {
            saveProductCategory(values);
        } else if (productDraft)
            setSearchParams([{ "product-id": productDraft.id }, { step: "product-details" }]);
    };

    return (
        <FormProvider {...formMethods}>
            <div className={cn("grid gap-6 px-4 py-2", className)}>
                <h2 className="text-base font-medium">PRODUCT CATEGORIES</h2>
                <form onSubmit={formMethods.handleSubmit(onSubmit)} className="grid gap-10">
                    <ProductCategoryFormFields categories={categories} />

                    <div>
                        <FormNavButtons
                            cancelFunc={() => router.push("/products")}
                            submitButtonText="Save and continue"
                            className="md:max-w-[424px] md:mx-auto hidden md:grid grid-cols-2 gap-6 justify-between"
                            disabled={isSavingProductCategory}
                        />
                        <FormNavButtons
                            cancelFunc={() => router.push("/products")}
                            submitButtonText="Save & continue"
                            className="md:max-w-[424px] md:mx-auto grid md:hidden grid-cols-2 gap-6 justify-between"
                            disabled={isSavingProductCategory}
                        />
                    </div>
                </form>
            </div>
        </FormProvider>
    );
};

export default ProductCategoryForm;
