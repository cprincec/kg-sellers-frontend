import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { LineIcon } from "./stepper-icons";

interface ConfirmAccountModalProps {
    showConfirmAccountModal: boolean;
    setShowConfirmAccountModal: React.Dispatch<SetStateAction<boolean>>;
    navigateToSpecificStep: (int: number) => void;
    beneficiaryName: string;
    accountNumber: string;
    bankName: string;
}

const ConfirmAccountModal = ({
    showConfirmAccountModal,
    setShowConfirmAccountModal,
    beneficiaryName,
    accountNumber,
    bankName,
    navigateToSpecificStep,
}: ConfirmAccountModalProps) => {
    return (
        <Dialog open={showConfirmAccountModal} onOpenChange={setShowConfirmAccountModal}>
            <DialogContent
                className="w-[90%] md:w-[45%] outline-none px-4 py-4 rounded-2xl"
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
                    <div className="flex justify-between items-baseline">
                        <p>{accountNumber}</p>
                        <span className="text-kaiglo_grey-disabled">
                            <LineIcon className="w-6 h-1 rotate-90" />
                        </span>
                        <p>{bankName}</p>
                    </div>
                </section>

                {/* Navigation Buttons starts*/}
                <div className="grid grid-flow-col items-center gap-3 pt-4 ">
                    <Button
                        type="button"
                        variant={"outline"}
                        className="p-3 rounded-full text-kaiglo_grey-700 border-kaiglo_grey-disabled"
                        onClick={() => setShowConfirmAccountModal(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="button"
                        className="p-3 rounded-full"
                        onClick={() => {
                            setShowConfirmAccountModal(false);
                            navigateToSpecificStep(3);
                        }}
                    >
                        Continue
                    </Button>
                </div>
                {/* Navigation Buttons ends*/}
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmAccountModal;
