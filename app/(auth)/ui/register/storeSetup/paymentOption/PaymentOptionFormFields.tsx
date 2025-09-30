import { IBank, IPaymentOptionDTO } from "@/app/(auth)/lib/interfaces/interface";
import ControlledModifiedInput from "@/components/controlledElements/ControlledModifiedInput";
import {
    Control,
    FieldErrors,
    UseFormClearErrors,
    UseFormGetValues,
    UseFormSetError,
    UseFormSetValue,
    UseFormWatch,
} from "react-hook-form";
import PaymentOptionFormFieldsVariant from "./PaymentOptionFormFieldsVariant";
import ControlledModifiedBankSelect from "./ControlledModifiedBankSelect";
import useVerifyBankAccount from "@/app/(authenticatedRoutes)/settings/hooks/useVerifyBankAccount";
import { useEffect, useState } from "react";

const PaymentOptionFormFields = ({
    banks,
    control,
    errors,
    showNote,
    variant,
    getValues,
    setValue,
    setError,
    clearErrors,
    watch,
}: {
    banks: IBank[];
    control: Control<IPaymentOptionDTO>;
    errors: FieldErrors<IPaymentOptionDTO>;
    showNote: boolean;
    variant?: string;
    getValues: UseFormGetValues<IPaymentOptionDTO>;
    setValue: UseFormSetValue<IPaymentOptionDTO>;
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
            {variant ? (
                <PaymentOptionFormFieldsVariant control={control} errors={errors} showNote={showNote} />
            ) : (
                <div className="grid lg:grid-cols-2 gap-4">
                    {/* Bank Name */}
                    <div>
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
                    </div>

                    {/* Account Number */}
                    <div className="">
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
                            onValueChange={(e) => {
                                const value = e.target.value;
                                if (value.length > 10) return;

                                setHasTypedAccountNumber(true);
                                setValue("accountNumber", value);
                            }}
                        />
                    </div>

                    {/* Beneficiary Name */}
                    <div className="max-md:order-first lg:col-span-2">
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
                            disabled={true}
                        />

                        {isFetchingVerifyBankAccountResponse && (
                            <p className="text-sm text-gray-500 mt-2">Validating account…</p>
                        )}

                        {showNote && (
                            <p className="hidden md:block text-xs text-[.65rem] leading-3 md:text-sm text-kaiglo_grey-700 mt-1 md:mt-2">
                                Ensure that the account provided matches the account name
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentOptionFormFields;
