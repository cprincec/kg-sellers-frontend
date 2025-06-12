import { Button } from "@/components/ui/button";
import { DownloadIcon } from "./icons";
import DateRangePicker from "./DateRangePicker";
import SearchBar from "./SearchBar";
import SortButton from "./sort/SortButton";
import { cn } from "@/lib/utils/utils";

const OrderHistoryToolsBar = ({
    showSort = true,
    showAction = true,
    actionText = "Download",
    className,
}: {
    showSort?: boolean;
    showAction?: boolean;
    actionText?: string;
    className?: string;
}) => {
    return (
        <div
            className={cn(
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

            <div className="flex-shrink-0 flex gap-3 justify-end">
                {/* filter by date*/}
                <DateRangePicker />

                {/* Sort */}
                {showSort && <SortButton alignDropDown={"end"} />}

                {/* Download */}
                {showAction && (
                    <Button className="text-base rounded-3xl hidden lg:flex ">
                        <DownloadIcon width="24px" height="24px" />
                        <span className="text-base">{actionText}</span>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default OrderHistoryToolsBar;
