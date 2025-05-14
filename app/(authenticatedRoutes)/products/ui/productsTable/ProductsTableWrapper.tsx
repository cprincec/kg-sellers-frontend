import { NoResultsIcon } from "../../../dashboard/ui/icons";
import ProductsTable from "./ProductsTable";
import ProductsTableToolsBar from "./ProductsTableToolsBar";
import { cn } from "@/lib/utils";
import { useProductsContext } from "../../contexts/productsContext";
import TableSkeleton from "@/app/ui/skeletons/TableSkeleton";

type ProductsTableWrapperProps = {
    className?: string;
};

const ProductsTableWrapper = ({ className }: ProductsTableWrapperProps) => {
    const { products, loading } = useProductsContext();

    const hasProducts = products;

    if (!hasProducts) {
        return <NoResultsIcon title="No products" />;
    }

    return (
        <div className={cn("grid gap-2 md:gap-3 border border-kaiglo_grey-200 rounded-xl", className)}>
            <ProductsTableToolsBar />
            {loading && <TableSkeleton />}
            {!loading && <ProductsTable products={products} />}
        </div>
    );
};

export default ProductsTableWrapper;
