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
    showSearchBarMobile = true,
    showSearchBarDesktop = true,
    dateFilterDisabled,
    className,
}: {
    showSort?: boolean;
    showAction?: boolean;
    actionText?: string;
    className?: string;
    showSearchBarMobile?: boolean;
    showSearchBarDesktop?: boolean;
    dateFilterDisabled?: boolean;
}) => {
    return (
        <div
            className={cn(
                "flex justify-between gap-3 p-3 lg:py-5 border-y border-kaiglo_grey-200",
                className
            )}
        >
            {/* Search bar */}
            {showSearchBarMobile && <SearchBar placeholder="Search" className="lg:hidden" scroll={false} />}
            {showSearchBarDesktop && (
                <SearchBar
                    placeholder="Search product by name or SKU"
                    className="hidden lg:block max-w-[350px]"
                    scroll={false}
                />
            )}

            <div className="flex-shrink-0 flex gap-3 justify-end lg:w-full">
                {/* filter by date*/}
                <DateRangePicker disabled={dateFilterDisabled} />

                {/* Sort */}
                {showSort && <SortButton alignDropDown={"end"} />}

                {/* Download */}
                {showAction && (
                    <Button className="text-base rounded-3xl hidden lg:flex" disabled>
                        <DownloadIcon width="24px" height="24px" />
                        <span className="text-base">{actionText}</span>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default OrderHistoryToolsBar;
