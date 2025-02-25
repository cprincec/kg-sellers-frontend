import { Button } from "@/components/ui/button";

const SortDropDown = ({
    showDropDown,
    handleSort,
}: {
    showDropDown: boolean;
    handleSort: (sortBy: string, sortRange: string) => void;
}) => {
    return (
        showDropDown && (
            <div className="absolute top-12 md:top-16 right-0 z-20 w-[160px] grid gap-2 py-2 bg-white rounded-lg shadow-[0px_2px_12px_0px_#00000014] animate-slideDownFade">
                <div>
                    <h4 className="text-sm text-kaiglo_grey-800 font-medium px-2 py-1">Quantity</h4>
                    <ul>
                        <li>
                            <Button
                                type="button"
                                variant={"ghost"}
                                onClick={() => handleSort("quantity", "high-to-low")}
                                className="w-full rounded-none justify-start px-4 py-1 text-sm text-kaiglo_grey-700 bg-white hover:bg-kaiglo_grey-200 font-normal cursor-pointer"
                            >
                                High to Low
                            </Button>
                        </li>
                        <li>
                            <Button
                                type="button"
                                variant={"ghost"}
                                onClick={() => handleSort("quantity", "low-to-high")}
                                className="w-full rounded-none justify-start px-4 py-1 text-sm text-kaiglo_grey-700 bg-white hover:bg-kaiglo_grey-200 font-normal cursor-pointer"
                            >
                                Low to High
                            </Button>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm text-kaiglo_grey-800 font-medium px-2 py-1">Amount</h4>
                    <ul>
                        <li>
                            <Button
                                type="button"
                                variant={"ghost"}
                                onClick={() => handleSort("amount", "high-to-low")}
                                className="w-full rounded-none justify-start px-4 py-1 text-sm text-kaiglo_grey-700 bg-white hover:bg-kaiglo_grey-200 font-normal cursor-pointer"
                            >
                                High to Low
                            </Button>
                        </li>
                        <li>
                            <Button
                                type="button"
                                variant={"ghost"}
                                onClick={() => handleSort("amount", "low-to-high")}
                                className="w-full rounded-none justify-start px-4 py-1 text-sm text-kaiglo_grey-700 bg-white hover:bg-kaiglo_grey-200 font-normal cursor-pointer"
                            >
                                Low to High
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    );
};
export default SortDropDown;
