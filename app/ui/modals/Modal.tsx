import { useModalContext } from "@/app/contexts/modalContext";
import { Dialog } from "@/components/ui/dialog";
import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
    const { showModal, setShowModal, onClose } = useModalContext();

    const handleOpenchange = (open: boolean): void => {
        if (!open) {
            if (onClose) {
                onClose();
            }

            setShowModal(false);
        }
    };

    return (
        <Dialog open={showModal} onOpenChange={handleOpenchange} >
            {children}
        </Dialog>
    );
};
export default Modal;
