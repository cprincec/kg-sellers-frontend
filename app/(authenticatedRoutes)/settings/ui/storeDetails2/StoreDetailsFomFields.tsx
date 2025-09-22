"use client";

import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { Control, FieldErrors } from "react-hook-form";
import StoreDetailsFormImageFields from "./StoreDetailsFormImageFields";
import { IStoreDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";

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
                label="Business name"
                name="storeName"
                control={control}
                placeholder="Enter Business name"
                type="text"
                error={errors.storeName}
                isRequired={true}
                className=""
                rules={{ required: true }}
                data-testid="storeName"
            />

            {/* Email */}
            <ControlledModifiedInput
                label="Email"
                name="email"
                control={control}
                rules={{ required: true }}
                placeholder="example@gmail.com"
                type="email"
                error={errors.email}
                isRequired={true}
                data-testid="email"
                disabled={true} // The default email is always submitted on form submission regardless of the value of this field
            />

            {/* Phone */}
            <div className="relative">
                <ControlledModifiedInput
                    label="Phone number"
                    name="phoneNumber"
                    control={control}
                    rules={{ required: true }}
                    placeholder="08097485832"
                    type="tel"
                    error={errors.phoneNumber}
                    isRequired={true}
                    data-testid="phone"
                />
            </div>

            {/* Address */}
            <ControlledModifiedInput
                label="Business address"
                name="storeAddress"
                control={control}
                placeholder="3, Ladipo Kuku Street, Ikeja, Lagos"
                type="text"
                error={errors.storeAddress}
                isRequired={true}
                className=""
                containerClassName=""
                rules={{ required: true }}
                data-testid="address"
            />

            <StoreDetailsFormImageFields control={control} errors={errors} />
        </div>
    );
};

export default StoreDetailsFormFields;
