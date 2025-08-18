"use client";

import { cn } from "@/lib/utils/utils";
import { FormEvent, useEffect, useState } from "react";
import {
    ProductVariantFormErrors,
    ProductVariantFormInterface,
    productVariantsFormProps,
} from "../../../lib/interfaces/interface";
import { useSearchParams } from "next/navigation";
import ProductVariantsTable from "./ProductVariantsTable";
import { productVariantFormErrorsDefaultValues } from "../../../lib/defaults";
import ProductsVariantsFormNavButtons from "./ProductsVariantsFormNavButtons";
import { showErrorToast } from "@/app/lib/utils/utils";
import useSaveProductVariant from "../../../hooks/addProduct/useSaveProductVariant";
import {
    generateProductVariantDTOFromFormData,
    generateProductVariantEditDTOFromFormData,
    validateProductVariantForm,
} from "../../../lib/utils/addProduct.utils";
import ProductVariantsFormHeader from "./ProductVariantsFormHeader";
import useEditProductVariant from "../../../hooks/addProduct/useEditProductVariant";
import ProductVariantsFormContent from "./ProductVariantsFormContent";
import { AnimatePresence } from "framer-motion";

const ProductVariantsForm = ({
    product,
    defaultValues,
    productAction,
    productId,
    variantAction,
    variantId,
    fields,
    productMeta,
    className,
}: productVariantsFormProps) => {
    const searchParams = useSearchParams();
    const action = searchParams.get("action");
    const showForm = action === "add-variant" || variantAction === "edit";
    const { isSavingProductVariant, saveProductVariant } = useSaveProductVariant();
    const { isEditingProductVariant, editProductVariant } = useEditProductVariant();
    const [formData, setFormData] = useState<ProductVariantFormInterface>(defaultValues);
    const [formErrors, setFormErrors] = useState<ProductVariantFormErrors>(
        productVariantFormErrorsDefaultValues
    );
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // The error state is updated here for display on the ui
        const formIsValid = validateProductVariantForm(formData, setFormErrors);
        if (!formIsValid) return;

        //Reset form
        setFormErrors(productVariantFormErrorsDefaultValues);

        // Url to navigate to after saving or editing a variant
        const redirectUrl =
            productAction === "edit"
                ? `/products/add-product?step=product-variants&product-id=${productId}&product-action=edit`
                : `/products/add-product?step=product-variants&product-id=${productId}`;

        // Handle editing of product variant
        if (variantAction === "edit") {
            if (!variantId) {
                showErrorToast({ title: "Invalid variant id" });
                return;
            }

            const updatedVariant = generateProductVariantEditDTOFromFormData(
                productId,
                variantId,
                formData,
                productMeta
            );

            if (updatedVariant) editProductVariant({ payload: updatedVariant, redirectUrl });
            return;
        }

        // Handle creation of new variant
        const newVariant = generateProductVariantDTOFromFormData(productId, formData, productMeta);
        if (newVariant) saveProductVariant({ payload: newVariant, redirectUrl });
    };

    useEffect(() => {
        setFormData(defaultValues);
    }, [action, variantId]);

    return (
        <div className={cn("grid gap-6 overflow-hidden", className)}>
            <ProductVariantsFormHeader product={product} productAction={productAction} showForm={showForm} />

            {/* Product variant form  */}
            <AnimatePresence mode="wait">
                {showForm && (
                    <ProductVariantsFormContent
                        product={product}
                        formData={formData}
                        formErrors={formErrors}
                        fields={fields}
                        setFormData={setFormData}
                        isEditingProductVariant={isEditingProductVariant}
                        isSavingProductVariant={isSavingProductVariant}
                        variantId={variantId ?? ""}
                        productMeta={productMeta}
                        handleSubmit={handleSubmit}
                    />
                )}
            </AnimatePresence>

            {/* Product variants table */}
            <ProductVariantsTable className="p-4 lg:px-6" />

            {/* Navigation buttons */}
            <ProductsVariantsFormNavButtons product={product} productAction={productAction} />
        </div>
    );
};

export default ProductVariantsForm;
