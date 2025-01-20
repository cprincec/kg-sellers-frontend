import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import {
    IPaymentOptionFormDTO,
    IProductCategoryFormDTO,
    IStoreDetailsFormDTO,
} from "@/interfaces/dtos/auth.dto.interface";

import { Resolver, useForm } from "react-hook-form";
import ConfirmAccountModal from "./ConfirmAccountModal";
import { useState } from "react";
import { UseFormHookProps } from "@/app/(auth)/register/store-setup/page";

export const StoreDetailsForm = ({ navigateToNextStep }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IStoreDetailsFormDTO>({
        // defaultValues: signUpDefaultValues, // i need a context
        // resolver: signUpResolver as Resolver<IStoreDetailsFormDTO>,
    });

    const saveStoreDetails = () => {
        // navigateToNextStep();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveStoreDetails)}>
                <div className="grid grid-cols-1 space-y-4">
                    {/* Store Name */}
                    <ControlledModifiedInput
                        name="storeName"
                        control={control}
                        placeholder="Store Name"
                        type="text"
                        error={errors.storeName}
                        isRequired={true}
                        classNames="col-span-4"
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
                            classNames="pl-20"
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
                        classNames="col-span-4"
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
                        classNames="col-span-4"
                        rules={{ required: true }}
                        data-testid="address"
                    />

                    {/* Business logo */}
                    <ControlledModifiedInput
                        name="logo"
                        control={control}
                        placeholder="Logo"
                        type="text"
                        error={errors.logo}
                        isRequired={true}
                        classNames="col-span-4"
                        rules={{ required: true }}
                        data-testid="logo"
                    />

                    {/* Banner */}
                    <ControlledModifiedInput
                        name="banner"
                        control={control}
                        placeholder="Banner"
                        type="text"
                        error={errors.banner}
                        isRequired={false}
                        classNames="col-span-4"
                        rules={{ required: false }}
                        data-testid="banner"
                    />
                </div>
            </form>
        </div>
    );
};

export const ProductCategoryForm = ({ navigateToNextStep }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IProductCategoryFormDTO>({
        // defaultValues: signUpDefaultValues, // i need a context
        // resolver: signUpResolver as Resolver<IStoreDetailsFormDTO>,
    });

    const saveProductCategory = () => {
        navigateToNextStep();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveProductCategory)}>
                <div className="grid grid-cols-1 space-y-4">
                    {/* Category */}
                    <ControlledModifiedInput
                        name="category"
                        control={control}
                        placeholder="Select Category"
                        type="text"
                        error={errors.category}
                        isRequired={true}
                        classNames="col-span-4"
                        rules={{ required: true }}
                        data-testid="category"
                    />
                </div>
            </form>
        </div>
    );
};

export const PaymentOptionForm = ({ navigateToNextStep }) => {
    const [showConfirmAccountModal, setShowConfirmAccountModal] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IPaymentOptionFormDTO>({
        // defaultValues: signUpDefaultValues, // i need a context
        // resolver: signUpResolver as Resolver<IStoreDetailsFormDTO>,
    });

    const savePaymentOption = () => {
        setShowConfirmAccountModal(true);
    };

    return (
        <div>
            <h3 className="text-sm mt-6 mb-4">Bank Account Details</h3>
            <form onSubmit={handleSubmit(savePaymentOption)}>
                <div className="grid grid-cols-1 space-y-4">
                    {/* Beneficiary Name */}
                    <ControlledModifiedInput
                        name="beneficiaryName"
                        control={control}
                        placeholder="Beneficiary Name"
                        type="text"
                        error={errors.beneficiaryName}
                        isRequired={true}
                        classNames="col-span-4"
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
                        error={errors.accountNumber}
                        isRequired={true}
                        data-testid="accountNumber"
                    />

                    {/* Bank Name */}
                    <ControlledModifiedInput
                        name="bankName"
                        control={control}
                        placeholder="Bank Name"
                        type="text"
                        error={errors.bankName}
                        isRequired={true}
                        classNames="col-span-4"
                        rules={{ required: true }}
                        data-testid="bankName"
                    />
                </div>
            </form>
            {showConfirmAccountModal && (
                <ConfirmAccountModal
                    showConfirmAccountModal={showConfirmAccountModal}
                    setShowConfirmAccountModal={setShowConfirmAccountModal}
                    navigateToNextStep={navigateToNextStep}
                    accountDetails={{
                        beneficiaryName: "Ademola Lookman",
                        accountNumber: "27836752745",
                        bankName: "First bank of Nigeria",
                    }}
                />
            )}
        </div>
    );
};

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
                classNames="col-span-4"
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
                    classNames="pl-20"
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
                classNames="col-span-4"
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
                classNames="col-span-4"
                rules={{ required: true }}
                data-testid="address"
            />

            {/* Business logo */}
            <ControlledModifiedInput
                name="logo"
                control={control}
                placeholder="Logo"
                type="text"
                error={errors.logo}
                isRequired={true}
                classNames="col-span-4"
                rules={{ required: true }}
                data-testid="logo"
            />

            {/* Banner */}
            <ControlledModifiedInput
                name="banner"
                control={control}
                placeholder="Banner"
                type="text"
                error={errors.banner}
                isRequired={false}
                classNames="col-span-4"
                rules={{ required: false }}
                data-testid="banner"
            />
        </div>
    );
};

export const ProductCategoryFormFields = ({ formProps }: { formProps: UseFormHookProps }) => {
    const { control, errors } = formProps;
    return (
        <div className="grid grid-cols-1 space-y-4">
            {/* Category */}
            <ControlledModifiedInput
                name="category"
                control={control}
                placeholder="Select Category"
                type="text"
                error={errors.category}
                isRequired={true}
                classNames="col-span-4"
                rules={{ required: true }}
                data-testid="category"
            />
        </div>
    );
};

export const PaymentOptionFormFields = ({ formProps }: { formProps: UseFormHookProps }) => {
    const { control, errors } = formProps;
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
                    error={errors.beneficiaryName}
                    isRequired={true}
                    classNames="col-span-4"
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
                    error={errors.accountNumber}
                    isRequired={true}
                    data-testid="accountNumber"
                />

                {/* Bank Name */}
                <ControlledModifiedInput
                    name="bankName"
                    control={control}
                    placeholder="Bank Name"
                    type="text"
                    error={errors.bankName}
                    isRequired={true}
                    classNames="col-span-4"
                    rules={{ required: true }}
                    data-testid="bankName"
                />
            </div>
        </div>
    );
};
