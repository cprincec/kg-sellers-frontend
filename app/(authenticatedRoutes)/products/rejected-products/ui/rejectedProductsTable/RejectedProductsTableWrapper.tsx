"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { rejectedProductsData } from "../../../lib/data/data";
import ConfirmDeleteProduct from "../../../ui/ConfirmDeleteProduct";
import RejectedProductDetails from "../RejectedProductDetails";
import RejectedProductsTableMobile from "./RejectedProductsTableMobile";
import RejectedProductsTableDesktop from "./RejectedProductsTableDesktop";

const RejectedProductsTableWrapper = () => {
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
            {/* <div className="overflow-auto p-4 pt-0"> */}
            <RejectedProductsTableMobile rejectedProducts={rejectedProducts} />
            <RejectedProductsTableDesktop rejectedProducts={rejectedProducts} />
            {/* </div> */}

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
export default RejectedProductsTableWrapper;
