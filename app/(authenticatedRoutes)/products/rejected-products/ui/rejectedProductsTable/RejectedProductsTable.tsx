"use client";

import { Table } from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RejectedProductsTableHeader from "./RejectedProductsTableHeader";
import RejectedProductsTableBody from "./RejectedProductsTableBody";
import { rejectedProductsData } from "../../../lib/data";
import ConfirmDeleteProduct from "../../../ui/ConfirmDeleteProduct";
import RejectedProductDetails from "../RejectedProductDetails";

const RejectedProductsTable = () => {
    const searchParams = useSearchParams();
    const rejectedProducts = rejectedProductsData;

    // Rejected product detail modal state
    const [showRejectedProductDetails, setShowRejectedProductDetails] = useState<boolean>(
        !!searchParams.get("rejected-product-id") || false
    );

    // Delete product confirmation modal state
    const [showConfirmDeleteProductModal, setShowConfirmDeleteProductModal] = useState<boolean>(
        !!(searchParams.get("product-action") && searchParams.get("id")) || false
    );

    useEffect(() => {
        setShowConfirmDeleteProductModal(
            !!(searchParams.get("product-action") && searchParams.get("id")) || false
        );

        setShowRejectedProductDetails(!!searchParams.get("rejected-product-id") || false);
    }, [searchParams]);

    return (
        <div className="overflow-auto p-4 pt-0">
            <Table className="w-[1100px] lg:w-full border">
                <RejectedProductsTableHeader />
                <RejectedProductsTableBody
                    rejectedProducts={rejectedProducts}
                    // setShowOrderDetails={setShowOrderDetails}
                />
            </Table>

            {showRejectedProductDetails && (
                <RejectedProductDetails
                    showModal={showRejectedProductDetails}
                    setShowModal={setShowRejectedProductDetails}
                />
            )}

            {showConfirmDeleteProductModal && (
                <ConfirmDeleteProduct
                    showModal={showConfirmDeleteProductModal}
                    setShowModal={setShowConfirmDeleteProductModal}
                />
            )}
        </div>
    );
};
export default RejectedProductsTable;
