"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SetStateAction, useEffect } from "react";
import { usePathname } from "next/navigation";
import SideBarContent from "./SideBarContent";

export interface SideBarModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const SideBarMobile = ({ showModal, setShowModal }: SideBarModalProps) => {
    const pathname = usePathname();

    /******* Close the sidebar after click a link in the navigation bar
     * This component is contained in the header which is in the dashboard layout.
     * Hence, it is not rerendered when navigating around the dashboard, thus the sidebar will remain
     * open even after navigating to a new page within the dashboard.
     ** ********/
    useEffect(() => {
        setShowModal(false);
    }, [pathname, setShowModal]);

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
