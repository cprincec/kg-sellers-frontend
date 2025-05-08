"use client";

import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { useRouter } from "next/navigation";

const ProductsVariantsFormNavButtons = () => {
    const router = useRouter();
    const { setSearchParams } = useUpdateSearchParams();

    return (
        <div className="p-4">
            <FormNavButtons
                cancelFunc={() => {
                    setSearchParams([{ step: "product-details" }]);
                }}
                cancelButtonText="Previous"
                submitButtonText="Preview"
                submitButtonFunc={() => {
                    router.push("/products/add-product/preview");
                }}
                className="hidden md:flex gap-3 justify-between"
            />
            <FormNavButtons
                cancelFunc={() => {
                    setSearchParams([{ step: "product-details" }]);
                }}
                submitButtonFunc={() => {
                    router.push("/products/add-product/preview");
                }}
                cancelButtonText="Previous"
                submitButtonText="Preview"
                className="md:max-w-[424px] md:mx-auto grid md:hidden grid-cols-2 gap-3 justify-between"
            />
        </div>
    );
};
export default ProductsVariantsFormNavButtons;
