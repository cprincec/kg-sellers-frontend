import DateRangePicker from "@/app/(authenticatedRoutes)/orders/ui/DateRangePicker";
import DownloadButton from "@/app/(authenticatedRoutes)/orders/ui/DownloadButton";
import SearchBar from "@/app/(authenticatedRoutes)/orders/ui/SearchBar";
import { productsFilterOptions, productsSortOptions } from "../../lib/data/data";
import SortButton2 from "./sortButton/sortButton";
import FilterButton from "./filterButton/FilterButton";

const ProductsTableToolsBar = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <div className="flex gap-4 justify-between p-4 border-b border-kaiglo_grey-200">
                    <SearchBar
                        placeholder="Seach by product ID"
                        className="hidden lg:block max-w-[350px]"
                        scroll={false}
                    />
                    <div className="flex gap-4 justify-end items-center">
                        <DateRangePicker />
                        <DownloadButton />
                    </div>
                </div>

                <div className="flex gap-4 p-4 border-b border-kaiglo_grey-200">
                    <FilterButton filterOptions={productsFilterOptions} />
                    <SortButton2 sortOptions={productsSortOptions} />
                </div>
            </div>

            <div className="flex gap-4 justify-between items-center p-2 lg:hidden border-b">
                <SearchBar placeholder="Seach by product ID" className="h-fit lg:hidden" scroll={false} />

                <div className="flex gap-3 border-kaiglo_grey-200">
                    <FilterButton filterOptions={productsFilterOptions} alignDropDown="start" />
                    <SortButton2 sortOptions={productsSortOptions} alignDropDown="start" />
                </div>
            </div>
        </div>
    );
};
export default ProductsTableToolsBar;
