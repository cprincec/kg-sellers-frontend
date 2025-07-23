"use client";

import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { useRouter, useSearchParams } from "next/navigation";
import { useAddProductContext } from "../../../contexts/addProductContext";

const ProductsDetailsFormNavButtons = ({
    isSavingProductDetails,
    isEditingProductDetails,
}: {
    isSavingProductDetails: boolean;
    isEditingProductDetails: boolean;
}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productAction = searchParams.get("product-action");
    const { productDraft } = useAddProductContext();

    if (!productDraft) return null;

    const prevStep =
        productAction === "edit"
            ? `/products/add-product?step=product-category&product-id=${productDraft.id}&product-action=edit`
            : `/products/add-product?step=product-category&product-id=${productDraft.id}`;

    return (
        <div>
            <FormNavButtons
                cancelFunc={() => router.replace(prevStep)}
                cancelButtonText="Previous"
                submitButtonText="Save & continue"
                className="hidden md:flex gap-3 justify-between lg:px-6 lg:pt-4 pb-6"
                disabled={isSavingProductDetails || isEditingProductDetails}
            />
            <FormNavButtons
                cancelFunc={() => {
                    if (productDraft)
                        router.replace(
                            `/products/add-product?step=product-category&product-id=${productDraft.id}`
                        );
                    else router.replace(`/products/add-product?step=product-category`);
                }}
                cancelButtonText="Previous"
                submitButtonText="Save & continue"
                className="md:max-w-[424px] md:mx-auto grid md:hidden grid-cols-2 gap-3 justify-between"
                disabled={isSavingProductDetails || isEditingProductDetails}
            />
        </div>
    );
};
export default ProductsDetailsFormNavButtons;
