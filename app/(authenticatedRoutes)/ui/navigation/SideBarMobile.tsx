"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import SideBarContent from "./SideBarContent";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useModalContext } from "@/app/contexts/modalContext";

const SideBarMobile = () => {
    const pathname = usePathname();
    const { setShowModal } = useModalContext();

    /******* Close the sidebar after click a link in the navigation bar
     * This component is contained in the header which is in the dashboard layout.
     * Hence, it is not rerendered when navigating around the dashboard, thus the sidebar will remain
     * open even after navigating to a new page within the dashboard (Authenticated routes).
     ** ********/
    useEffect(() => {
        setShowModal(false);
    }, [pathname, setShowModal]);

    return (
        <DialogContent
            className=""
            subClassName="w-[75%] ml-0 px-4 py-10 sm:rounded-none outline-none"
            animationDirection="left"
        >
            <DialogHeader>
                <DialogTitle className="font-normal">
                    <SideBarContent />
                </DialogTitle>
                <DialogDescription />
            </DialogHeader>
        </DialogContent>
    );
};

export default SideBarMobile;
