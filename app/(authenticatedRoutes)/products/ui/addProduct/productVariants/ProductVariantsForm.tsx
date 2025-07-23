"use client";

import { cn } from "@/lib/utils/utils";
import { FormEvent, useEffect, useState } from "react";
import ProductVariantsFormFields from "./ProductVariantsFormFields";
import {
    IProductMeta,
    IProductVariantDTO,
    IVariantField,
    ProductVariantFormInterface,
} from "../../../lib/interfaces/interface";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import ProductVariantsTable from "./ProductVariantsTable";
import { productVariantsFormDefaultValues } from "../../../lib/defaults";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import ProductsVariantsFormNavButtons from "./ProductsVariantsFormNavButtons";
import { showErrorToast } from "@/app/lib/utils/utils";
import useSaveProductVariant from "../../../hooks/addProduct/useSaveProductVariant";
import {
    generateProductVariantDTOFromFormData,
    generateProductVariantDTOs,
    generateProductVariantFormDefaults,
} from "../../../lib/utils/addProduct.utils";
import ProductVariantsFormHeader from "./ProductVariantsFormHeader";
import useEditProductVariant from "../../../hooks/addProduct/useEditProductVariant";

const ProductVariantsForm = ({
    fields,
    productMeta,
    className,
}: {
    fields: IVariantField[];
    productMeta: IProductMeta;
    className?: string;
}) => {
    // Hooks
    const { productDraft } = useAddProductContext();
    const { isSavingProductVariant, saveProductVariant } = useSaveProductVariant();
    const { isEditingProductVariant, editProductVariant } = useEditProductVariant();
    const searchParams = useSearchParams();
    const action = searchParams.get("action");
    const productAction = searchParams.get("product-action");
    const variantId = searchParams.get("variant-id");

    // States
    const [formData, setFormData] = useState<ProductVariantFormInterface>(productVariantsFormDefaultValues);
    const [showForm, setShowForm] = useState<boolean>(action === "add-variant" || false);
    const [productVariants, setProductVariants] = useState<IProductVariantDTO[]>([]);

    const findFieldIndex = (key: string) =>
        formData.attributes.findIndex((a) => a.key.toLowerCase() === key.toLowerCase());

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!productDraft) {
            showErrorToast({ title: "Invalid product id", description: "Please refresh the page" });
            return;
        }

        const newVariant = generateProductVariantDTOFromFormData(productDraft.id, formData, productMeta);
        if (!newVariant) {
            showErrorToast({
                title: "Please provide all required fields",
            });

            return;
        }

        if (productAction === "edit" && variantId) editProductVariant(newVariant);
        else saveProductVariant(newVariant);
        setFormData(productVariantsFormDefaultValues);
    };

    useEffect(() => {
        setShowForm(action === "add-variant");

        // Initialize edit variant form with default values
        if (productAction === "edit" && variantId && productDraft) {
            const defaultFormData = generateProductVariantFormDefaults(productDraft, variantId);
            setFormData(defaultFormData);
        }
    }, [action, variantId]);

    useEffect(() => {
        if (productDraft) setProductVariants(generateProductVariantDTOs(productDraft));
    }, [productDraft]);

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
                    />

                    <Button
                        type="submit"
                        variant={"secondary"}
                        className="text-sm text-kaiglo_success-base justify-self-end p-3 bg-kaiglo_success-100 rounded-lg"
                        disabled={isSavingProductVariant}
                    >
                        {isSavingProductVariant || isEditingProductVariant
                            ? "Please wait..."
                            : variantId
                            ? "Edit variant"
                            : "Add variant"}
                    </Button>
                </form>
            )}

            {/* Product variants table */}
            {productVariants.length > 0 && (
                <ProductVariantsTable className="p-4 lg:px-6" productVariants={productVariants} />
            )}

            {/* Navigation buttons */}
            <ProductsVariantsFormNavButtons />
        </div>
    );
};

export default ProductVariantsForm;
