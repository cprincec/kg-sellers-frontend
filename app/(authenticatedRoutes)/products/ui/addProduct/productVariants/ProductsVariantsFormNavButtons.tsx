"use client";

import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { useRouter } from "next/navigation";
import { IProduct } from "../../../lib/interfaces/interface";

const ProductsVariantsFormNavButtons = ({
    product,
    productAction,
}: {
    product: IProduct;
    productAction: string;
}) => {
    const router = useRouter();

    const nextStep =
        productAction === "edit"
            ? `/products/add-product/preview?product-id=${product.id}&product-action=edit`
            : `/products/add-product/preview?product-id=${product.id}`;

    const prevStep =
        productAction === "edit"
            ? `/products/add-product?step=product-details&product-id=${product.id}&product-action=edit`
            : `/products/add-product?step=product-details&product-id=${product.id}`;

    return (
        <div className="p-4">
            <FormNavButtons
                cancelFunc={() => router.replace(prevStep)}
                cancelButtonText="Previous"
                submitButtonText="Preview"
                submitButtonFunc={() => router.replace(nextStep)}
                className="hidden md:flex gap-3 justify-between"
            />
            <FormNavButtons
                cancelFunc={() => router.replace(prevStep)}
                submitButtonFunc={() => router.replace(nextStep)}
                cancelButtonText="Previous"
                submitButtonText="Preview"
                className="md:max-w-[424px] md:mx-auto grid md:hidden grid-cols-2 gap-3 justify-between"
            />
        </div>
    );
};

export default ProductsVariantsFormNavButtons;
