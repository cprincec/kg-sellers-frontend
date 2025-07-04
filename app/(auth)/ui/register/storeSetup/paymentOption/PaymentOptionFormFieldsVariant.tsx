import { IPaymentOptionDTO } from "@/app/(auth)/lib/interfaces/interface";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { Control, FieldErrors } from "react-hook-form";

const PaymentOptionFormFieldsVariant = ({
    control,
    errors,
    showNote,
}: {
    control: Control<IPaymentOptionDTO>;
    errors: FieldErrors<IPaymentOptionDTO>;
    showNote: boolean;
}) => {
    return (
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
            {/* Beneficiary Name */}
            <div className="">
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
                {showNote && (
                    <p className="text-xs text-[.65rem] leading-3 md:text-sm text-kaiglo_grey-700 mt-1 md:mt-2">
                        Ensure that the account provided matches the account name
                    </p>
                )}
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
                name="bankId"
                control={control}
                placeholder="Bank Name"
                type="text"
                error={errors?.bankId}
                isRequired={true}
                className=""
                rules={{ required: true }}
                data-testid="bankName"
            />
        </div>
    );
};
export default PaymentOptionFormFieldsVariant;
