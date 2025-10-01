"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { accountChangeRequestSchema } from "../lib/validations/schemas";
import { IAccountChangeRequestFormDTO } from "../lib/interface";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import ControlledModifiedTextArea from "@/components/controlledElements/ControlledModifiedTextArea";
import ControlledRadixSelect from "@/components/controlledElements/ControlledRadixSelect";
import { Button } from "@/components/ui/button";
import { useModalContext } from "@/app/contexts/modalContext";
import { showSuccessToast } from "@/app/lib/utils/utils";
import useGetStoreDetails from "../hooks/useGetStoreDetails";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const AccountChangeRequestForm = ({ cancel }: { cancel: () => void }) => {
    const { setShowModal } = useModalContext();
    const session = useSession();
    const { storeDetails } = useGetStoreDetails();
    
    const {
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<IAccountChangeRequestFormDTO>({
        resolver: yupResolver(accountChangeRequestSchema),
        reValidateMode: "onSubmit",
    });

    const selectedChangeType = watch("changeType");

    const changeTypeOptions = [
        "Store Name",
        "Email Address", 
        "Phone Number",
        "Store Address"
    ];

    // Function to get current value based on selected change type
    const getCurrentValue = (changeType: string): string => {
        if (!storeDetails || !session.data?.user) return "";
        
        switch (changeType) {
            case "Store Name":
                return storeDetails.storeName || "";
            case "Email Address":
                return storeDetails.email || session.data.user.email || "";
            case "Phone Number":
                return storeDetails.phoneNumber || session.data.user.phone || "";
            case "Store Address":
                return storeDetails.storeAddress || "";
            default:
                return "";
        }
    };

    // Effect to populate current value when change type is selected
    useEffect(() => {
        if (selectedChangeType) {
            const currentValue = getCurrentValue(selectedChangeType);
            setValue("currentValue", currentValue);
        }
    }, [selectedChangeType, storeDetails, session.data?.user, setValue]);

    const submitRequest = (values: IAccountChangeRequestFormDTO) => {
        // TODO: Implement API call to submit the request
        console.log("Account change request submitted:", values);
        
        showSuccessToast({
            title: "Request Submitted",
            description: "Your account change request has been submitted successfully. Our support team will review it and get back to you within 24-48 hours.",
            showCloseButton: false,
        });
        
        setShowModal(false);
    };

    return (
        <form onSubmit={handleSubmit(submitRequest)} className="grid gap-6">
            {/* Change Type - Full Width */}
            <ControlledRadixSelect
                label="What would you like to change?"
                name="changeType"
                control={control}
                rules={{ required: true }}
                options={changeTypeOptions}
                placeholder="Select the type of change"
                error={errors.changeType}
                required={true}
            />

            {/* Two Column Layout for Current and New Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* Current Value */}
                <ControlledModifiedInput
                    label="Current Information"
                    name="currentValue"
                    control={control}
                    rules={{ required: true }}
                    placeholder="Current information will appear here"
                    error={errors.currentValue}
                    isRequired={true}
                    disabled={true}
                />

                {/* Requested Value */}
                <ControlledModifiedInput
                    label="New Information"
                    name="requestedValue"
                    control={control}
                    rules={{ required: true }}
                    placeholder="Enter the new information you want"
                    error={errors.requestedValue}
                    isRequired={true}
                />
            </div>

            {/* Reason - Full Width */}
            <ControlledModifiedTextArea
                label="Reason for Change"
                name="reason"
                control={control}
                rules={{ required: true }}
                placeholder="Please explain why you need to make this change"
                error={errors.reason}
                isRequired={true}
                rows={3}
            />

            {/* Additional Notes - Full Width */}
            <ControlledModifiedTextArea
                label="Additional Notes (Optional)"
                name="additionalNotes"
                control={control}
                rules={{}}
                placeholder="Any additional information that might help us process your request"
                error={errors.additionalNotes}
                rows={3}
            />

            {/* Navigation Buttons */}
            <div className="grid grid-flow-col items-center gap-3 pt-4">
                <Button
                    type="button"
                    variant="outline"
                    className="p-3 rounded-full text-kaiglo_grey-700 border-kaiglo_grey-disabled"
                    onClick={cancel}
                >
                    Cancel
                </Button>

                <Button
                    type="submit"
                    className="p-3 rounded-full"
                >
                    Submit Request
                </Button>
            </div>
        </form>
    );
};

export default AccountChangeRequestForm;

