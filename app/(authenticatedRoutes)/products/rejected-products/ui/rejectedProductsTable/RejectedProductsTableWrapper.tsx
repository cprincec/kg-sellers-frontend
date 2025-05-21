"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { rejectedProductsData } from "../../../lib/data/data";
import ConfirmDeleteProduct from "../../../ui/ConfirmDeleteProduct";
import RejectedProductDetails from "../RejectedProductDetails";
import RejectedProductsTableMobile from "./RejectedProductsTableMobile";
import RejectedProductsTableDesktop from "./RejectedProductsTableDesktop";
import { useModalContext } from "@/app/contexts/modalContext";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";

const RejectedProductsTableWrapper = () => {
    const searchParams = useSearchParams();
    const rejectedProducts = rejectedProductsData;
    const { setModalContent, setOnClose, setShowModal } = useModalContext();
    const { deleteSearchParams } = useUpdateSearchParams();

    useEffect(() => {
        // Display relevant modal based on url parameters
        let content = null;
        let clearKeys: string[] = [];

        if (searchParams.get("rejected-product-id")) {
            content = <RejectedProductDetails />;
            clearKeys = ["rejected-product-id"];
        } else if (searchParams.get("product-action") === "delete-product" && searchParams.get("id")) {
            content = <ConfirmDeleteProduct />;
            clearKeys = ["product-action", "id"];
        }

        if (content) {
            if (clearKeys.length) setOnClose(() => () => deleteSearchParams(clearKeys));
            setModalContent(content);
            setShowModal(true);
        }
    }, [searchParams]);

    return (
        <div className="overflow-auto p-4 pt-0">
            {/* <div className="overflow-auto p-4 pt-0"> */}
            <RejectedProductsTableMobile rejectedProducts={rejectedProducts} />
            <RejectedProductsTableDesktop rejectedProducts={rejectedProducts} />
            {/* </div> */}
        </div>
    );
};
export default RejectedProductsTableWrapper;
