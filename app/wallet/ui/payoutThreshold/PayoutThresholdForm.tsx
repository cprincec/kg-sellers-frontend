"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { payoutThresholdSchema } from "../../lib/validations/schemas";
import { IPayoutThresholdFormDTO } from "../../lib/interface";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import FormNavButtons from "./FormNavButtons";

const PayoutThresholdForm = ({ cancel }: { cancel: () => void }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { payoutThresholdAmount: "" },
        resolver: yupResolver(payoutThresholdSchema),
    });

    const setThreshold = (values: IPayoutThresholdFormDTO) => {
        console.log("submited", values);
        cancel();
    };

    return (
        <form onSubmit={handleSubmit(setThreshold)} className="grid gap-6">
            {/* Payout Threshold Amount */}
            <ControlledModifiedInput
                label="Amount in Naira"
                name="payoutThresholdAmount"
                control={control}
                rules={{ required: true }}
                placeholder="Enter amount"
                error={errors.payoutThresholdAmount}
                isRequired={true}
                data-testid="payout-threshold-amount"
            />

            {/* Navigation Buttons starts*/}
            <FormNavButtons cancelFunc={cancel} />
            {/* Navigation Buttons ends*/}
        </form>
    );
};

export default PayoutThresholdForm;
