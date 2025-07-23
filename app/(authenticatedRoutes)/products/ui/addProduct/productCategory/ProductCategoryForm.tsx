"use client";

import { FormProvider, useForm } from "react-hook-form";
import { cn } from "@/lib/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import ProductCategoryFormFields from "./ProductCategoryFormFields";
import { IProductCategory, IProductCategoryDTO } from "../../../lib/interfaces/interface";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import { productCategorySchema } from "../../../lib/schemas";
import { useRouter, useSearchParams } from "next/navigation";
import useSaveProductCategory from "../../../hooks/addProduct/useSaveProductCategory";
import { useEffect } from "react";
import { generateProductCategoryDTO } from "../../../lib/utils/addProduct.utils";
import { showErrorToast } from "@/app/lib/utils/utils";
import useEditProductCategory from "../../../hooks/addProduct/useEditProductCategory";

const ProductCategoryForm = ({
    categories,
    className,
}: {
    categories: IProductCategory[];
    className?: string;
}) => {
    const { productDraft } = useAddProductContext();
    const { isSavingProductCategory, saveProductCategory } = useSaveProductCategory();
    const { isEditingProductCategory, editProductCategory } = useEditProductCategory();
    const router = useRouter();
    const searchParams = useSearchParams();
    const productAction = searchParams.get("product-action");

    const formMethods = useForm<IProductCategoryDTO>({
        defaultValues: { category: "" },
        resolver: yupResolver(productCategorySchema),
    });

    useEffect(() => {
        if (productDraft) formMethods.reset(generateProductCategoryDTO(productDraft));
    }, [productDraft, formMethods]);

    const onSubmit = (values: IProductCategoryDTO) => {
        if (!productDraft) {
            showErrorToast({ title: "Oh something went wrong", description: "Please refresh the page" });
            return;
        }

        // Only save category if user selected new value
        const categoryObj = generateProductCategoryDTO(productDraft);
        const isEqual = JSON.stringify(values) === JSON.stringify(categoryObj);

        if (isEqual) {
            const nextStep =
                productAction === "edit"
                    ? `/products/add-product?step=product-details&product-id=${productDraft.id}&product-action=edit`
                    : `/products/add-product?step=product-details&product-id=${productDraft.id}`;

            router.replace(nextStep);
            return;
        }

        if (productAction === "edit") editProductCategory({ productId: productDraft.id, payload: values });
        else saveProductCategory(values);
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
                            disabled={isSavingProductCategory || isEditingProductCategory}
                        />
                        <FormNavButtons
                            cancelFunc={() => router.push("/products")}
                            submitButtonText="Save & continue"
                            className="md:max-w-[424px] md:mx-auto grid md:hidden grid-cols-2 gap-6 justify-between"
                            disabled={isSavingProductCategory || isEditingProductCategory}
                        />
                    </div>
                </form>
            </div>
        </FormProvider>
    );
};

export default ProductCategoryForm;
