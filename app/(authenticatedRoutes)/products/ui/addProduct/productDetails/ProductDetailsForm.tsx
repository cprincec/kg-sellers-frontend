"use client";

import { cn } from "@/lib/utils/utils";
import { IProductDetailsDTO } from "../../../lib/interfaces/interface";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productDetailsSchema } from "../../../lib/schemas";
import ProductDetailsFormFields from "./ProductDetailsFormFields";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import useSaveProductDetails from "../../../hooks/addProduct/useSaveProductDetails";
import Loader from "@/app/ui/Loader";

const ProductDetailsForm = ({ className }: { className?: string }) => {
    const { setSearchParams } = useUpdateSearchParams();
    const { productDetails, setProductDetails } = useAddProductContext();

    const productDetailsformMethods = useForm<IProductDetailsDTO>({
        defaultValues: productDetails,
        resolver: yupResolver(productDetailsSchema),
    });

    const { saveProductDetails, isSavingProductDetails } = useSaveProductDetails();

    const onSubmit = (values: IProductDetailsDTO) => {
        setProductDetails(values);
        saveProductDetails(values);
    };

    if (isSavingProductDetails) return <Loader />;

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
        </FormProvider>
    );
};

export default ProductDetailsForm;
