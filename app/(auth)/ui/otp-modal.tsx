import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SetStateAction } from "react";
import OtpFormInput from "@/components/auth/OtpFormInput";

interface EnterOtpProps {
    showOtpModal: boolean;
    setShowOtpModal: React.Dispatch<SetStateAction<boolean>>;
    email: string;
    phone: string;
}

const OtpModal = ({ showOtpModal, setShowOtpModal, email, phone }: EnterOtpProps) => {
    return (
        <Dialog open={showOtpModal} onOpenChange={setShowOtpModal}>
            <DialogContent className="w-[90%] outline-none px-4 py-8 rounded-2xl" data-testid="otp-dialog">
                <div className="lg:px-8 space-y-4 text-center">
                    <DialogHeader>
                        <DialogTitle className="text-lg">Verification</DialogTitle>
                        <DialogDescription />
                    </DialogHeader>

                    <div className="space-y-2 text-sm lg:text-base">
                        <div className="lg:mx-0 flex flex-col items-center px-2 space-y-2 rounded-lg">
                            <h3 className="font-bold"> We&#39;ve sent you a verification code</h3>
                            <p>Please check your registered</p>
                            <p className="text-kaiglo_info-base bg-kaiglo_info-100 p-2 rounded-md">
                                Email address or WhatsApp
                            </p>
                            <p>for a four-digit code and enter it in the box below to login</p>
                        </div>
                    </div>

                    <div className="flex lg:justify-center lg:mx-auto">
                        <OtpFormInput email={email} phone={phone} setShowOtpModal={setShowOtpModal} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default OtpModal;