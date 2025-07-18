"use client";

import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { useRouter } from "next/navigation";
import { useAddProductContext } from "../../../contexts/addProductContext";

const ProductsVariantsFormNavButtons = () => {
    const router = useRouter();
    const { productDraft } = useAddProductContext();

    if (!productDraft) return null;

    return (
        <div className="p-4">
            <FormNavButtons
                cancelFunc={() =>
                    router.replace(`/products/add-product?step=product-details&product-id=${productDraft.id}`)
                }
                cancelButtonText="Previous"
                submitButtonText="Preview"
                submitButtonFunc={() =>
                    router.replace(`/products/add-product/preview?product-id=${productDraft.id}`)
                }
                className="hidden md:flex gap-3 justify-between"
            />
            <FormNavButtons
                cancelFunc={() =>
                    router.replace(`/products/add-product?step=product-details&product-id=${productDraft.id}`)
                }
                submitButtonFunc={() =>
                    router.replace(`/products/add-product/preview?product-id=${productDraft.id}`)
                }
                cancelButtonText="Previous"
                submitButtonText="Preview"
                className="md:max-w-[424px] md:mx-auto grid md:hidden grid-cols-2 gap-3 justify-between"
            />
        </div>
    );
};
export default ProductsVariantsFormNavButtons;
