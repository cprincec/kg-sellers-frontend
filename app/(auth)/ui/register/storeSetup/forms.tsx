"use client";

import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import {
    IPaymentOptionFormDTO,
    IProductCategoryFormDTO,
    IStoreDetailsFormDTO,
} from "@/interfaces/dtos/auth.dto.interface";

import { Controller, useForm } from "react-hook-form";
import ConfirmAccountModal from "./ConfirmAccountModal";
import { useState } from "react";
import { UseFormHookProps } from "@/app/(auth)/register/store-setup/page";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Check, X } from "lucide-react";
import { ImageUploadInput } from "@/components/ui/icons/image-upload-icons";

// export const StoreDetailsForm = ({ navigateToNextStep }) => {
//     const {
//         control,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<IStoreDetailsFormDTO>({
//         // defaultValues: signUpDefaultValues, // i need a context
//         // resolver: signUpResolver as Resolver<IStoreDetailsFormDTO>,
//     });

//     const saveStoreDetails = () => {
//         // navigateToNextStep();
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit(saveStoreDetails)}>
//                 <div className="grid grid-cols-1 space-y-4">
//                     {/* Store Name */}
//                     <ControlledModifiedInput
//                         name="storeName"
//                         control={control}
//                         placeholder="Store Name"
//                         type="text"
//                         error={errors.storeName}
//                         isRequired={true}
//                         className="col-span-4"
//                         rules={{ required: true }}
//                         data-testid="storeName"
//                     />

//                     {/* Email */}
//                     <ControlledModifiedInput
//                         name="email"
//                         control={control}
//                         rules={{ required: true }}
//                         placeholder="Email"
//                         type="email"
//                         error={errors.email}
//                         isRequired={true}
//                         data-testid="email"
//                     />

//                     {/* Phone */}
//                     <div className="relative">
//                         <span className="absolute border-r border-kaiglo_grey-disabled text-kaiglo_grey-base text-base w-[72px] rounded-l-lg ml-[1px] h-[46px] flex justify-center items-center border-0 mt-[1px]">
//                             +234
//                         </span>
//                         <ControlledModifiedInput
//                             name="phone"
//                             control={control}
//                             rules={{ required: true }}
//                             placeholder="Phone Number"
//                             type="tel"
//                             error={errors.phone}
//                             isRequired={true}
//                             className="pl-20"
//                             data-testid="phone"
//                         />
//                     </div>

//                     {/* State */}
//                     <ControlledModifiedInput
//                         name="state"
//                         control={control}
//                         placeholder="State"
//                         type="text"
//                         error={errors.state}
//                         isRequired={true}
//                         className="col-span-4"
//                         rules={{ required: true }}
//                         data-testid="state"
//                     />

//                     {/* Address */}
//                     <ControlledModifiedInput
//                         name="address"
//                         control={control}
//                         placeholder="Address"
//                         type="text"
//                         error={errors.address}
//                         isRequired={true}
//                         className="col-span-4"
//                         rules={{ required: true }}
//                         data-testid="address"
//                     />

//                     {/* Business logo */}
//                     <ControlledModifiedInput
//                         name="logo"
//                         control={control}
//                         placeholder="Logo"
//                         type="text"
//                         error={errors.logo}
//                         isRequired={true}
//                         className="col-span-4"
//                         rules={{ required: true }}
//                         data-testid="logo"
//                     />

//                     {/* Banner */}
//                     <ControlledModifiedInput
//                         name="banner"
//                         control={control}
//                         placeholder="Banner"
//                         type="text"
//                         error={errors.banner}
//                         isRequired={false}
//                         className="col-span-4"
//                         rules={{ required: false }}
//                         data-testid="banner"
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// };

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

// export const PaymentOptionForm = ({ navigateToNextStep }) => {
//     const [showConfirmAccountModal, setShowConfirmAccountModal] = useState(false);
//     const {
//         control,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<IPaymentOptionFormDTO>({
//         // defaultValues: signUpDefaultValues, // i need a context
//         // resolver: signUpResolver as Resolver<IStoreDetailsFormDTO>,
//     });

//     const savePaymentOption = () => {
//         setShowConfirmAccountModal(true);
//     };

//     return (
//         <div>
//             <h3 className="text-sm mt-6 mb-4">Bank Account Details</h3>
//             <form onSubmit={handleSubmit(savePaymentOption)}>
//                 <div className="grid grid-cols-1 space-y-4">
//                     {/* Beneficiary Name */}
//                     <ControlledModifiedInput
//                         name="beneficiaryName"
//                         control={control}
//                         placeholder="Beneficiary Name"
//                         type="text"
//                         error={errors.beneficiaryName}
//                         isRequired={true}
//                         className="col-span-4"
//                         rules={{ required: true }}
//                         data-testid="beneficiaryName"
//                     />

//                     {/* Account Number */}
//                     <ControlledModifiedInput
//                         name="accountNumber"
//                         control={control}
//                         rules={{ required: true }}
//                         placeholder="Bank Account Number"
//                         type="number"
//                         error={errors.accountNumber}
//                         isRequired={true}
//                         data-testid="accountNumber"
//                     />

//                     {/* Bank Name */}
//                     <ControlledModifiedInput
//                         name="bankName"
//                         control={control}
//                         placeholder="Bank Name"
//                         type="text"
//                         error={errors.bankName}
//                         isRequired={true}
//                         className="col-span-4"
//                         rules={{ required: true }}
//                         data-testid="bankName"
//                     />
//                 </div>
//             </form>
//             {showConfirmAccountModal && (
//                 <ConfirmAccountModal
//                     showConfirmAccountModal={showConfirmAccountModal}
//                     setShowConfirmAccountModal={setShowConfirmAccountModal}
//                     navigateToNextStep={navigateToNextStep}
//                     accountDetails={{
//                         beneficiaryName: "Ademola Lookman",
//                         accountNumber: "27836752745",
//                         bankName: "First bank of Nigeria",
//                     }}
//                 />
//             )}
//         </div>
//     );
// };

export const StoreDetailsFormFields = ({ formProps }: { formProps: UseFormHookProps }) => {
    const { control, errors } = formProps;
    return (
        <div className="grid grid-cols-1 space-y-4">
            {/* Store Name */}
            <ControlledModifiedInput
                name="storeName"
                control={control}
                placeholder="Store Name"
                type="text"
                error={errors.storeName}
                isRequired={true}
                className="col-span-4"
                rules={{ required: true }}
                data-testid="storeName"
            />

            {/* Email */}
            <ControlledModifiedInput
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
                <span className="absolute border-r border-kaiglo_grey-disabled text-kaiglo_grey-base text-base w-[72px] rounded-l-lg ml-[1px] h-[46px] flex justify-center items-center border-0 mt-[1px]">
                    +234
                </span>
                <ControlledModifiedInput
                    name="phone"
                    control={control}
                    rules={{ required: true }}
                    placeholder="Phone Number"
                    type="tel"
                    error={errors.phone}
                    isRequired={true}
                    className="pl-20"
                    data-testid="phone"
                />
            </div>

            {/* State */}
            <ControlledModifiedInput
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
                name="address"
                control={control}
                placeholder="Address"
                type="text"
                error={errors.address}
                isRequired={true}
                className="col-span-4"
                rules={{ required: true }}
                data-testid="address"
            />

            {/* Business logo */}
            <div>
                <p className="font-medium text-sm text-kaiglo_grey-900 mb-2">BUSINESS LOGO</p>
                <ImageUploadInput
                    name="logo"
                    control={control}
                    error={errors.logo}
                    rules={{ required: true }}
                />
            </div>

            {/* Banner */}
            <div>
                <p className="font-medium text-sm text-kaiglo_grey-900 mb-2">STORE BANNER</p>
                <ImageUploadInput
                    name="banner"
                    control={control}
                    error={errors.banner}
                    rules={{ required: false }}
                />
            </div>
        </div>
    );
};

export const ProductCategoryFormFields = ({ control, errors }) => {
    // const { control, errors } = formProps;

    const options = ["Men's Fashion", "Women's Fashion", "Health & Beauty", "Office & School"];

    return (
        <div className="grid grid-cols-1 space-y-4">
            <Controller
                control={control}
                name={"productCategories"}
                render={({ field }) => {
                    const handleChange = (value: string) => {
                        const currentValues = field.value || [];
                        if (currentValues.includes(value)) {
                            field.onChange(currentValues.filter((item: string) => item !== value));
                        } else {
                            field.onChange([...currentValues, value]);
                        }
                    };

                    const removeItem = (option: string) => {
                        field.onChange(field.value.filter((item: string) => item !== option));
                    };

                    return (
                        <div>
                            <div className="border rounded-md p-2">
                                <Select name="productCatgories" value="" onValueChange={handleChange}>
                                    <SelectTrigger>
                                        <span className="">Select Categories</span>
                                    </SelectTrigger>
                                    <SelectContent className="grid grid-cols-3 ">
                                        {options.map((option, index) => {
                                            const isSelected = field.value?.includes(option);
                                            return (
                                                <SelectItem key={index} value={option}>
                                                    <div className="flex items-center p-0">
                                                        <span
                                                            className={`mb-0.5 w-4 h-4 p-0.5 mr-2 flex items-center justify-center rounded-sm border ${
                                                                isSelected
                                                                    ? "border-kaiglo_success-base"
                                                                    : "border-kaiglo_grey-900"
                                                            }`}
                                                        >
                                                            {isSelected && (
                                                                <Check className="text-kaiglo_success-base" />
                                                            )}
                                                        </span>
                                                        {option}
                                                    </div>
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                            {field.value?.length > 0 && (
                                <div className="mt-3">
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

export const PaymentOptionFormFields = ({ control, errors }) => {
    return (
        <div>
            <h3 className="text-sm mt-6 mb-4">Bank Account Details</h3>

            <div className="grid grid-cols-1 space-y-4">
                {/* Beneficiary Name */}
                <ControlledModifiedInput
                    name="beneficiaryName"
                    control={control}
                    placeholder="Beneficiary Name"
                    type="text"
                    error={errors?.beneficiaryName}
                    isRequired={true}
                    className="col-span-4"
                    rules={{ required: true }}
                    data-testid="beneficiaryName"
                />

                {/* Account Number */}
                <ControlledModifiedInput
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
