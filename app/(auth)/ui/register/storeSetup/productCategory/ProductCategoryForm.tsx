"use client";

import { useStoreSetupContext } from "@/app/(auth)/contexts/storeSetupContext";
import { IProductCategoryDTO } from "@/app/(auth)/lib/interfaces/interface";
import { productCategorySchema } from "@/app/(auth)/lib/validations/schemas";
import FormNavButtons from "@/app/(authenticatedRoutes)/wallet/ui/payoutThreshold/FormNavButtons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const ProductCategoryForm = () => {
    const [open, setOpen] = useState(false);
    const options = [
        "Office & School",
        "Men's Fashion",
        "Women's Fashion",
        "Consumer Electronics",
        "Phones & Tablets",
        "Health & Beauty",
        "Heath & Beauty",
    ];

    // const { saveStoreDetails, isSavingStoreDetails } = useSaveStoreDetails();
    const { setCurrentStep, setOnboardingData, onboardingData } = useStoreSetupContext();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IProductCategoryDTO>({
        defaultValues: onboardingData?.productCategory || { category: [] },
        resolver: yupResolver(productCategorySchema),
    });

    const onSubmit = (values: IProductCategoryDTO) => {
        console.log(values);
        // saveStoreDetails(values);
        setCurrentStep((prev: number) => prev + 1);
        setOnboardingData((prev) => ({ ...prev, productCategory: values }));
    };

    return (
        <div className="grid grid-cols-1 space-y-4">
            <div className="grid gap-8 md:gap-10">
                <div>
                    <h2 className="mb-2 text-xl font-bold">PREFERRED PAYMENT OPTION</h2>
                    <p>
                        Select the payment method, if applicable, of your choice, and ensure to provide all
                        required details. We&apos;ll review the validity of your documents upon submissions
                    </p>
                </div>
            </div>

            <Controller
                control={control}
                name={"category"}
                render={({ field }) => {
                    const toggleOption = (option: string) => {
                        const currentValues = field.value || [];
                        if (currentValues.includes(option)) {
                            field.onChange(currentValues.filter((v: string) => v !== option));
                        } else {
                            field.onChange([...currentValues, option]);
                        }
                    };

                    const removeItem = (option: string) => {
                        field.onChange(field.value.filter((v: string) => v !== option));
                    };

                    return (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-2">
                                <Label className="text-sm md:text-base text-kaiglo_grey-700 capitalize font-normal">
                                    Category <span className="text-kaiglo_critical-error font-medium">*</span>
                                </Label>

                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild className="relative">
                                        <Button variant="outline" className="justify-between h-12 pr-2">
                                            <div className="text-kaiglo_grey-placeholder text-sm font-normal">
                                                {field.value?.length ? (
                                                    <>
                                                        <ul className="hidden lg:flex absolute top-1 left-1 right-1 gap-2 w-[--radix-popover-trigger-width] overflow-x-auto bg-white text-sm text-kaiglo_grey-base">
                                                            {field.value.map(
                                                                (item: string, index: number) => (
                                                                    <li
                                                                        className="flex justify-between items-center gap-2 text-sm rounded-lg border border-kaiglo_grey-200 p-2"
                                                                        key={index}
                                                                        role="listitem"
                                                                    >
                                                                        <p className="font-medium">{item}</p>
                                                                        <span
                                                                            aria-label={`Remove ${item}`}
                                                                            className="text-sm font-medium"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                removeItem(item);
                                                                            }}
                                                                        >
                                                                            <X className="w-4" />
                                                                        </span>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                        <span className="lg:hidden text-sm text-kaiglo_grey-placeholder">
                                                            Select Categories
                                                        </span>
                                                    </>
                                                ) : (
                                                    "Select Categories"
                                                )}
                                            </div>
                                            <ChevronDown
                                                className={cn(
                                                    "ml-2 min-h-6 min-w-6 text-kaiglo_grey-700 font-extralight transition-transform duration-200",
                                                    open && "rotate-180"
                                                )}
                                            />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-[--radix-popover-trigger-width] p-4"
                                        align="start"
                                        sideOffset={8}
                                    >
                                        <div className="grid gap-6 lg:flex lg:flex-wrap">
                                            {options.map((option, idx) => {
                                                const isSelected = field.value?.includes(option);
                                                return (
                                                    <div
                                                        key={idx}
                                                        className="flex gap-2 items-center lg:p-2 cursor-pointer lg:hover:bg-kaiglo_grey-100 rounded-[4px]"
                                                    >
                                                        <Checkbox
                                                            id={`cat-${idx}`}
                                                            checked={isSelected}
                                                            onCheckedChange={() => toggleOption(option)}
                                                            className={`flex items-center justify-center rounded-[5px] border border-kaiglo_grey-500 data-[state=checked]:border-kaiglo_success-base data-[state=checked]:bg-transparent data-[state=checked]:text-kaiglo_success-base`}
                                                            checkClassName="w-[12px] h-[10px]"
                                                        />
                                                        <label
                                                            htmlFor={`cat-${idx}`}
                                                            className="text-base text-kaiglo_grey-base font-medium  cursor-pointer"
                                                        >
                                                            {option}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {field.value?.length > 0 && (
                                <div className="mt-3 lg:hidden">
                                    <ul className="flex gap-2 flex-wrap text-sm text-kaiglo_grey-base">
                                        {field.value.map((item: string, index: number) => (
                                            <li
                                                className="flex justify-between items-center gap-2 text-sm rounded-lg border border-kaiglo_grey-200 p-2"
                                                key={index}
                                                role="listitem"
                                            >
                                                <p>{item}</p>
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

                            {errors?.category && (
                                <p className="text-sm mt-1 font-light text-kaiglo_critical-base">
                                    {errors.category.message}
                                </p>
                            )}

                            <FormNavButtons
                                className="grid grid-cols-2 md:w-fit md:ml-auto"
                                cancelButtonText="Back"
                                cancelFunc={() => setCurrentStep((prev: number) => prev - 1)}
                                submitButtonText={"Next"}
                                // disabled={isSavingStoreDetails}
                            />
                        </form>
                    );
                }}
            />
        </div>
    );
};

export default ProductCategoryForm;
