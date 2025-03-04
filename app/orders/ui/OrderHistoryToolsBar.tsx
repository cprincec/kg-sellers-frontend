import { Button } from "@/components/ui/button";
import { DownloadIcon } from "./icons";
import DateRangePicker from "./DateRangePicker";
import SearchBar from "./SearchBar";
import SortButton from "./sort/SortButton";
import clsx from "clsx";

const OrderHistoryToolsBar = ({
    showSort = true,
    actionText = "Download",
    className,
}: {
    showSort?: boolean;
    actionText?: string;
    className?: string;
}) => {
    return (
        <div
            className={clsx(
                "flex justify-between gap-3 p-3 lg:py-5 border-y border-kaiglo_grey-200",
                className
            )}
        >
            {/* Search bar */}
            <SearchBar placeholder="Search" className="lg:hidden" scroll={false} />
            <SearchBar
                placeholder="Search product by name or SKU"
                className="hidden lg:block max-w-[350px]"
                scroll={false}
            />

            <div className="flex gap-3 justify-end">
                {/* filter by date*/}
                <DateRangePicker />

                {/* Sort */}
                {showSort && <SortButton />}

                {/* Download */}
                <Button className="text-base rounded-3xl hidden lg:flex ">
                    <DownloadIcon width="24px" height="24px" />
                    <span className="text-base">{actionText}</span>
                </Button>
            </div>
        </div>
    );
};

export default OrderHistoryToolsBar;
