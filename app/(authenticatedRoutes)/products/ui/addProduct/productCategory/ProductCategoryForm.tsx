"use client";

import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import ProductCategoryFormFields from "./ProductCategoryFormFields";
import { IProductCategoryDTO } from "../../../lib/interface";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import { startTransition } from "react";
import { productCategorySchema } from "../../../lib/schemas";
import useGetProductsCategories from "../../../hooks/addProduct/useGetProductsCategories";
import Loader from "@/app/ui/Loader";
import { useRouter } from "next/navigation";

const ProductCategoryForm = ({ className }: { className?: string }) => {
    const { setSearchParams } = useUpdateSearchParams();
    const { productCategory, setProductCategory } = useAddProductContext();
    const { isPending, data } = useGetProductsCategories();
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm<IProductCategoryDTO>({
        defaultValues: productCategory,
        resolver: yupResolver(productCategorySchema),
    });

    const saveProductCategory = (values: IProductCategoryDTO) => {
        console.log("Product Category Values", values);
        setProductCategory(values);
        startTransition(() => {
            setSearchParams([{ step: "product-details" }]);
        });
    };

    if (isPending) return <Loader />;

    if (data)
        return (
            <div className={cn("grid gap-6 px-4 py-2", className)}>
                <h2 className="mb-5 text-base font-medium">PRODUCT CATEGORIES</h2>
                <form onSubmit={handleSubmit(saveProductCategory)} className="grid gap-10">
                    <ProductCategoryFormFields
                        categories={data}
                        control={control}
                        errors={errors}
                        setValue={setValue}
                        reset={reset}
                    />

                    <div>
                        <FormNavButtons
                            cancelFunc={() => router.push("/products")}
                            submitButtonText="Save and continue"
                            className="md:max-w-[424px] md:mx-auto hidden md:grid grid-cols-2 gap-6 justify-between"
                        />
                        <FormNavButtons
                            cancelFunc={() => router.push("/products")}
                            submitButtonText="Save & continue"
                            className="md:max-w-[424px] md:mx-auto grid md:hidden grid-cols-2 gap-6 justify-between"
                        />
                    </div>
                </form>
            </div>
        );
};

export default ProductCategoryForm;
