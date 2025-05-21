"use client";
import { useSearchParams } from "next/navigation";
import { IProductDTO } from "../../lib/interface";
import { useEffect } from "react";
import { Table } from "@/components/ui/table";
import ProductsTableHeader from "./ProductsTableHeader";
import ProductsTableBody from "./ProductsTableBody";
import ConfirmDeleteProduct from "../ConfirmDeleteProduct";
import ProductDetails from "../productDetails/ProductDetails";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import AddToSales from "../addToSales/AddToSales";
import { useModalContext } from "@/app/contexts/modalContext";

const ProductsTable = ({ products }: { products: IProductDTO[] }) => {
    const searchParams = useSearchParams();
    const { deleteSearchParams } = useUpdateSearchParams();
    const { setShowModal, setModalContent, setOnClose } = useModalContext();

    useEffect(() => {
        // Display relevant modal based on url parameters
        let content = null;
        let clearKeys: string[] = [];

        if (searchParams.get("product-id")) {
            content = <ProductDetails />;
            clearKeys = ["product-id"];
        } else if (searchParams.get("product-action") === "delete-product" && searchParams.get("id")) {
            content = <ConfirmDeleteProduct />;
            clearKeys = ["product-action", "id"];
        } else if (searchParams.get("product-action") === "pause-product" && searchParams.get("id")) {
            content = (
                <ConfirmDeleteProduct
                    title="Pause product"
                    body="Product will be paused and will no longer appear to customers. You can activate it anytime"
                    confirmButtonText="Confirm"
                    confirmButtonAction={() => {
                        deleteSearchParams(["product-action", "id"]);
                        setShowModal(false);
                    }}
                    isPause={true}
                />
            );
            clearKeys = ["product-action", "id"];
        } else if (searchParams.get("product-action") === "add-to-sales" && searchParams.get("id")) {
            content = <AddToSales />;
            clearKeys = ["product-action", "id"];
        }

        if (content) {
            if (clearKeys.length) setOnClose(() => () => deleteSearchParams(clearKeys));
            setModalContent(content);
            setShowModal(true);
        }
    }, [searchParams]);

    return (
        <div className="overflow-auto">
            <Table className="w-[1100px] lg:w-full">
                <ProductsTableHeader />
                <ProductsTableBody products={products} />
            </Table>
        </div>
    );
};

export default ProductsTable;
