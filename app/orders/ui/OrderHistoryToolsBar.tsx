import { Button } from "@/components/ui/button";
import { DownloadIcon } from "./icons";
import DateRangePicker from "./DateRangePicker";
import SearchBar from "./SearchBar";
import SortButton from "./sort/SortButton";

const OrderHistoryToolsBar = () => {
    return (
        <div className="grid grid-cols-[3fr_1fr] md:grid-cols-[3fr_1fr] lg:grid-cols-[35%_65%] gap-3 px-3 py-3 lg:py-5 border-y border-kaiglo_grey-200">
            {/* Search bar */}
            <SearchBar placeholder="Search" className="md:hidden" scroll={false} />
            <SearchBar
                placeholder="Search product by name or SKU"
                className="hidden md:block"
                scroll={false}
            />

            <div className="flex gap-3 justify-end lg:px-3">
                {/* filter by date*/}
                <DateRangePicker />

                {/* Sort */}
                <SortButton />

                {/* Download */}
                <Button className="text-base rounded-3xl hidden lg:flex">
                    <DownloadIcon width="24px" height="24px" />
                    <span>Download</span>
                </Button>
            </div>
        </div>
    );
};

export default OrderHistoryToolsBar;
