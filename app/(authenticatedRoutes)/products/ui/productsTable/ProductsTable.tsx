"use client";
import { useSearchParams } from "next/navigation";
import { IProductDTO } from "../../lib/interface";
import { useEffect, useState } from "react";
import { Table } from "@/components/ui/table";
import ProductsTableHeader from "./ProductsTableHeader";
import ProductsTableBody from "./ProductsTableBody";
import ConfirmDeleteProduct from "../ConfirmDeleteProduct";
import ProductDetails from "../productDetails/ProductDetails";

const ProductsTable = ({ products }: { products: IProductDTO[] }) => {
    const searchParams = useSearchParams();

    const [showProductDetails, setShowProductDetails] = useState<boolean>(
        !!searchParams.get("product-id") || false
    );

    const [showConfirmDeleteProductModal, setShowConfirmDeleteProductModal] = useState<boolean>(
        !!(searchParams.get("product-action") && searchParams.get("id")) || false
    );

    useEffect(() => {
        setShowProductDetails(!!searchParams.get("product-id") || false);
        setShowConfirmDeleteProductModal(
            !!(searchParams.get("product-action") && searchParams.get("id")) || false
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
        </div>
    );
};

export default ProductsTable;
