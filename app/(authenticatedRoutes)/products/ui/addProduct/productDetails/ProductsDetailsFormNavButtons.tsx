"use client";

import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { showErrorToast } from "@/app/lib/utils/utils";
import { useRouter, useSearchParams } from "next/navigation";

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
    const productId = searchParams.get("product-id");

    if (!productId) {
        showErrorToast({ title: "Invalid product id" });
        return null;
    }

    const prevStep =
        productAction === "edit"
            ? `/products/add-product?step=product-category&product-id=${productId}&product-action=edit`
            : `/products/add-product?step=product-category&product-id=${productId}`;

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
                    router.replace(`/products/add-product?step=product-category&product-id=${productId}`);
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
