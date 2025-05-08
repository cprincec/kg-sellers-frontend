"use client";

import { cn } from "@/lib/utils";
import { IProductDetailsFormValues } from "../../../lib/interface";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productDetailsSchema } from "../../../lib/schemas";
import ProductDetailsFormFields from "./ProductDetailsFormFields";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import { startTransition } from "react";

const ProductDetailsForm = ({ className }: { className?: string }) => {
    const { setSearchParams } = useUpdateSearchParams();
    const { productDetails, setProductDetails } = useAddProductContext();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IProductDetailsFormValues>({
        defaultValues: productDetails,
        resolver: yupResolver(productDetailsSchema) as unknown as Resolver<IProductDetailsFormValues>,
    });

    const saveProductDetails = (values: IProductDetailsFormValues) => {
        console.log(values);
        setProductDetails(values);
        startTransition(() => setSearchParams([{ step: "product-variants" }]));
    };

    return (
        <div className={cn("max-lg:p-4", className)}>
            <form onSubmit={handleSubmit(saveProductDetails)} className="grid gap-5 md:gap-10">
                <ProductDetailsFormFields control={control} errors={errors} />

                <div>
                    <FormNavButtons
                        cancelFunc={() => {
                            setSearchParams([{ step: "product-category" }]);
                        }}
                        cancelButtonText="Previous"
                        submitButtonText="Save & continue"
                        className="hidden md:flex gap-3 justify-between lg:px-6 lg:pt-4 pb-6"
                    />
                    <FormNavButtons
                        cancelFunc={() => {
                            setSearchParams([{ step: "product-category" }]);
                        }}
                        cancelButtonText="Previous"
                        submitButtonText="Save & continue"
                        className="md:max-w-[424px] md:mx-auto grid md:hidden grid-cols-2 gap-3 justify-between"
                    />
                </div>
            </form>
        </div>
    );
};

export default ProductDetailsForm;
