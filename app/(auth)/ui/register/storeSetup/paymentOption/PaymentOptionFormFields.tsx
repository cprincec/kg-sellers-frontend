import { IBank, IPaymentOptionDTO } from "@/app/(auth)/lib/interfaces/interface";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { Control, FieldErrors } from "react-hook-form";
import PaymentOptionFormFieldsVariant from "./PaymentOptionFormFieldsVariant";
import ControlledModifiedBankSelect from "./ControlledModifiedBankSelect";

const PaymentOptionFormFields = ({
    banks,
    control,
    errors,
    showNote,
    variant,
}: {
    banks: IBank[];
    control: Control<IPaymentOptionDTO>;
    errors: FieldErrors<IPaymentOptionDTO>;
    showNote: boolean;
    variant?: string;
}) => {
    return (
        <div>
            {variant ? (
                <PaymentOptionFormFieldsVariant control={control} errors={errors} showNote={showNote} />
            ) : (
                <div className="grid lg:grid-cols-2 gap-4">
                    {/* Beneficiary Name */}
                    <div className="lg:order-last lg:col-span-2">
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
                            <p className="hidden md:block text-xs text-[.65rem] leading-3 md:text-sm text-kaiglo_grey-700 mt-1 md:mt-2">
                                Ensure that the account provided matches the account name
                            </p>
                        )}
                    </div>

                    {/* Account Number */}
                    <div className="lg:order-first">
                        <ControlledModifiedInput
                            label="Account number"
                            name="accountNumber"
                            control={control}
                            rules={{ required: true }}
                            placeholder="Bank Account Number"
                            type="text"
                            inputMode="numeric"
                            error={errors?.accountNumber}
                            isRequired={true}
                            data-testid="accountNumber"
                        />
                    </div>

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
            )}
        </div>
    );
};
export default PaymentOptionFormFields;
