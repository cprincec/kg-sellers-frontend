import { IBank, IPaymentOptionDTO } from "@/app/(auth)/lib/interfaces/interface";
import ControlledModifiedBankSelect from "@/app/(auth)/ui/register/storeSetup/paymentOption/ControlledModifiedBankSelect";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import { useEffect, useState } from "react";
import {
    Control,
    FieldErrors,
    UseFormClearErrors,
    UseFormGetValues,
    UseFormSetError,
    UseFormSetValue,
    UseFormWatch,
} from "react-hook-form";
import useVerifyBankAccount from "../../hooks/useVerifyBankAccount";

const PaymentOptionFormFields = ({
    banks,
    control,
    errors,
    watch,
    getValues,
    setValue,
    setError,
    clearErrors,
}: {
    getValues: UseFormGetValues<IPaymentOptionDTO>;
    setValue: UseFormSetValue<IPaymentOptionDTO>;
    banks: IBank[];
    control: Control<IPaymentOptionDTO>;
    errors: FieldErrors<IPaymentOptionDTO>;
    watch: UseFormWatch<IPaymentOptionDTO>;
    setError: UseFormSetError<IPaymentOptionDTO>;
    clearErrors: UseFormClearErrors<IPaymentOptionDTO>;
}) => {
    const bankId = watch("bankId");
    const accountNumber = watch("accountNumber");

    const bankCode = bankId ? banks.find((bank) => bank.id === bankId)?.code ?? "" : "";

    const {
        verifyBankAccountResponse,
        refetchVerifyBankAccountResponse,
        isFetchingVerifyBankAccountResponse,
    } = useVerifyBankAccount(accountNumber, bankCode);

    // State to track whether user has started typing account number
    const [hasTypedAccountNumber, setHasTypedAccountNumber] = useState(false);

    // Trigger validation only when user types & reaches 10 digits
    useEffect(() => {
        if (!hasTypedAccountNumber) return;

        if (accountNumber?.length === 10 && bankCode) {
            refetchVerifyBankAccountResponse();
        } else {
            setValue("beneficiaryName", "");
            clearErrors("accountNumber");
        }
    }, [accountNumber, bankCode, hasTypedAccountNumber, refetchVerifyBankAccountResponse, setValue]);

    // Update beneficiary name after validation success
    useEffect(() => {
        if (accountNumber && accountNumber.length === 10 && verifyBankAccountResponse) {
            if (verifyBankAccountResponse.status && verifyBankAccountResponse?.data?.account_name) {
                setValue("beneficiaryName", verifyBankAccountResponse.data.account_name);
            } else {
                setError("accountNumber", { type: "manual", message: "Account not found" });
            }
        }
    }, [verifyBankAccountResponse, setValue, accountNumber]);

    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
                {/* Bank Name */}
                <ControlledModifiedBankSelect
                    banks={banks}
                    name="bankId"
                    control={control}
                    error={errors.bankId}
                    onChangePartialFunc={(value) => {
                        const valueChanged = value !== getValues("bankId");
                        if (valueChanged) {
                            setValue("accountNumber", "");
                            setValue("beneficiaryName", "");
                            setHasTypedAccountNumber(false);
                        }
                    }}
                />

                {/* Account Number */}
                <ControlledModifiedInput
                    label="Account number"
                    name="accountNumber"
                    control={control}
                    rules={{ required: true }}
                    inputMode="numeric"
                    placeholder="Bank Account Number"
                    type="number"
                    error={errors?.accountNumber}
                    isRequired={true}
                    data-testid="accountNumber"
                    onValueChange={(e) => {
                        const value = e.target.value;
                        if (value.length > 10) return;

                        setHasTypedAccountNumber(true);
                        setValue("accountNumber", value);
                    }}
                />

                <div>
                    {/* Beneficiary Name */}
                    <ControlledModifiedInput
                        label="Beneficiary name"
                        name="beneficiaryName"
                        control={control}
                        placeholder="Beneficiary Name"
                        type="text"
                        error={errors?.beneficiaryName}
                        isRequired={true}
                        rules={{ required: true }}
                        data-testid="beneficiaryName"
                        disabled={true}
                    />
                    {isFetchingVerifyBankAccountResponse && (
                        <p className="text-sm text-gray-500 mt-2">Validating account…</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentOptionFormFields;
