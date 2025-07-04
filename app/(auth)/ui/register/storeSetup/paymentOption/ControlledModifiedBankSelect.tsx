import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import ModifiedBankSelect from "./ModifiedBankSelect";
import { IBank, IPaymentOptionDTO } from "@/app/(auth)/lib/interfaces/interface";
import { Label } from "@/components/ui/label";

const ControlledModifiedBankSelect = <TFormValue extends FieldValues>({
    name,
    control,
    error,
    banks,
}: // onChange,
{
    name: Path<TFormValue>;
    control: Control<TFormValue, unknown, IPaymentOptionDTO>;
    banks: IBank[];
    error: FieldError | undefined;
}) => {
    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div>
                        <div className="flex flex-col gap-1 md:gap-2 justify-stretch">
                            <Label className="text-sm md:text-base text-kaiglo_grey-700 font-normal">
                                Bank name <span className="text-kaiglo_critical-error font-medium"> *</span>
                            </Label>
                            <ModifiedBankSelect value={field.value} onChange={field.onChange} banks={banks} />
                        </div>
                        {error && (
                            <p className="text-sm md:text-base text-left mt-1 font-normal text-kaiglo_critical-error">
                                {error.message}
                            </p>
                        )}
                    </div>
                )}
            />
        </div>
    );
};

export default ControlledModifiedBankSelect;
