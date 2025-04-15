"use client";

import { NoResultsIcon } from "../../../dashboard/ui/icons";
import ProductsTable from "./ProductsTable";
// import { useSearchParams } from "next/navigation";
import { productsList } from "../../lib/data";
// import OrderHistoryToolsBar from "../../../orders/ui/OrderHistoryToolsBar";
import ProductsTableToolsBar from "./ProductsTableToolsBar";
import { cn } from "@/lib/utils";

const ProductsTableWrapper = ({ className }: { className?: string }) => {
    // const searchParams = useSearchParams();
    // const searchingFor = searchParams.get("searching-for");
    // const activeTab = searchParams.get("tab");

    // Set custom message for order history results
    const noResultsMessage = "No results";
    return productsList.length ? (
        <div className={cn("grid gap-2 md:gap-3 border border-kaiglo_grey-200 rounded-xl", className)}>
            {/* <OrderHistoryToolsBar className="border-t-0" /> */}
            <ProductsTableToolsBar />
            <ProductsTable products={productsList} />
        </div>
    ) : (
        <NoResultsIcon title={noResultsMessage} />
    );
};
export default ProductsTableWrapper;
