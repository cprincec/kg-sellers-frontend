"use client";
import { useSearchParams } from "next/navigation";
import { IOngoingSale, IProduct } from "../../lib/interfaces/interface";
import { useEffect } from "react";
import { Table } from "@/components/ui/table";
import ProductsTableHeader from "./ProductsTableHeader";
import ProductsTableBody from "./ProductsTableBody";
import ConfirmProductAction from "../ConfirmProductAction";
import ProductDetails from "../productDetails/ProductDetails";
import useUpdateSearchParams from "@/hooks/useSetSearchParams";
import AddToSales from "../addToSales/AddToSales";
import { useModalContext } from "@/app/contexts/modalContext";
import useDeleteProduct from "../../hooks/useDeleteProduct";
import useGetRawProduct from "../../hooks/addProduct/useGetRawProduct";
import usePauseProduct from "../../hooks/useToggleProductStatus";
import Loader from "@/app/ui/Loader";

const ProductsTable = ({
    products,
    ongoingSales,
    noResultsMessage,
}: {
    products: IProduct[];
    ongoingSales: IOngoingSale[];
    noResultsMessage: string;
}) => {
    const searchParams = useSearchParams();
    const productId = searchParams.get("product-id");
    const { deleteSearchParams } = useUpdateSearchParams();
    const { setShowModal, setModalContent, setOnClose } = useModalContext();
    const { productRaw } = useGetRawProduct(productId || "");
    const { deleteProduct } = useDeleteProduct();
    const { toggleProductStatus, isTogglingProductStatus } = usePauseProduct();

    useEffect(() => {
        // Display relevant modal based on url parameters
        let content = null;
        let clearKeys: string[] = [];

        if (searchParams.get("product-action") === "delete" && searchParams.get("product-id")) {
            content = (
                <ConfirmProductAction
                    confirmButtonAction={() => {
                        if (productRaw) deleteProduct({ product: productRaw, message: "" });

                        deleteSearchParams(["product-action", "product-id"]);
                        setShowModal(false);
                        setModalContent(null);
                    }}
                />
            );
            clearKeys = ["product-action", "id"];
        } else if (searchParams.get("product-action") === "pause" && searchParams.get("product-id")) {
            content = (
                <ConfirmProductAction
                    title="Pause product"
                    body="Product will be paused and will no longer appear to customers. You can activate it anytime"
                    confirmButtonText="Confirm"
                    confirmButtonAction={() => {
                        if (productId) toggleProductStatus({ productId, isPaused: true });

                        deleteSearchParams(["product-action", "product-id"]);
                        setModalContent(null);
                        setShowModal(false);
                    }}
                    action={"PAUSE"}
                />
            );
            clearKeys = ["product-action", "product-id"];
        } else if (searchParams.get("product-action") === "activate" && searchParams.get("product-id")) {
            content = (
                <ConfirmProductAction
                    title="Activate product"
                    body="Product will become active and will be visible to customers. You can pause it anytime"
                    confirmButtonText="Confirm"
                    confirmButtonAction={() => {
                        if (productId) toggleProductStatus({ productId, isPaused: false });

                        deleteSearchParams(["product-action", "product-id"]);
                        setModalContent(null);
                        setShowModal(false);
                    }}
                    action={"ACTIVATE"}
                />
            );
            clearKeys = ["product-action", "product-id"];
        } else if (searchParams.get("product-action") === "add-to-sales" && searchParams.get("product-id")) {
            content = <AddToSales />;
            clearKeys = ["product-action", "product-id"];
        } else if (searchParams.get("product-id") && !searchParams.get("product-action")) {
            content = <ProductDetails />;
            clearKeys = ["product-id"];
        }

        if (content) {
            if (clearKeys.length) setOnClose(() => () => deleteSearchParams(clearKeys));
            setModalContent(content);
            setShowModal(true);
        }
    }, [productId, products, productRaw, searchParams]);

    return (
        <div className="overflow-auto lg:mx-2">
            <Table className="w-[1100px] lg:w-full">
                <ProductsTableHeader />
                <ProductsTableBody
                    ongoingSales={ongoingSales}
                    products={products}
                    noResultsMessage={noResultsMessage}
                />
            </Table>

            {isTogglingProductStatus && <Loader />}
        </div>
    );
};

export default ProductsTable;
