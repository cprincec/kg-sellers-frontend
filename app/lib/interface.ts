import { Dispatch, ReactNode, SetStateAction } from "react";

export interface INotification {
    title: string;
    desc: string;
    time: string;
    isRead: boolean;
    recipient?: string;
}

export interface IModalContext {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    modalContent: ReactNode;
    setModalContent: Dispatch<SetStateAction<ReactNode>>;
    onClose: (() => void) | null;
    setOnClose: Dispatch<SetStateAction<(() => void) | null>>;
}
