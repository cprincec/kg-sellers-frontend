import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import PayoutThresholdForm from "./PayoutThresholdForm";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { useModalContext } from "@/app/contexts/modalContext";

const PayoutThreshold = () => {
    const { deleteSearchParams } = useUpdateSearchParams();
    const { setShowModal } = useModalContext();
    return (
        <DialogContent className="w-[90%] md:w-[500px] max-w-lg outline-none p-6 rounded-2xl bg-background grid gap-4">
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
                        below. Specified amount must also be greater than ₦1000
                    </p>
                </div>

                <PayoutThresholdForm
                    cancel={() => {
                        deleteSearchParams(["set-payout-threshold"]);
                        setShowModal(false);
                    }}
                />
            </div>
        </DialogContent>
    );
};

export default PayoutThreshold;
