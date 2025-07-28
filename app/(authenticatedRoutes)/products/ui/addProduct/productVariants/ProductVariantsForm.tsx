"use client";

import { cn } from "@/lib/utils/utils";
import { FormEvent, useEffect, useState } from "react";
import ProductVariantsFormFields from "./ProductVariantsFormFields";
import {
    IProductMeta,
    IVariantField,
    ProductVariantFormErrors,
    ProductVariantFormInterface,
} from "../../../lib/interfaces/interface";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import ProductVariantsTable from "./ProductVariantsTable";
import {
    productVariantFormErrorsDefaultValues,
    productVariantsFormDefaultValues,
} from "../../../lib/defaults";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import ProductsVariantsFormNavButtons from "./ProductsVariantsFormNavButtons";
import { showErrorToast } from "@/app/lib/utils/utils";
import useSaveProductVariant from "../../../hooks/addProduct/useSaveProductVariant";
import {
    generateProductVariantDTOFromFormData,
    generateProductVariantEditDTOFromFormData,
    generateProductVariantFormDefaults,
    validateProductVariantForm,
} from "../../../lib/utils/addProduct.utils";
import ProductVariantsFormHeader from "./ProductVariantsFormHeader";
import useEditProductVariant from "../../../hooks/addProduct/useEditProductVariant";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const ProductVariantsForm = ({
    fields,
    productMeta,
    className,
}: {
    fields: IVariantField[];
    productMeta: IProductMeta;
    className?: string;
}) => {
    const searchParams = useSearchParams();
    const action = searchParams.get("action");
    const productAction = searchParams.get("product-action");
    const variantId = searchParams.get("variant-id");
    const variantAction = searchParams.get("variant-action");

    // Hooks
    const { deleteSearchParams } = useUpdateSearchParams();
    const { productDraft } = useAddProductContext();
    const { isSavingProductVariant, saveProductVariant } = useSaveProductVariant(productAction ?? "");
    const { isEditingProductVariant, editProductVariant } = useEditProductVariant(productAction ?? "");

    // States
    const [formData, setFormData] = useState<ProductVariantFormInterface>(productVariantsFormDefaultValues);
    // Required fields for product variant
    const [formErrors, setFormErrors] = useState<ProductVariantFormErrors>(
        productVariantFormErrorsDefaultValues
    );
    const [showForm, setShowForm] = useState<boolean>(action === "add-variant" || false);

    const findFieldIndex = (key: string) =>
        formData.attributes.findIndex((a) => a.key.toLowerCase() === key.toLowerCase());

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!productDraft) {
            showErrorToast({ title: "Invalid product id", description: "Please refresh the page" });
            return;
        }

        // The error state is updated here for display on the ui
        const formIsValid = validateProductVariantForm(formData, setFormErrors);
        if (!formIsValid) return;

        //Reset form
        setFormErrors(productVariantFormErrorsDefaultValues);

        // Handle editing of product variant
        if (variantAction === "edit") {
            if (!variantId) {
                showErrorToast({ title: "Invalid variant id" });
                return;
            }

            const updatedVariant = generateProductVariantEditDTOFromFormData(
                productDraft.id,
                variantId,
                formData,
                productMeta
            );

            if (updatedVariant) editProductVariant(updatedVariant);
            return;
        }

        // Handle creation of new variant
        const newVariant = generateProductVariantDTOFromFormData(productDraft.id, formData, productMeta);
        if (newVariant) saveProductVariant(newVariant);
    };

    useEffect(() => {
        setShowForm(action === "add-variant" || variantAction === "edit");

        if (!variantId) {
            setFormData(productVariantsFormDefaultValues);
            return;
        }

        // Initialize edit variant form with default values
        if (variantId && productDraft) {
            const defaultFormData = generateProductVariantFormDefaults(productDraft, variantId);
            setFormData(defaultFormData);
        }
    }, [action, variantId, productDraft, searchParams]);

    return (
        <div className={cn("grid gap-6 overflow-hidden", className)}>
            <ProductVariantsFormHeader showForm={showForm} />

            {/* Product variant form  */}
            {showForm && (
                <form className="grid gap-5 p-4 lg:px-6 lg:pb-6 lg:border-b" onSubmit={handleSubmit}>
                    <ProductVariantsFormFields
                        findFieldIndex={findFieldIndex}
                        productMeta={productMeta}
                        formData={formData}
                        setFormData={setFormData}
                        fields={fields}
                        formErrors={formErrors}
                    />

                    <div className="flex justify-self-end gap-4">
                        <Button
                            type="button"
                            variant={"outline"}
                            className="text-sm p-3 min-w-[100px] rounded-lg"
                            disabled={isSavingProductVariant}
                            onClick={() => deleteSearchParams(["action", "variant-id", "variant-action"])}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant={"secondary"}
                            className="text-sm text-kaiglo_success-base p-3 bg-kaiglo_success-100 rounded-lg"
                            disabled={isSavingProductVariant}
                        >
                            {isSavingProductVariant || isEditingProductVariant
                                ? "Please wait..."
                                : variantId
                                ? "Edit variant"
                                : "Add variant"}
                        </Button>
                    </div>
                </form>
            )}

            <ProductVariantsTable className="p-4 lg:px-6" />

            {/* Navigation buttons */}
            <ProductsVariantsFormNavButtons />
        </div>
    );
};

export default ProductVariantsForm;
