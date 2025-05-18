import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const WithdrawalSuccessful = () => {
    return (
        <DialogContent
            className="w-[90%] h-[350px] md:w-[375px] grid items-center justify-center outline-none p-8 gap-4 rounded-2xl"
            data-testid="otp-dialog"
        >
            <DialogHeader className="mb-0 pb-0">
                <DialogTitle className="text-base text-kaiglo_grey-900 font-normal text-left mb-0 pb-0">
                    Payment was successful
                </DialogTitle>
                <DialogDescription />
            </DialogHeader>
        </DialogContent>
    );
};
export default WithdrawalSuccessful;
