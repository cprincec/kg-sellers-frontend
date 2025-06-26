"use client";

import { IStoreDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { Control, FieldErrors } from "react-hook-form";
import ImageUploadInputField from "@/components/shared/imageUploadField/ImageUploadInputField";

const StoreDetailsFormFields = ({
    control,
    errors,
}: {
    control: Control<IStoreDetailsDTO>;
    errors: FieldErrors<IStoreDetailsDTO>;
}) => {
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
                    name="phoneNumber"
                    control={control}
                    rules={{ required: true }}
                    placeholder="Phone Number"
                    type="tel"
                    error={errors.phoneNumber}
                    isRequired={true}
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
                name="storeAddress"
                control={control}
                placeholder="Store address"
                type="address"
                error={errors.storeAddress}
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
                        name="businessLogo"
                        control={control}
                        error={errors.businessLogo}
                        rules={{ required: true }}
                    />
                </div>
                {/* Banner */}
                <div>
                    <p className="text-sm md:text-base text-kaiglo_grey-900 mb-2 uppercase lg:capitalize">
                        Store Banner
                    </p>
                    <ImageUploadInputField
                        name="storeBanner"
                        control={control}
                        error={errors.storeBanner}
                        rules={{ required: false }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StoreDetailsFormFields;
