"use client";

import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { productCategorySchema } from "@/app/(auth)/lib/validations/schemas";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import ProductCategoryFormFields from "./ProductCategoryFormFields";
import { IProductCategoryFormValue } from "../../../lib/interface";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const ProductCategoryForm = ({ className }: { className?: string }) => {
    const { setSearchParams } = useUpdateSearchParams();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IProductCategoryFormValue>({
        defaultValues: { productCategory: "" },
        resolver: yupResolver(productCategorySchema),
    });

    const saveProductCategory = (values: IProductCategoryFormValue) => {
        console.log("Selected categories:", values);
        setSearchParams([{ step: "product-details" }]);
    };

    return (
        <div className={cn("grid gap-6 px-6 py-2", className)}>
            <h2 className="mb-5 text-base font-medium">PRODUCT CATEGORIES</h2>
            <form onSubmit={handleSubmit(saveProductCategory)} className="grid gap-10">
                <ProductCategoryFormFields control={control} errors={errors} />

                <div>
                    <FormNavButtons
                        cancelFunc={() => console.log("Cancelled")}
                        submitButtonText="Save and continue"
                        className="md:max-w-[424px] md:mx-auto hidden md:grid grid-cols-2 gap-6 justify-between"
                    />
                    <FormNavButtons
                        cancelFunc={() => console.log("Cancelled")}
                        submitButtonText="Save & continue"
                        className="md:max-w-[424px] md:mx-auto grid md:hidden grid-cols-2 gap-6 justify-between"
                    />
                </div>
            </form>
        </div>
    );
};

export default ProductCategoryForm;
