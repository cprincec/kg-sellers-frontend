"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const ConfirmDeleteProduct = ({
    showModal,
    setShowModal,
}: {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const { deleteSearchParams } = useUpdateSearchParams();
    return (
        <Dialog
            open={showModal}
            onOpenChange={() => {
                deleteSearchParams(["product-action", "id"]);
                setShowModal(false);
            }}
        >
            <DialogContent className="w-[90%] md:w-[350px] outline-none gap-5 px-4 py-6 rounded-2xl">
                <DialogHeader className="flex-row space-y-0 gap-0">
                    <DialogTitle className="text-xl text-kaiglo_grey-900 font-bold text-left">
                        Delete Product
                    </DialogTitle>
                    <DialogDescription className="hidden" />
                </DialogHeader>
                <div className="grid gap-5 -mt-0">
                    <p className="text-base font-normal text-kaiglo_grey-base">
                        Are you sure you want to delete this product? Products deleted cannot be undone
                    </p>

                    {/* Navigation Buttons starts*/}
                    <div className="grid grid-flow-col items-center gap-3">
                        <Button
                            type="button"
                            variant={"outline"}
                            className="p-3 text-base text-kaiglo_grey-900 border-kaiglo_grey-placeholder"
                            onClick={() => deleteSearchParams(["product-action", "id"])}
                        >
                            Cancel
                        </Button>

                        <Button
                            type="button"
                            variant={"critical_solid"}
                            className="p-3 text-base"
                            onClick={() => deleteSearchParams(["product-action", "id"])}
                        >
                            Delete product
                        </Button>
                    </div>
                </div>
                {/* Navigation Buttons ends*/}
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmDeleteProduct;
