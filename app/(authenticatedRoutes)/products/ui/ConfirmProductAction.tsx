"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { useModalContext } from "@/app/contexts/modalContext";
import { ProductActionTypes } from "../lib/interfaces/interface";

const ConfirmProductAction = ({
    title,
    body,
    confirmButtonText,
    confirmButtonAction,
    cancleButtonAction,
    action = "DELETE",
}: {
    action?: ProductActionTypes;
    title?: string;
    body?: string;
    confirmButtonText?: string;
    confirmButtonAction?: () => void;
    cancleButtonAction?: () => void;
}) => {
    const { deleteSearchParams } = useUpdateSearchParams();
    const { setShowModal } = useModalContext();

    return (
        <DialogContent className="w-[90%] md:w-[400px] m-auto outline-none gap-5 px-4 md:px-6 py-6 rounded-2xl">
            <DialogHeader className="flex-row space-y-0 gap-0">
                <DialogTitle className="text-xl text-kaiglo_grey-900 font-bold text-left capitalize">
                    {title ? title : "Delete product"}
                </DialogTitle>
                <DialogDescription className="hidden" />
            </DialogHeader>
            <div className="grid gap-5 -mt-0">
                <p className="text-base font-normal text-kaiglo_grey-base">
                    {body
                        ? body
                        : "Are you sure you want to delete this product? Products deleted cannot be undone"}
                </p>

                {/* Navigation Buttons starts*/}
                <div className="grid grid-cols-[2fr_3fr] items-center gap-3 md:gap-12">
                    <Button
                        type="button"
                        variant={"outline"}
                        className="p-3 text-base text-kaiglo_grey-900 border-kaiglo_grey-placeholder"
                        onClick={() => {
                            if (cancleButtonAction) cancleButtonAction();
                            else {
                                deleteSearchParams(["product-action", "id", "product-id"]);
                                setShowModal(false);
                            }
                        }}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="button"
                        variant={action === "PAUSE" || action === "ACTIVATE" ? "primary" : "critical_solid"}
                        className="p-3 text-base capitalize"
                        onClick={() => {
                            if (confirmButtonAction) confirmButtonAction();
                            else {
                                deleteSearchParams(["product-action", "id", "product-id"]);
                                setShowModal(false);
                            }
                        }}
                    >
                        {confirmButtonText ? confirmButtonText : "Delete product"}
                    </Button>
                </div>
            </div>
            {/* Navigation Buttons ends*/}
        </DialogContent>
    );
};

export default ConfirmProductAction;
