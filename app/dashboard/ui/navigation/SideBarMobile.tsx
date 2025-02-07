"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SetStateAction } from "react";
import SideBarContent from "./SideBarContent";

interface SideBarModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const SideBarMobile = ({ showModal, setShowModal }: SideBarModalProps) => {
    return (
        <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent
                className="left-0 translate-x-0 h-full w-[75%] ml-0 px-4 py-10 outline-none"
                data-testid="sideNav-dialog"
            >
                <DialogHeader>
                    <DialogTitle className="font-normal">
                        <SideBarContent />
                    </DialogTitle>
                    <DialogDescription />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default SideBarMobile;
