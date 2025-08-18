"use client";

import { FormProvider, useForm } from "react-hook-form";
import { cn } from "@/lib/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import ProductCategoryFormFields from "./ProductCategoryFormFields";
import { IProductCategoryDTO, ProductCategoryFormProps } from "../../../lib/interfaces/interface";
import { productCategorySchema } from "../../../lib/schemas";
import { useRouter } from "next/navigation";
import useSaveProductCategory from "../../../hooks/addProduct/useSaveProductCategory";
import useEditProductCategory from "../../../hooks/addProduct/useEditProductCategory";

const ProductCategoryForm = ({
    categories,
    storeId,
    productId,
    productAction,
    className,
    product,
    defaultValues,
}: ProductCategoryFormProps) => {
    const { isSavingProductCategory, saveProductCategory } = useSaveProductCategory();
    const { isEditingProductCategory, editProductCategory } = useEditProductCategory();
    const router = useRouter();

    const formMethods = useForm<IProductCategoryDTO>({
        defaultValues: defaultValues,
        resolver: yupResolver(productCategorySchema),
    });

    const onSubmit = (values: IProductCategoryDTO) => {
        // Only save category if user selected new value
        // const categoryObj = generateProductCategoryDTO(productDraft);
        const isEqual = JSON.stringify(values) === JSON.stringify(defaultValues);

        // User has saved category before
        // no need saving again
        if (isEqual && product) {
            const nextStep =
                productAction === "edit"
                    ? `/products/add-product?step=product-details&product-id=${product.id}&product-action=edit`
                    : `/products/add-product?step=product-details&product-id=${product.id}`;

            router.replace(nextStep);
            return;
        }

        if (productId) {
            // Edit category
            let nextPage = `/products/add-product?step=product-details&product-id=${productId}`;

            if (productAction === "edit")
                nextPage = `/products/add-product?step=product-details&product-id=${productId}&product-action=edit`;

            editProductCategory({ productId, payload: values, redirectUrl: nextPage });
        } else {
            // Save new a category
            saveProductCategory({ payload: values, storeId });
        }
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
