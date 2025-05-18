"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";
import { IModalContext } from "../lib/interface";
import Modal from "../ui/modals/Modal";

const ModalContext = createContext<IModalContext | undefined>(undefined);

const ModalContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode>(null);
    const [onClose, setOnClose] = useState<(() => void) | null>(null);

    return (
        <ModalContext.Provider
            value={{
                showModal,
                setShowModal,
                modalContent,
                setModalContent,
                onClose,
                setOnClose,
            }}
        >
            {children}
            <Modal>{modalContent}</Modal>
        </ModalContext.Provider>
    );
};

const useModalContext = (): IModalContext => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalContextProvider");
    }
    return context;
};

export { ModalContext, ModalContextProvider, useModalContext };
