"use client";

import { NoResultsIcon } from "../../../dashboard/ui/icons";
import ProductsTable from "./ProductsTable";
import ProductsTableToolsBar from "./ProductsTableToolsBar";
import { cn } from "@/lib/utils";
import { useProductsContext } from "../../contexts/productsContext";

const ProductsTableWrapper = ({ className }: { className?: string }) => {
    const { products } = useProductsContext();
    const noResultsMessage = "No results";
    return products.length ? (
        <div className={cn("grid gap-2 md:gap-3 border border-kaiglo_grey-200 rounded-xl", className)}>
            <ProductsTableToolsBar />
            <ProductsTable products={products} />
        </div>
    ) : (
        <NoResultsIcon title={noResultsMessage} />
    );
};
export default ProductsTableWrapper;
