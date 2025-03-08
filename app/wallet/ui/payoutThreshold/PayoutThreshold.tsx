import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { SetStateAction } from "react";
import PayoutThresholdForm from "./PayoutThresholdForm";

const PayoutThreshold = ({
    showPayoutThreshold,
    setShowPayoutThreshold,
}: {
    showPayoutThreshold: boolean;
    setShowPayoutThreshold: React.Dispatch<SetStateAction<boolean>>;
}) => {
    const { deleteSearchParams } = useUpdateSearchParams();

    // Close the payout threshold modal and remove the query parameters that handles showing the modal
    const closePayoutThreshold = () => {
        deleteSearchParams(["set-payout-threshold"]);
        setShowPayoutThreshold(false);
    };

    return (
        <Dialog open={showPayoutThreshold} onOpenChange={() => closePayoutThreshold()}>
            <DialogContent
                className="w-[90%] md:w-[500px] outline-none px-5 py-6 gap-4 rounded-2xl"
                data-testid="otp-dialog"
            >
                <DialogHeader>
                    <DialogTitle className="text-xl text-kaiglo_grey-900 font-medium text-left">
                        Payout Threshold Amount
                    </DialogTitle>
                    <DialogDescription />
                </DialogHeader>

                <div className="grid gap-6">
                    <div className="bg-[#E6EFFA] rounded-lg">
                        <p className="text-kaiglo_grey-800 text-sm p-2 font-medium">
                            System will not pay you if you do not have up to the amount specified in the box
                            below Specified amount must also be greater than ₦1000
                        </p>
                    </div>

                    <PayoutThresholdForm cancel={closePayoutThreshold} />
                </div>
            </DialogContent>
        </Dialog>
    );
};
export default PayoutThreshold;
