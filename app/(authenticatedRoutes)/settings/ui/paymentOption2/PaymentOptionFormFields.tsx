import { IBank, IPaymentOptionDTO } from "@/app/(auth)/lib/interfaces/interface";
import ControlledModifiedBankSelect from "@/app/(auth)/ui/register/storeSetup/paymentOption/ControlledModifiedBankSelect";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { Control, FieldErrors } from "react-hook-form";

const PaymentOptionFormFields = ({
    banks,
    control,
    errors,
}: {
    banks: IBank[];
    control: Control<IPaymentOptionDTO>;
    errors: FieldErrors<IPaymentOptionDTO>;
}) => {
    return (
        <div>
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
                <div>
                    <ControlledModifiedBankSelect
                        banks={banks}
                        name="bankId"
                        control={control}
                        error={errors.bankId}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentOptionFormFields;
