"use client";
import { useSearchParams } from "next/navigation";
import { IProductDTO } from "../../lib/interface";
import { useEffect, useState } from "react";
import { Table } from "@/components/ui/table";
import ProductsTableHeader from "./ProductsTableHeader";
import ProductsTableBody from "./ProductsTableBody";
import ConfirmDeleteProduct from "../ConfirmDeleteProduct";
import ProductDetails from "../productDetails/ProductDetails";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import AddToSales from "../addToSales/AddToSales";

const ProductsTable = ({ products }: { products: IProductDTO[] }) => {
    const searchParams = useSearchParams();
    const { deleteSearchParams } = useUpdateSearchParams();

    const [showProductDetails, setShowProductDetails] = useState<boolean>(
        !!searchParams.get("product-id") || false
    );

    // State for 'Delete product' confirmation modal
    const [showConfirmDeleteProductModal, setShowConfirmDeleteProductModal] = useState<boolean>(
        !!(searchParams.get("product-action") === "delete-product" && searchParams.get("id")) || false
    );

    // State for 'Pause product' confirmation modal
    const [showConfirmPauseProductModal, setShowConfirmPauseProductModal] = useState<boolean>(
        !!(searchParams.get("product-action") === "pause-product" && searchParams.get("id")) || false
    );

    // State for 'Add to sales' modal
    const [showAddToSalesModal, setShowAddToSalesModal] = useState<boolean>(
        !!(searchParams.get("product-action") === "add-to-sales" && searchParams.get("id")) || false
    );

    useEffect(() => {
        setShowProductDetails(!!searchParams.get("product-id") || false);
        setShowConfirmDeleteProductModal(
            !!(searchParams.get("product-action") === "delete-product" && searchParams.get("id")) || false
        );

        setShowConfirmPauseProductModal(
            !!(searchParams.get("product-action") === "pause-product" && searchParams.get("id")) || false
        );

        setShowAddToSalesModal(
            !!(searchParams.get("product-action") === "add-to-sales" && searchParams.get("id")) || false
        );
    }, [searchParams]);

    return (
        <div className="overflow-auto">
            <Table className="w-[1100px] lg:w-full">
                <ProductsTableHeader />
                <ProductsTableBody products={products} />
            </Table>

            {showProductDetails && <ProductDetails showModal={showProductDetails} />}

            {showConfirmDeleteProductModal && (
                <ConfirmDeleteProduct
                    showModal={showConfirmDeleteProductModal}
                    setShowModal={setShowConfirmDeleteProductModal}
                />
            )}

            {showConfirmPauseProductModal && (
                <ConfirmDeleteProduct
                    title="Pause product"
                    body="Product will be paused and will no longer appear to customers. You can activate it anytime"
                    confirmButtonText="Confirm"
                    confirmButtonAction={() => deleteSearchParams(["product-action", "id"])}
                    showModal={showConfirmPauseProductModal}
                    setShowModal={setShowConfirmPauseProductModal}
                    isPause={true}
                />
            )}

            {showAddToSalesModal && (
                <AddToSales showModal={showAddToSalesModal} setShowModal={setShowAddToSalesModal} />
            )}
        </div>
    );
};

export default ProductsTable;
