"use client";

import { postRequest } from "@/lib/utils/apiCaller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError, showSuccessToast } from "@/app/lib/utils/utils";
import { IStoreDetailsDTO } from "@/app/(auth)/lib/interfaces/interface";

/**
 * Custom hook to edit store details
 */

const useEditStoreDetails = () => {
    const queryClient = useQueryClient();

    const { isPending, mutate } = useMutation({
        mutationFn: (payload: IStoreDetailsDTO) => {
            return postRequest<IStoreDetailsDTO, IStoreDetailsDTO>({
                url: `/store-setting/edit-store-detail`,
                payload,
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["store-details"] });
            showSuccessToast({ title: "Store information updated successfully" });
        },
        onError(error) {
            handleError(error, "Error editing store details");
        },
    });

    return { isEditingStoreDetails: isPending, editStoreDetails: mutate };
};

export default useEditStoreDetails;
