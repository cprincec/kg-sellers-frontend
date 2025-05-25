"use client";

import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { Controller } from "react-hook-form";
import { ChevronDown, X } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import ImageUploadInputField from "@/components/shared/imageUploadField/ImageUploadInputField";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

// export const ProductCategoryForm = ({ navigateToNextStep }) => {
//     const {
//         control,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<IProductCategoryFormDTO>({
//         // defaultValues: signUpDefaultValues, // i need a context
//         // resolver: signUpResolver as Resolver<IStoreDetailsFormDTO>,
//     });

//     const saveProductCategory = () => {
//         navigateToNextStep();
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit(saveProductCategory)}>
//                 <div className="grid grid-cols-1 space-y-4">
//                     {/* Category */}
//                     <ControlledModifiedInput
//                         name="category"
//                         control={control}
//                         placeholder="Select Category"
//                         type="text"
//                         error={errors.category}
//                         isRequired={true}
//                         className="col-span-4"
//                         rules={{ required: true }}
//                         data-testid="category"
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// };

// @ts-expect-error to be changed
export const StoreDetailsFormFields = ({ formProps }) => {
    const { control, errors } = formProps;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 ">
            {/* Store Name */}
            <ControlledModifiedInput
                label="Store name"
                name="storeName"
                control={control}
                placeholder="Store Name"
                type="text"
                error={errors.storeName}
                isRequired={true}
                className="col-span-4 "
                rules={{ required: true }}
                data-testid="storeName"
            />

            {/* Email */}
            <ControlledModifiedInput
                label="Email"
                name="email"
                control={control}
                rules={{ required: true }}
                placeholder="Email"
                type="email"
                error={errors.email}
                isRequired={true}
                data-testid="email"
            />

            {/* Phone */}
            <div className="relative">
                <ControlledModifiedInput
                    label="Phone number"
                    name="phone"
                    control={control}
                    rules={{ required: true }}
                    placeholder="Phone Number"
                    type="tel"
                    error={errors.phone}
                    isRequired={true}
                    data-testid="phone"
                />
            </div>

            {/* State */}
            <ControlledModifiedInput
                label="State"
                name="state"
                control={control}
                placeholder="State"
                type="text"
                error={errors.state}
                isRequired={true}
                className="col-span-4"
                rules={{ required: true }}
                data-testid="state"
            />

            {/* Address */}
            <ControlledModifiedInput
                label="Store address"
                name="address"
                control={control}
                placeholder="Store address"
                type="text"
                error={errors.address}
                isRequired={true}
                className="col-span-4"
                containerClassName="lg:col-span-2"
                rules={{ required: true }}
                data-testid="address"
            />

            <div className="mt-4 grid lg:grid-cols-2 lg:items-baseline gap-6 lg:gap-8 lg:col-span-2">
                {/* Business logo */}
                <div>
                    <p className="text-sm md:text-base text-kaiglo_grey-900 mb-2 uppercase lg:capitalize">
                        Business Logo<span className="text-kaiglo_critical-error font-medium">*</span>
                    </p>
                    <ImageUploadInputField
                        name="logo"
                        control={control}
                        error={errors.logo}
                        rules={{ required: true }}
                    />
                </div>

                {/* Banner */}
                <div>
                    <p className="text-sm md:text-base text-kaiglo_grey-900 mb-2 uppercase lg:capitalize">
                        Store Banner<span className="text-kaiglo_critical-error font-medium">*</span>
                    </p>
                    <ImageUploadInputField
                        name="banner"
                        control={control}
                        error={errors.banner}
                        rules={{ required: false }}
                    />
                </div>
            </div>
        </div>
    );
};

// @ts-expect-error to be changed
export const ProductCategoryFormFields = ({ control, errors }) => {
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

    return (
        <div className="grid grid-cols-1 space-y-4">
            <Controller
                control={control}
                name={"productCategories"}
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
                        <div>
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

                            {errors?.productCategories && (
                                <p className="text-sm mt-1 font-light text-kaiglo_critical-base">
                                    {errors.productCategories.message}
                                </p>
                            )}
                        </div>
                    );
                }}
            />
        </div>
    );
};

// @ts-expect-error to be changed
export const PaymentOptionFormFields = ({ control, errors }) => {
    return (
        <div>
            {/* <h3 className="text-sm mt-6 mb-4">Bank Account Details</h3> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                {/* Beneficiary Name */}
                <div className="lg:order-4 lg:col-span-2">
                    <ControlledModifiedInput
                        label="Beneficiary name"
                        name="beneficiaryName"
                        control={control}
                        placeholder="Beneficiary Name"
                        type="text"
                        error={errors?.beneficiaryName}
                        isRequired={true}
                        className=""
                        rules={{ required: true }}
                        data-testid="beneficiaryName"
                    />
                    <p className="text-xs text-[.65rem] leading-3 md:text-sm text-kaiglo_grey-700 mt-1 md:mt-2">
                        Ensure that the account provided matches the account name
                    </p>
                </div>

                {/* Account Number */}
                <ControlledModifiedInput
                    label="Account number"
                    name="accountNumber"
                    control={control}
                    rules={{ required: true }}
                    placeholder="Bank Account Number"
                    type="number"
                    error={errors?.accountNumber}
                    isRequired={true}
                    data-testid="accountNumber"
                />

                {/* Bank Name */}
                <ControlledModifiedInput
                    label="Bank name"
                    name="bankName"
                    control={control}
                    placeholder="Bank Name"
                    type="text"
                    error={errors?.bankName}
                    isRequired={true}
                    className="col-span-4"
                    rules={{ required: true }}
                    data-testid="bankName"
                />
            </div>
        </div>
    );
};
