import { capitalizeFirstLetters } from "@/app/lib/utils/utils";
import { Button } from "@/components/ui/button";
import { PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils/utils";
import { ChevronDown, X } from "lucide-react";

const ProductsCategoriesFormTrigger = ({
    fieldValue,
    open,
    removeItem,
}: {
    fieldValue: string[];
    open: boolean;
    removeItem: (item: string) => void;
}) => {
    return (
        <PopoverTrigger asChild className="relative">
            <Button type="button" variant="outline" className="justify-between h-12 pr-2">
                <div className="text-kaiglo_grey-placeholder text-sm font-normal">
                    {fieldValue?.length ? (
                        <>
                            <ul className="hidden lg:flex absolute top-1 left-1 right-1 gap-2 w-[--radix-popover-trigger-width] overflow-x-auto bg-white text-sm text-kaiglo_grey-base">
                                {fieldValue.map((item: string, index: number) => (
                                    <li
                                        className="flex justify-between items-center gap-2 text-sm rounded-lg border border-kaiglo_grey-200 p-2"
                                        key={index}
                                        role="listitem"
                                    >
                                        <p className="font-medium capitalize">
                                            {capitalizeFirstLetters(item)}
                                        </p>
                                        <span
                                            aria-label={`Remove ${item}`}
                                            className="text-sm font-medium"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeItem(item);
                                            }}
                                        >
                                            <X className="w-4" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <span className="lg:hidden text-sm text-kaiglo_grey-placeholder">
                                Select Categories
                            </span>
                        </>
                    ) : (
                        "Select Categories"
                    )}
                </div>
                <ChevronDown
                    className={cn(
                        "ml-2 min-h-6 min-w-6 text-kaiglo_grey-700 font-extralight transition-transform duration-200",
                        open && "rotate-180"
                    )}
                />
            </Button>
        </PopoverTrigger>
    );
};

export default ProductsCategoriesFormTrigger;
