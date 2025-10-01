"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useModalContext } from "@/app/contexts/modalContext";
import AccountChangeRequestForm from "./AccountChangeRequestForm";

const AccountChangeRequestModal = () => {
    const { setShowModal } = useModalContext();

    return (
        <DialogContent className="w-[90%] md:w-[600px] lg:w-[700px] max-w-4xl max-h-[90vh] m-auto outline-none p-6 rounded-2xl bg-background grid gap-4 overflow-y-auto">
            <DialogHeader>
                <DialogTitle className="text-xl text-kaiglo_grey-900 font-medium text-left">
                    Request Account Changes
                </DialogTitle>
                <DialogDescription />
            </DialogHeader>

            <div className="grid gap-6">
                <div className="bg-[#E6EFFA] rounded-lg">
                    <p className="text-kaiglo_grey-800 text-sm p-2 font-medium">
                        Please provide details about the changes you would like to make to your account information. 
                        Our support team will review your request and get back to you within 24-48 hours.
                    </p>
                </div>

                <AccountChangeRequestForm
                    cancel={() => {
                        setShowModal(false);
                    }}
                />
            </div>
        </DialogContent>
    );
};

export default AccountChangeRequestModal;

