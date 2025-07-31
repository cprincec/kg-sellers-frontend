"use client";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { IconArrowBackShort } from "@/public/icons/icons";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import AddToSalesContent from "./AddToSalesContent";
import { useModalContext } from "@/app/contexts/modalContext";
import { Button } from "@/components/ui/button";
import useGetOngoingSales from "../../hooks/useGetOngoingSales";
import useGetRawProduct from "../../hooks/addProduct/useGetRawProduct";
import Loader from "@/app/ui/Loader";

const AddToSales = () => {
    const productId = useSearchParams().get("product-id");
    const { deleteSearchParams } = useUpdateSearchParams();
    const { setShowModal } = useModalContext();
    const { ongoingSales, isFetchingOngoingSales } = useGetOngoingSales();
    const { productRaw, isFetchingProductRaw } = useGetRawProduct(productId ?? "");

    if (isFetchingOngoingSales || isFetchingOngoingSales || isFetchingProductRaw) return <Loader />;
    if (!productRaw || !productId) return null;

    return (
        <DialogContent
            showCloseButton={false}
            className="w-full max-md:h-full md:max-w-[80%] lg:max-w-[1024px] md:max-h-[700px] overflow-y-auto outline-none flex flex-col items-start p-4 md:px-5 md:py-6 lg:p-6 rounded-none md:rounded-xl gap-4"
        >
            <DialogHeader>
                <Button
                    type="button"
                    onClick={() => {
                        setShowModal(false);
                        setTimeout(() => {
                            deleteSearchParams(["product-action", "product-id"]);
                        }, 400);
                    }}
                    className="flex lg:hidden items-start gap-[15px] bg-transparent hover:bg-transparent p-0"
                >
                    <Image src={IconArrowBackShort} alt="Arrow back" className="w-6 h-6 mt-0.5 md:mt-1" />
                    <DialogTitle className="text-xl md:text-2xl font-bold text-kaiglo_grey-900 text-left">
                        Add to sales
                    </DialogTitle>
                </Button>
                <DialogTitle className="hidden lg:block text-xl font-bold text-kaiglo_grey-900 text-left">
                    Add {productRaw?.name} to Sales
                </DialogTitle>
                <DialogDescription />
            </DialogHeader>

            <AddToSalesContent
                productId={productId}
                ongoingSales={ongoingSales?.salesObjectList ?? []}
                product={productRaw}
            />
        </DialogContent>
    );
};

export default AddToSales;
