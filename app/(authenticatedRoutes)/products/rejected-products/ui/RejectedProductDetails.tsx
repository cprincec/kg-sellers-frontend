"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { ImageProduct1 } from "@/public/images/landingPage/images";
import { Button } from "@/components/ui/button";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const RejectedProductDetails = ({
    showModal,
    setShowModal,
}: {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const { deleteSearchParams } = useUpdateSearchParams();
    const searchParams = useSearchParams();
    const id = searchParams.get("rejected-product-id") || "0";

    return (
        <Dialog
            open={showModal}
            onOpenChange={() => {
                // remove product id query string from url
                deleteSearchParams(["rejected-product-id"]);

                // Close product detail modal
                setShowModal(false);
            }}
        >
            <DialogContent className="w-[90%] md:w-[600px] outline-none p-4 md:px-5 md:py-6 rounded-xl gap-4">
                <DialogTitle className="font-medium text-base text-kaiglo_grey-900 text-left">
                    Product details
                </DialogTitle>
                <div className="grid gap-5">
                    <div className="grid gap-2">
                        <h2 className="text-sm font-medium text-kaiglo_grey-700">SKU: 02922039341</h2>
                        <div className="flex gap-3 lg:items-center">
                            <Image
                                src={ImageProduct1}
                                alt="product image"
                                className="w-[48px] h-[48px] md:w-[64px] md:h-[64px]"
                            />
                            <p className="text-sm text-kaiglo_grey-800">
                                Bose Silver Color Quietcomfort 45 Headset Bluetooth Wireless Noise
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="grid gap-2">
                            <h3 className="text-kaiglo_grey-500 font-normal text-sm">Created on</h3>
                            <p className="font-medium text-sm text-kaiglo_grey-900">26 Oct, 2024</p>
                        </div>

                        <div className="grid gap-2">
                            <h3 className="text-kaiglo_grey-500 font-normal text-sm">Quantity</h3>
                            <p className="font-medium text-sm text-kaiglo_grey-900 text-center">100</p>
                        </div>
                    </div>

                    <section className="grid gap-2">
                        <h3 className="font-bold text-base text-kaiglo_grey-900">Reason for rejection</h3>
                        <div className="grid gap-1">
                            <h4 className="font-medium text-base text-kaiglo_grey-900">Poor image quality</h4>
                            <p className="font-medium text-sm text-kaiglo_grey-base">
                                The product image you attached does not meet our standard quality
                                requirements. Ensure to upload a higher quality image for your products.
                            </p>
                        </div>
                    </section>

                    <div className="flex gap-4 justify-end">
                        <Link
                            href={`/products/rejected-products?product-action=delete-product&id=${id}`}
                            className="lg:hidden text-kaiglo_critical-base font-medium text-base px-3 py-2"
                        >
                            Delete
                        </Link>

                        <Button
                            variant={"ghost"}
                            className="bg-transparent lg:bg-kaiglo_success-50 text-kaiglo_success-600 font-medium text-base px-3 py-2 rounded-[32px]"
                        >
                            Edit
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default RejectedProductDetails;
