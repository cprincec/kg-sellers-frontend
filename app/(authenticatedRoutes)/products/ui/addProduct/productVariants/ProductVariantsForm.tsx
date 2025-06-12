"use client";

import { cn } from "@/lib/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { startTransition, useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import ProductVariantsFormFields from "./ProductVariantsFormFields";
import { IProductVariantsFormValues } from "../../../lib/interface";
import { productVariantsSchema } from "../../../lib/schemas";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import ProductVariantsTable from "./ProductVariantsTable";
import { productVariantsFormDefaultValues } from "../../../lib/defaults";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import ProductsVariantsFormNavButtons from "./ProductsVariantsFormNavButtons";

const ProductVariantsForm = ({ className }: { className?: string }) => {
    const { setSearchParams, deleteSearchParams } = useUpdateSearchParams();
    const { productVariants, setProductVariants } = useAddProductContext();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IProductVariantsFormValues>({
        defaultValues: productVariantsFormDefaultValues,
        resolver: yupResolver(productVariantsSchema) as unknown as Resolver<IProductVariantsFormValues>,
    });

    const saveProductVariants = (values: IProductVariantsFormValues) => {
        // create a new object with the values from the form
        // and add it to the productVariants array in the context
        const newVariant = { ...values };
        setProductVariants((prevValue) => [...prevValue, newVariant]);

        // reset the form values to the default values
        reset();

        // remove the action from the search params and hide form
        startTransition(() => {
            deleteSearchParams(["action"]);
            setShowForm(false);
        });
    };
    const searchParams = useSearchParams();
    const [showForm, setShowForm] = useState<boolean>(searchParams.get("action") === "add-variant" || false);

    return (
        <div className={cn("grid gap-6 overflow-hidden", className)}>
            <div className="lg:w-full grid lg:flex lg:justify-between gap-4 p-4 lg:px-6 lg:pb-6">
                <div className="grid gap-2">
                    <h3 className="text-sm md:text-base font-medium">PRODUCT VARIANTS</h3>
                    <p className="text-sm">Same products with different features can be added as variants</p>
                </div>

                {/* Add variant button */}
                {!showForm && (
                    <Button
                        type="button"
                        onClick={() => {
                            setSearchParams([{ action: "add-variant" }]);
                            setShowForm(true);
                        }}
                        variant={"ghost"}
                        className="bg-transparent text-kaiglo_success-base text-sm justify-self-start p-1 pl-0"
                    >
                        Add variant
                    </Button>
                )}
            </div>
            {/* Product variants form  */}
            {showForm && (
                <form
                    onSubmit={handleSubmit(saveProductVariants)}
                    className="grid gap-5 p-4 lg:px-6 lg:pb-6 lg:border-b"
                >
                    <ProductVariantsFormFields control={control} errors={errors} />

                    <Button
                        type="submit"
                        variant={"secondary"}
                        className="text-sm text-kaiglo_success-base justify-self-end p-3 bg-kaiglo_success-100 rounded-lg"
                    >
                        Add variant
                    </Button>
                </form>
            )}
            {/* Product variants table */}
            {productVariants.length > 0 && (
                <ProductVariantsTable
                    className="p-4 lg:px-6"
                    productVariants={productVariants.map((v) => ({ ...v, amount: 2500 }))}
                />
            )}

            {/* Navigation buttons */}
            <ProductsVariantsFormNavButtons />
        </div>
    );
};

export default ProductVariantsForm;
