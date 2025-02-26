import { Button } from "@/components/ui/button";

const SortDropDown = ({ handleSort }: { handleSort: (sortBy: string, sortRange: string) => void }) => {
    return (
        <div className="grid gap-2 py-2 animate-slideDownFade w-full">
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
    );
};
export default SortDropDown;
