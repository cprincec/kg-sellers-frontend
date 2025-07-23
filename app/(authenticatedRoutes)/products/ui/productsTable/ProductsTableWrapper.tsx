import { NoResultsIcon } from "../../../dashboard/ui/icons";
import ProductsTable from "./ProductsTable";
import ProductsTableToolsBar from "./ProductsTableToolsBar";
import { cn } from "@/lib/utils/utils";
import TableSkeleton from "@/app/ui/skeletons/TableSkeleton";
import useGetProductsByRecentActivity from "../../hooks/useGetProductsByRecentActivity";
import { Button } from "@/components/ui/button";
import PaginationComponent from "@/components/shared/Pagination";

const ProductsTableWrapper = ({ className }: { className?: string }) => {
    const { products, isFetchingProducts, ErrorFetchingProducts } = useGetProductsByRecentActivity();

    if (isFetchingProducts)
        return (
            <div className="lg:mx-5">
                <TableSkeleton />
            </div>
        );

    if (ErrorFetchingProducts)
        return (
            <div className="grid items-center justify-center">
                <h2>There was an error fetching products.</h2>
                <Button variant={"critical_solid"}>Try again</Button>
            </div>
        );

    if (!products || !products.content) return null;

    if (!products.size) {
        return <NoResultsIcon title="No products" />;
    }

    return (
        <div>
            <div className={cn("grid gap-2 md:gap-3 border border-kaiglo_grey-200 rounded-xl", className)}>
                <ProductsTableToolsBar />
                <ProductsTable products={products.content} />
            </div>

            <PaginationComponent pageSize={products.size} totalPages={products.totalPages} className="mx-5" />
        </div>
    );
};

export default ProductsTableWrapper;
