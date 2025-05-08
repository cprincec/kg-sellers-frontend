"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { IconArrowBackShort } from "@/public/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useProductsContext } from "../../contexts/productsContext";
import { productVariantsList } from "../../lib/data/data";
import AddToSalesContent from "./AddToSalesContent";

const AddToSales = ({
    showModal,
    setShowModal,
}: {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const { products } = useProductsContext();
    const searchParams = useSearchParams();
    const productIdRaw = searchParams.get("id");
    const { deleteSearchParams } = useUpdateSearchParams();

    // Parse id from url to base 10 integer
    const parsedId = useMemo(() => parseInt(productIdRaw ?? "", 10), [productIdRaw]);

    // Endure id from url is valid
    const isValidProduct =
        productIdRaw !== null &&
        !isNaN(parsedId) &&
        parsedId >= 0 &&
        parsedId < products.length &&
        products[parsedId];

    useEffect(() => {
        if (!isValidProduct) {
            deleteSearchParams(["product-action", "id"], "replace");
            setShowModal(false);
        }
    }, [isValidProduct, deleteSearchParams, setShowModal]);

    if (!isValidProduct) return null;

    const product = products[parsedId];

    // Retrieve product data from context
    const { productImage, productName, productVariants, productImages } = product;
    const image = productImages?.length ? URL.createObjectURL(productImages[0]) : productImage;

    const variants = productVariants.length ? productVariants : productVariantsList;

    // Only products with variants can be added to sales
    const canBeAddedToSales = variants.length > 0;

    return (
        <Dialog
            open={showModal}
            onOpenChange={() => {
                deleteSearchParams(["product-action", "id"], "push");
                setShowModal(false);
            }}
        >
            <DialogContent
                showCloseButton={false}
                className="w-full max-md:h-full md:max-w-[80%] lg:max-w-[1024px] md:max-h-[700px] md:overflow-y-auto outline-none flex flex-col items-start p-4 md:px-5 md:py-6 lg:p-6 rounded-none md:rounded-xl gap-4"
            >
                <DialogHeader className="">
                    <Link href={"/products"} className="flex lg:hidden items-start gap-[15px]">
                        <Image src={IconArrowBackShort} alt="Arrow back" className="w-6 h-6 mt-0.5 md:mt-1" />
                        <DialogTitle className="text-xl md:text-2xl font-bold text-kaiglo_grey-900 text-left">
                            Add to sales
                        </DialogTitle>
                    </Link>
                    <DialogTitle className="hidden lg:block text-xl font-bold text-kaiglo_grey-900 text-left">
                        Add {productName} to Sales
                    </DialogTitle>
                    <DialogDescription />
                </DialogHeader>

                <AddToSalesContent
                    image={image}
                    product={product}
                    productName={productName}
                    canBeAddedToSales={canBeAddedToSales}
                    productVariants={variants}
                />
            </DialogContent>
        </Dialog>
    );
};

export default AddToSales;
