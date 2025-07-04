"use client";

import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import useSaveProductsCategories from "@/app/(auth)/hooks/register/storeSetup/useSaveProductsCategories";
import { IProductsCategoriesDTO } from "@/app/(auth)/lib/interfaces/interface";
import { productCategorySchema } from "@/app/(auth)/lib/validations/schemas";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { capitalizeFirstLetters } from "@/app/lib/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import ProductsCategoriesFormFields from "./ProductsCategoriesFormFields";

const ProductsCategoriesForm = ({ defaultValues }: { defaultValues: IProductsCategoriesDTO }) => {
    const { saveProductsCategories, isSavingProductsCategories } = useSaveProductsCategories();
    const { setCurrentStep, setOnboardingData } = useStoreSetupContext();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IProductsCategoriesDTO>({
        defaultValues,
        resolver: yupResolver(productCategorySchema),
    });

    const onSubmit = (values: IProductsCategoriesDTO) => {
        saveProductsCategories(values);
        setOnboardingData((prev) => ({ ...prev, productsCategories: values }));
    };

    return (
        <div className="grid grid-cols-1 space-y-4">
            <div className="grid gap-2">
                <h2 className="text-base font-medium">PRODUCT CATEGORY</h2>
                <p className="text-sm lg:text-base">Select what categorie(s) your product belong</p>
            </div>

            <Controller
                control={control}
                name={"category"}
                render={({ field }) => {
                    // Remove selected category
                    const removeItem = (option: string) => {
                        field.onChange(
                            field.value.filter((v: string) => v.toLowerCase() !== option.toLowerCase())
                        );
                    };

                    return (
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
                            <ProductsCategoriesFormFields
                                removeItem={removeItem}
                                field={field}
                                errors={errors}
                            />

                            {field.value?.length > 0 && (
                                <div className="mt-3 lg:hidden">
                                    <ul className="flex gap-2 flex-wrap text-sm text-kaiglo_grey-base">
                                        {field.value.map((item: string, index: number) => (
                                            <li
                                                className="flex justify-between items-center gap-2 text-sm rounded-lg border border-kaiglo_grey-200 p-2"
                                                key={index}
                                                role="listitem"
                                            >
                                                <p>{capitalizeFirstLetters(item)}</p>
                                                <button
                                                    type="button"
                                                    aria-label={`Remove ${item}`}
                                                    className="text-sm font-medium"
                                                    onClick={() => removeItem(item)}
                                                >
                                                    <X className="w-4" />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <FormNavButtons
                                cancelButtonText="Back"
                                cancelFunc={() => setCurrentStep((prev: number) => prev - 1)}
                                submitButtonText={"Next"}
                                className="grid grid-cols-2 lg:w-fit lg:ml-auto mt-3"
                                cancelButtonClassName="p-3 lg:min-w-[150px]"
                                submitButtonClassName="p-3 lg:min-w-[150px]"
                                disabled={isSavingProductsCategories}
                                
                            />
                        </form>
                    );
                }}
            />
        </div>
    );
};

export default ProductsCategoriesForm;
