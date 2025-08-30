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
        resolver: yupResolver(payoutThresholdSchema),
        reValidateMode: "onSubmit",
    });

    const setThreshold = (values: IPayoutThresholdFormDTO) => {
        const { payoutThresholdAmount } = values;
        if (!payoutThresholdAmount || Number(payoutThresholdAmount) < 1000) return;

        localStorage.setItem("payoutThresholdAmount", JSON.stringify(values.payoutThresholdAmount));
        cancel();
    };

    return (
        <form onSubmit={handleSubmit(setThreshold)} className="grid gap-6">
            {/* Payout Threshold Amount */}
            <ControlledModifiedInput
                label="Amount in Naira"
                name="payoutThresholdAmount"
                type="number"
                control={control}
                rules={{ required: true }}
                placeholder="Enter amount"
                error={errors.payoutThresholdAmount}
                isRequired={true}
                data-testid="payout-threshold-amount"
            />

            {/* Navigation Buttons*/}
            <FormNavButtons cancelFunc={cancel} />
        </form>
    );
};

export default PayoutThresholdForm;
