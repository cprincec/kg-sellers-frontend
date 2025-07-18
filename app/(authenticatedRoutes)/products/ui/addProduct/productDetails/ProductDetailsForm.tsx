"use client";

import { cn } from "@/lib/utils/utils";
import { IProductDetailsDTO } from "../../../lib/interfaces/interface";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productDetailsSchema } from "../../../lib/schemas";
import ProductDetailsFormFields from "./ProductDetailsFormFields";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import useSaveProductDetails from "../../../hooks/addProduct/useSaveProductDetails";
import { useRouter } from "next/navigation";
import { showErrorToast } from "@/app/lib/utils/utils";
import { useEffect } from "react";

const ProductDetailsForm = ({
    defaultValues,
    className,
}: {
    defaultValues: IProductDetailsDTO;
    className?: string;
}) => {
    const router = useRouter();
    const { productDraft } = useAddProductContext();
    const { saveProductDetails, isSavingProductDetails } = useSaveProductDetails();

    const productDetailsformMethods = useForm<IProductDetailsDTO>({
        defaultValues,
        resolver: yupResolver(productDetailsSchema),
    });

    useEffect(() => {
        if (defaultValues) {
            productDetailsformMethods.reset(defaultValues);
        }
    }, [defaultValues, productDetailsformMethods]);

    const onSubmit = (values: IProductDetailsDTO) => {
        if (!productDraft || !productDraft.id) {
            showErrorToast({
                title: "Product Id not found",
                description: "Redirecting to product category form",
            });
            router.replace("/products/add-product?step=product-category");
            return;
        }

        saveProductDetails({ payload: values, productId: productDraft.id });
    };

    return (
        <FormProvider {...productDetailsformMethods}>
            <div className={cn("max-lg:p-4", className)}>
                <form
                    onSubmit={productDetailsformMethods.handleSubmit(onSubmit)}
                    className="grid gap-5 md:gap-10"
                >
                    <ProductDetailsFormFields />

                    <div>
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
                            className="hidden md:flex gap-3 justify-between lg:px-6 lg:pt-4 pb-6"
                            disabled={isSavingProductDetails}
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
                            disabled={isSavingProductDetails}
                        />
                    </div>
                </form>
            </div>
        </FormProvider>
    );
};

export default ProductDetailsForm;
