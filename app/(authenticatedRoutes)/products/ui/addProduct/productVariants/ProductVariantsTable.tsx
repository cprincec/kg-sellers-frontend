"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ActionButton from "../../productsTable/ActionButton";
import { ProductVariant } from "../../../lib/interface";
import { useAddProductContext } from "@/app/(authenticatedRoutes)/products/contexts/addProductContext";
import { productVariantActions } from "../../../lib/data/data";
import ConfirmDeleteProduct from "../../ConfirmDeleteProduct";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { cn } from "@/lib/utils";

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
    const { productDetails } = useAddProductContext();
    const [showConfirmDeleteProductModal, setShowConfirmDeleteProductModal] = useState<boolean>(
        !!(
            searchParams.get("product-variant-action") === "delete-product-variant" && searchParams.get("id")
        ) || false
    );
    const [showConfirmPauseProductModal, setShowConfirmPauseProductModal] = useState<boolean>(
        !!(
            searchParams.get("product-variant-action") === "pause-product-variant" && searchParams.get("id")
        ) || false
    );

    useEffect(() => {
        setShowConfirmDeleteProductModal(
            !!(
                searchParams.get("product-variant-action") === "delete-product-variant" &&
                searchParams.get("id")
            ) || false
        );

        setShowConfirmPauseProductModal(
            !!(
                searchParams.get("product-variant-action") === "pause-product-variant" &&
                searchParams.get("id")
            ) || false
        );
    }, [searchParams]);

    return (
        <div className={cn("grid gap-4 overflow-hidden", className)}>
            {showTitle && <h3 className="text-base font-medium">{title ? title : "Added Products"}</h3>}
            <Table className="min-w-[1000px] border">
                <TableHeader className="w-auto">
                    <TableRow className="bg-kaiglo_grey-50 hover:bg-transparent">
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base p-3 whitespace-nowrap max-w-[300px]">
                            Product
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Color
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Size
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Quantity
                        </TableHead>
                        <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                            Price
                        </TableHead>
                        {showActions && (
                            <TableHead className="font-medium text-kaiglo_grey-700 text-xs md:text-base text-center p-3 whitespace-nowrap">
                                Action
                            </TableHead>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {productVariants.map((product, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className="p-3 text-sm text-wrap text-kaiglo_grey-base max-w-[300px]">
                                    <div className="flex gap-3 items-center">
                                        <Image
                                            src={URL.createObjectURL(product.images[0])}
                                            alt={productDetails.name}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                        />
                                        <span className="mt-1.5 text-sm text-kaiglo_grey-base font-medium capitalize">
                                            {productDetails.name}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="p-3 text-sm text-kaiglo_grey-base font-medium text-center capitalize">
                                    {product.color}
                                </TableCell>
                                <TableCell className="p-3 text-sm text-center text-kaiglo_grey-base font-medium capitalize">
                                    {product.size}
                                </TableCell>
                                <TableCell className="p-3 text-sm text-center text-kaiglo_grey-base font-medium">
                                    {product.quantity}
                                </TableCell>
                                <TableCell className="p-3 text-sm text-center text-kaiglo_grey-base font-medium">
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
                        );
                    })}
                </TableBody>
            </Table>
            {showConfirmDeleteProductModal && (
                <ConfirmDeleteProduct
                    title="Delete variant"
                    body="Deleted variant will no longer be visible to buyers. "
                    confirmButtonText="Delete variant"
                    confirmButtonAction={() => deleteSearchParams(["product-variant-action", "id"])}
                    showModal={showConfirmDeleteProductModal}
                    setShowModal={setShowConfirmDeleteProductModal}
                />
            )}
            {showConfirmPauseProductModal && (
                <ConfirmDeleteProduct
                    title="Pause product variant"
                    body="Product variant will be paused and will no longer appear to customers. You can activate it anytime"
                    confirmButtonText="Confirm"
                    confirmButtonAction={() => deleteSearchParams(["product-variant-action", "id"])}
                    showModal={showConfirmPauseProductModal}
                    setShowModal={setShowConfirmPauseProductModal}
                    isPause={true}
                />
            )}
        </div>
    );
};

export default ProductVariantsTable;
