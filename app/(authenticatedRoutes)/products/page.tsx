"use client";

import AddProductButton from "./ui/AddProductButton";
import ProductsOverview from "./ui/productsOverview/ProductsOverview";
import ProductsTableToolsBar from "./ui/productsTable/ProductsTableToolsBar";
import ProductsTableWrapper from "./ui/productsTable/ProductsTableWrapper";

const Products = () => {
    return (
        <div className="lg:min-h-[calc(100vh-82px)]">
            <div className="grid gap-5 lg:gap-5 p-4 lg:px-0">
                <div className="flex justify-end md:justify-between items-center pt-2 pb-1 lg:px-5">
                    <h2 className="hidden md:block font-medium text-sm  md:text-base uppercase">
                        Product Overview
                    </h2>

                    <AddProductButton />
                </div>
                <ProductsOverview className="lg:rounded-none lg:border-x-0 px-2 max-lg:py-2" />
                <div className="grid gap-2 md:gap-3 border border-kaiglo_grey-200 rounded-xl lg:mx-5">
                    <ProductsTableToolsBar />
                    <ProductsTableWrapper />
                </div>
            </div>
        </div>
    );
};
export default Products;
