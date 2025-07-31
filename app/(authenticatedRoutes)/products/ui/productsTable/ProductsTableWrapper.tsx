import { NoResultsIcon } from "../../../dashboard/ui/icons";
import ProductsTable from "./ProductsTable";
import ProductsTableToolsBar from "./ProductsTableToolsBar";
import { cn } from "@/lib/utils/utils";
import TableSkeleton from "@/app/ui/skeletons/TableSkeleton";
import useGetProductsByRecentActivity from "../../hooks/useGetProductsByRecentActivity";
import { Button } from "@/components/ui/button";
import PaginationComponent from "@/components/shared/Pagination";
import { useSearchParams } from "next/navigation";
import useGetProductsBySearchTerm from "../../hooks/useGetProductsBySearchTerm";
import useGetProductsByCreatedDateRange from "../../hooks/useGetProductsByCreatedDateRange";
import useGetOngoingSales from "../../hooks/useGetOngoingSales";

const ProductsTableWrapper = ({ className }: { className?: string }) => {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searching-for")?.trim();
    const startDate = searchParams.get("from")?.trim();
    const endDate = searchParams.get("to")?.trim();
    const { products, isFetchingProducts, errorFetchingProducts } = useGetProductsByRecentActivity();
    const {
        productsByCreatedDateRange,
        isFetchingProductsByCreatedDateRange,
        errorFetchingProductsByCreatedDateRange,
    } = useGetProductsByCreatedDateRange();
    const { productsBySearchTerm, isFetchingProductsBySearchTerm, errorFetchingProductsBySearchTerm } =
        useGetProductsBySearchTerm();
    const { ongoingSales, isFetchingOngoingSales } = useGetOngoingSales();

    const productList =
        startDate && endDate ? productsByCreatedDateRange : searchTerm ? productsBySearchTerm : products;
    const noResultsMessage = searchTerm ? `No reasults for ${searchTerm}` : "No products";

    if (
        isFetchingProducts ||
        isFetchingProductsBySearchTerm ||
        isFetchingProductsByCreatedDateRange ||
        isFetchingOngoingSales ||
        !ongoingSales
    )
        return (
            <div className="lg:mx-5">
                <TableSkeleton />
            </div>
        );

    if (errorFetchingProducts || errorFetchingProductsBySearchTerm || errorFetchingProductsByCreatedDateRange)
        return (
            <div className="grid items-center justify-center">
                <h2>There was an error fetching products.</h2>
                <Button variant={"critical_solid"}>Try again</Button>
            </div>
        );

    if (!productList?.size) {
        return (
            <div className={cn("grid gap-2 md:gap-3 border border-kaiglo_grey-200 rounded-xl", className)}>
                <ProductsTableToolsBar />
                <NoResultsIcon title={noResultsMessage} />;
            </div>
        );
    }

    return (
        <div>
            <div className={cn("grid gap-2 md:gap-3 border border-kaiglo_grey-200 rounded-xl", className)}>
                <ProductsTableToolsBar />
                <ProductsTable ongoingSales={ongoingSales.salesObjectList} products={productList.content} />
            </div>

            <PaginationComponent
                pageSize={productList.size}
                totalPages={productList.totalPages}
                className="mx-5"
            />
        </div>
    );
};

export default ProductsTableWrapper;
