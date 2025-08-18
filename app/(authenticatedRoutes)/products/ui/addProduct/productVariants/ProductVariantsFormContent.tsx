"use client";

import ProductVariantsFormFields from "./ProductVariantsFormFields";
import { ProductVariantsFormContentProps } from "../../../lib/interfaces/interface";
import { Button } from "@/components/ui/button";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { motion } from "framer-motion";

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
}: ProductVariantsFormContentProps) => {
    const { deleteSearchParams } = useUpdateSearchParams();
    const findFieldIndex = (key: string) =>
        formData.attributes.findIndex((a) => a.key.toLowerCase() === key.toLowerCase());

    const animationVariants = {
        hidden: { y: -100 },
        visible: { opacity: 1, y: 0 },
        exit: { y: -200, transition: { duration: 0.25 } },
    };

    return (
        <div className="overflow-hidden">
            <motion.form
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, type: "spring" }}
                className="grid gap-5 p-4 lg:px-6 lg:pb-6 lg:border-b overflow-hidden"
                onSubmit={handleSubmit}
            >
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
            </motion.form>
        </div>
    );
};

export default ProductVariantsFormContent;
