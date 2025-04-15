import AddProductButton from "./ui/AddProductButton";
import ProductsMetrics from "./ui/ProductsMetrics";
import ProductsTableWrapper from "./ui/productsTable/ProductsTableWrapper";

const Products = () => {
    return (
        <div className="grid gap-5 lg:gap-5 p-4 lg:px-0 border">
            <div className="flex justify-end md:justify-between items-center pt-2 pb-1 lg:px-5">
                <h2 className="hidden md:block font-medium text-sm  md:text-base uppercase">
                    Product Overview
                </h2>
                <AddProductButton className="" />
            </div>
            <ProductsMetrics className="lg:rounded-none lg:border-x-0 px-2" />
            <ProductsTableWrapper className="lg:mx-5" />
        </div>
    );
};
export default Products;
