"use client";

import { cn } from "@/lib/utils/utils";
import { IProductDetailsDTO } from "../../../lib/interfaces/interface";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productDetailsSchema } from "../../../lib/schemas";
import ProductDetailsFormFields from "./ProductDetailsFormFields";
import useSaveProductDetails from "../../../hooks/addProduct/useSaveProductDetails";
import { useRouter, useSearchParams } from "next/navigation";
import ProductsDetailsFormNavButtons from "./ProductsDetailsFormNavButtons";
import useEditProductDetails from "../../../hooks/addProduct/useEditProductDetails";

const ProductDetailsForm = ({
    defaultValues,
    productId,
    className,
}: {
    defaultValues: IProductDetailsDTO;
    productId: string;
    className?: string;
}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productAction = searchParams.get("product-action");
    const { saveProductDetails, isSavingProductDetails } = useSaveProductDetails();
    const { editProductDetails, isEditingProductDetails } = useEditProductDetails();

    const productDetailsformMethods = useForm<IProductDetailsDTO>({
        defaultValues,
        resolver: yupResolver(productDetailsSchema),
    });

    const onSubmit = (values: IProductDetailsDTO) => {
        const isEqual = JSON.stringify(defaultValues) === JSON.stringify(values);

        if (isEqual) {
            const nextStep =
                productAction === "edit"
                    ? `/products/add-product?step=product-variants&product-id=${productId}&product-action=edit`
                    : `/products/add-product?step=product-variants&product-id=${productId}`;

            router.replace(nextStep);
            return;
        }

        if (productAction === "edit") editProductDetails({ payload: values, productId });
        else saveProductDetails({ payload: values, productId });
    };

    return (
        <FormProvider {...productDetailsformMethods}>
            <div className={cn("max-lg:p-4", className)}>
                <form
                    onSubmit={productDetailsformMethods.handleSubmit(onSubmit)}
                    className="grid gap-5 md:gap-10"
                >
                    <ProductDetailsFormFields />
                    <ProductsDetailsFormNavButtons
                        isSavingProductDetails={isSavingProductDetails}
                        isEditingProductDetails={isEditingProductDetails}
                    />
                </form>
            </div>
        </FormProvider>
    );
};

export default ProductDetailsForm;
