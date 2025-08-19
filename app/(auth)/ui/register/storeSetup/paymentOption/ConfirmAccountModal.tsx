"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IBankDetailsDTO, IPaymentOptionDTO } from "@/app/(auth)/lib/interfaces/interface";
import { VerticalLineIcon } from "../stepper/stepper-icons";
import { useModalContext } from "@/app/contexts/modalContext";

const ConfirmAccountModal = ({
    bankDetails,
    isSavingPaymentOption,
    savePaymentOption,
    editPaymentOption,
}: {
    bankDetails: IPaymentOptionDTO & {
        bankName: string;
    };
    isSavingPaymentOption: boolean;
    savePaymentOption?: (values: IPaymentOptionDTO) => void;
    editPaymentOption?: (values: IBankDetailsDTO) => void;
}) => {
    const { setShowModal } = useModalContext();
    const { beneficiaryName, bankName, accountNumber, bankId } = bankDetails;

    return (
        <DialogContent
            className="w-[90%] md:w-[400px] md:h-[268px] m-auto outline-none px-4 py-4 rounded-2xl"
            data-testid="otp-dialog"
        >
            <DialogHeader>
                <DialogTitle className="text-lg text-kaiglo_grey-900 font-medium text-left">
                    Confirm account
                </DialogTitle>
                <DialogDescription />
            </DialogHeader>
            <p className="text-sm font-normal -mt-5 text-kaiglo_grey-base">
                Do you confirm this bank details are valid?
            </p>
            <section className="grid gap-2 mt-2 border border-kaiglo_grey-100 rounded-lg p-2 bg-kaiglo_grey-50">
                <h4 className="font-medium text-kaiglo_grey-800">{beneficiaryName}</h4>
                <div className="flex gap-1 items-baseline">
                    <p>{accountNumber}</p>
                    <span className="text-kaiglo_grey-disabled">
                        <VerticalLineIcon className="w-1 h-5 -mb-1" />
                    </span>
                    <p>{bankName}</p>
                </div>
            </section>

            {/* Navigation Buttons */}
            <div className="grid grid-flow-col items-center gap-3 pt-4 ">
                <Button
                    type="button"
                    variant={"outline"}
                    className="p-3 rounded-full text-kaiglo_grey-700 border-kaiglo_grey-disabled"
                    onClick={() => setShowModal(false)}
                >
                    Cancel
                </Button>

                <Button
                    type="button"
                    className="p-3 rounded-full"
                    onClick={() => {
                        if (savePaymentOption) savePaymentOption({ bankId, beneficiaryName, accountNumber });
                        if (editPaymentOption) editPaymentOption(bankDetails);
                    }}
                    disabled={isSavingPaymentOption}
                >
                    {isSavingPaymentOption ? "Please wait..." : "Continue"}
                </Button>
            </div>
        </DialogContent>
    );
};

export default ConfirmAccountModal;
