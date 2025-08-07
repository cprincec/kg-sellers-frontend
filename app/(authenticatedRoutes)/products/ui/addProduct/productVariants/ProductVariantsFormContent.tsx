"use client";

import { Dispatch, FormEvent, SetStateAction } from "react";
import ProductVariantsFormFields from "./ProductVariantsFormFields";
import {
    IProduct,
    IProductMeta,
    IVariantField,
    ProductVariantFormErrors,
    ProductVariantFormInterface,
} from "../../../lib/interfaces/interface";
import { Button } from "@/components/ui/button";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const ProductVariantsFormContent = ({
    variantId,
    formData,
    setFormData,
    formErrors,
    isSavingProductVariant,
    isEditingProductVariant,
    product,
    productMeta,
    fields,
    handleSubmit,
}: {
    productMeta: IProductMeta;
    product: IProduct;
    variantId: string;
    formData: ProductVariantFormInterface;
    setFormData: Dispatch<SetStateAction<ProductVariantFormInterface>>;
    formErrors: ProductVariantFormErrors;
    isSavingProductVariant: boolean;
    isEditingProductVariant: boolean;
    fields: IVariantField[];
    handleSubmit: (e: FormEvent) => void;
}) => {
    const { deleteSearchParams } = useUpdateSearchParams();
    const findFieldIndex = (key: string) =>
        formData.attributes.findIndex((a) => a.key.toLowerCase() === key.toLowerCase());

    return (
        <form className="grid gap-5 p-4 lg:px-6 lg:pb-6 lg:border-b" onSubmit={handleSubmit}>
            <ProductVariantsFormFields
                findFieldIndex={findFieldIndex}
                productMeta={productMeta}
                formData={formData}
                setFormData={setFormData}
                fields={fields}
                formErrors={formErrors}
                product={product}
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
    );
};

export default ProductVariantsFormContent;
