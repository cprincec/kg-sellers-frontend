"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useAddProductContext } from "../../../contexts/addProductContext";

const ProductVariantsFormHeader = ({ showForm }: { showForm: boolean }) => {
    const { productDraft } = useAddProductContext();
    const router = useRouter();
    const searchParams = useSearchParams();
    const productAction = searchParams.get("product-action");

    if (!productDraft) return null;
    const addVarintURL =
        productAction === "edit"
            ? `/products/add-product?step=product-variants&product-id=${productDraft.id}&action=add-variant&product-action=edit`
            : `/products/add-product?step=product-variants&product-id=${productDraft.id}&action=add-variant`;

    return (
        <div className="lg:w-full grid lg:flex lg:justify-between gap-4 p-4 lg:px-6 lg:pb-6">
            <div className="grid gap-2">
                <h3 className="text-sm md:text-base font-medium">PRODUCT VARIANTS</h3>
                <p className="text-sm">Same products with different features can be added as variants</p>
            </div>

            {/* Add variant button */}
            {!showForm && (
                <Button
                    type="button"
                    onClick={() => router.replace(addVarintURL)}
                    variant={"ghost"}
                    className="bg-transparent text-kaiglo_success-base text-sm justify-self-start p-1 pl-0"
                >
                    Add variant
                </Button>
            )}
        </div>
    );
};

export default ProductVariantsFormHeader;
