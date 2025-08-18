"use client";

import { motion } from "framer-motion";
import { Table } from "@/components/ui/table";
import ConfirmProductAction from "../../ConfirmProductAction";
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
import ProductVariantsTableHeader from "./ProductVariantsTableHeader";
import ProductVariantsTableBody from "./ProductVariantsTableBody";
import usePauseProductVariant from "../../../hooks/addProduct/usePauseProductVariant";

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
    const productAction = searchParams.get("product-action") ?? "";
    const variantAction = searchParams.get("variant-action");
    const { deleteSearchParams } = useUpdateSearchParams();
    const { setShowModal, setModalContent, setOnClose } = useModalContext();
    const { productRaw, isFetchingProductRaw } = useGetRawProduct(productId ?? "");
    const { productMetaData } = useGetProductMeta();
    const { deleteProductVariant, isDeletingProductVariant } = useDeleteProductVariant();
    const { pauseProductVariant, isPausingProductVariant } = usePauseProductVariant();
    const productVariants = productRaw ? generateProductVariantDTOs(productRaw) : [];

    const handleClose = useCallback(() => {
        deleteSearchParams(["variant-action", "variant-id"]);
        setShowModal(false);
    }, [deleteSearchParams]);

    const handlePause = useCallback(() => {
        if (!variantId) {
            showErrorToast({ title: "Invalid product variant id" });
            return;
        }

        if (!productRaw) {
            showErrorToast({ title: "Invalid product" });
            return;
        }

        const variantToPause = generateProductVariantDeleteDTOFromProduct(variantId, productRaw);
        if (!variantToPause) {
            showErrorToast({ title: "Error deleting product" });
            return;
        }

        pauseProductVariant(variantToPause);
        handleClose();
    }, [variantId, productRaw, productId, deleteProductVariant, handleClose]);

    const handleDelete = useCallback(() => {
        if (!variantId) {
            showErrorToast({ title: "Invalid product variant id" });
            return;
        }

        if (!productRaw) {
            showErrorToast({ title: "Invalid product" });
            return;
        }

        // This function is reused for generating pause payload
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
                <ConfirmProductAction
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
                <ConfirmProductAction
                    title="Pause product variant"
                    body="Product variant will be paused and will no longer appear to customers. You can activate it anytime."
                    confirmButtonText="Confirm"
                    confirmButtonAction={handlePause}
                    cancleButtonAction={handleClose}
                    action="PAUSE"
                />
            );
            setOnClose(() => () => deleteSearchParams(["variant-action", "variant-id"]));
            setShowModal(true);
        }
    }, [variantAction, variantId]);

    if (isFetchingProductRaw || isDeletingProductVariant || isPausingProductVariant) return <Loader />;
    if (!productRaw || !productVariants.length || !productMetaData) return null;

    // Check if the variants have a size attribute
    // This controls if the size column will be shown on the variants table
    const size = productVariants[0].productColor.productPriceDetails[0].attributes.find(
        (a) => a.key === "size"
    );

    const animationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <div className="overflow-hidden">
            <motion.div
                key="variantTable"
                variants={animationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, ease: "linear" }}
                className={cn("grid gap-4 overflow-hidden", className)}
            >
                {showTitle && <h3 className="text-base font-medium">{title || "Added Products"}</h3>}
                <Table className="min-w-[1000px] border">
                    <ProductVariantsTableHeader showActions={showActions} showSize={!!size} />
                    <ProductVariantsTableBody
                        showActions={showActions}
                        showSizeColumn={!!size}
                        product={productRaw}
                        productAction={productAction}
                        productMetaData={productMetaData}
                    />
                </Table>
            </motion.div>
        </div>
    );
};

export default ProductVariantsTable;
