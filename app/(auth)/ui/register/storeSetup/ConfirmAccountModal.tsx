import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SetStateAction } from "react";
import { Button } from "@/components/ui/button";

interface ConfirmAccountModalProps {
    showConfirmAccountModal: boolean;
    setShowConfirmAccountModal: React.Dispatch<SetStateAction<boolean>>;
    navigateToNextStep: () => void;
    accountDetails: {
        beneficiaryName: string;
        accountNumber: string;
        bankName: string;
    };
}

const ConfirmAccountModal = ({
    showConfirmAccountModal,
    setShowConfirmAccountModal,
    accountDetails,
    navigateToNextStep,
}: ConfirmAccountModalProps) => {
    const { beneficiaryName, accountNumber, bankName } = accountDetails;
    return (
        <Dialog open={showConfirmAccountModal} onOpenChange={setShowConfirmAccountModal}>
            <DialogContent className="w-[90%] outline-none px-4 py-8 rounded-2xl" data-testid="otp-dialog">
                <section>
                    <h2>Confirm account</h2>
                    <p>Do you confirm this bank details are valid?</p>

                    <div>
                        <div>Ademola Lookman</div>
                        <div>
                            <p>02938837377</p>
                            <p>First Bank of Nigeria</p>
                        </div>
                    </div>
                </section>

                {/* Navigation Buttons starts*/}
                <div className="grid grid-flow-col items-center gap-3 py-4 ">
                    <Button
                        type="button"
                        variant={"outline"}
                        className="p-3 rounded-full text-kaiglo_grey-700 border-kaiglo_grey-disabled"
                        onClick={() => setShowConfirmAccountModal(false)}
                    >
                        Back
                    </Button>

                    <Button type="button" className="p-3 rounded-full" onClick={navigateToNextStep}>
                        Next
                    </Button>
                </div>
                {/* Navigation Buttons ends*/}
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmAccountModal;
