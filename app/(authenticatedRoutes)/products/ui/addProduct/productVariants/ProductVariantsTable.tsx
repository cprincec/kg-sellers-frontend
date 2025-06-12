"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ActionButton from "../../productsTable/ActionButton";
import { ProductVariant } from "../../../lib/interface";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import { productVariantActions } from "../../../lib/data/data";
import ConfirmDeleteProduct from "../../ConfirmDeleteProduct";
import { useSearchParams } from "next/navigation";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { cn } from "@/lib/utils/utils";
import { useEffect } from "react";
import { useModalContext } from "@/app/contexts/modalContext";

const ProductVariantsTable = ({
    productVariants,
    title,
    showTitle = true,
    showActions = true,
    className,
}: {
    productVariants: ProductVariant[];
    title?: string;
    showTitle?: boolean;
    showActions?: boolean;
    className?: string;
}) => {
    const searchParams = useSearchParams();
    const { deleteSearchParams } = useUpdateSearchParams();
    const { setShowModal, setModalContent, setOnClose } = useModalContext();
    const { productDetails } = useAddProductContext();

    const variantId = searchParams.get("id");
    const actionType = searchParams.get("product-variant-action");

    useEffect(() => {
        if (!variantId || !actionType) return;

        const handleClose = () => {
            deleteSearchParams(["product-variant-action", "id"]);
            setShowModal(false);
        };

        if (actionType === "delete-product-variant") {
            setModalContent(
                <ConfirmDeleteProduct
                    title="Delete variant"
                    body="Deleted variant will no longer be visible to buyers."
                    confirmButtonText="Delete variant"
                    confirmButtonAction={handleClose}
                    cancleButtonAction={handleClose}
                />
            );
            setOnClose(() => () => deleteSearchParams(["product-variant-action", "id"]));
            setShowModal(true);
        }

        if (actionType === "pause-product-variant") {
            setModalContent(
                <ConfirmDeleteProduct
                    title="Pause product variant"
                    body="Product variant will be paused and will no longer appear to customers. You can activate it anytime."
                    confirmButtonText="Confirm"
                    confirmButtonAction={handleClose}
                    cancleButtonAction={handleClose}
                    isPause={true}
                />
            );
            setOnClose(() => () => deleteSearchParams(["product-variant-action", "id"]));
            setShowModal(true);
        }
    }, [actionType, variantId]);

    return (
        <div className={cn("grid gap-4 overflow-hidden", className)}>
            {showTitle && <h3 className="text-base font-medium">{title || "Added Products"}</h3>}
            <Table className="min-w-[1000px] border">
                <TableHeader className="w-auto">
                    <TableRow className="bg-kaiglo_grey-50 hover:bg-transparent">
                        <TableHead className="text-xs md:text-base p-3 font-medium text-kaiglo_grey-700 whitespace-nowrap max-w-[300px]">
                            Product
                        </TableHead>
                        <TableHead className="text-xs md:text-base p-3 text-center font-medium text-kaiglo_grey-700 whitespace-nowrap">
                            Color
                        </TableHead>
                        <TableHead className="text-xs md:text-base p-3 text-center font-medium text-kaiglo_grey-700 whitespace-nowrap">
                            Size
                        </TableHead>
                        <TableHead className="text-xs md:text-base p-3 text-center font-medium text-kaiglo_grey-700 whitespace-nowrap">
                            Quantity
                        </TableHead>
                        <TableHead className="text-xs md:text-base p-3 text-center font-medium text-kaiglo_grey-700 whitespace-nowrap">
                            Price
                        </TableHead>
                        {showActions && (
                            <TableHead className="text-xs md:text-base p-3 text-center font-medium text-kaiglo_grey-700 whitespace-nowrap">
                                Action
                            </TableHead>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {productVariants.map((product, index) => (
                        <TableRow key={index}>
                            <TableCell className="p-3 max-w-[300px] text-sm text-wrap text-kaiglo_grey-base">
                                <div className="flex gap-3 items-center">
                                    <Image
                                        src={URL.createObjectURL(product.images[0])}
                                        alt={productDetails.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12"
                                    />
                                    <span className="mt-1.5 text-sm font-medium capitalize text-kaiglo_grey-base">
                                        {productDetails.name}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell className="p-3 text-sm text-center font-medium capitalize text-kaiglo_grey-base">
                                {product.color}
                            </TableCell>
                            <TableCell className="p-3 text-sm text-center font-medium capitalize text-kaiglo_grey-base">
                                {product.size}
                            </TableCell>
                            <TableCell className="p-3 text-sm text-center font-medium text-kaiglo_grey-base">
                                {product.quantity}
                            </TableCell>
                            <TableCell className="p-3 text-sm text-center font-medium text-kaiglo_grey-base">
                                {product.price && `₦${product.price.toLocaleString()}`}
                            </TableCell>
                            {showActions && (
                                <TableCell className="p-3 text-sm text-center">
                                    <ActionButton
                                        className="w-max m-auto"
                                        productId={index.toString()}
                                        actions={productVariantActions}
                                    />
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductVariantsTable;
