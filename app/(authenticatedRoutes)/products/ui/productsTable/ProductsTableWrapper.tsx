import ProductsTable from "./ProductsTable";
import TableSkeleton from "@/app/ui/skeletons/TableSkeleton";
import useGetProductsByRecentActivity from "../../hooks/useGetProductsByRecentActivity";
import { Button } from "@/components/ui/button";
import PaginationComponent from "@/components/shared/Pagination";
import { useSearchParams } from "next/navigation";
import useGetProductsBySearchTerm from "../../hooks/useGetProductsBySearchTerm";
import useGetProductsByCreatedDateRange from "../../hooks/useGetProductsByCreatedDateRange";
import useGetOngoingSales from "../../hooks/useGetOngoingSales";

const ProductsTableWrapper = () => {
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
    const noResultsMessage = searchTerm ? `No results for ${searchTerm}` : "No products";
    const productListIsLoading =
        isFetchingProducts ||
        isFetchingProductsBySearchTerm ||
        isFetchingProductsByCreatedDateRange ||
        isFetchingOngoingSales ||
        !ongoingSales;

    if (errorFetchingProducts || errorFetchingProductsBySearchTerm || errorFetchingProductsByCreatedDateRange)
        return (
            <div className="grid items-center justify-center">
                <h2>There was an error fetching products.</h2>
                <Button variant={"critical_solid"}>Try again</Button>
            </div>
        );

    if (productListIsLoading)
        return (
            <div className="lg:mx-5">
                <TableSkeleton />
            </div>
        );

    return (
        <div className="overflow-auto">
            <ProductsTable
                ongoingSales={ongoingSales.salesObjectList}
                products={productList?.content ?? []}
                noResultsMessage={noResultsMessage}
            />

            <PaginationComponent
                pageSize={productList?.size ?? 0}
                totalPages={productList?.totalPages ?? 0}
                className="mx-5"
            />
        </div>
    );
};

export default ProductsTableWrapper;
