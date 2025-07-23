"use client";

import { cn } from "@/lib/utils/utils";
import { IProductDetailsDTO } from "../../../lib/interfaces/interface";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productDetailsSchema } from "../../../lib/schemas";
import ProductDetailsFormFields from "./ProductDetailsFormFields";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import useSaveProductDetails from "../../../hooks/addProduct/useSaveProductDetails";
import { useRouter, useSearchParams } from "next/navigation";
import { showErrorToast } from "@/app/lib/utils/utils";
import { useEffect } from "react";
import { generateProductDetailsDTO } from "../../../lib/utils/addProduct.utils";
import ProductsDetailsFormNavButtons from "./ProductsDetailsFormNavButtons";
import useEditProductDetails from "../../../hooks/addProduct/useEditProductDetails";

const ProductDetailsForm = ({
    defaultValues,
    className,
}: {
    defaultValues: IProductDetailsDTO;
    className?: string;
}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productAction = searchParams.get("product-action");
    const { productDraft, productDraftDescription } = useAddProductContext();
    const { saveProductDetails, isSavingProductDetails } = useSaveProductDetails();
    const { editProductDetails, isEditingProductDetails } = useEditProductDetails();

    const productDetailsformMethods = useForm<IProductDetailsDTO>({
        defaultValues,
        resolver: yupResolver(productDetailsSchema),
    });

    useEffect(() => {
        if (defaultValues) {
            productDetailsformMethods.reset(defaultValues);
        }
    }, [defaultValues, productDetailsformMethods]);

    const onSubmit = (values: IProductDetailsDTO) => {
        if (!productDraft || !productDraft.id) {
            showErrorToast({
                title: "Product Id not found",
                description: "Redirecting to product category form",
            });
            router.replace("/products/add-product?step=product-category");
            return;
        }

        const prevValues = generateProductDetailsDTO(productDraft, productDraftDescription);
        const isEqual = JSON.stringify(prevValues) === JSON.stringify(values);

        if (isEqual) {
            const nextStep =
                productAction === "edit"
                    ? `/products/add-product?step=product-variants&product-id=${productDraft.id}&product-action=edit`
                    : `/products/add-product?step=product-variants&product-id=${productDraft.id}`;

            router.replace(nextStep);
            return;
        }

        if (productAction === "edit") editProductDetails({ payload: values, productId: productDraft.id });
        else saveProductDetails({ payload: values, productId: productDraft.id });
    };

    return (
        <FormProvider {...productDetailsformMethods}>
            <div className={cn("max-lg:p-4", className)}>
                <form
                    onSubmit={productDetailsformMethods.handleSubmit(onSubmit)}
                    className="grid gap-5 md:gap-10"
                >
                    <ProductDetailsFormFields />
                    <ProductsDetailsFormNavButtons
                        isSavingProductDetails={isSavingProductDetails}
                        isEditingProductDetails={isEditingProductDetails}
                    />
                </form>
            </div>
        </FormProvider>
    );
};

export default ProductDetailsForm;
