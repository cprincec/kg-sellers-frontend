"use client";

import { IBankDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";
import { useModalContext } from "@/app/contexts/modalContext";
import { handleError, showSuccessToast } from "@/app/lib/utils/utils";
import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation } from "@tanstack/react-query";

/**
 * Custom hook to edit bank details of a store
 */

const useEditPaymentOption = () => {
    const { setModalContent, setShowModal } = useModalContext();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IBankDetailsDTO) =>
            postRequest<IBankDetailsDTO, IBankDetailsDTO>({
                url: "/store-setting/edit-bank-detail",
                payload,
            }),

        onSuccess: () => {
            setShowModal(false);
            setModalContent(null);
            showSuccessToast({ title: "Payment information updated successfully" });
        },
        onError(error) {
            handleError(error, "Error editing store bank details");
        },
    });

    return { isEditingPaymentOption: isPending, editPaymentOption: mutate };
};

export default useEditPaymentOption;
