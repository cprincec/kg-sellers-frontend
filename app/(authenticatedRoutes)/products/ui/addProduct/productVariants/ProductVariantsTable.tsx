"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import ActionButton from "../../productsTable/ActionButton";
import { productVariantActions } from "../../../lib/data/data";
import ConfirmDeleteProduct from "../../ConfirmDeleteProduct";
import { useSearchParams } from "next/navigation";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import { cn } from "@/lib/utils/utils";
import { useCallback, useEffect } from "react";
import { useModalContext } from "@/app/contexts/modalContext";
import useDeleteProductVariant from "../../../hooks/addProduct/useDeleteProductVariant";
import {
    generateProductVariantDeleteDTOFromProduct,
    generateProductVariantDTOs,
} from "../../../lib/utils/addProduct.utils";
import { showErrorToast } from "@/app/lib/utils/utils";
import useGetRawProduct from "../../../hooks/addProduct/useGetRawProduct";
import Loader from "@/app/ui/Loader";
import useGetProductMeta from "../../../hooks/addProduct/useGetProductMeta";

const ProductVariantsTable = ({
    title,
    showTitle = true,
    showActions = true,
    className,
}: {
    title?: string;
    showTitle?: boolean;
    showActions?: boolean;
    className?: string;
}) => {
    const searchParams = useSearchParams();
    const variantId = searchParams.get("variant-id");
    const productId = searchParams.get("product-id");
    const variantAction = searchParams.get("variant-action");
    const { deleteSearchParams } = useUpdateSearchParams();
    const { setShowModal, setModalContent, setOnClose } = useModalContext();
    const { productRaw, isFetchingProductRaw } = useGetRawProduct(productId ?? "");
    const { productMetaData } = useGetProductMeta();
    const { deleteProductVariant, isDeletingProductVariant } = useDeleteProductVariant();
    const productVariants = productRaw ? generateProductVariantDTOs(productRaw) : [];

    // useEffect(() => {
    //     if (productRaw) setProductVariants(generateProductVariantDTOs(productRaw));
    // }, [productRaw, variantAction]);

    const handleClose = useCallback(() => {
        deleteSearchParams(["variant-action", "variant-id"]);
        setShowModal(false);
    }, [deleteSearchParams]);

    const handleDelete = useCallback(() => {
        if (!variantId) {
            showErrorToast({ title: "Invalid product variant id" });
            return;
        }

        if (!productRaw) {
            showErrorToast({ title: "Invalid product" });
            return;
        }

        const variantToDelete = generateProductVariantDeleteDTOFromProduct(variantId, productRaw);
        if (!variantToDelete) {
            showErrorToast({ title: "Error deleting product" });
            return;
        }

        deleteProductVariant(variantToDelete);
        handleClose();
    }, [variantId, productRaw, productId, deleteProductVariant, handleClose]);

    useEffect(() => {
        if (!variantAction || !variantId) return;

        if (variantAction === "delete") {
            setModalContent(
                <ConfirmDeleteProduct
                    title="Delete variant"
                    body="Deleted variant will no longer be visible to buyers."
                    confirmButtonText="Delete variant"
                    confirmButtonAction={handleDelete}
                    cancleButtonAction={handleClose}
                />
            );
            setOnClose(() => () => deleteSearchParams(["variant-action", "variant-id"]));
            setShowModal(true);
        }

        if (variantAction === "pause") {
            setModalContent(
                <ConfirmDeleteProduct
                    title="Pause product variant"
                    body="Product variant will be paused and will no longer appear to customers. You can activate it anytime."
                    confirmButtonText="Confirm"
                    confirmButtonAction={handleClose}
                    cancleButtonAction={handleClose}
                    isPause
                />
            );
            setOnClose(() => () => deleteSearchParams(["variant-action", "variant-id"]));
            setShowModal(true);
        }
    }, [variantAction, variantId]);

    if (isFetchingProductRaw || isDeletingProductVariant) return <Loader />;
    if (!productRaw || !productVariants.length) return null;

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
                    {productVariants.map((variant, index) => {
                        const size = variant.productColor.productPriceDetails[0].attributes.find(
                            (a) => a.key === "size"
                        )?.value;

                        const colorCode = variant.productColor.productPriceDetails[0].attributes.find(
                            (a) => a.key === "color"
                        )?.value;

                        // find the color using color code
                        const color = productMetaData?.productColorCode.find(
                            (colorObj) => colorObj.colorCode === colorCode
                        )?.color;

                        return (
                            <TableRow key={index}>
                                <TableCell className="p-3 max-w-[300px] text-sm text-wrap text-kaiglo_grey-base">
                                    <div className="flex gap-3 items-center">
                                        <Image
                                            src={variant.productColor.colorUrl}
                                            alt={productRaw.name + " variant" + index + 1}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                        />
                                        <span className="mt-1.5 text-sm font-medium capitalize text-kaiglo_grey-base">
                                            {productRaw.name}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="p-3 text-sm text-center font-medium capitalize text-kaiglo_grey-base">
                                    {color ?? variant.productColor.color.color}
                                </TableCell>
                                <TableCell className="p-3 text-sm text-center font-medium capitalize text-kaiglo_grey-base">
                                    {size ?? variant.productColor.productPriceDetails[0].size}
                                </TableCell>
                                <TableCell className="p-3 text-sm text-center font-medium text-kaiglo_grey-base">
                                    {variant.productColor.productPriceDetails[0].quantity}
                                </TableCell>
                                <TableCell className="p-3 text-sm text-center font-medium text-kaiglo_grey-base">
                                    {`₦${variant.productColor.productPriceDetails[0].price.toLocaleString()}`}
                                </TableCell>
                                {showActions && (
                                    <TableCell className="p-3 text-sm text-center">
                                        <ActionButton
                                            className="w-max m-auto"
                                            variantId={variant.productColor.productPriceDetails[0].id}
                                            productId={productRaw.id}
                                            actions={productVariantActions}
                                        />
                                    </TableCell>
                                )}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductVariantsTable;
